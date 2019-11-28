import React, { Component } from 'react';
import AdminNav from '../Components/Navbar/AdminNav';
import jwt from 'jsonwebtoken';
import AdminForm from '../Components/Admin/AdminForm';
import Grid from '../Components/Cards/Grid';
import { getNovels, addNovel } from '../Public/Redux/Actions/novels';
import Pagination from '../Components/Pagination';
import M from 'materialize-css';
import { connect } from 'react-redux';
import AddModal from '../Components/Modal/AddModal';
import { genres } from '../Public/Redux/Actions/genres';
import { status } from '../Public/Redux/Actions/status';
// addNovel

class Admin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			novels: {
				result: [],
				totalData: 0,
			},
			admin: { role: '' },
			tempBook: {
				title: undefined,
				author: undefined,
				description: undefined,
				status: '',
				genre: '',
				pages: '',
				isbn: '',
				vendor: '',
				weight: '',
				height: '',
				length: '',
			},
			image: '',
			imageVal: {},

			genreDropDown: [],
			statusDropDown: [],
			isLoading: true,
			isLoadingBtn: false,
		};
	}

	getNovel = async page => {
		try {
			await this.props.dispatch(getNovels(`?limit=6&page=${page}`));

			this.setState({
				novels: this.props.novels.novelData,
				carouSel: this.props.novels.novelData,
				isLoading: false,
			});
			M.AutoInit();
		} catch (error) {
			this.setState({
				error: this.props.novels.error,
			});
		}
	};
	async componentDidMount() {
		this.getNovel(1);

		const token = localStorage.getItem('userToken');
		if (token) {
			try {
				const v = jwt.decode(token);
				this.setState({
					admin: v,
				});
				await this.props.dispatch(genres());
				await this.props.dispatch(status());
				this.setState({
					genreDropDown: this.props.genres.genreData,
					statusDropDown: this.props.status.statusData,
				});

				const elems = document.querySelectorAll('select');
				M.FormSelect.init(elems);
			} catch (error) {
				console.log(error);
			}
		}
	}

	handleChange = e => {
		const { name, value } = e.target;

		this.setState({
			tempBook: { ...this.state.tempBook, [name]: value },
		});
		console.log(this.state.tempBook);
	};

	async onSubmit(e) {
		//
		e.preventDefault();
		this.setState({
			isLoadingBtn: true,
		});
		try {
			const formData = new FormData();
			formData.append('title', this.state.tempBook.title);
			formData.append('author', this.state.tempBook.author);
			formData.append('description', this.state.tempBook.description);
			formData.append('status', this.state.tempBook.status);
			formData.append('genre', this.state.tempBook.genre);
			formData.append('image', this.state.imageVal);
			formData.append('pages', this.state.tempBook.pages);
			formData.append('isbn', this.state.tempBook.isbn);
			formData.append('vendor', this.state.tempBook.vendor);
			formData.append('weight', this.state.tempBook.weight);
			formData.append('height', this.state.tempBook.height);
			formData.append('length', this.state.tempBook.length);

			for (var pair of formData.entries()) {
				console.log('FORM APPEND', pair[0] + ', ' + pair[1]);
			}

			// console.log('FORM APPEND', formData.getAll('image'));
			// console.log('IMAGE VAL', this.state.imageVal);

			await this.props.dispatch(addNovel(formData));

			this.setState({
				isLoadingBtn: false,
			});
			window.location.href = '/admin';
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const {
			title,
			author,
			description,
			status,
			genre,
			pages,
			isbn,
			vendor,
			weight,
			height,
			length,
		} = this.state.tempBook;

		return (
			<div>
				<AdminNav />

				<div className='container'>
					<br />
					{this.state.admin.role !== 2 ? (
						<AdminForm />
					) : (
						<>
							<button
								className='btn purple darken-4 modal-trigger'
								data-target='addNovelModal'
								style={{
									marginLeft: '10px',
								}}>
								Add New Novel
							</button>
							<button
								onClick={e => {
									e.preventDefault();
									localStorage.removeItem('userToken');
									window.location.href = '/';
								}}
								className='btn purple darken-4 '
								style={{
									marginLeft: '10px',
								}}>
								Log Out
							</button>
							<br />
							<br />
							<br />
							<AddModal
								modalTitle='Add Novel'
								modalId='addNovelModal'
								genre_id={genre}
								title={title}
								author={author}
								image_url={this.state.image}
								status_id={status}
								description={description}
								onChange={this.handleChange.bind(this)}
								onSubmit={this.onSubmit.bind(this)}
								sDropDown={this.state.statusDropDown}
								gDropDown={this.state.genreDropDown}
								isLoading={this.state.isLoadingBtn}
								pages={pages}
								isbn={isbn}
								vendor={vendor}
								weight={weight}
								height={height}
								length={length}
								onChangeImg={e => {
									e.preventDefault();
									this.setState({
										image: e.target.value,
										imageVal: e.target.files[0],
									});
								}}
							/>
							<Grid
								isLoading={this.state.isLoading}
								book={this.state.novels.result}
								user={this.state.admin}
							/>
							<Pagination
								totalPost={this.state.novels.totalData}
								postPerpage={6}
								paginate={num => this.getNovel(num)}
							/>
						</>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		novels: state.novels,
		status: state.status,
		genres: state.genres,
	};
};

export default connect(mapStateToProps)(Admin);

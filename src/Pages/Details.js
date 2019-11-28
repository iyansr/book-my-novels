import React, { Component } from 'react';
import '../Styles/Style.css';
import M from 'materialize-css';
import DetailNav from '../Components/DetailNav/DetailNav';
import FloatingCard from '../Components/FloatingCard/FloatingCard';
import ContainerDetail from '../Components/ContainerDetail/ContainerDetail';
import swal from 'sweetalert';
import jwt from 'jsonwebtoken';

import { connect } from 'react-redux';
import {
	getOneNovels,
	editNovel,
	deleteNovel,
} from '../Public/Redux/Actions/novels';
import { genres } from '../Public/Redux/Actions/genres';
import { status } from '../Public/Redux/Actions/status';
import EditModal from '../Components/Modal/EditModal';
import EditModalImage from '../Components/Modal/EditImageModal';
import { addBorrow } from '../Public/Redux/Actions/user';
// addBorrow

class Details extends Component {
	constructor(props) {
		super(props);
		this.state = {
			book: {},
			errors: {},
			user: {},
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
			btnLoading: false,
			stateLoading: true,
		};
	}

	async componentDidMount() {
		try {
			const { id_book } = this.props.match.params;
			await this.props.dispatch(genres());
			await this.props.dispatch(status());
			await this.props.dispatch(getOneNovels(id_book));

			if (localStorage.getItem('userToken')) {
				const token = localStorage.getItem('userToken');
				const decoded = await jwt.decode(token, process.env.JWT_SECRET);
				this.setState({
					user: decoded,
					book: this.props.novels.novelData,
				});
			}
			const {
				title,
				author,
				description,
				Status,
				Genre,
				pages,
				isbn,
				vendor,
				weight,
				height,
				length,
			} = this.state.book;
			const idGenre = this.props.genres.genreData.filter(gen => {
				return gen.genre === Genre;
			})[0].genre_id;
			const idStatus = this.props.status.statusData.filter(st => {
				return st.status === Status;
			})[0].status_id;
			this.setState({
				genreDropDown: this.props.genres.genreData,
				statusDropDown: this.props.status.statusData,
				tempBook: {
					title,
					author,
					description,
					status: `${idStatus}`,
					genre: `${idGenre}`,
					pages: parseFloat(pages),
					isbn,
					vendor,
					weight: parseFloat(weight),
					height: parseFloat(height),
					length: parseFloat(length),
				},
				stateLoading: false,
			});
		} catch (error) {
			this.setState({
				errors: this.props.novels.error,
			});
		}

		M.AutoInit();
		const elems = document.querySelectorAll('select');
		M.FormSelect.init(elems);
		M.updateTextFields();
	}

	handleChange = e => {
		const { name, value } = e.target;

		this.setState({
			tempBook: { ...this.state.tempBook, [name]: value },
		});
	};

	async onSubmitImg(e) {
		e.preventDefault();
		this.setState({
			btnLoading: true,
		});
		try {
			const formData = new FormData();
			formData.append('image', this.state.imageVal);

			const { id_book } = this.props.match.params;
			await this.props.dispatch(editNovel(id_book, formData));
			window.location.reload(true);
			this.setState({
				btnLoading: false,
			});
		} catch (error) {
			console.log(error);
		}
	}

	async updateNovel(e) {
		e.preventDefault();
		this.setState({
			btnLoading: true,
		});
		try {
			const formData = new FormData();
			formData.append('title', this.state.tempBook.title);
			formData.append('author', this.state.tempBook.author);
			formData.append('description', this.state.tempBook.description);
			formData.append('status', this.state.tempBook.status);
			formData.append('genre', this.state.tempBook.genre);

			formData.append('pages', this.state.tempBook.pages);
			formData.append('isbn', this.state.tempBook.isbn);
			formData.append('vendor', this.state.tempBook.vendor);
			formData.append('weight', this.state.tempBook.weight);
			formData.append('height', this.state.tempBook.height);
			formData.append('length', this.state.tempBook.length);
			const { id_book } = this.props.match.params;
			await this.props.dispatch(editNovel(id_book, formData));
			window.location.href = `/details/${id_book}`;
			this.setState({
				btnLoading: false,
			});
		} catch (error) {
			console.log(error);
		}
	}

	handleBorrow(e) {
		e.preventDefault();
		swal('Want to borrow this Novel?', {
			buttons: ['Cancel', true],
		}).then(async val => {
			if (val) {
				try {
					const { id_book } = this.props.match.params;
					let formData = new FormData();
					formData.append('novel_id', id_book);
					await this.props.dispatch(
						addBorrow(this.state.user.user_id, formData)
					);
					swal('Succes Borrow Novel, return this Novel AS SOON AS POSSIBLE!', {
						icon: 'success',
					});
				} catch (error) {
					swal('You Already Borrow This Novel', {
						icon: 'error',
					});
				}
			} else {
				swal('WHYYY 😥');
			}
		});
	}

	deleteHandler(e) {
		e.preventDefault();
		swal({
			title: 'Are you sure?',
			text: 'Once deleted, you will not be able to recover this Novel!',
			icon: 'warning',
			buttons: true,
			dangerMode: true,
		}).then(async willDelete => {
			if (willDelete) {
				try {
					const { id_book } = this.props.match.params;
					await this.props.dispatch(deleteNovel(id_book));
					swal('Poof! This Novel file has been deleted!', {
						icon: 'success',
					}).then(() => (window.location.href = '/admin'));
				} catch (error) {
					swal('Something Wrong', {
						icon: 'error',
					});
					console.log(error);
				}
			} else {
				swal('Your imaginary file is safe!');
			}
		});
	}

	render() {
		if (
			!this.state.book ||
			this.state.errors === 403 ||
			this.state.errors === 405
		) {
			return (window.location.href = '/');
		}

		if (this.state.stateLoading) {
			return <p>Loading...</p>;
		}

		// else {
		const {
			title,
			author,
			image,
			description,
			Status,
			Genre,
			novel_id,
			pages,
			isbn,
			vendor,
			weight,
			height,
			length,
			createdAt,
		} = this.state.book;
		console.log('USER', this.state.user.user_id);
		const btnStatus =
			Status === 'Empty' || this.state.user.role === 2 ? 'disabled' : '';
		return (
			<div>
				<div
					className='top-cover'
					style={{
						backgroundImage: `url('${image}')`,
					}}>
					<DetailNav
						onDelete={this.deleteHandler.bind(this)}
						to='/'
						index={novel_id}
						user={this.state.user}
					/>
					<FloatingCard image_url={image} alt={title} />

					<button
						onClick={this.handleBorrow.bind(this)}
						className={`btn-large ${btnStatus} z-depth-3 right btn-borrow purple darken-3`}
						style={{ borderRadius: '12px' }}>
						Borrow
					</button>
				</div>
				<EditModalImage
					onSubmitImg={this.onSubmitImg.bind(this)}
					modalId='editImageModal'
					modalTitle='Change Image'
					isLoading={this.state.btnLoading}
					onChangeImg={e => {
						e.preventDefault();
						this.setState({
							image: e.target.value,
							imageVal: e.target.files[0],
						});
					}}
				/>
				<EditModal
					isActive={true}
					modalTitle='Edit Novel'
					modalId='editNovelModal'
					genre_id={this.state.tempBook.genre}
					title={this.state.tempBook.title}
					author={this.state.tempBook.author}
					// image_url={this.state.image}
					status_id={this.state.tempBook.status}
					description={this.state.tempBook.description}
					onChange={this.handleChange.bind(this)}
					onSubmit={this.updateNovel.bind(this)}
					sDropDown={this.state.statusDropDown}
					gDropDown={this.state.genreDropDown}
					pages={this.state.tempBook.pages}
					isbn={this.state.tempBook.isbn}
					vendor={this.state.tempBook.vendor}
					weight={this.state.tempBook.weight}
					height={this.state.tempBook.height}
					length={this.state.tempBook.length}
					isLoading={this.state.btnLoading}
				/>
				<ContainerDetail
					// index={id}
					desc={description}
					title={title}
					status={Status}
					genre={Genre}
					author={author}
					pages={pages}
					isbn={isbn}
					vendor={vendor}
					weight={weight}
					height={height}
					length={length}
					published={createdAt}
				/>
				<div className='fixed-action-btn'>
					<button className={`btn-floating btn-large ${btnStatus}`}>
						<i className='large material-icons'>add</i>
					</button>
				</div>
			</div>
		);
		// }
	}
}

const mapStateToProps = state => {
	return {
		novels: state.novels,
		status: state.status,
		genres: state.genres,
	};
};

export default connect(mapStateToProps)(Details);

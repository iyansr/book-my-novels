import React, { Component } from 'react';
import NaviBar from '../Components/Navbar/Navbar';
import Grid from '../Components/Cards/Grid';
import Footer from '../Components/Footer/Footer';
import CarouselCard from '../Components/Carousel/Card';
import '../Components/Carousel/Carousel.css';
import NavbarContent from '../Components/Navbar/NavbarContent';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { getNovels } from '../Public/Redux/Actions/novels';
import { genres } from '../Public/Redux/Actions/genres';
import Pagination from '../Components/Pagination';
import LoginModal from '../Components/Modal/LoginModal';
import Sidenav from '../Components/Navbar/SideNav';
import RegisterModal from '../Components/Modal/RegisterModal';
import CarouselLoading from '../Components/Carousel/CarouselLoading';
import CarouselGrid from '../Components/Carousel/CarouselGrid';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			novels: {
				result: [],
				totalData: 0,
			},
			user: { role: '' },
			carouSel: {
				result: [],
				totalData: 0,
			},
			genreDropDown: [],
			statusDropDown: [],
			tempBook: {
				title: undefined,
				author: undefined,
				image: undefined,
				description: undefined,
				status: '',
				genre: '',
			},
			btnDisabled: '',
			isOverLay: false,
			searchVal: '',
			currentPage: 1,
			searchBy: '',
			error: {},
			searchByText: 'Search By..',
			isLoading: true,
		};
	}

	getNovel = async (page, title, author, genre) => {
		try {
			await this.props.dispatch(
				getNovels(`?limit=6&page=${page}${title}${author}${genre}`)
			);

			this.setState({
				novels: this.props.novels.novelData,
				carouSel: this.props.novels.novelData,
				isLoading: false,
				error: {
					error: false,
				},
			});
			M.AutoInit();
		} catch (error) {
			this.setState({
				error: this.props.novels.error,
				isLoading: false,
			});
		}
	};

	async componentDidMount() {
		this.setState({
			user: this.props.user,
		});
		this.getNovel(1, '', '', '', '');
		await this.props.dispatch(genres());
		this.setState({
			genreDropDown: this.props.genres.genreData,
			// statusDropDown: this.props.status.statusData,
		});
	}

	handleChange = e => {
		const { name, value } = e.target;

		this.setState({
			tempBook: { ...this.state.tempBook, [name]: value },
		});
	};

	filterGenre = a => {
		this.setState({
			isLoading: true,
		});
		this.state.genreDropDown.filter(async g => {
			if (a.currentTarget.text === g.genre) {
				try {
					this.getNovel(1, ``, '', `&genre=${g.genre_id}`);
					this.setState({
						novels: this.props.novels.novelData,
						error: {
							error: false,
						},
					});
				} catch (error) {
					this.setState({
						error: this.props.novels.error,
						isLoading: false,
					});
				}
			}
		});
	};

	searchBy = e => {
		e.preventDefault();
		this.setState({
			searchBy: e.currentTarget.text.toLowerCase(),
			searchByText: e.currentTarget.text,
		});
		console.log(e.currentTarget.text.toLowerCase());
	};

	changeSearch = e => {
		this.setState({ searchVal: e.target.value });
	};
	onSearch = async e => {
		e.preventDefault();
		const { searchBy, searchVal } = this.state;

		switch (searchBy) {
			case 'title':
				try {
					this.setState({
						isLoading: true,
					});
					this.getNovel(1, `&${searchBy}=${searchVal}`, '', '');
				} catch (error) {
					this.setState({
						error: this.props.novels.error,
						isLoading: false,
					});
				}
				break;
			case 'author':
				try {
					this.setState({
						isLoading: true,
					});
					this.getNovel(1, ``, `&${searchBy}=${searchVal}`, '');
				} catch (error) {
					this.setState({
						error: this.props.novels.error,
						isLoading: false,
					});
				}
				break;
			default:
				try {
					this.setState({
						isLoading: true,
					});
					this.getNovel(1, `&title=${searchVal}`, '', '');
				} catch (error) {
					this.setState({
						error: this.props.novels.error,
						isLoading: false,
					});
				}
				break;
		}
	};

	render() {
		// get current post
		M.AutoInit();

		console.log(this.state.user);

		return (
			<div className='home-page'>
				<Sidenav user={this.state.user} />
				<NaviBar onClickGenre={this.filterGenre} searchOpt={this.searchBy}>
					<NavbarContent
						searchBy={this.state.searchByText}
						searchVal={this.state.searchVal}
						onSearch={this.onSearch}
						searchChange={this.changeSearch}
					/>
				</NaviBar>
				<LoginModal />
				<RegisterModal />

				<CarouselGrid
					data={this.state.carouSel.result}
					loading={this.state.isLoading}
				/>
				<div className='container'>
					{this.state.error.error ? (
						<h3>Cannot Find Specific Novel</h3>
					) : (
						<>
							<h4
								style={{
									marginBottom: '30px',
									paddingLeft: '10px',
								}}>
								List Novels
							</h4>
							<Grid
								isLoading={this.state.isLoading}
								book={this.state.novels.result}
								user={this.state.user}
							/>
						</>
					)}
				</div>
				<br />
				<Pagination
					totalPost={this.state.novels.totalData}
					postPerpage={6}
					paginate={num => this.getNovel(num)}
				/>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		novels: state.novels,
		genres: state.genres,
	};
};

export default connect(mapStateToProps)(Home);

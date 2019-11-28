import React, { Component } from 'react';
import ProfileNav from '../Components/Navbar/PorfileNav';
import M from 'materialize-css';
import SideNav from '../Components/Navbar/SideNav';
import { connect } from 'react-redux';
import {
	borrowList,
	returnBorrow,
	borrowHistoryList,
} from '../Public/Redux/Actions/user';
import { Link, Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import ContentLoader, { List } from 'react-content-loader';
import swal from 'sweetalert';
import moment from 'moment';
// swal
// returnBorrow

// borrowList

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: this.props.user,
			error: {
				error: false,
			},
			errorBorrow: {
				error: false,
			},
			novel: [],
			novelHistory: [],
			isLoading: true,
		};
	}
	async componentDidMount() {
		try {
			if (localStorage.getItem('userToken')) {
				const token = localStorage.getItem('userToken');
				const decoded = jwt.decode(token);
				if (decoded.exp < Date.now() / 1000) {
					localStorage.clear();
					this.setState({
						user: { role: '' },
					});
				} else {
					this.setState({
						user: decoded,
					});
				}
			}
			const { id_user } = this.props.match.params;
			await this.props.dispatch(borrowList(id_user));
			console.log(this.props.user.borrow);
			this.setState({
				novel: this.props.user.borrow,
				novelHistory: this.props.user.historyList,
				// error: this.props.user.error,
				isLoading: false,
			});
			M.AutoInit();
		} catch (error) {
			this.setState({
				errorBorrow: this.props.user.error, //Method Not Allowed

				isLoading: false,
			});
			M.AutoInit();
		}
		try {
			const { id_user } = this.props.match.params;
			await this.props.dispatch(borrowHistoryList(id_user));
			this.setState({
				novelHistory: this.props.user.historyList,
				isLoading: false,
			});
		} catch (error) {
			this.setState({
				error: this.props.user.errorHistory, //Method Not Allowed
				isLoading: false,
			});
		}
	}
	render() {
		console.log('ERROR', this.state.error.code === 404);
		if (this.state.error === 'Method Not Allowed') {
			return <Redirect to='/' />;
		}
		return (
			<>
				<ProfileNav />
				<SideNav user={this.state.user} />
				<br />
				<div className='container'>
					<ul className='tabs '>
						<li className='tab col s3  '>
							<a
								className='active purple-text text-darken-4'
								href='#BORROWLIST'>
								Borrow List
							</a>
						</li>
						<li className='tab col s3 '>
							<a className=' purple-text text-darken-4 ' href='#HISTORYLIST'>
								History List
							</a>
						</li>
					</ul>
				</div>
				{/* //// */}
				<br />
				<br />
				{!this.state.isLoading ? (
					<div id='BORROWLIST' className='row container'>
						{this.state.errorBorrow.error ? (
							<h3>You haven't borrow any novel yet</h3>
						) : (
							this.state.novel.map((nov, id) => {
								return (
									<div
										key={id}
										className='col s12 m6 card horizontal'
										style={{ padding: 0, width: '48%', marginLeft: '20px' }}>
										<div className='card-image'>
											<img
												src={nov.Novel.image}
												height='400px'
												style={{
													objectFit: 'cover',
												}}
											/>
										</div>
										<div className='card-stacked'>
											<div className='card-content'>
												<h5 className='card-title '>{nov.Novel.title}</h5>
												<p className='block-with-text'>
													{nov.Novel.description}
												</p>
											</div>
											<div className='card-action'>
												<Link
													to='#!'
													onClick={async e => {
														e.preventDefault();
														swal('Do you want to return this Novel?', {
															buttons: ['Cancel', true],
														}).then(async val => {
															if (val) {
																try {
																	const formData = new FormData();
																	formData.append('borrow_id', nov.borrow_id);
																	formData.append(
																		'novel_id',
																		nov.Novel.novel_id
																	);
																	await this.props.dispatch(
																		returnBorrow(
																			this.props.match.params.id_user,
																			formData
																		)
																	);
																	swal('OK', { icon: 'success' }).then(() => {
																		window.location.href = `/profile/${this.props.match.params.id_user}`;
																	});
																} catch (error) {
																	swal('ERROR', { icon: 'error' });
																	console.log(error);
																}
															}
														});
													}}>
													Return
												</Link>
											</div>
										</div>
									</div>
								);
							})
						)}
					</div>
				) : (
					<>
						<div id='test1' className='row container'>
							<div
								className='col s12 m6 card horizontal'
								style={{ padding: 0, width: '48%', marginLeft: '20px' }}>
								<div className='card-image'>
									<ContentLoader
										style={{
											height: '400px',
											width: '300px',
											objectFit: 'cover',
											marginBottom: 0,
										}}
										speed={2}
										primaryColor='#f3f3f3'
										secondaryColor='#ecebeb'>
										<rect x='0' y='0' rx='0' ry='0' width='300' height='300' />
									</ContentLoader>
								</div>
								<div className='card-stacked'>
									<div className='card-content'>
										<List
											style={{
												height: '100px',
											}}
										/>
									</div>
									<div className='card-action' style={{ border: 'none' }}>
										{/* <a href='#'>Return</a> */}
									</div>
								</div>
							</div>
						</div>
					</>
				)}
				{!this.state.isLoading ? (
					<div id='HISTORYLIST' className='row container'>
						{this.state.error.error ? (
							<h3>You haven't borrow any novel </h3>
						) : (
							this.state.novelHistory.map((nov, id) => {
								return (
									<div
										key={id}
										className='col s12 m6 card horizontal'
										style={{ padding: 0, width: '48%', marginLeft: '20px' }}>
										<div className='card-image'>
											<img
												src={nov.Novel.image}
												height='400px'
												style={{
													objectFit: 'cover',
												}}
											/>
										</div>
										<div className='card-stacked'>
											<div className='card-content'>
												<h5 className='card-title '>
													<Link to={`/details/${nov.Novel.novel_id}`}>
														{nov.Novel.title}
													</Link>
												</h5>
												<p className='block-with-text'>
													{nov.Novel.description}
												</p>
											</div>
											<div className='card-action' style={{ border: 'none' }}>
												<p>
													Date Return :{' '}
													{moment(nov.date_return).format('YYYY MMM DD')}
												</p>
											</div>
										</div>
									</div>
								);
							})
						)}
					</div>
				) : (
					<>
						<div id='test1' className='row container'>
							<div
								className='col s12 m6 card horizontal'
								style={{ padding: 0, width: '48%', marginLeft: '20px' }}>
								<div className='card-image'>
									<ContentLoader
										style={{
											height: '400px',
											width: '300px',
											objectFit: 'cover',
											marginBottom: 0,
										}}
										speed={2}
										primaryColor='#f3f3f3'
										secondaryColor='#ecebeb'>
										<rect x='0' y='0' rx='0' ry='0' width='300' height='300' />
									</ContentLoader>
								</div>
								<div className='card-stacked'>
									<div className='card-content'>
										<List
											style={{
												height: '100px',
											}}
										/>
									</div>
									<div className='card-action' style={{ border: 'none' }}>
										{/* <a href='#'>Return</a> */}
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps)(Profile);

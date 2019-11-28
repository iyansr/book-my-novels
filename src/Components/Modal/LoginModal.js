import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { login } from '../../Public/Redux/Actions/user';
class LoginModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				email: '',
				password: '',
			},

			isLoading: false,
			error: {
				error: false,
				message: {
					email: '',
					password: '',
				},
			},
		};
	}

	handleChange(e) {
		e.preventDefault();
		this.setState({
			user: { ...this.state.user, [e.target.name]: e.target.value },
		});
	}

	async handleSubmit(e) {
		e.preventDefault();
		this.setState({
			isLoading: true,
		});
		try {
			let formData = new FormData();
			formData.append('email', this.state.user.email);
			formData.append('password', this.state.user.password);
			await this.props.dispatch(login(formData));

			this.setState({
				isLoading: false,
			});
			window.location.href = '/';
		} catch (err) {
			this.setState({
				error: this.props.user.error,
				isLoading: false,
			});
		}
	}

	render() {
		const { isLoading } = this.state;

		console.log(this.state.user.email);
		console.log(this.state.user.password);
		console.log(this.state.error);

		return (
			<div id='userLoginModal' className='modal' style={{ height: '390px' }}>
				<button className='btn modal-close right btn-floating transparent z-depth-0'>
					<i className='material-icons black-text'>close</i>
				</button>

				<div className='modal-content'>
					<h4>Login</h4>
					<div className='row'>
						<form onSubmit={this.handleSubmit.bind(this)} noValidate>
							<div className='input-field col m12'>
								<i className='material-icons prefix'>person</i>
								<input
									name='email'
									id='email'
									type='text'
									className={classNames({
										invalid: this.state.error.error,
									})}
									onChange={this.handleChange.bind(this)}
								/>
								<label htmlFor='email'>Email</label>
								<span
									class='helper-text'
									data-error={this.state.error.message.email}
									data-success='right'></span>
							</div>
							<div className='input-field col m12'>
								<i className='material-icons prefix'>person</i>
								<input
									name='password'
									id='password'
									type='password'
									className={classNames({
										invalid: this.state.error.error,
									})}
									onChange={this.handleChange.bind(this)}
								/>
								<label htmlFor='password'>Password</label>
								<span
									class='helper-text'
									data-error={this.state.error.message.password}
									data-success='right'></span>
							</div>
							<div className='modal-footer'>
								{isLoading ? (
									<div class='preloader-wrapper small active'>
										<div class='spinner-layer spinner-green-only'>
											<div class='circle-clipper left'>
												<div class='circle'></div>
											</div>
											<div class='gap-patch'>
												<div class='circle'></div>
											</div>
											<div class='circle-clipper right'>
												<div class='circle'></div>
											</div>
										</div>
									</div>
								) : (
									<button
										type='submit'
										className={`btn purple darken-4`}
										style={{ marginBottom: '20px' }}>
										Login
									</button>
								)}
							</div>
							{/* // */}
						</form>
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps)(LoginModal);

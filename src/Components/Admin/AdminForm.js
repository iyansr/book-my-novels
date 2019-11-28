import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAdmin } from '../../Public/Redux/Actions/admin';
import classNames from 'classnames';

class AdminForm extends Component {
	// const { onSubmit, handleChange, isLoading } = props;
	constructor(props) {
		super(props);
		this.state = {
			form: {
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
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		});
	}
	async handleLogin(e) {
		this.setState({
			isLoading: true,
		});
		e.preventDefault();
		try {
			let formData = new FormData();
			formData.append('email', this.state.form.email);
			formData.append('password', this.state.form.password);
			await this.props.dispatch(loginAdmin(formData));
			localStorage.setItem('userToken', this.props.admin.adminToken);
			window.location.href = '/admin';
			this.setState({
				isLoading: false,
			});
		} catch (error) {
			this.setState({
				error: this.props.admin.error,
				isLoading: false,
			});
		}
	}
	render() {
		return (
			<form onSubmit={this.handleLogin.bind(this)}>
				<div className='row'>
					<div className='input-field col s6'>
						<input
							value={this.state.form.email}
							name='email'
							id='adminEmail'
							type='text'
							className={classNames({
								invalid: this.state.error.error,
							})}
							onChange={this.handleChange.bind(this)}
						/>
						<label className='active' for='adminEmail'>
							Email
						</label>
						<span
							class='helper-text'
							data-error={this.state.error.message.email}
							data-success='right'></span>
					</div>
				</div>
				{/* {} */}
				<div className='row'>
					<div className='input-field col s6'>
						<input
							value={this.state.form.password}
							name='password'
							id='adminPassword'
							type='password'
							className={classNames({
								invalid: this.state.error.error,
							})}
							onChange={this.handleChange.bind(this)}
						/>
						<label className='active' for='adminPassword'>
							Password
						</label>
						<span
							class='helper-text'
							data-error={this.state.error.message.password}
							data-success='right'></span>
					</div>
				</div>
				{this.state.isLoading ? (
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
						className='btn btn-small purple darken-4'
						style={{ marginLeft: '15px' }}>
						Login
					</button>
				)}
			</form>
		);
	}
}
const mapStateToProps = state => {
	return {
		admin: state.admin,
	};
};
export default connect(mapStateToProps)(AdminForm);

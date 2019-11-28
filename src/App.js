import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Details from './Pages/Details';
import { Provider } from 'react-redux';
import store from './Public/Redux/store';
import Profile from './Pages/Profile';
import Admin from './Pages/Admin';
import jwt from 'jsonwebtoken';

class App extends Component {
	constructor() {
		super();
		this.state = {
			user: {},
		};
	}

	async componentDidMount() {
		try {
			if (localStorage.getItem('userToken')) {
				const token = localStorage.getItem('userToken');
				const decoded = await jwt.decode(token, process.env.JWT_SECRET);
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
		} catch (error) {
			this.setState({
				error,
			});
		}
	}
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Route
						exact
						path='/'
						component={() => <Home user={this.state.user} />}
					/>
					<Route path='/profile/:id_user' component={Profile} />
					<Route path='/admin' component={Admin} />
					<Route path='/details/:id_book' component={Details} />
				</Router>
			</Provider>
		);
	}
}

export default App;

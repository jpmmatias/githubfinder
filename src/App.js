import React, {Component, Fragment} from 'react';
import './App.css';
import Navbar from './components/layout/navbar';
import Users from './components/users/users';
import axios from 'axios';
import Seacrh from './components/users/searchbar';
import Alert from './components/layout/alert';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/pages/about';
import User from './components/users/user';

class App extends Component {
	state = {
		users: [],
		user: {},
		loading: false,
		alert: null,
		repos: [],
	};
	// async componentDidMount() {
	// 	this.setState({
	// 		loading: true,
	// 	});
	// 	const res = await axios.get(
	// 		`http://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
	// 	);
	// 	const data = await res.data;

	// 	this.setState({
	// 		users: data,
	// 		loading: false,
	// 	});
	// }
	searchUsers = async (text) => {
		this.setState({
			loading: true,
		});
		const res = await axios.get(
			`http://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		const users = await res.data.items;

		this.setState({
			users: users,
			loading: false,
		});
	};
	clearUsers = () => {
		this.setState({
			users: [],
			loading: false,
		});
	};

	setAlert = (msg, type) => {
		this.setState({
			alert: {msg: msg, type: type},
		});
		setTimeout(() => {
			this.setState({alert: null});
		}, 2000);
	};

	getUser = async (username) => {
		this.setState({
			loading: true,
		});
		const res = await axios.get(
			`http://api.github.com/users/${username}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		const user = await res.data;

		this.setState({
			user: user,
			loading: false,
		});
	};

	getUserRepos = async (username) => {
		this.setState({
			loading: true,
		});
		const res = await axios.get(
			`http://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		const repos = await res.data;

		this.setState({
			repos: repos,
			loading: false,
		});
	};

	render() {
		const {loading, users, alert, user, repos} = this.state;
		return (
			<Router>
				<div>
					<Navbar />
					<div className='container'>
						<Alert alert={alert} />
						<Switch>
							<Route
								exact
								path='/'
								render={(props) => (
									<Fragment>
										<Seacrh
											clearUsers={this.clearUsers}
											showClear={users.length === 0 ? false : true}
											searchUsers={this.searchUsers}
											setAlert={this.setAlert}
										/>
										<Users loading={loading} users={users} />
									</Fragment>
								)}
							/>
							<Route exact path='/about' component={About} />
							<Route
								exact
								path='/user/:login'
								render={(props) => (
									<User
										{...props}
										loading={loading}
										user={user}
										repos={repos}
										getUser={this.getUser}
										getUserRepos={this.getUserRepos}
									/>
								)}
							/>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;

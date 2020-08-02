import React from 'react';
import './App.css';
import Navbar from './components/layout/navbar';
import Alert from './components/layout/alert';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/pages/about';
import User from './components/users/user';
import GithubState from './context/github/githubState';
import AlertState from './context/alert/alertState';
import Homepage from './components/pages/home';
import Error from './components/pages/error';

const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div>
						<Navbar />
						<div className='container'>
							<Alert />
							<Switch>
								<Route exact path='/' component={Homepage} />
								<Route exact path='/about' component={About} />
								<Route exact path='/user/:login' component={User} />
								<Route component={Error} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;

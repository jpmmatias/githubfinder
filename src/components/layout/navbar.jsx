import PropTypes from 'prop-types';
import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const Navbar = ({icon, title}) => {
	const githubContext = useContext(GithubContext);
	const {clearUsers} = githubContext;
	return (
		<nav className='nav navbar bg-primary'>
			<h1>
				<Link onClick={clearUsers} to='/'>
					<i className={icon}> </i> {title}
				</Link>
			</h1>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</nav>
	);
};

Navbar.defaultProps = {
	title: 'Github Finder',
	icon: 'fab fa-github',
};
Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default Navbar;

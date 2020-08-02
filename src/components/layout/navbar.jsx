import PropTypes from 'prop-types';
import React, {useContext} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const Navbar = ({icon, title}) => {
	const githubContext = useContext(GithubContext);
	const {clearUsers} = githubContext;

	return (
		<Wrapper>
			<nav className='nav '>
				<h1 className='logo'>
					<Link onClick={clearUsers} to='/'>
						<i className={icon}> </i> {title}
					</Link>
				</h1>
				<ul>
					<li>
						<button>
							<Link to='/'>Home</Link>
						</button>
					</li>
					<li>
						<button>
							<Link to='/about'>Sobre</Link>
						</button>
					</li>
				</ul>
			</nav>
		</Wrapper>
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

const Wrapper = styled.nav`
	margin-bottom: 1rem;
	padding: 1rem;
	background: var(--clr-white);
	text-align: center;
	display: flex;

	justify-content: space-around;
	align-items: center;

	button {
		background: transparent;
		border: transparent;
		font-size: 1.2rem;
		text-transform: capitalize;
		letter-spacing: var(--spacing);
		color: var(--clr-grey-5);
	}
	@media screen and (max-width: 700px) {
		width: 100vw;
		justify-self: center;
		ul {
			display: none;
		}
		nav {
			width: 100%;
		}
	}
`;

export default Navbar;

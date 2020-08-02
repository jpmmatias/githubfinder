import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const UserItem = ({user: {login, avatar_url, html_url}}) => {
	return (
		<Wrapper>
			<img
				src={avatar_url}
				alt={`Imagem de ${login}`}
				className='round-img'
				style={{width: '60px'}}
			/>
			<h3>{login}</h3>
			<div>
				<button>
					<Link to={`/user/${login}`} style={{color: 'white'}}>
						More Info
					</Link>
				</button>
			</div>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	text-align: center;
	background: var(--clr-white);
	padding: 1.5rem 2rem;
	border-top-right-radius: var(--radius);
	border-bottom-left-radius: var(--radius);
	border-bottom-right-radius: var(--radius);
	position: relative;
	width: 70%;
	display: flex;
	margin-bottom: 1rem;
	flex-direction: column;
	align-items: center;
	justify-self: center;

	h3 {
		margin: 10% 0;
	}

	button {
		border-radius: 5px;
		border-color: transparent;
		padding: 0.25rem 0.5rem;
		text-transform: capitalize;
		letter-spacing: var(--spacing);
		background: var(--clr-primary-5);
		color: var(--clr-white);
		transition: var(--transition);
		cursor: pointer;
		&:hover {
			background: var(--clr-primary-8);
			color: var(--clr-primary-1);
		}
	}

	@media screen and (max-width: 700px) {
		width: 100%;
		padding: 1.5rem 5rem;

		h3 {
			font-size: 2rem;
		}
		button {
		border-radius: 5px;
		border-color: transparent;
		padding: 0.5rem 1rem;
		text-transform: capitalize;
		letter-spacing: var(--spacing);
		background: var(--clr-primary-5);
		color: var(--clr-white);
		transition: var(--transition);
		cursor: pointer;
		&:hover {
			background: var(--clr-primary-8);
			color: var(--clr-primary-1);
		}
	}
`;
UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};

export default UserItem;

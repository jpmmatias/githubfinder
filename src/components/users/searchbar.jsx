import React, {useState, useContext} from 'react';
import GithubContext from '../../context/github/githubContext';
import styled from 'styled-components';
import {MdSearch} from 'react-icons/md';
import AlertContext from '../../context/alert/alertContext';

const Seacrh = () => {
	const githubContext = useContext(GithubContext);
	const {searchUsers} = githubContext;

	const alertContext = useContext(AlertContext);
	const {setAlert} = alertContext;

	const [text, setText] = useState('');

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			setAlert(
				'Porfavor digite o nome do usuário que esteja procurando',
				'light'
			);
		} else {
			searchUsers(text);
			setText(' ');
		}
	};

	return (
		<div className='section-center'>
			<Wrapper>
				<form onSubmit={handleSubmit}>
					<div className='form-control'>
						<input
							onChange={handleChange}
							type='text'
							value={text}
							name='text'
							className='userSearch'
							placeholder='Pesquise Usuários'
						/>
						<button type='submit' name='submit'>
							<MdSearch />
							<span>Pesquisar</span>
						</button>
					</div>
				</form>
			</Wrapper>
		</div>
	);
};

const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	margin-bottom: 1.5rem;

	align-items: center;
	width: 100%;
	@media (min-width: 768px) {
		h3 {
			padding: 0 0.5rem;
		}
	}
	.form-control {
		background: var(--clr-white);
		display: flex;
		justify-content: space-around;
		align-items: space-around;
		align-self: center;
		with: 100%;
		border-radius: 5px;
		padding: 0.5rem;
		input {
			border-color: transparent;
			outline-color: var(--clr-grey-10);
			letter-spacing: var(--spacing);
			color: var(--clr-grey-3);
			padding: 0.25rem 5rem;
		}
		input::placeholder {
			color: var(--clr-grey-3);
			text-transform: capitalize;
			letter-spacing: var(--spacing);
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
		svg {
			color: var(--clr-grey-5);
		}
		input,
		button,
		svg {
			font-size: 1.3rem;
		}
		@media (max-width: 800px) {
			button,
			input,
			svg {
				font-size: 0.85rem;
			}
		}
		@media screen and (max-width: 700px) {
			span {
				display: none;
			}
			input {
				border-color: transparent;
				outline-color: var(--clr-grey-10);
				letter-spacing: var(--spacing);
				color: var(--clr-grey-3);
				padding: 0.1rem 2.5rem;
			}
		}
	}
`;

export default Seacrh;

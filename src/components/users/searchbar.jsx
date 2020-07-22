import React, {useState, useContext} from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Seacrh = () => {
	const githubContext = useContext(GithubContext);
	const {searchUsers, clearUsers, users} = githubContext;

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
		<div>
			<form onSubmit={handleSubmit} className='form'>
				<input
					onChange={handleChange}
					type='text'
					value={text}
					name='text'
					placeholder='Pesquise Usuários'
				/>
				<input
					type='submit'
					value='Pesquisar'
					name='submit'
					className='btn btn-dark btn-block'
				/>
			</form>
			{users.length > 0 && (
				<button onClick={clearUsers} className='btn btn-light btn-block'>
					Limpar
				</button>
			)}
		</div>
	);
};

export default Seacrh;

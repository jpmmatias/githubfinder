import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Seacrh extends Component {
	state = {
		text: '',
	};
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.text === '') {
			this.props.setAlert(
				'Porfavor digite o nome do usuário que esteja procurando',
				'light'
			);
		} else {
			this.props.searchUsers(this.state.text);
			this.setState({text: ' '});
		}
	};
	static propTypes = {
		searchUsers: PropTypes.func.isRequired,
		clearUsers: PropTypes.func.isRequired,
	};
	render() {
		const {showClear, clearUsers} = this.props;
		const {text} = this.state;
		return (
			<div>
				<form onSubmit={this.handleSubmit} className='form'>
					<input
						onChange={this.handleChange}
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
				{showClear && (
					<button onClick={clearUsers} className='btn btn-light btn-block'>
						Limpar
					</button>
				)}
			</div>
		);
	}
}

export default Seacrh;

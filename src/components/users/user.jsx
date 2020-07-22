import React, {useEffect, useContext, Fragment} from 'react';
import Spinner from '../layout/spinner';
import Repos from '../repos/repos';
import {Link} from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({match}) => {
	const githubContext = useContext(GithubContext);
	const {loading, user, getUser, getUserRepos, repos} = githubContext;

	useEffect(() => {
		getUser(match.params.login);
		getUserRepos(match.params.login);
		//eslint-disable-next-line
	}, []);

	const {
		bio,
		name,
		company,
		avatar_url,
		hireable,
		location,
		blog,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
	} = user;

	if (loading) {
		return <Spinner />;
	} else {
		return (
			<Fragment>
				<Link to='/' className='btn btn-light'>
					Voltar para Pesquisa
				</Link>
				Cotratavel:{' '}
				{hireable ? (
					<i className='fas fa-check text-success'></i>
				) : (
					<i className='fas fa-times-circle text-danger'></i>
				)}
				<div className='card grid-2'>
					<div className='all-center'>
						<img
							className='round-img'
							style={{width: '150px'}}
							src={avatar_url}
							alt={`Imagem de ${name}`}
							srcSet={avatar_url}
						/>
						<h1>{name ? name : login}</h1>
						<h3>{location}</h3>
					</div>
					<div>
						{bio && (
							<Fragment>
								<h3>Bio</h3>
								<p>{bio}</p>
							</Fragment>
						)}
						<a href={html_url} className='btn btn-dark my-1'>
							Visite o Perfil no GitHub
						</a>
						<ul>
							<li>
								<strong>Username: </strong>
								{login}
							</li>
							<li>
								{company && (
									<Fragment>
										<strong>Empresa: </strong>
										{company}
									</Fragment>
								)}
							</li>
							<li>
								{blog && (
									<Fragment>
										<strong>Website: </strong>
										{blog}
									</Fragment>
								)}
							</li>
						</ul>
					</div>
				</div>
				<div className='card text-center'>
					<div className='badge badge-primary'>Seguidores: {followers}</div>
					<div className='badge badge-primary'>Seguidores: {following}</div>
					<div className='badge badge-light'>Repostirórios: {public_repos}</div>
					<div className='badge badge-dark'>Gists:{public_gists}</div>
				</div>
				<Repos repos={repos} />
			</Fragment>
		);
	}
};

export default User;

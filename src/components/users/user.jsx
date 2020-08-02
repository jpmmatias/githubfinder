import React, {useEffect, useContext} from 'react';
import Spinner from '../layout/spinner';
import Repos from '../repos/repos';
import GithubContext from '../../context/github/githubContext';
import styled from 'styled-components';
import Card from './card';
import Followers from './followers';
import UserInfo from './info';

const User = ({match}) => {
	const githubContext = useContext(GithubContext);
	const {
		loading,
		user,
		getUser,
		getUserRepos,
		repos,
		searchUserFollowers,
		followers,
	} = githubContext;

	useEffect(() => {
		getUser(match.params.login);
		getUserRepos(match.params.login);
		searchUserFollowers(match.params.login);
		//eslint-disable-next-line
	}, []);

	return (
		<Wrapper className='section-center'>
			{loading ? (
				<Spinner />
			) : (
				<div className='section'>
					<UserInfo repos={repos} user={user} />
					<div className='userInfo'>
						<Card user={user}></Card>
						<Followers followers={followers}></Followers>
					</div>
					<Repos repos={repos} />
				</div>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding-top: 2rem;
	display: grid;
	gap: 3rem 2rem;
	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
	@media screen and (max-width: 700px) {
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	}
	/* align-items: start; */
`;

export default User;

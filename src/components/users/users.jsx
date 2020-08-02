import React, {useContext} from 'react';
import UserItem from './useritem';
import Spinner from '../layout/spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
	const githubContext = useContext(GithubContext);
	const {loading, users} = githubContext;

	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div className='userStyle'>
				{users.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
};

export default Users;

import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
	SEARCH_USERS,
	SET_LOADING,
	CLEAR_USERS,
	GET_REPOS,
	GET_USER,
	SEARCH_USER_FOLLOWERS,
} from './githubTypes';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
	githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
	githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
	githubClientId = process.env.GITHUB_CLIENT_ID;
	githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}
const GithubState = (props) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		followers: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	const searchUsers = async (text) => {
		setLoading();
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
		);
		const users = await res.data.items;
		dispatch({
			type: SEARCH_USERS,
			payload: users,
		});
	};

	const searchUserFollowers = async (username) => {
		setLoading();
		const res = await await axios(
			`https://api.github.com/users/${username}/followers`
		);
		const followers = await res.data;
		dispatch({
			type: SEARCH_USER_FOLLOWERS,
			payload: followers,
		});
	};

	const clearUsers = () => {
		dispatch({
			type: CLEAR_USERS,
		});
	};

	const getUser = async (username) => {
		setLoading();
		const res = await axios.get(
			`https://api.github.com/users/${username}?&client_id=${githubClientId}&client_secret=${githubClientSecret}`
		);
		const user = await res.data;
		dispatch({
			type: GET_USER,
			payload: user,
		});
	};

	const getUserRepos = async (username) => {
		setLoading();
		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
		);
		const repos = await res.data;

		dispatch({
			type: GET_REPOS,
			payload: repos,
		});
	};

	const setLoading = () => dispatch({type: SET_LOADING});
	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				followers: state.followers,
				searchUsers,
				clearUsers,
				getUser,
				getUserRepos,
				searchUserFollowers,
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;

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
} from './githubTypes';

let githubClientId = 'bde2c19614430db5f897';
let githubClientSecret = 'de2503bbfac20c2086dbb7a0c314034929c4caa0';

const GithubState = (props) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	const searchUsers = async (text) => {
		setLoading();
		const res = await axios.get(
			`http://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
		);
		const users = await res.data.items;
		dispatch({
			type: SEARCH_USERS,
			payload: users,
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
			`http://api.github.com/users/${username}?&client_id=${githubClientId}&client_secret=${githubClientSecret}`
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
			`http://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
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
				searchUsers,
				clearUsers,
				getUser,
				getUserRepos,
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;

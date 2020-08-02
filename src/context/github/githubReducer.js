import {
	SEARCH_USERS,
	SET_LOADING,
	CLEAR_USERS,
	GET_REPOS,
	GET_USER,
	SEARCH_USER_FOLLOWERS,
} from './githubTypes';

export default (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};

		case SEARCH_USERS:
			return {
				...state,
				users: action.payload,
				loading: false,
			};

		case CLEAR_USERS:
			return {
				...state,
				users: [],
				loading: false,
			};
		case GET_USER:
			return {
				...state,
				user: action.payload,
				loading: false,
			};
		case GET_REPOS:
			return {
				...state,
				repos: action.payload,
				loading: false,
			};
		case SEARCH_USER_FOLLOWERS:
			return {
				...state,
				followers: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};

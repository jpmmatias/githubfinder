import React from 'react';
import RepoItem from './repoItem';
import PropTypes from 'prop-types';
const Repos = ({repos}) => {
	return repos.map((repo) => <RepoItem key={repo.id} repo={repo} />);
};

Repos.proptypes = {
	repos: PropTypes.array.isRequired,
};
export default Repos;

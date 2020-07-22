import React, {Fragment} from 'react';
import Seacrh from '../users/searchbar';
import Users from '../users/users';

const Homepage = () => {
	return (
		<Fragment>
			<Seacrh /> <Users />
		</Fragment>
	);
};

export default Homepage;

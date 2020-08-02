import React from 'react';
import Seacrh from '../users/searchbar';
import Users from '../users/users';
import styled from 'styled-components';

const Homepage = () => {
	return (
		<Wrapper>
			<Seacrh /> <Users />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export default Homepage;

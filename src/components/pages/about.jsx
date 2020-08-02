import React from 'react';
import styled from 'styled-components';

const About = () => {
	return (
		<Wrapper>
			<h1>GithubFinder</h1>
			<h3>
				App para pesquisar usuários do github através do API do próprio github,
				fetio por <a href='https://github.com/jpmmatias'>@jpmmatias</a>
			</h3>
			<p>Versão 2.0</p>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	min-height: 50vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: var(--clr-primary-10);
	text-align: center;
	h1 {
		font-size: 4rem;
	}
	h3 {
		color: var(--clr-grey-3);
		margin-top: 3rem;
		padding: 0 400px;
		margin-bottom: 1.5rem;
	}
	@media screen and (max-width: 700px) {
		h3 {
			color: var(--clr-grey-3);
			margin-top: 3rem;
			padding: 0 100px;
			margin-bottom: 1.5rem;
		}
	}
`;
export default About;

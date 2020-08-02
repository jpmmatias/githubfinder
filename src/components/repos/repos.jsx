import React from 'react';
import Bar2D from '../charts/Bar2D';
import styled from 'styled-components';
import Column2D from '../charts/Column2D';
import Pie2D from '../charts/Pie2D';
import Doughnut2D from '../charts/Doughnut2D';

const Repos = ({repos}) => {
	const languages = repos.reduce((total, item) => {
		const {language, stargazers_count} = item;
		if (!language) {
			return total;
		}
		if (!total[language]) {
			total[language] = {label: language, value: 1, stars: stargazers_count};
		} else {
			total[language] = {
				...total[language],
				value: total[language].value + 1,
				stars: total[language].stars + stargazers_count,
			};
		}
		return total;
	}, {});

	const mostUsed = Object.values(languages)
		.sort((a, b) => {
			return b.value - a.value;
		})
		.slice(0, 5);

	const mostPopular = Object.values(languages)
		.sort((a, b) => {
			return b.stars - a.stars;
		})
		.map((item) => {
			return {...item, value: item.stars};
		})
		.slice(0, 5);

	let {stars, forks} = repos.reduce(
		(total, item) => {
			const {stargazers_count, name, forks} = item;
			total.stars[stargazers_count] = {label: name, value: stargazers_count};
			total.forks[forks] = {label: name, value: forks};
			return total;
		},
		{
			stars: {},
			forks: {},
		}
	);

	stars = Object.values(stars).slice(-5).reverse();
	forks = Object.values(forks).slice(-5).reverse();

	return (
		<Wrapper>
			<div className='section'>
				<div className='section-center repos'>
					<div className='chart'>
						<Pie2D data={mostUsed} />
					</div>
					<div className='chart'>
						<Doughnut2D data={mostPopular} />
					</div>

					<div className='chart'>
						<Column2D data={stars} />
					</div>

					<div className='chart'>
						<Bar2D data={forks} />
					</div>
				</div>
			</div>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export default Repos;

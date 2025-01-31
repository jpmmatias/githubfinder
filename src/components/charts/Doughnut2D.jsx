import React from 'react';

import ReactFC from 'react-fusioncharts';

import FusionCharts from 'fusioncharts';

import Chart from 'fusioncharts/fusioncharts.charts';

import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Doughnut2D = ({data}) => {
	const chartConfigs = {
		type: 'doughnut2d', // The chart type
		width: '100%', // Width of the chart
		height: '400', // Height of the chart
		dataFormat: 'json', // Data type
		dataSource: {
			// Chart Configuration
			chart: {
				caption: 'Estrelas por linguagem',
				theme: 'fusion',
				decimals: 0,
				doughnutRadius: '45%',
				showPercentValues: 0,
			},
			// Chart Data
			data,
		},
	};
	return <ReactFC {...chartConfigs} />;
};

export default Doughnut2D;

import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Bar2D = ({data}) => {
	const chartConfigs = {
		type: 'bar2d', // The chart type
		width: '100%', // Width of the chart
		height: '400', // Height of the chart
		dataFormat: 'json', // Data type
		dataSource: {
			chart: {
				caption: 'Most Forked',
				yAxisName: 'Forks',
				xAxisName: 'Repos',
				xAxisNameFontSize: '16px',
				yAisNameFontSize: '16px',
				theme: 'fusion',
				decimals: 0,
				pieRadius: '45%',
			},
			// Chart Data
			data,
		},
	};
	return <ReactFC {...chartConfigs} />;
};

export default Bar2D;

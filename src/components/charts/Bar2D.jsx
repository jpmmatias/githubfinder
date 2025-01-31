import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Bar2D = ({data}) => {
	const chartConfigs = {
		type: 'bar2d',
		width: '100%',
		height: '400',
		dataFormat: 'json',
		dataSource: {
			chart: {
				caption: 'Com mais forks',
				yAxisName: 'Forks',
				xAxisName: 'Repos',
				xAxisNameFontSize: '16px',
				yAisNameFontSize: '16px',
				theme: 'fusion',
				decimals: 0,
				pieRadius: '45%',
			},
			data,
		},
	};
	return <ReactFC {...chartConfigs} />;
};

export default Bar2D;

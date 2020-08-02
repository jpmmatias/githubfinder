// STEP 1 - Include Dependencies
// Include react
import React from 'react';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Pie2D = ({data}) => {
	const chartConfigs = {
		type: 'pie3d',
		width: '100%',
		height: '400',
		dataFormat: 'json',
		dataSource: {
			chart: {
				caption: 'Linguagens',
				theme: 'fusion',
				decimals: 0,
				pieRadius: '45%',
			},
			data,
		},
	};
	return <ReactFC {...chartConfigs} />;
};

export default Pie2D;

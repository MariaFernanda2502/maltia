import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

function Chart(props) {
	const {
		title = '',
		categories = [''],
		isLegendVisible = true,
		series = [{type: 'column', data: [1,2,3], color: 'blue', name: 'numbers'}],
	} = props;

	let options = {
        credits: {
            enabled: false,
        },
        chart: {
            displayErrors: false,
            backgroundColor: 'white',
        },
        title: {
            text: title,
            align: 'left',
            margin: 32,
            fontSize: '1rem',
        },
        xAxis: {
            allowDecimals: false,
            type: 'linear',
            categories: categories,
            lineWidth: 1,
            tickWidth: 0,
        },
        yAxis: [
            {
                title: null,
                allowDecimals: false,
                min: 0,
                lineWidth: 1,
            },
            {
                title: null,
                allowDecimals: false,
                min: 0,
                gridLineWidth: 0,
                opposite: true,
                lineWidth: 1,
            },
        ],
        legend: {
            enabled: isLegendVisible,
            align: 'center',
            verticalAlign: 'bottom',
            itemDistance: 40,
            layout: 'horizontal',
        },
        plotOptions: {
            column: {
                borderWidth: 0.4,
                borderColor: 'black',
                stacking: 'normal',
            },
            area: {
                stacking: 'normal',
                lineColor: 'transparent',
            },
            series: {
                marker: {
                    enabled: false,
                },
            },
        },
        series: series,
    };

	return (
		<HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
	)
}

export default Chart;
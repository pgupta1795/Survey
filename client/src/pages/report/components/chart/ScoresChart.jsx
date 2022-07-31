import React from 'react';
import Chart from 'react-apexcharts';
import Colors from '../../../../helper/Colors';
import useChartSeries from '../../../../hooks/useChartSeries';
import ChartUtils from '../../utils/ChartUtils';

const ScoresChart = () => {
  const options = {
    series: [],
    options: {
      chart: {
        id: 'scoresChart',
      },
      fill: {
        type: 'gradient',
      },
      grid: {
        show: true,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      yaxis: {
        show: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 4,
          distributed: true,
          dataLabels: {
            position: 'bottom',
          },
        },
      },
      colors: [
        Colors.GRAPH_COLOR_1,
        Colors.GRAPH_COLOR_2,
        Colors.GRAPH_COLOR_3,
        Colors.GRAPH_COLOR_4,
        Colors.GRAPH_COLOR_5,
      ],
      title: {
        text: 'SCORES',
      },
      legend: {
        show: false,
      },
      dataLabels: {
        background: {
          enabled: false,
          foreColor: '#00000',
        },
      },
    },
  };
  const state = useChartSeries(options, ChartUtils.getScoresSeries);

  return (
    <div className="apex-chart">
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        height="300"
      />
    </div>
  );
};

export default ScoresChart;

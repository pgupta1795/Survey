import React from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import Colors from '../../../../helper/Colors';
import useChartSeries from '../../../../hooks/useChartSeries';
import ChartUtils from '../../utils/ChartUtils';

const MaturityChart = ({ ...props }) => {
  const options = {
    series: [],
    options: {
      chart: {
        id: 'maturityChart',
      },
      // fill: {
      //   type: 'gradient',
      // },
      // grid: {
      //   show: true,
      //   xaxis: {
      //     lines: {
      //       show: false,
      //     },
      //   },
      //   yaxis: {
      //     lines: {
      //       show: false,
      //     },
      //   },
      // },
      // yaxis: {
      //   show: false,
      // },
      // xaxis: {
      //   labels: {
      //     show: false,
      //   },
      // },
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
        text: 'MATURITY',
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
  const data = useSelector((state) => state?.response?.value);

  const state = useChartSeries(data, options, ChartUtils.getMaturitySeries);

  return (
    <div className="apex-chart" {...props}>
      <Chart
        options={state.options}
        series={state.series}
        type="radar"
        height="300"
      />
    </div>
  );
};

export default MaturityChart;

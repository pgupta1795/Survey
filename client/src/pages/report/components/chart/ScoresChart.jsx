import { Typography } from '@mui/material';
import React from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import Colors from '../../../../helper/Colors';
import useChartSeries from '../../../../hooks/useChartSeries';
import Settings from '../../../../Settings.json';
import ChartUtils from '../../utils/ChartUtils';

const ScoresChart = ({ ...props }) => {
  const options = {
    series: [],
    options: {
      chart: {
        id: 'scoresChart',
      },
      fill: {
        type: 'gradient',
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
      tooltip: {
        enabled: true,
        fillSeriesColor: true,
      },
      legend: {
        show: false,
      },
    },
  };

  const data = useSelector((state) => state?.response?.value);
  const state = useChartSeries(data, options, ChartUtils.getScoresSeries);

  return (
    <div className="chart-with-subtitle">
      <div className="apex-chart" {...props}>
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          height="300"
        />
      </div>
      <Typography
        sx={{
          typography: { xs: 'small', sm: 'caption', md: 'caption' },
          px: 1,
        }}
      >
        {Settings.SCORES_DESCRIPTION}
      </Typography>
    </div>
  );
};

export default ScoresChart;

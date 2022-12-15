import { Typography, useTheme } from '@mui/material';
import React from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import Colors from '../../../../helper/Colors';
import useChartSeries from '../../../../hooks/useChartSeries';
import Settings from '../../../../Settings.json';
import ChartUtils from '../../utils/ChartUtils';

const MaturityChart = ({ ...props }) => {
  const theme = useTheme();
  const { divider } = theme.palette;

  const options = {
    series: [],
    options: {
      chart: {
        id: 'maturityChart',
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
      },
      fill: {
        opacity: 0.1,
      },
      yaxis: {
        min: 0,
        max: 4,
        forceNiceScale: true,
        tickAmount: 9,
      },
      stroke: {
        show: true,
        width: 3,
      },
      plotOptions: {
        radar: {
          polygons: {
            strokeColors: divider,
            strokeWidth: 2,
            fill: {
              colors: ['#fff'],
            },
          },
        },
      },
      colors: [
        Colors.MATURITY_COLOR_1,
        Colors.MATURITY_COLOR_2,
        Colors.MATURITY_COLOR_3,
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
    <div className="chart-with-subtitle">
      <div className="apex-chart" {...props}>
        <Chart
          options={state.options}
          series={state.series}
          type="radar"
          height="300"
        />
      </div>
      <Typography
        sx={{
          typography: { xs: 'small', sm: 'caption', md: 'caption' },
          px: 1,
        }}
      >
        {Settings.MATURITY_DESCRIPTION}
      </Typography>
    </div>
  );
};

export default MaturityChart;

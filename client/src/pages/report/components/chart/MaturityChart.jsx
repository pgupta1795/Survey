import { useTheme } from '@mui/material';
import React from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import { getError, getStatus } from '../../../../features/forms';
import {
  getStatus as getResponseError,
  getError as getResponseStatus,
} from '../../../../features/userResponse';
import Colors from '../../../../helper/Colors';
import Constants from '../../../../helper/Constants';
import useChartSeries from '../../../../hooks/useChartSeries';
import ChartUtils from '../../utils/ChartUtils';

const MaturityChart = ({ ...props }) => {
  const theme = useTheme();

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
      fill: { opacity: 0.1 },
      yaxis: {
        min: 0,
        max: 4,
        forceNiceScale: true,
        tickAmount: 9,
      },
      stroke: { show: true, width: 3 },
      plotOptions: {
        radar: {
          polygons: {
            strokeColors: theme.palette.divider,
            strokeWidth: 2,
            fill: { colors: ['#fff'] },
          },
        },
      },
      colors: [
        Colors.MATURITY_COLOR_1,
        Colors.MATURITY_COLOR_2,
        Colors.MATURITY_COLOR_3,
      ],
      legend: { show: false },
      dataLabels: {
        background: {
          enabled: false,
          foreColor: '#00000',
        },
      },
    },
  };
  const status = useSelector(getStatus);
  const error = useSelector(getError);
  const responseStatus = useSelector(getResponseStatus);
  const responseError = useSelector(getResponseError);

  if (status === 'loading' || responseStatus === 'loading')
    return <div>LOADING...</div>;

  if (status === 'failed') return <div>{error}</div>;

  if (responseStatus === 'failed') return <div>{responseError}</div>;

  const state = useChartSeries(options, ChartUtils.getMaturitySeries);

  return (
    <div className="inline-flex flex-col text-black">
      <div className="apex-chart" {...props}>
        <Chart
          options={state.options}
          series={state.series}
          type="radar"
          height="300"
        />
      </div>
      <div className="pb-1 mx-auto">MATURITY</div>
      <div className="text-[9px] px-1 font-medium">
        {Constants.MATURITY_DESCRIPTION}
      </div>
    </div>
  );
};

export default MaturityChart;

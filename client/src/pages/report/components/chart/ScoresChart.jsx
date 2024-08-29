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
      tooltip: {
        enabled: true,
        fillSeriesColor: true,
      },
      legend: {
        show: false,
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

  const state = useChartSeries(options, ChartUtils.getScoresSeries);

  return (
    <div className="inline-flex flex-col text-black">
      <div className="apex-chart" {...props}>
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          height="300"
        />
      </div>
      <div className="pb-1 mx-auto">SCORES</div>
      <div className="text-[9px] px-1 font-medium">
        {Constants.SCORES_DESCRIPTION}
      </div>
    </div>
  );
};

export default ScoresChart;

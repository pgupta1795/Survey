import { useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import { getError, getStatus } from '../../../../features/forms';
import {
  getStatus as getResponseError,
  getError as getResponseStatus,
} from '../../../../features/userResponse';
import Colors from '../../../../helper/Colors';
import useChartSeries from '../../../../hooks/useChartSeries';
import ChartUtils from '../../utils/ChartUtils';

const QuestionAnswerChart = ({ activeQuestion, activeSection, ...props }) => {
  const theme = useTheme();
  const options = {
    series: [],
    options: {
      chart: {
        id: `${activeQuestion._id}`,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: { download: true },
        },
      },
      fill: { type: 'gradient' },
      yaxis: { labels: { show: true } },
      xaxis: { labels: { show: false } },
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '70%',
          borderRadius: 4,
          dataLabels: {
            position: 'bottom',
            maxItems: 100,
            hideOverflowingLabels: true,
          },
        },
      },
      colors: [Colors.GRAPH_COLOR_1],
      legend: { show: false },
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

  const state = useChartSeries(
    options,
    ChartUtils.getQuestionAnswerSeries,
    {
      activeQuestion,
      activeSection,
    },
    theme
  );

  return (
    <div className="question-response-chart">
      <Typography
        sx={{
          typography: { xs: 'smallQuestion', sm: 'body2', md: 'question' },
        }}
      >
        {activeQuestion.text}
      </Typography>
      <div className="apex-chart" {...props}>
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          height="300"
        />
      </div>
    </div>
  );
};

QuestionAnswerChart.propTypes = {
  activeQuestion: PropTypes.object.isRequired,
  activeSection: PropTypes.object.isRequired,
};
export default QuestionAnswerChart;

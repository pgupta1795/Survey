import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFormDataById } from '../features/forms';
import { getResponseData, getYear } from '../features/userResponse';

export default (options, fn, extraData, theme) => {
  const { formId } = useParams();
  const formData = useSelector((state) => getFormDataById(state, formId));
  const responseData = useSelector(getResponseData);
  const year = useSelector(getYear);
  const [state, setState] = useState({
    ...options,
  });
  const executeFunction = fn.bind(this);

  useEffect(() => {
    const { series, labels } = executeFunction({
      formData,
      responseData,
      ...extraData,
      year,
    });
    setState({
      ...state,
      series,
      options: {
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
        theme: {
          mode: theme ? theme.palette.mode : 'light',
          palette: 'palette7',
        },
        labels,
      },
    });
  }, [formData, responseData, year, theme]);

  return state;
};

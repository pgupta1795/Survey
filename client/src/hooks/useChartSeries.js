import { useContext, useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { ReportContext } from './contexts';

export default (options, fn) => {
  const theme = useTheme();
  const context = useContext(ReportContext);
  const [state, setState] = useState({
    ...options,
  });
  const executeFunction = fn.bind(this);

  useEffect(() => {
    const { series, labels } = executeFunction(context);
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
          mode: theme.palette.mode,
          palette: 'palette7',
        },
        labels,
      },
    });
  }, [context, theme]);

  return state;
};

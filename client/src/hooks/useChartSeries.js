import { useEffect, useState } from 'react';

export default (data, options, fn, extraData, theme) => {
  const [state, setState] = useState({
    ...options,
  });
  const executeFunction = fn.bind(this);

  useEffect(() => {
    const { series, labels } = executeFunction({ ...data, ...extraData });
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
          mode: theme || 'dark',
          palette: 'palette7',
        },
        labels,
      },
    });
  }, [data]);

  return state;
};

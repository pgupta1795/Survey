import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ArrayUtils from '../../../../common/utils/ArrayUtils';
import Colors from '../../../../helper/Colors';
import Settings from '../../../../Settings.json';
import { getRows } from '../../utils/ChartUtils';

const getTableRows = (responseData, formData) => {
  const rows = getRows(responseData, formData);
  if (rows.length < 1) return rows;
  const allAverage = ArrayUtils.averageOfObjectArrays(rows);
  if (!allAverage || allAverage.length < 1) return rows;
  allAverage.splice(0, 1, 'Average');
  rows.push(allAverage);
  return rows;
};

const ReportFooter = ({ ...props }) => {
  const { responseData, formData } = useSelector(
    (state) => state?.response?.value
  );

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchedRows = getTableRows(responseData, formData);
    console.log(
      '%c Rows for Response By  Questions Category ',
      'background:red;color:black;font-size:20px'
    );
    console.table(fetchedRows);
    setRows(fetchedRows);
    return () => {
      setRows([]);
    };
  }, [responseData, formData]);

  const colors = [
    Colors.MATURITY_COLOR_1,
    Colors.MATURITY_COLOR_2,
    Colors.MATURITY_COLOR_3,
  ];

  return responseData && formData ? (
    <TableContainer {...props}>
      <Table sx={{ minWidth: 650 }} size="small" padding="none">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                backgroundColor: 'divider',
              }}
            >
              <Typography variant="tableHeader">Dimension</Typography>
            </TableCell>
            {Settings.CATEGORY.map((category, index) => (
              <TableCell
                align="center"
                key={category}
                sx={{
                  backgroundColor: `${colors[index]}`,
                }}
              >
                <Typography variant="tableHeader">{category}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row, pIndex) => (
            <TableRow
              key={row[0]}
              sx={{
                '&:last-child td, &:last-child th': {
                  borderTop: `2px solid ${Colors.THEME_MAIN}`,
                  color: `${Colors.THEME_MAIN}`,
                  fontWeight: '600',
                },
              }}
            >
              {Object.keys(row)?.map((key, index) => (
                <TableCell
                  align={index === 0 ? 'left' : 'center'}
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${row[key]}${index}`}
                  component="th"
                >
                  {index === 0 && pIndex < rows.length - 1
                    ? `${pIndex + 1}. ${row[key]}`
                    : row[key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : null;
};

export default ReportFooter;

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
import {
  formatAnswersBySection,
  getSectionAvgByCategory,
  validChartNames,
} from '../../utils/ChartUtils';

const getRows = (responseData, formData) => {
  const rows = [];
  const formattedRes = formatAnswersBySection(responseData, formData);
  Object.keys(formattedRes)?.forEach((sectionName) => {
    if (!validChartNames.includes(sectionName)) return;
    const avg = getSectionAvgByCategory(formattedRes, sectionName, formData);
    const data = ArrayUtils.averageOfArrays(avg);
    rows.push({ ...data });
  });
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
    const fetchedRows = getRows(responseData, formData);
    console.table(fetchedRows);
    setRows(fetchedRows);
    return () => {
      setRows([]);
    };
  }, [responseData, formData]);

  return responseData && formData ? (
    <TableContainer {...props}>
      <Table sx={{ minWidth: 650 }} size="small" padding="none">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="tableHeader">Dimension</Typography>
            </TableCell>
            {Settings.CATEGORY.map((category) => (
              <TableCell align="right" key={category}>
                <Typography variant="tableHeader">{category}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
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
                  align="center"
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${row[key]}${index}`}
                  component="th"
                >
                  {row[key]}
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

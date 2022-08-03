import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Colors from '../../../../helper/Colors';

const createData = (name, calories, fat, carbs, protein) => ({
  name,
  calories,
  fat,
  carbs,
  protein,
});

const rows = [
  createData('Strategy & Policy', 1.3, 1.0, 2.0, 4.0),
  createData('Management & Control', 1.2, 1.4, 1.3, 4.3),
  createData('Organization & Processes', 1.4, 1.0, 1.4, 1.0),
  createData('People & Culture', 1.4, 1.7, 1.5, 1.3),
  createData('Information & Technology', 1.2, 1.0, 4.0, 1.9),
  createData('Average', 1.3, 1.2, 1.5, 1.9),
];

const ReportFooter = ({ ...props }) => {
  console.log('');
  return (
    <Grid sx={{ width: '100%', px: 1 }} {...props}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="tableHeader">Dimension</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="tableHeader">R&D + EPD</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="tableHeader">
                  Supply chain & Fabriek
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="tableHeader">
                  Manufacturing Engineering & Quality
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  '&:last-child td, &:last-child th': {
                    borderTop: `2px solid ${Colors.THEME_MAIN}`,
                    color: `${Colors.THEME_MAIN}`,
                    fontWeight: '600',
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default ReportFooter;

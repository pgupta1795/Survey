import { TableCell } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import circle from '../../../../assets/sections/ellipse-8.svg';

const ScoresCell = ({ score }) => (
  <TableCell align="center" sx={{ p: 2, borderBottomWidth: 0 }}>
    <div className="relative w-full h-full flex items-center justify-center text-black">
      <img className="w-[3.38rem] h-[3.38rem]" alt="circle" src={circle} />
      <span className="absolute inset-0 text-xl top-3">
        {Math.round(score * 10) / 10}
      </span>
    </div>
  </TableCell>
);

ScoresCell.propTypes = {
  score: PropTypes.number.isRequired,
};
export default ScoresCell;

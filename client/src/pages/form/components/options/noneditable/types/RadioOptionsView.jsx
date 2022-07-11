import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import OptionsImageView from '../../../questions/noneditable/OptionsImageView';

const RadioOptionsView = ({ question, ...rest }) => (
  <FormControl>
    <RadioGroup sx={{ pl: 1 }} aria-label="quiz" name="quiz" {...rest}>
      {React.Children.toArray(
        question?.options?.map((op) => (
          <div key={`${op?._id}id1`}>
            <FormControlLabel
              control={<Radio />}
              label={
                <Typography sx={{ color: '#555555' }}>{op?.text}</Typography>
              }
              value={op?.text}
            />
            <OptionsImageView option={op} />
          </div>
        ))
      )}
    </RadioGroup>
  </FormControl>
);

RadioOptionsView.propTypes = {
  question: PropTypes.object.isRequired,
};
export default RadioOptionsView;

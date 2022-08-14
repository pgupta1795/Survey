import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import OptionsImageView from '../../../questions/noneditable/OptionsImageView';

const RadioOptionsView = ({ question, ...rest }) => (
  <FormControl>
    <RadioGroup sx={{ pl: 1 }} aria-label="quiz" name="quiz" {...rest}>
      {React.Children.toArray(
        question?.options?.map((op) => (
          <div key={`${op?._id}id1`}>
            <FormControlLabel
              control={<Radio />}
              label={<Typography variant="answer">{op?.text}</Typography>}
              value={op?.text}
            />
            {question.open ? <OptionsImageView option={op} /> : null}
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

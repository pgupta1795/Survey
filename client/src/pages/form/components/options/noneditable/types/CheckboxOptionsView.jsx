import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import OptionsImageView from '../../../questions/noneditable/OptionsImageView';

const CheckboxOptionsView = ({ question, values, ...rest }) => (
  <FormControl>
    <FormGroup sx={{ pl: 1 }} aria-label="quiz" name="quiz">
      {React.Children.toArray(
        question?.options?.map((op) => (
          <div key={`${op?._id}id1-checkbox`}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={values?.includes(op?.text)}
                  value={op?.text}
                  {...rest}
                />
              }
              label={<Typography variant="answer">{op?.text}</Typography>}
              value={op?.text}
            />
            {question.open ? <OptionsImageView option={op} /> : null}
          </div>
        ))
      )}
    </FormGroup>
  </FormControl>
);

CheckboxOptionsView.defaultProps = {
  values: [],
};

CheckboxOptionsView.propTypes = {
  question: PropTypes.object.isRequired,
  values: PropTypes.any,
};
export default CheckboxOptionsView;

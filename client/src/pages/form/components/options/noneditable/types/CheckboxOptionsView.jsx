import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';
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

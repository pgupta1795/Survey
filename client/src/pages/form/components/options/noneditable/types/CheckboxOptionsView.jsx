import { FormControl, FormHelperText } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import PropTypes from 'prop-types';
import React from 'react';
import OptionsImageView from '../../../questions/noneditable/OptionsImageView';
import { Constants } from '../../../tab';

const CheckboxOptionsView = ({ question, values, ...rest }) => (
  <FormControl className="w-full" error={!values || values.length === 0}>
    <FormGroup
      sx={{ pl: 1, display: 'grid' }}
      className="grid-flow-row sm:grid-cols-2 sm:justify-between sm:gap-x-6 sm:gap-y-2"
    >
      {React.Children.toArray(
        question?.options?.map((op) => (
          <div
            key={`${op?._id}id1-checkbox`}
            className={`my-1 px-2 border border-blue border-solid rounded-10xs min-h-[2.44rem] ${
              values?.includes(op?.text) ? 'bg-aliceblue' : null
            }`}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={values?.includes(op?.text)}
                  value={op?.text}
                  {...rest}
                />
              }
              label={<span className="text-xs">{op?.text}</span>}
              value={op?.text}
            />
            {question.open ? <OptionsImageView option={op} /> : null}
          </div>
        ))
      )}
    </FormGroup>
    <FormHelperText>
      {!values || values.length === 0 ? Constants.FORM_FILL_CHECKBOX : null}
    </FormHelperText>
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

import { FormControl, FormControlLabel, FormHelperText } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import PropTypes from 'prop-types';
import React from 'react';
import OptionsImageView from '../../../questions/noneditable/OptionsImageView';
import { Constants } from '../../../tab';

const RadioOptionsView = ({ question, ...rest }) => (
  <FormControl className="w-full" error={!rest?.value}>
    <RadioGroup
      sx={{ pl: 1, display: 'grid' }}
      {...rest}
      className="grid-flow-row sm:grid-cols-2 sm:justify-between sm:gap-x-6 sm:gap-y-2"
    >
      {React.Children.toArray(
        question?.options?.map((op) => (
          <div
            key={`${op?._id}id1`}
            className={`my-1 px-2 border border-blue border-solid rounded-10xs min-h-[2.44rem] ${
              op?.text === rest?.value ? 'bg-aliceblue' : null
            }`}
          >
            <FormControlLabel
              control={<Radio />}
              label={<span className="text-xs">{op?.text}</span>}
              value={op?.text}
            />
            {question.open ? <OptionsImageView option={op} /> : null}
          </div>
        ))
      )}
    </RadioGroup>
    <FormHelperText>
      {!rest?.value ? Constants.FORM_FILL_RADIO : null}
    </FormHelperText>
  </FormControl>
);

RadioOptionsView.propTypes = {
  question: PropTypes.object.isRequired,
};
export default RadioOptionsView;

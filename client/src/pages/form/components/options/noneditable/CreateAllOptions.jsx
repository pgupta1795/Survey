import React from 'react';
import PropTypes from 'prop-types';
import RadioOptionsView from './types/RadioOptionsView';

const CreateAllOptions = ({ question, ...rest }) => (
  <RadioOptionsView question={question} {...rest} />
);

CreateAllOptions.propTypes = {
  question: PropTypes.object.isRequired,
};
export default CreateAllOptions;

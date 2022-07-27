import React from 'react';
import PropTypes from 'prop-types';
import MultilineTextField from '../../../../../common/components/field/MultilineTextField';

const EmailField = ({ name, ...rest }) => (
  <MultilineTextField
    required
    sx={{ mt: 1, my: 0 }}
    variant="standard"
    placeholder=""
    label={name}
    name={name}
    id={name}
    {...rest}
  />
);

EmailField.propTypes = {
  name: PropTypes.string.isRequired,
};

export default EmailField;

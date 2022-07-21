import React from 'react';
import PropTypes from 'prop-types';
import EditableImageView from '../questions/editable/EditableImageView';
import UploadImage from '../questions/commands/UploadImage';
import RemoveOption from '../questions/commands/RemoveOption';

const BasicOption = ({ children, ...rest }) => {
  const { questionIndex, option, optionIndex, type } = rest;
  return (
    <div key={`${option?._id}${type}`}>
      <div className="edit-form-option">
        {children}
        <UploadImage questionIndex={questionIndex} optionIndex={optionIndex} />
        <RemoveOption questionIndex={questionIndex} optionIndex={optionIndex} />
      </div>
      <EditableImageView
        questionIndex={questionIndex}
        optionIndex={optionIndex}
        option={option}
      />
    </div>
  );
};

BasicOption.defaultProps = {
  type: null,
};

BasicOption.propTypes = {
  children: PropTypes.any.isRequired,
  questionIndex: PropTypes.number.isRequired,
  option: PropTypes.any.isRequired,
  optionIndex: PropTypes.number.isRequired,
  type: PropTypes.string,
};
export default BasicOption;

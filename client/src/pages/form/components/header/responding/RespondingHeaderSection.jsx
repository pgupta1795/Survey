import PropTypes from 'prop-types';
import React from 'react';

const RespondingHeaderSection = ({ name, description }) => (
  <div className="w-full flex flex-col py-2 mx-4 items-start gap-3">
    <span className="text-xl">{name}</span>
    <span className="text-sm font-medium">{description}</span>
  </div>
);

RespondingHeaderSection.defaultProps = {
  name: null,
  description: null,
};

RespondingHeaderSection.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};
export default RespondingHeaderSection;

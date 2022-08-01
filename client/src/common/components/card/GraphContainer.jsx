import React from 'react';
import PropTypes from 'prop-types';
import GradientBox from '../../styles/StyledBox';

const GraphContainer = ({ colors, children, height, ...props }) => (
  <GradientBox
    colors={colors}
    sx={{
      padding: '10px',
      minHeight: height,
      mb: 1,
    }}
    {...props}
  >
    {children}
  </GradientBox>
);

GraphContainer.defaultProps = {
  height: '25vh',
};

GraphContainer.propTypes = {
  colors: PropTypes.array.isRequired,
  children: PropTypes.any.isRequired,
  height: PropTypes.string,
};
export default GraphContainer;

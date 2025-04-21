import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';

function Container({ children, size = 'md', style = {} }) {
  return (
    <div
      className={`container container__${size}`}
      style={{ ...style }}
    >
      {
        children && children
      }
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  style: PropTypes.object,
};

export default Container;

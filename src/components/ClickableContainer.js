import React from 'react';
import PropTypes from 'prop-types';

/**
 * Accessible generic container component that responds to click events
 * */
export default function ClickableContainer({ onClick, tag: Tag, ...props }) {
  const onKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(e);
    }
  };

  return <Tag tabIndex={0} onClick={onClick} onKeyPress={onKeyPress} role="button" {...props} />;
}

ClickableContainer.propTypes = {
  onClick: PropTypes.func.isRequired,
  tag: PropTypes.oneOf([PropTypes.string, PropTypes.func])
};

ClickableContainer.defaultProps = {
  tag: 'div'
};

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Accessible generic container component that responds to click events
 * */
export default function ClickableContainer({ className, onClick, tag: Tag, ...props }) {
  const onKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <>
      <Tag
        tabIndex={0}
        onClick={onClick}
        onKeyPress={onKeyPress}
        role="button"
        {...props}
        className={classnames('rg-ClickableContainer', className)}
      />
      <style jsx>{`
        .rg-ClickableContainer:focus {
          outline: thin dotted;
        }
      `}
      </style>
    </>
  );
}

ClickableContainer.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

ClickableContainer.defaultProps = {
  tag: 'div'
};

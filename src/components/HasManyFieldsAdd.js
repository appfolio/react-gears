import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

import Icon from './Icon';

const HasManyFieldsAdd = ({ children, className, ...props }) => {
  const classes = classNames('text-success', className);

  return (
    <Button color="link" block {...props} className={classes}>
      <Icon name="plus-circle" className="mr-2" />
      <span>
        {children}
      </span>
    </Button>
  );
};

HasManyFieldsAdd.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool
};

export default HasManyFieldsAdd;

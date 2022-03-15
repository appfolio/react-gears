import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

import Icon from './Icon';

const HasManyFieldsAdd = ({ children, className, ...props }) => {
  const classes = classNames('border-0', className);

  return (
    <Button color="success" block outline {...props} className={classes}>
      <Icon name="plus-circle" className="me-2" />
      <span>{children}</span>
    </Button>
  );
};

HasManyFieldsAdd.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

HasManyFieldsAdd.displayName = 'HasManyFieldsAdd';

export default HasManyFieldsAdd;

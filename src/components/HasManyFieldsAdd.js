import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'reactstrap';

import Icon from './Icon';

const HasManyFieldsAdd = ({ children, className, ...props }) => {
  const classes = classNames('w-100', className);

  return (
    <Button color="success" {...props} className={classes}>
      <Icon name="plus-circle" className="mr-2" />
      <span children={children} />
    </Button>
  );
};

HasManyFieldsAdd.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool
};

export default HasManyFieldsAdd;

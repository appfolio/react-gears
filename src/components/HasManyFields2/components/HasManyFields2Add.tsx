import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { ReactChild } from 'react';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';

export interface HasManyFields2AddProps {
  children: ReactChild[] | ReactChild;
  className?: string;
  disabled: boolean | 0 | undefined;
  onClick: (...args: any[]) => any;
  visible?: boolean;
}

const HasManyFields2Add = ({ children, className, visible, disabled, ...props }: HasManyFields2AddProps) => {
  const classes = classNames('border-0', className);

  return (
        visible ?
          <Button color="success" block outline disabled={Boolean(disabled)} {...props} className={classes}>
            <Icon name="plus-circle" className="me-2" />
            <span>{children}</span>
          </Button> : null
      );
};

HasManyFields2Add.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

HasManyFields2Add.displayName = 'HasManyFields2Add';

export default HasManyFields2Add;

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Badge from './Badge';
import Icon from './Icon';

export default class SelectMultiValue extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    instancePrefix: PropTypes.any,
    disabled: PropTypes.bool,
    onRemove: PropTypes.func,
    value: PropTypes.object
  };

  static defaultProps = {
    className: ''
  }

  render() {
    const {
      id,
      children,
      className,
      disabled,
      instancePrefix, // excludes from Badge {....props}
      value,
      onRemove,
      ...props
    } = this.props;
    const classNames = classnames(
      'ml-1',
      className
    );

    return (
      <Badge
        className={classNames}
        id={id}
        style={{ textTransform: 'none' }}
        {...props}
      >
        {children} <Icon role="button" name="times" onClick={() => { if (!disabled) onRemove(value); }} />
      </Badge>
    );
  }
}

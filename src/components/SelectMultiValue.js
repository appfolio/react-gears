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
      'ms-1',
      'font-weight-normal',
      'border',
      'd-inline-flex',
      'align-items-center',
      'text-start',
      className
    );

    return (
      <Badge
        className={classNames}
        color="light"
        id={id}
        style={{ textTransform: 'none', whiteSpace: 'normal' }}
        {...props}
      >
        {children} <Icon className="ms-1" style={{ opacity: 0.5 }} role="button" name="times" onClick={() => { if (!disabled) onRemove(value); }} />
      </Badge>
    );
  }
}

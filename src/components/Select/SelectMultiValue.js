import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Badge from '../Badge/Badge';
import Icon from '../Icon/Icon';

export default class SelectMultiValue extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    instancePrefix: PropTypes.any,
    disabled: PropTypes.bool,
    onRemove: PropTypes.func,
    value: PropTypes.object,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    /* eslint-disable  @typescript-eslint/no-unused-vars -- Let's figure out a better way to omit props for this scenario */
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
    /* eslint-enable  @typescript-eslint/no-unused-vars */
    const classNames = classnames(
      'ms-1',
      'fw-normal',
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
        {children}{' '}
        <Icon
          className="ms-1"
          style={{ opacity: 0.5 }}
          role="button"
          name="xmark"
          onClick={() => {
            if (!disabled) {
              onRemove(value);
            }
          }}
        />
      </Badge>
    );
  }
}

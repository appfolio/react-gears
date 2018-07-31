import PropTypes from 'prop-types';
import React from 'react';
import Icon from './Icon';
import styles from './InfoBox.scss';

export default class InfoBox extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node,
    icon: PropTypes.string,
    title: PropTypes.string,
    vertical: PropTypes.bool
  };

  static defaultProps = {
    className: '',
    color: 'info',
    vertical: false
  };

  render() {
    const { className, color, icon, title, children, vertical, ...props } = this.props;

    const headerClasses = `text-${color} font-weight-normal d-flex justify-content-between m-0 mb-3`;

    return (
      <div className={`${styles.infobox} bg-white border-${color} border-${vertical ? 'top' : 'left'} p-3 ${className}`} {...props}>
        {title &&
          <h1 className={headerClasses}>
            {title}
            {icon ? <Icon name={icon} /> : null}
          </h1>
        }
        <div className="infobox__body">
          {children}
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Alert } from '../';
import styles from './FeatureBanner.scss';

export default class FeatureBanner extends Component {
  static propTypes = {
    alertText: React.PropTypes.string,
    children: React.PropTypes.array,
    subtitle: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
  };

  static defaultProps = {
    alertText: 'new',
  };

  render() {
    const { alertText, title, subtitle, children } = this.props;
    const alertStyle = `${styles.alert} font-weight-bold text-uppercase`;

    return (
      <Alert color="info" className="align-items-center d-flex flex-wrap">
        <span className={`${alertStyle} pr-3 hidden-sm-down`}>
          {alertText}
        </span>
        <div className={`${styles.body} d-flex align-items-around justify-content-start mr-auto`}>
          <div className={styles.info}>
            <p className="d-inline-block font-weight-bold m-0">
              <span className={`${alertStyle} hidden-md-up mr-1`}>{alertText}</span>
              <span className="js-title">{title}</span>
            </p>
            <p className="m-0 js-subtitle">{subtitle}</p>
          </div>
        </div>
        <div className="d-flex js-children">
          {children}
        </div>
      </Alert>
    );
  }
}

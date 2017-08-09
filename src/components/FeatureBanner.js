import PropTypes from 'prop-types';
import React from 'react';
import { Alert } from 'reactstrap';
import styles from './FeatureBanner.scss';

export default class FeatureBanner extends React.Component {
  static propTypes = {
    alertText: PropTypes.string,
    children: PropTypes.node,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    alertText: 'new',
  };

  render() {
    const { alertText, title, subtitle, children } = this.props;
    const alertStyle = 'font-weight-bold text-uppercase';

    return (
      <Alert color="info" className="align-items-center d-flex p-0">
        {alertText ?
          <h2 ref="alertText" className={`${alertStyle} text-center m-0 px-3 hidden-xs-down`}>
            {alertText}
          </h2> : null}
        <div className={`${styles.body} d-flex flex-wrap p-3 w-100`}>
          <div className={`${styles.info} mr-auto`}>
            <div className="d-inline-block m-0">
              {alertText ? <h2 className={`${alertStyle} d-inline hidden-sm-up mr-2`}>{alertText}</h2> : null}
              <h3 ref="title" className="d-inline">{title}</h3>
            </div>
            <p ref="subtitle" className="m-0">{subtitle}</p>
          </div>
          <div ref="children" className="d-inline-block my-auto">
            {children}
          </div>
        </div>
      </Alert>
    );
  }
}

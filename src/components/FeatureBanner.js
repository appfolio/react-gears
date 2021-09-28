import PropTypes from 'prop-types';
import React from 'react';
import { Alert } from 'reactstrap';

export default class FeatureBanner extends React.Component {
  static propTypes = {
    alertText: PropTypes.string,
    children: PropTypes.node,
    color: PropTypes.string,
    subtitle: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    alertText: 'new',
    color: 'info'
  };

  render() {
    const { alertText, color, title, subtitle, children } = this.props;
    const alertStyle = 'fw-bold text-uppercase';

    return (
      <Alert color={color} className="align-items-center d-flex p-0" fade={false}>
        {alertText ?
          <h2 className={`${alertStyle} text-center m-0 px-3 d-none d-sm-block`}>
            {alertText}
          </h2> : null}
        <div className="body d-flex flex-wrap p-3 w-100">
          <div className="info me-auto">
            <div className="d-inline-block m-0">
              {alertText ? <h2 className={`${alertStyle} d-inline d-sm-none me-2`}>{alertText}</h2> : null}
              <h3 className="d-inline">{title}</h3>
            </div>
            <p className="m-0">{subtitle}</p>
          </div>
          <div className="d-inline-block my-auto">
            {children}
          </div>
        </div>
        <style jsx>
          {`
            .body {
              flex-direction: row;
            }

            .body @media (min-width: 576px) {
              border-start: 1px solid rgba(0, 0, 0, 0.1);
            }

            .info {
              flex: 1 1 auto;
            }
          `}
        </style>
      </Alert>
    );
  }
}

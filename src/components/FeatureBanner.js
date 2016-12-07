import React, { Component } from 'react';

import styles from './FeatureBanner.scss';

/**
 * A banner shown at the top of the page giving details about a newly added feature
 */
export default class FeatureBanner extends Component {
  static DEFAULT_PROPS = {
    alertText: 'New',
    subtitle: 'Let us know what you think about this feature',
  }

  static propTypes = {
    alertText: React.PropTypes.string,
    children: React.PropTypes.node,
    subtitle: React.PropTypes.string,
    subtitleClass: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
  }

  render() {
    const {
      alertText,
      children,
      title,
      subtitle,
      subtitleClass,
    } = Object.assign({}, FeatureBanner.DEFAULTS, this.props);

    return (
      <div className={styles.featureBanner}>
        <h1 className="feature-banner__tag u-small-hidden">{alertText}</h1>

        <div className="feature-banner__body">
          <div className="feature-banner__info">
            <h1 className="feature-banner__tag u-medium-hidden u-large-hidden">{alertText}</h1>
            <h2 className="feature-banner__title">{title}</h2>
            <p className={`feature-banner__subtitle ${subtitleClass}`}>{subtitle}</p>
          </div>

          <div className="feature-banner__buttons">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

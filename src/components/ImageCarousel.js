/* eslint-disable react/default-props-match-prop-types */
// Enable the above rule when the following is addressed https://github.com/yannickcr/eslint-plugin-react/issues/1674

import React from 'react';
import classnames from 'classnames';
import Icon from './Icon';
import Modal from './Modal';
import UncontrolledCarousel from './UncontrolledCarousel';
import styles from './ImageCarousel.scss';

export default class ImageCarousel extends React.Component {
  static propTypes = {
    ...UncontrolledCarousel.propTypes,
    ...Modal.propTypes
  };

  static defaultProps = {
    autoPlay: false,
    backdrop: true,
    fade: false,
    items: [],
    toggle: () => {}
  };

  handleEscape(e) {
    if (e.key === 'Escape') {
      this.props.toggle();
    }
  }

  componentDidMount() {
    document.addEventListener('keyup', e => this.handleEscape(e));
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', e => this.handleEscape(e));
  }

  render() {
    const { autoPlay, controls, items, indicators, interval, toggle, ...props } = this.props;

    // TODO temp - remove need for style tag below:
    return (
      <Modal
        external={
          <div className="h-100">
            <Icon
              name="times"
              size="2x"
              className="text-white"
              style={{ position: 'fixed', top: '2rem', right: '2rem', zIndex: 15000 }}
              onClick={toggle}
            />
            <UncontrolledCarousel
              className={classnames('d-flex align-items-center h-100', styles.carousel)}
              items={items}
              indicators={indicators}
              interval={autoPlay ? interval : 0}
              controls={controls}
              autoPlay={autoPlay}
            />
          </div>
        }
        {...props}
      />
    );
  }
}

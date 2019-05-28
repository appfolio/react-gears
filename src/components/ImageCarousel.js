/* eslint-disable react/default-props-match-prop-types */
// Enable the above rule when the following is addressed https://github.com/yannickcr/eslint-plugin-react/issues/1674

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from './Icon';
import Modal from './Modal';
import UncontrolledCarousel from './UncontrolledCarousel';
import styles from './ImageCarousel.scss';

export default class ImageCarousel extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    indicators: PropTypes.bool,
    controls: PropTypes.bool,
    autoPlay: PropTypes.bool,
    defaultActiveIndex: PropTypes.number,
    activeIndex: PropTypes.number,
    next: PropTypes.func,
    previous: PropTypes.func,
    goToIndex: PropTypes.func,
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
    const { next, previous, goToIndex, defaultActiveIndex, activeIndex, autoPlay, controls, items, indicators, interval, toggle, ...props } = this.props;

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
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              goToIndex={goToIndex}
              defaultActiveIndex={defaultActiveIndex}
            />
          </div>
        }
        {...props}
      />
    );
  }
}

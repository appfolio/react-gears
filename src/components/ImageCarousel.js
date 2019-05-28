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
    ...Modal.propTypes
  };

  static defaultProps = {
    autoPlay: false,
    backdrop: true,
    fade: false,
    items: [],
    toggle: () => {}
  };

  constructor(props) {
    super(props);
    this.carousel = React.createRef();
  }

  handleEscape(e) {
    if (e.key === 'Escape') {
      this.props.toggle();
    }
  }

  componentDidMount() {
    document.addEventListener('keyup', e => this.handleEscape(e));
    const index = this.props.index;
    if (index >= 0 && index < this.props.items.length) {
      this.carousel.current.goToIndex(index);
    }
  }

  componentDidUpdate(prevProps) {
    const index = this.props.index;
    if (index !== prevProps.index && index >= 0 && index < this.props.items.length) {
      this.carousel.current.goToIndex(index);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', e => this.handleEscape(e));
  }

  render() {
    const { defaultActiveIndex, autoPlay, controls, items, indicators, interval, toggle, ...props } = this.props;

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
              defaultActiveIndex={defaultActiveIndex}
              ref={this.carousel}
            />
          </div>
        }
        {...props}
      />
    );
  }
}

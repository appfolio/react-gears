/* eslint-disable react/default-props-match-prop-types */
// Enable the above rule when the following is addressed https://github.com/yannickcr/eslint-plugin-react/issues/1674

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Icon/Icon';
import Modal from '../Modal/Modal';
import UncontrolledCarousel from './UncontrolledCarousel';

export default class ImageCarousel extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    indicators: PropTypes.bool,
    controls: PropTypes.bool,
    autoPlay: PropTypes.bool,
    defaultActiveIndex: PropTypes.number,
    activeIndex: PropTypes.number,
    slide: PropTypes.bool,
    ...Modal.propTypes,
  };

  static defaultProps = {
    autoPlay: false,
    backdrop: true,
    fade: false,
    items: [],
    slide: false,
    toggle: () => {},
  };

  constructor(props) {
    super(props);
    this.carousel = React.createRef();
  }

  goToIndex(index) {
    if (index >= 0 && index < this.props.items.length && this.carousel && this.carousel.current) {
      this.carousel.current.goToIndex(index);
    }
  }

  handleEscape = (e) => {
    if (e.key === 'Escape') {
      this.props.toggle();
    }
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleEscape);
  }

  componentDidUpdate(prevProps) {
    const { index, isOpen } = this.props;
    if (index !== prevProps.index || (isOpen && isOpen !== prevProps.isOpen)) {
      this.goToIndex(index);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleEscape);
  }

  render() {
    /* eslint-disable  @typescript-eslint/no-unused-vars -- Let's figure out a better way to omit props for this scenario */
    const {
      defaultActiveIndex,
      autoPlay,
      controls,
      index,
      items,
      indicators,
      interval,
      slide,
      toggle,
      ...props
    } = this.props;
    /* eslint-enable  @typescript-eslint/no-unused-vars */

    return (
      <Modal
        external={
          <div className="h-100">
            <Icon
              name="xmark"
              size="2x"
              className="text-white"
              style={{ position: 'fixed', top: '2rem', right: '2rem', zIndex: 15000 }}
              onClick={toggle}
            />
            <UncontrolledCarousel
              autoPlay={autoPlay}
              className={classnames('d-flex align-items-center h-100', 'carousel')}
              controls={controls}
              indicators={indicators}
              interval={autoPlay ? interval : 0}
              items={items}
              ref={this.carousel}
              slide={slide}
              defaultActiveIndex={index}
            />
            <style jsx global>
              {`
                .carousel img {
                  display: inline-block !important;
                  max-height: 100vh;
                  max-width: 100vw;
                  width: auto !important;
                }
                .carousel .carousel-item {
                  text-align: center !important;
                }
              `}
            </style>
          </div>
        }
        {...props}
      />
    );
  }
}

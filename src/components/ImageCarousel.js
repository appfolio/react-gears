import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import Modal from './Modal';
import UncontrolledCarousel from './UncontrolledCarousel';

export default class ImageCarousel extends React.Component {
  static propTypes = {
    autoplay: PropTypes.bool,
    backdrop: PropTypes.bool,
    controls: PropTypes.bool,
    fade: PropTypes.bool,
    items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    indicators: PropTypes.bool,
    isOpen: PropTypes.bool
  };

  static defaultProps = {
    autoplay: false,
    backdrop: true,
    controls: true,
    fade: false,
    items: [],
    indicators: true,
    isOpen: false
  };

  state = {
    isOpen: this.props.isOpen
  };

  handleEscape(e) {
    if (e.keyCode === 27) {
      this.setState({
        isOpen: false
      });
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    document.addEventListener('keyup', e => this.handleEscape(e));
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', e => this.handleEscape(e));
  }

  render() {
    const { autoplay, backdrop, controls, fade, items, indicators, ...props } = this.props;

    // TODO temp - remove need for style tag below:
    return (
      <Modal
        backdrop={backdrop}
        isOpen={this.state.isOpen}
        fade={fade}
        keyboard
        toggle={() => this.toggle}
        external={
          <div className="h-100">
            <Icon
              name="times"
              size="2x"
              className="text-white"
              style={{ position: 'fixed', top: '2rem', right: '2rem', zIndex: 15000 }}
              onClick={() => this.toggle()}
            />
            <UncontrolledCarousel
              className="d-flex align-items-center h-100"
              items={items}
              indicators={indicators}
              controls={controls}
              autoplay={autoplay}
            />
          </div>
        }
        {...props}
      />
    );
  }
}

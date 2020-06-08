import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Resize from 'react-resize-detector';

export default class ScrollContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    theme: PropTypes.shape({
      overflowTop: PropTypes.string,
      overflowBottom: PropTypes.string,
      overflowLeft: PropTypes.string,
      overflowRight: PropTypes.string
    })
  }

  static defaultProps = {
    theme: {
      overflowTop: 'overflow-top',
      overflowBottom: 'overflow-bottom',
      overflowLeft: 'overflow-left',
      overflowRight: 'overflow-right'
    }
  }

  state = {
    overflowTop: false,
    overflowBottom: false,
    overflowLeft: false,
    overflowRight: false
  }

  container = React.createRef();

  detectOverflow() {
    const {
      clientHeight,
      clientWidth,
      scrollHeight,
      scrollLeft,
      scrollTop,
      scrollWidth
    } = this.container.current;
    this.setState({
      overflowTop: scrollTop > 0,
      overflowBottom: scrollHeight - scrollTop > clientHeight,
      overflowLeft: scrollLeft > 0,
      overflowRight: scrollWidth - scrollLeft > clientWidth
    });
  }

  componentDidMount() {
    this.detectOverflow();
  }

  render() {
    const { children, className, height, theme, ...props } = this.props;
    const { overflowTop, overflowBottom, overflowLeft, overflowRight } = this.state;
    const classNames = classnames(className, 'scroll-container', 'position-relative', {
      [theme.overflowTop]: overflowTop,
      [theme.overflowBottom]: overflowBottom,
      [theme.overflowLeft]: overflowLeft,
      [theme.overflowRight]: overflowRight
    });

    return (
      <div
        className={classNames}
        {...props}
      >
        <div
          ref={this.container}
          style={{
            maxHeight: height,
            overflow: 'auto'
          }}
          onScroll={e => this.detectOverflow(e.target)}
        >
          {children}
        </div>
        <Resize handleWidth handleHeight onResize={() => this.detectOverflow()} className="d-none" />
        <div className='container-shadow' />
        <style jsx>
          {`
            .scroll-container .container-shadow {
              box-shadow: none;
              content: "";
              display: block;
              top: 0px;
              left: 0px;
              bottom: 0px;
              right: 0px;
              pointer-events: none;
              position: absolute;
              z-index: 990;
            }
            .scroll-container.overflow-right .container-shadow {
              box-shadow: -8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
            }
            .scroll-container.overflow-left .container-shadow {
              box-shadow: 8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
            }
            .scroll-container.overflow-left.overflow-right .container-shadow {
              box-shadow: 8px 0 8px -8px rgba(0, 0, 0, 0.25) inset, -8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
            }
            .scroll-container.overflow-bottom .container-shadow {
              box-shadow: 0 -8px 8px -8px rgba(0, 0, 0, 0.25) inset;
            }
            .scroll-container.overflow-bottom.overflow-right .container-shadow {
              box-shadow: 0 -8px 8px -8px rgba(0, 0, 0, 0.25) inset, -8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
            }
            .scroll-container.overflow-bottom.overflow-left .container-shadow {
              box-shadow: 0 -8px 8px -8px rgba(0, 0, 0, 0.25) inset, 8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
            }
            .scroll-container.overflow-bottom.overflow-left.overflow-right .container-shadow {
              box-shadow: 0 -8px 8px -8px rgba(0, 0, 0, 0.25) inset, 8px 0 8px -8px rgba(0, 0, 0, 0.25) inset, -8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
            }
            .scroll-container.overflow-top .container-shadow {
              box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.25) inset;
            }
            .scroll-container.overflow-top.overflow-right .container-shadow {
              box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.25) inset, -8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
            }
            .scroll-container.overflow-top.overflow-left .container-shadow {
              box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.25) inset, 8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
            }
            .scroll-container.overflow-top.overflow-left.overflow-right .container-shadow {
              box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.25) inset, 8px 0 8px -8px rgba(0, 0, 0, 0.25) inset, -8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
            }
            .scroll-container.overflow-top.overflow-bottom .container-shadow {
              box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.25) inset, 0 -8px 8px -8px rgba(0, 0, 0, 0.25) inset;
            }
            .scroll-container.overflow-top.overflow-bottom.overflow-right .container-shadow {
              box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.25) inset, -8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
            }
            .scroll-container.overflow-top.overflow-bottom.overflow-left .container-shadow {
              box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.25) inset, 0 -8px 8px -8px rgba(0, 0, 0, 0.25) inset, 8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
            }
            .scroll-container.overflow-top.overflow-bottom.overflow-left.overflow-right .container-shadow {
              box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.25) inset, 8px 0 8px -8px rgba(0, 0, 0, 0.25) inset, -8px 0 8px -8px rgba(0, 0, 0, 0.25) inset, 0 -8px 8px -8px rgba(0, 0, 0, 0.25) inset;
            }
          `}
        </style>
      </div>
    );
  }
}

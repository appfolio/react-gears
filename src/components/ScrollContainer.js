import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Resize from 'react-resize-detector';
import styles from './ScrollContainer.scss';

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
      overflowTop: styles.overflowTop,
      overflowBottom: styles.overflowBottom,
      overflowLeft: styles.overflowLeft,
      overflowRight: styles.overflowRight
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
    const classNames = classnames(className, 'position-relative', {
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
        <div className={styles.shadow} />
      </div>
    );
  }
}

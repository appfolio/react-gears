import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class CollapsableText extends React.Component {
  static propTypes = {
    children: PropTypes.string,
    collapsed: PropTypes.bool,
    lessLabel: PropTypes.node,
    maxLength: PropTypes.number,
    moreLabel: PropTypes.node
  };

  static defaultProps = {
    children: '',
    collapsed: true,
    lessLabel: 'Show Less',
    maxLength: 256,
    moreLabel: 'Show More'
  };

  state = {
    collapsed: this.props.collapsed
  };

  toggle = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  renderButton(buttonText) {
    return (
      <Button
        color="link"
        size="sm"
        onClick={() => this.toggle()}
        className="p-0 m-0 ml-2"
      >
        {buttonText}
      </Button>
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.collapsed !== this.props.collapsed) {
      this.setState({ collapsed: nextProps.collapsed });
    }
  }

  render() {
    const { children, maxLength, lessLabel, moreLabel } = this.props;

    if (children.length < maxLength) {
      return children;
    } else if (this.state.collapsed) {
      return (
        <span>
          {children.substring(0, maxLength).trim()}&hellip; {this.renderButton(moreLabel)}
        </span>
      );
    }

    return (
      <span>
        {children} {this.renderButton(lessLabel)}
      </span>
    );
  }
}

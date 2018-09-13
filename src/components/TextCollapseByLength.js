import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class TextCollapseByLength extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    showMore: PropTypes.string,
    showLess: PropTypes.string,
    collapsedByDefault: PropTypes.bool
  };

  static defaultProps = {
    maxLength: 256,
    showMore: 'Show More',
    showLess: 'Show Less',
    collapsedByDefault: true
  };

  constructor(props) {
    super(props);

    this.state = {
      shouldShowAll: !this.props.collapsedByDefault,
    };
  }

  expandText = () => {
    this.setState({ shouldShowAll: true });
  };

  collapseText = () => {
    this.setState({ shouldShowAll: false });
  };

  renderButton(callback, buttonText) {
    return <Button color="link" size="sm" onClick={callback} className="p-0 m-0">{buttonText}</Button>;
  }

  render() {
    const { text, maxLength, showLess, showMore } = this.props;

    if (text.length < maxLength) {
      return <span>text</span>;
    } else if (this.state.shouldShowAll) {
      return <span>
        {text} {this.renderButton(this.collapseText, showLess)}
      </span>;
    } else {
      return <span>
        {text.substring(0, maxLength)}... {this.renderButton(this.expandText, showMore)}
      </span>;
    }
  }
}

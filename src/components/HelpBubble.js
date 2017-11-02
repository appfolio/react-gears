import PropTypes from 'prop-types';
import React from 'react';
import Icon from './Icon';
import Popover from './Popover';
import PopoverTitle from './PopoverTitle';
import PopoverContent from './PopoverContent';

let count = 0;

function getID() {
  return `help-bubble-${count++}`;
}

const style = {
  cursor: 'pointer'
};

class HelpBubble extends React.Component {
  constructor(props) {
    super(props);

    this.id = getID();

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  close = () => {
    setTimeout(() => {
      this.setState({ isOpen: false });
    });
  };

  render() {
    const { title, children, className, ...other } = this.props;

    return (
      <span className={className} style={style}>
        <Icon
          name="question-circle"
          onClick={this.toggle}
          id={this.id}
          className="text-primary"
        />
        <Popover
          isOpen={this.state.isOpen}
          toggle={this.close}
          target={this.id}
          {...other}
        >
          <PopoverTitle children={title} />
          <PopoverContent children={children} />
        </Popover>
      </span>
    );
  }
}

HelpBubble.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.any
};

export default HelpBubble;

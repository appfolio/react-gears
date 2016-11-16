import React from 'react';
import { Icon } from '../';
import { Popover, PopoverTitle, PopoverContent } from 'reactstrap';

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
  }

  render() {
    const {
      title,
      children,
      className,
      ...other
    } = this.props;

    return (
      <span className={className} style={style}>
        <Icon name="question-circle" onClick={this.toggle} id={this.id} />
        <Popover isOpen={this.state.isOpen} toggle={this.toggle} target={this.id} {...other}>
          <PopoverTitle children={title} />
          <PopoverContent children={children} />
        </Popover>
      </span>
    );
  }
}

HelpBubble.propTypes = {
  title: React.PropTypes.string.isRequired,
  className: React.PropTypes.any
};

export default HelpBubble;

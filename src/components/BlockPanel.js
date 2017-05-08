import React, { Component } from 'react';
import { Button, Card, CardBlock, CardHeader, CardTitle, Icon } from '../';

class BlockPanel extends Component {

  static propTypes = {
    children: React.PropTypes.node,
    controls: React.PropTypes.node,
    className: React.PropTypes.string,
    expandable: React.PropTypes.bool,
    onEdit: React.PropTypes.func,
    title: React.PropTypes.string.isRequired
  };

  static defaultProps = {
    className: '',
    open: true,
    expandable: false
  };

  constructor(props) {
    super(props);

    this.state = {
      open: props.open
    };
  }

  toggle = () => this.setState({ open: !this.state.open });

  render() {
    const { children, className, controls, expandable, title, onEdit, ...props } = this.props;
    const { open } = this.state;

    return (
      <Card className={`rounded-0 border-0 shadow-1 ${className}`} {...props}>
        <CardHeader
          className={`border-0 d-flex align-items-center justify-content-end py-2 ${expandable ? 'pl-2' : ''}`}
          style={{ borderRadius: 0 }}
        >
          {expandable ?
            <Icon
              className="text-muted mr-1"
              name="caret-right"
              rotate={open ? 90 : undefined}
              fixedWidth
              style={{ transition: 'transform 200ms ease-in-out' }}
              onClick={this.toggle}
              ref="icon"
              style={{ cursor: expandable ? 'pointer' : 'default' }}
            /> : null}
          <CardTitle
            className="m-0 my-1 mr-auto"
            onClick={this.toggle}
            ref="title"
            style={{ cursor: expandable ? 'pointer' : 'default' }}
          >
            {title}
          </CardTitle>
          {onEdit ? <Button color="link" className="p-0" onClick={onEdit}>edit</Button> : controls}
        </CardHeader>
        {!expandable || open ?
          <CardBlock>
            {children}
          </CardBlock>
          : null}
      </Card>
    );
  }
}

export default BlockPanel;

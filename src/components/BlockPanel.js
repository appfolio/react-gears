import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { Button, Card, CardBlock, CardHeader, CardTitle, Icon } from '../';

class BlockPanel extends Component {

  static propTypes = {
    children: PropTypes.node,
    controls: PropTypes.node,
    className: PropTypes.string,
    expandable: PropTypes.bool,
    hideOnToggle: PropTypes.bool,
    onEdit: PropTypes.func,
    onToggle: PropTypes.func,
    open: PropTypes.bool,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
  };

  static defaultProps = {
    className: '',
    open: true,
    expandable: false,
    hideOnToggle: false,
    onToggle: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      open: props.open
    };
  }

  toggle = () => {
    const open = !this.state.open;
    this.setState({ open });
    this.props.onToggle(open);
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { children, className, controls, expandable, hideOnToggle, title, onEdit, onToggle, ...props } = this.props;
    const { open } = this.state;

    const headerClassNames = classnames(
      'border-0',
      'd-flex',
      'flex-wrap',
      'align-items-center',
      'justify-content-between',
      'py-2',
      'pr-2',
      { 'pl-2': expandable }
    );

    return (
      <Card className={`rounded-0 border-0 shadow-1 ${className}`} {...props}>
        <CardHeader
          className={headerClassNames}
          style={{ borderRadius: 0 }}
        >
          <div
            className="d-inline-flex align-items-center"
            onClick={this.toggle}
            ref="title"
            style={{ cursor: expandable ? 'pointer' : 'default' }}
          >
            {expandable ?
              <Icon
                className="text-muted mr-1"
                name="caret-right"
                rotate={open ? 90 : undefined}
                fixedWidth
                style={{ transition: 'transform 200ms ease-in-out' }}
              /> : null}
            <CardTitle className="m-0 my-1 mr-auto">
              {title}
            </CardTitle>
          </div>
          <div className="d-inline-flex blockpanel-controls">
            {controls && controls}
            {onEdit && <Button color="link" className="p-0 ml-2 mr-1" ref="edit" onClick={onEdit}>edit</Button>}
          </div>
        </CardHeader>
        {!expandable || open || hideOnToggle ?
          <CardBlock hidden={expandable && !open && hideOnToggle}>
            {children}
          </CardBlock>
          : null}
      </Card>
    );
  }
}

export default BlockPanel;

import React from 'react';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  Icon,
  Button,
} from '..';

export default class LabelBadge extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    label: React.PropTypes.string,
    maxWidth: React.PropTypes.number,
    onRemove: React.PropTypes.func,
    removable: React.PropTypes.bool,
    value: React.PropTypes.string.isRequired
  }

  static defaultProps = {
    removable: true,
    maxWidth: 14
  };

  render() {
    const { className, label, maxWidth, onRemove, removable, value } = this.props;
    const style = { display: 'block' };  // to make truncation work.
    if (maxWidth !== undefined) {
      // this shouldn't be hardcoded to rem. Leave up to user to define units.
      style.maxWidth = `${maxWidth}rem`;
    }

    return (
      <InputGroup className={className}>
        {label && <InputGroupAddon>{label}</InputGroupAddon>}
        <div className="form-control text-truncate label-badge-value" style={style}>{value}</div>
        {removable && <InputGroupButton>
          <Button onClick={onRemove}><Icon name="remove" /></Button>
        </InputGroupButton>}
      </InputGroup>
    );
  }
}


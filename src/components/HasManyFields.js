import noop from 'lodash.noop';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import asUncontrolled from '../asUncontrolled';
import HasManyFieldsAdd from './HasManyFieldsAdd';
import HasManyFieldsRow from './HasManyFieldsRow';

class HasManyFields extends React.Component {
  static propTypes = {
    blank: PropTypes.any,
    defaultValue: PropTypes.array,
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onAdd: PropTypes.func,
    onRemove: PropTypes.func,
    onUpdate: PropTypes.func,
    onChange: PropTypes.func,
    template: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
      .isRequired,
    value: PropTypes.array
  };

  static defaultProps = {
    defaultValue: [],
    onAdd: noop,
    onRemove: noop,
    onUpdate: noop,
    onChange: noop
  };

  constructor(props) {
    super(props);
    this.rowRefs = [];
  }

  updateItem = i => update => {
    const { onChange, onUpdate, value } = this.props;
    onUpdate(i, update);
    onChange([...value.slice(0, i), update, ...value.slice(i + 1)]);
  };

  addItem = () => {
    const { blank, onChange, onAdd, value } = this.props;
    onAdd();
    const blankVal = typeof blank === 'function' ? blank(value) : blank;
    onChange([...value, blankVal]);
    setTimeout(() => this.focusRow(this.rowRefs.length - 1));
  };

  deleteItem = i => () => {
    const { onRemove, onChange, value } = this.props;
    onRemove(i);
    onChange([...value.slice(0, i), ...value.slice(i + 1)]);
    setTimeout(() => this.focusRow(value.length > i ? i : i - 1));
  };

  setRowReference = index => rowTemplate => {
    this.rowRefs[index] = rowTemplate;

    if (this.rowRefs.every(row => row === null)) {
      this.rowRefs = [];
    }
  };

  focusRow = index => {
    const row = this.rowRefs[index];
    if (!row) {
      return;
    }
    const el = ReactDOM.findDOMNode(row);
    const firstInput = el.querySelectorAll('input, select, textarea')[0];
    firstInput && firstInput.focus();
  };

  render() {
    const { template: Template, label, disabled, value } = this.props;

    return (
      <div>
        {value.map((item, i, items) =>
          <HasManyFieldsRow
            onDelete={this.deleteItem(i)}
            key={`${i}/${items.length}`}
            disabled={disabled}
          >
            <Template
              value={item}
              onChange={this.updateItem(i)}
              ref={this.setRowReference(i)}
              disabled={disabled}
            />
          </HasManyFieldsRow>
        )}

        <HasManyFieldsAdd onClick={this.addItem} disabled={disabled}>
          {label}
        </HasManyFieldsAdd>
      </div>
    );
  }
}

export default asUncontrolled(HasManyFields);

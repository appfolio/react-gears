import noop from 'lodash.noop';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import HasManyFieldsAdd from './HasManyFieldsAdd';
import HasManyFieldsRow from './HasManyFieldsRow';

class HasManyFields extends React.Component {
  static propTypes = {
    blank: PropTypes.any,
    defaultValue: PropTypes.array,
    disabled: PropTypes.bool,
    errors: PropTypes.array,
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
    errors: [],
    onAdd: noop,
    onRemove: noop,
    onUpdate: noop,
    onChange: noop
  };

  constructor(props) {
    super(props);

    this.isUncontrolled = typeof props.value === 'undefined';

    if (this.isUncontrolled) {
      this.state = {
        value: props.defaultValue
      };
    }

    this.rowRefs = [];
  }

  get value() {
    return this.isUncontrolled ? this.state.value : this.props.value;
  }

  set value(value) {
    this.props.onChange(value);
    this.isUncontrolled && this.setState({ value });
  }

  updateItem = i => (update) => {
    this.props.onUpdate(i, update);
    this.value = [
      ...this.value.slice(0, i),
      update,
      ...this.value.slice(i + 1)
    ];
  };

  addItem = () => {
    this.props.onAdd();
    const blank =
      typeof this.props.blank === 'function'
        ? this.props.blank(this.value)
        : this.props.blank;
    this.value = this.value.concat(blank);
    setTimeout(() => this.focusRow(this.rowRefs.length - 1));
  };

  deleteItem = i => () => {
    this.props.onRemove(i);
    this.value = [...this.value.slice(0, i), ...this.value.slice(i + 1)];
    setTimeout(() => this.focusRow(this.value.length > i ? i : i - 1));
  };

  setRowReference = index => (rowTemplate) => {
    this.rowRefs[index] = rowTemplate;

    if (this.rowRefs.every(row => row === null)) {
      this.rowRefs = [];
    }
  };

  focusRow = (index) => {
    const row = this.rowRefs[index];
    if (!row) {
      return;
    }
    const el = ReactDOM.findDOMNode(row);
    const firstInput = el.querySelectorAll('input, select, textarea')[0];
    firstInput && firstInput.focus();
  };

  render() {
    const { template: Template, label, disabled, errors } = this.props;

    return (
      <div>
        {this.value.map((item, i, items) => (
          <HasManyFieldsRow
            onDelete={this.deleteItem(i)}
            key={`${i}/${items.length}`}
            disabled={disabled}
          >
            <Template
              value={item}
              errors={errors[i]}
              onChange={this.updateItem(i)}
              ref={this.setRowReference(i)}
              disabled={disabled}
            />
          </HasManyFieldsRow>
        ))}

        <HasManyFieldsAdd onClick={this.addItem} disabled={disabled}>
          {label}
        </HasManyFieldsAdd>
      </div>
    );
  }
}

export default HasManyFields;

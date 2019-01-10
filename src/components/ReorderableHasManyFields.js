import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import noop from 'lodash.noop';
import PropTypes from 'prop-types';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import Icon from './Icon';
import HasManyFieldsAdd from './HasManyFieldsAdd';
import HasManyFieldsRow from './HasManyFieldsRow';

class ReorderableHasManyFields extends Component {
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
    value: PropTypes.array,
    minimumRows: PropTypes.number,
    maximumRows: PropTypes.number
  };

  static defaultProps = {
    defaultValue: [],
    errors: [],
    onAdd: noop,
    onRemove: noop,
    onUpdate: noop,
    onChange: noop,
    minimumRows: 1,
    maximumRows: Infinity
  };

  constructor(props) {
    super(props);

    this.isUncontrolled = typeof props.value === 'undefined';

    if (this.isUncontrolled) {
      this.state = {
        value: props.defaultValue,
      };
    }

    this.rowRefs = [];
  }

  get value() {
    return this.isUncontrolled ? this.state.value : this.props.value;
  }

  set value(newValue) {
    this.props.onChange(newValue);
    if (this.isUncontrolled) {
      this.setState({ value: newValue });
    }
  }

  updateItem = i => (updatedValue) => {
    this.props.onUpdate(i, updatedValue);
    this.value = [
      ...this.value.slice(0, i),
      updatedValue,
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
  }

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
    firstInput && firstInput.focus(); // eslint-disable-line no-unused-expressions
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    const result = Array.from(this.value);
    const [removed] = result.splice(oldIndex, 1);
    result.splice(newIndex, 0, removed);
    this.value = result;
  };

  render() {
    const {
      template: Template,
      label,
      disabled,
      errors,
      minimumRows,
      maximumRows
    } = this.props;

    const DragHandle = SortableHandle(() => (
      <div className="mr-3 align-self-stretch text-black-50" style={{ cursor: 'grab' }}>
        <span className="d-flex align-items-center h-100">
          <Icon name="bars" />
        </span>
      </div>
    ));

    const SortableItem = SortableElement(({ key, sortIndex, value }) => (
      <div className="d-flex">
        <DragHandle />
        <div style={{ width: '100%' }}>
          <HasManyFieldsRow
            onDelete={this.deleteItem(sortIndex)}
            key={key}
            deletable={this.value.length > minimumRows}
            disabled={disabled}
          >
            <Template
              value={value}
              errors={errors[sortIndex]}
              onChange={this.updateItem(sortIndex)}
              ref={this.setRowReference(sortIndex)}
              disabled={disabled}
            />
          </HasManyFieldsRow>
        </div>
      </div>
    ));

    const SortableList = SortableContainer(() => (
      <div>
        {this.value.map((item, i) => (
          <SortableItem key={`item-${i}`} index={i} sortIndex={i} value={item} />
        ))}
        {this.value.length < maximumRows ? (
          <div>
            <HasManyFieldsAdd onClick={this.addItem} disabled={disabled}>
              {label}
            </HasManyFieldsAdd>
          </div>
        ) : null}
      </div>
    ));

    return (
      <SortableList onSortEnd={this.onSortEnd} useDragHandle />
    );
  }
}

export default ReorderableHasManyFields;


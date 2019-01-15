import noop from 'lodash.noop';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

import HasManyFieldsAdd from './HasManyFieldsAdd';
import HasManyFieldsRow from './HasManyFieldsRow';
import withDragHandler from './Reorderable/DragHandler';
import withReorderableContainer from './Reorderable/ReorderableContainer';
import withReorderableElement from './Reorderable/ReorderableElement';
import * as styles from './Reorderable/Reorderable.scss';

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
    value: PropTypes.array,
    minimumRows: PropTypes.number,
    maximumRows: PropTypes.number,
    reorderable: PropTypes.bool,
  };

  static defaultProps = {
    defaultValue: [],
    errors: [],
    onAdd: noop,
    onRemove: noop,
    onUpdate: noop,
    onChange: noop,
    minimumRows: 1,
    maximumRows: Infinity,
    reorderable: false,
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
    this.isUncontrolled && this.setState({ value }); // eslint-disable-line no-unused-expressions
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
    firstInput && firstInput.focus(); // eslint-disable-line no-unused-expressions
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    const result = Array.from(this.value);
    const [removed] = result.splice(oldIndex, 1);
    result.splice(newIndex, 0, removed);
    this.value = result;
  };

  renderAddRow() {
    const { disabled, label, maximumRows } = this.props;

    if (this.value.length < maximumRows) {
      return (
        <div>
          <HasManyFieldsAdd onClick={this.addItem} disabled={disabled}>
            {label}
          </HasManyFieldsAdd>
        </div>
      );
    }

    return null;
  }

  renderHasManyFieldsRow(key, index, value) {
    const { template: Template, disabled, errors, minimumRows } = this.props;

    return (
      <HasManyFieldsRow
        onDelete={this.deleteItem(index)}
        key={key}
        deletable={this.value.length > minimumRows}
        disabled={disabled}
      >
        <Template
          value={value}
          errors={errors[index]}
          onChange={this.updateItem(index)}
          ref={this.setRowReference(index)}
          disabled={disabled}
        />
      </HasManyFieldsRow>
    );
  }

  render() {
    const { reorderable } = this.props;
    const itemsLength = this.value.length;

    if (reorderable) {
      const DragHandler = withDragHandler();

      const ItemUI = ({ key, sortIndex, value }) => (
        <div className="d-flex js-reorderable-item">
          <DragHandler />
          <div style={{ width: '100%' }} >
            {this.renderHasManyFieldsRow(key, sortIndex, value)}
          </div>
        </div>
      );
      const SortableItem = withReorderableElement(ItemUI);

      const ContainerUI = () => (
        <div>
          {this.value.map((item, index) => (
            <SortableItem key={`${index}/${itemsLength}`} index={index} sortIndex={index} value={item} />
          ))}
          {this.renderAddRow()}
        </div>
      );
      const ReorderableContainer = withReorderableContainer(ContainerUI);

      return (
        <div className={styles.noSelect}>
          <ReorderableContainer className="js-reorderable-container" onSortEnd={this.onSortEnd} useDragHandle />
        </div>
      );
    }

    return (
      <div>
        {this.value.map((item, index) => this.renderHasManyFieldsRow(`${index}/${itemsLength}`, index, item))}
        {this.renderAddRow()}
      </div>
    );
  }
}

export default HasManyFields;

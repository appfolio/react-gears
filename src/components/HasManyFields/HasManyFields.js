import noop from 'lodash.noop';
import React from 'react';
import ReactDOM from 'react-dom';
import withDragHandler from '../Reorderable/DragHandler';
import ReorderableContainer from '../Reorderable/ReorderableContainer';
import ReorderableElement from '../Reorderable/ReorderableElement';
import HasManyFieldsAdd from './HasManyFieldsAdd';
import HasManyFieldsRow from './HasManyFieldsRow';

const DragHandler = withDragHandler();

const SortableItem = ReorderableElement(
  ({ key, sortIndex, value, renderHasManyFieldsRow, dragHandleInside }) =>
    dragHandleInside ? (
      <div className="js-reorderable-item" key={key}>
        {renderHasManyFieldsRow(null, sortIndex, value, <DragHandler />)}
      </div>
    ) : (
      <div className="d-flex js-reorderable-item" key={key}>
        <DragHandler />
        <div className="w-100">{renderHasManyFieldsRow(null, sortIndex, value)}</div>
      </div>
    )
);

const SortableContainer = ReorderableContainer(
  ({ value, renderAddRow, renderHasManyFieldsRow, dragHandleInside }) => (
    <div>
      {value.map((item, index) => (
        <SortableItem
          key={`${item.key ? item.key : index}`}
          index={index}
          sortIndex={index}
          value={item}
          dragHandleInside={dragHandleInside}
          renderHasManyFieldsRow={renderHasManyFieldsRow}
        />
      ))}
      {renderAddRow()}
    </div>
  )
);

class HasManyFields extends React.Component {
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
    dragHandle: 'outside',
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

  set value(value) {
    this.props.onChange(value);
    this.isUncontrolled && this.setState({ value }); // eslint-disable-line no-unused-expressions
  }

  updateItem = (i) => (update) => {
    this.props.onUpdate(i, update);
    this.value = [...this.value.slice(0, i), update, ...this.value.slice(i + 1)];
  };

  addItem = () => {
    this.props.onAdd();
    const blank =
      typeof this.props.blank === 'function' ? this.props.blank(this.value) : this.props.blank;
    this.value = this.value.concat(blank);
    setTimeout(() => this.focusRow(this.rowRefs.length - 1));
  };

  deleteItem = (i) => () => {
    this.props.onRemove(i);
    this.value = [...this.value.slice(0, i), ...this.value.slice(i + 1)];
    setTimeout(() => this.focusRow(this.value.length > i ? i : i - 1));
  };

  setRowReference = (index) => (rowTemplate) => {
    this.rowRefs[index] = rowTemplate;

    if (this.rowRefs.every((row) => row === null)) {
      this.rowRefs = [];
    }
  };

  focusRow = (index) => {
    const row = this.rowRefs[index];
    if (!row) {
      return;
    }
    /* eslint-disable-next-line -- perhaos handle this when converting to FC/TS */
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

  renderAddRow = () => {
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
  };

  isStateless = (Template) => {
    const isFunction = typeof Template === 'function';
    return isFunction && !(Template.prototype && Template.prototype.render);
  };

  renderHasManyFieldsRow = (key, index, value, dragHandle) => {
    const { template: Template, disabled, deleteProps, errors, minimumRows } = this.props;
    const refProps = this.isStateless(Template) ? {} : { ref: this.setRowReference(index) };

    const template = (
      <Template
        value={value}
        errors={errors[index]}
        onChange={this.updateItem(index)}
        disabled={disabled}
        index={index}
        {...refProps}
      />
    );

    return (
      <HasManyFieldsRow
        onDelete={this.deleteItem(index)}
        key={key}
        deletable={this.value.length > minimumRows}
        disabled={disabled}
        deleteProps={deleteProps}
      >
        {dragHandle ? (
          <div className="d-flex">
            {dragHandle}
            <div className="w-100" style={{ minWidth: 0 }}>
              {template}
            </div>
          </div>
        ) : (
          template
        )}
      </HasManyFieldsRow>
    );
  };

  render() {
    const { className, disabled, reorderable, dragHandle } = this.props;

    if (!disabled && reorderable) {
      return (
        <div className={className}>
          <SortableContainer
            className="js-reorderable-container"
            helperClass="hmf-dragging"
            onSortEnd={this.onSortEnd}
            useDragHandle
            lockAxis="y"
            value={this.value}
            dragHandleInside={dragHandle === 'inside'}
            renderHasManyFieldsRow={this.renderHasManyFieldsRow}
            renderAddRow={this.renderAddRow}
          />
          <style jsx>
            {`
              div {
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
              }
            `}
          </style>
        </div>
      );
    }

    return (
      <div className={className}>
        {this.value.map((item, index) => this.renderHasManyFieldsRow(index, index, item))}
        {this.renderAddRow()}
      </div>
    );
  }
}

export default HasManyFields;

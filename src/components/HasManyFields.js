import noop from 'lodash.noop';
import React from 'react';
import ReactDOM from 'react-dom';

import HasManyFieldsAdd from './HasManyFieldsAdd';
import HasManyFieldsRow from './HasManyFieldsRow';

const deepCopy = val => JSON.parse(JSON.stringify(val));

class HasManyFields extends React.Component {
  static propTypes = {
    blank: React.PropTypes.any,
    defaultValue: React.PropTypes.array,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func,
    template: React.PropTypes.oneOfType([
      React.PropTypes.func,
      React.PropTypes.element
    ]).isRequired,
    value: React.PropTypes.array
  }

  static defaultProps = {
    defaultValue: [],
    onChange: noop
  }

  constructor(props) {
    super(props);

    this.isUncontrolled = typeof props.value === 'undefined';

    if (this.isUncontrolled) {
      this.state = {
        value: deepCopy(props.defaultValue)
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

  withCopiedValue = func => {
    const val = deepCopy(this.value);
    func(val);
    this.value = val;
  }

  updateItem = i => update => this.withCopiedValue(v => v[i] = update)

  addItem = () => this.withCopiedValue(v => {
    const blank = typeof this.props.blank === 'function' ?
      this.props.blank(v) :
      this.props.blank;
    v.push(blank);

    setTimeout(() => this.focusRow(this.rowRefs.length - 1));
  })

  deleteItem = i => () => this.withCopiedValue(v => {
    v.splice(i, 1);
    setTimeout(() => this.focusRow(v.length > i ? i : i - 1));
  })

  setRowReference = index => rowTemplate => {
    this.rowRefs[index] = rowTemplate;

    if (this.rowRefs.every(row => row === null)) {
      this.rowRefs = [];
    }
  }

  focusRow = index => {
    const row = this.rowRefs[index];
    if (!row) {
      return;
    }
    const el = ReactDOM.findDOMNode(row);
    const firstInput = el.getElementsByTagName('input')[0];
    firstInput && firstInput.focus();
  }

  render() {
    const { template: Template, label } = this.props;

    return (
      <div>
        {this.value.map((item, i, items) => (
          <HasManyFieldsRow
            onDelete={this.deleteItem(i)}
            key={`${i}/${items.length}`}
          >
            <Template
              value={item}
              onChange={this.updateItem(i)}
              ref={this.setRowReference(i)}
            />
          </HasManyFieldsRow>
        ))}

        <HasManyFieldsAdd onClick={this.addItem}>{label}</HasManyFieldsAdd>
      </div>
    );
  }
}

export default HasManyFields;

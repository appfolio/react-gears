import React from 'react';
import noop from 'lodash/noop';

import HasManyFieldsAdd from './HasManyFieldsAdd';
import HasManyFieldsRow from './HasManyFieldsRow';

const deepCopy = val => JSON.parse(JSON.stringify(val));

class HasManyFields extends React.Component {
  static propTypes = {
    defaultValue: React.PropTypes.array,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func,
    template: React.PropTypes.oneOfType([
      React.PropTypes.func,
      React.PropTypes.element
    ]),
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
      }
    }
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
  addItem = () => this.withCopiedValue(v => v.push(this.props.blank))
  deleteItem = i => () => this.withCopiedValue(v => v.splice(i, 1))

  render() {
    const { template: Template, label } = this.props;

    return (
      <div>
        { this.value.map((item, i, items) => (
          <HasManyFieldsRow onDelete={this.deleteItem(i)} key={i + '/' + items.length}>
            <Template value={item} onChange={this.updateItem(i)} />
          </HasManyFieldsRow>
        )) }

        <HasManyFieldsAdd onClick={this.addItem}>{label}</HasManyFieldsAdd>
      </div>
    );
  }
}

export default HasManyFields;

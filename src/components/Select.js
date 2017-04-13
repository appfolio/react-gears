import React, { Component } from 'react';
import ReactSelect from 'react-select';
import noop from 'lodash.noop';
import over from 'lodash.over';

// Disables CSS modules to import as global:
import './Select.scss';

/**
 * This is a workaround for a current bug in react-select where the currently focused item is not
 * highlighted after updating the options list.
 *
 * This can be removed when a new version of react-select is released with this PR merged:
 *   https://github.com/JedWatson/react-select/pull/1512
 *   https://github.com/JedWatson/react-select/issues/1513
 *   https://github.com/JedWatson/react-select/issues/1565
 */
function monkeyPatchReactSelectGetFocusableOptionIndex(element) {
  if (!element) {
    return;
  }

  // eslint-disable-next-line no-param-reassign
  element.getFocusableOptionIndex = function getFocusableOptionIndex(selectedOption) {
    // eslint-disable-next-line no-underscore-dangle
    const options = this._visibleOptions;
    if (!options.length) return null;

    // eslint-disable-next-line prefer-const
    let focusedOption = this.state.focusedOption || selectedOption;
    if (focusedOption && !focusedOption.disabled) {
      let focusedOptionIndex = -1;
      options.some((option, index) => {
        const isOptionEqual = option.value === focusedOption.value;
        if (isOptionEqual) {
          focusedOptionIndex = index;
        }
        return isOptionEqual;
      });
      if (focusedOptionIndex !== -1) {
        return focusedOptionIndex;
      }
    }

    for (let i = 0; i < options.length; i++) {
      if (!options[i].disabled) return i;
    }
    return null;
  };
}

class Select extends Component {
  static propTypes = {
    defaultValue: React.PropTypes.any,
    loadOptions: React.PropTypes.func,
    onChange: React.PropTypes.func,
    value: React.PropTypes.any,
  };

  static defaultProps = {
    defaultValue: '',
    onChange: noop,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: props.defaultValue
    };
  }
  componentWillReceiveProps(props) {
    if (props.value !== this.props.value) {
      this.setState({ value: props.value });
    }
  }

  updateValue = value => { this.setState({ value }); }

  render() {
    const { value, onChange, ...props } = this.props;
    const SelectElement = this.props.loadOptions ? ReactSelect.Async : ReactSelect;

    return (
      <SelectElement
        inputProps={{ ...props.inputProps, name: props.name || '' }}
        onChange={over([this.updateValue, onChange])}
        value={value || this.state.value}
        {...props}
        ref={element => { monkeyPatchReactSelectGetFocusableOptionIndex(element); }}
      />
    );
  }
}

export default Select;

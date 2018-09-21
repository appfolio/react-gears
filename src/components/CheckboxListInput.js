import React from 'react';

class CheckboxListInput extends React.Component {
  onChange = (e) => {
    if (this.props.onChange) {
      const { checked, value } = e.target;
      const currentSelection = (this.props.value || []).slice(0);

      if (checked) {
        currentSelection.push(value);
      } else {
        const i = currentSelection.indexOf(value);
        i > -1 && currentSelection.splice(i, 1); // eslint-disable-line no-unused-expressions
      }

      this.props.onChange(currentSelection);
    }
  }

  render() {
    const {
      type,
      value,
      children,
      onChange,
      ...props
    } = this.props;

    return (
      <div>
        {React.Children.map(children, choice => React.cloneElement(choice, {
          type: 'checkbox',
          selected: value,
          onChange: this.onChange,
          ...props
        }))}
      </div>
    );
  }
}

export default CheckboxListInput;

import PropTypes from 'prop-types';
import React from 'react';

class CheckboxListInput extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.array,
  };

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
  };

  render() {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars -- This will go away when this is a function component */
    const { value, children, className, onChange, ...props } = this.props;

    return (
      <div className={className}>
        {React.Children.map(
          children,
          (choice) =>
            React.isValidElement(choice) &&
            React.cloneElement(choice, {
              type: 'checkbox',
              selected: value,
              onChange: this.onChange,
              ...props,
            })
        )}
      </div>
    );
  }
}

export default CheckboxListInput;

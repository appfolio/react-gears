export const readEvent = e => {
  return { [e.target.name]: e.target.value };
};

export const createOnChange = props => update => {
  props.onChange({ ...props.value, ...update });
};

export const createPropsFor = props => field => {
  if (props.value.hasOwnProperty(field)) {
    return {
      value: props.value[field],
      defaultValue: undefined
    };
  }

  return {
    value: undefined,
    defaultValue: props.defaultValue[field]
  };
};

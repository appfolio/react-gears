const labelValues = ['Fax', 'Home', 'Mobile', 'Office'];
export default labelValues.map(label => {
  return {
    label,
    value: label
  };
});

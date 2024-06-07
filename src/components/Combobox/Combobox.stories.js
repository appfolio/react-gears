import React, { useState } from 'react';
import Icon from '../Icon/Icon';
import Combobox from './Combobox';

const options = [
  { label: 'Alaska', value: 'AK' },
  { label: 'Alabama', value: 'AL' },
  { label: 'Arkansas', value: 'AR' },
  { label: 'Arizona', value: 'AZ' },
  { label: 'California', value: 'CA' },
  { label: 'Colorado', value: 'CO' },
  { label: 'Connecticut', value: 'CT' },
  { label: 'Washington, D.C.', value: 'DC' },
  { label: 'Delaware', value: 'DE' },
  { label: 'Florida', value: 'FL' },
  { label: 'Georgia', value: 'GA' },
  { label: 'Hawaii', value: 'HI' },
  { label: 'Iowa', value: 'IA' },
  { label: 'Idaho', value: 'ID' },
  { label: 'Illinois', value: 'IL' },
  { label: 'Indiana', value: 'IN' },
  { label: 'Kansas', value: 'KS' },
  { label: 'Kentucky', value: 'KY' },
  { label: 'Louisiana', value: 'LA' },
  { label: 'Massachusetts', value: 'MA' },
  { label: 'Maryland', value: 'MD' },
  { label: 'Maine', value: 'ME' },
  { label: 'Michigan', value: 'MI' },
  { label: 'Minnesota', value: 'MN' },
  { label: 'Missouri', value: 'MO' },
  { label: 'Mississippi', value: 'MS' },
  { label: 'Montana', value: 'MT' },
  { label: 'North Carolina', value: 'NC' },
  { label: 'North Dakota', value: 'ND' },
  { label: 'Nebraska', value: 'NE' },
  { label: 'New Hampshire', value: 'NH' },
  { label: 'New Jersey', value: 'NJ' },
  { label: 'New Mexico', value: 'NM' },
  { label: 'Nevada', value: 'NV' },
  { label: 'New York', value: 'NY' },
  { label: 'Ohio', value: 'OH' },
  { label: 'Oklahoma', value: 'OK' },
  { label: 'Oregon', value: 'OR' },
  { label: 'Pennsylvania', value: 'PA' },
  { label: 'Rhode Island', value: 'RI' },
  { label: 'South Carolina', value: 'SC' },
  { label: 'South Dakota', value: 'SD' },
  { label: 'Tennessee', value: 'TN' },
  { label: 'Texas', value: 'TX' },
  { label: 'Utah', value: 'UT' },
  { label: 'Virginia', value: 'VA' },
  { label: 'Vermont', value: 'VT' },
  { label: 'Washington', value: 'WA' },
  { label: 'Wisconsin', value: 'WI' },
  { label: 'West Virginia', value: 'WV' },
  { label: 'Wyoming', value: 'WY' },
  { label: 'U.S. Armed Forces Americas', value: 'AA' },
  { label: 'U.S. Armed Forces Europe', value: 'AE' },
  { label: 'U.S. Armed Forces Pacific', value: 'AP' },
  { label: 'American Samoa', value: 'AS' },
  { label: 'Micronesia', value: 'FM' },
  { label: 'Guam', value: 'GU' },
  { label: 'Marshall Islands', value: 'MH' },
  { label: 'Northern Mariana Islands', value: 'MP' },
  { label: 'Puerto Rico', value: 'PR' },
  { label: 'Virgin Islands', value: 'VI' },
];

const meta = {
  title: 'Combobox',
  component: Combobox,
  parameters: {
    sourceLink: 'Combobox/Combobox.tsx',
  },
  argTypes: {
    direction: {
      options: ['', 'down', 'up'],
      control: { type: 'select' },
    },
    disabled: { control: 'boolean' },
    noResultsLabel: { control: 'text' },
    placeholder: { control: 'text' },
  },
};

export default meta;

export const LiveExample = {
  args: {
    direction: '',
    disabled: Combobox.defaultProps.disabled,
    noResultsLabel: Combobox.defaultProps.noResultsLabel,
    placeholder: Combobox.defaultProps.placeholder,
    inputClassName: '',
  },
  render: function Render(args) {
    const [value, setValue] = useState();
    return (
      <>
        <div>value: {value}</div>
        <Combobox onChange={setValue} options={options} value={value} {...args} />
      </>
    );
  },
};

export const Multi = {
  args: {
    direction: '',
    disabled: Combobox.defaultProps.disabled,
    noResultsLabel: Combobox.defaultProps.noResultsLabel,
    placeholder: Combobox.defaultProps.placeholder,
    inputClassName: '',
  },
  render: function Render(args) {
    const [value, setValue] = useState();
    return <Combobox multi onChange={setValue} options={options} value={value} {...args} />;
  },
};

export const Grouped = {
  args: {
    multi: false,
    direction: '',
    disabled: Combobox.defaultProps.disabled,
    noResultsLabel: Combobox.defaultProps.noResultsLabel,
    placeholder: Combobox.defaultProps.placeholder,
    inputClassName: '',
  },
  render: function Render(args) {
    const [value, setValue] = useState();
    return (
      <Combobox
        onChange={setValue}
        options={[
          {
            label: 'Colors',
            options: [
              { label: 'Red', value: 'red' },
              { label: 'Blue', value: 'blue' },
            ],
          },
          { label: 'States', options },
        ]}
        value={value}
        menuMaxHeight="20rem"
        {...args}
      />
    );
  },
};

export const CreatableOptions = {
  args: {
    direction: '',
    disabled: Combobox.defaultProps.disabled,
    noResultsLabel: Combobox.defaultProps.noResultsLabel,
    placeholder: Combobox.defaultProps.placeholder,
    inputClassName: '',
  },
  render: function Render(args) {
    const [value, setValue] = useState();
    const [opts, setOpts] = useState(options);

    const onCreate = (str) => {
      const newOpt = { value: str, label: str };
      setOpts([...opts, newOpt]);

      return newOpt.value;
    };

    return (
      <Combobox onChange={setValue} onCreate={onCreate} options={opts} value={value} {...args} />
    );
  },
};

export const CustomOptions = {
  render: function Render(args) {
    const [value, setValue] = useState();
    const mixedOptions = [
      {
        label: '71548561868 Super-duper long word like impossibly long Lane',
        value: 'address-1',
        type: 'address',
      },
      { label: '439 Sunset Drive', value: 'address-2', disabled: true, type: 'address' },
      { label: '940 Penguin Ct', value: 'address-3', type: 'address' },
      { label: 'Ice Bear', value: 'tenant-1', type: 'tenant' },
      { label: 'Panda', value: 'tenant-2', type: 'tenant' },
      { label: '77 Snowball Blvd', value: 'address-4', type: 'address' },
      { label: 'Bob', value: 'tenant-3', type: 'tenant' },
    ];
    const renderOption = (option) => (
      <div>
        <Icon name={option.type === 'address' ? 'home' : 'user'} className="me-2 py-4" />
        {option.label}
      </div>
    );

    const renderInputValue = (option) => (
      <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {option.label}
      </div>
    );

    return (
      <Combobox
        onChange={setValue}
        options={mixedOptions}
        value={value}
        renderOption={renderOption}
        renderInputValue={renderInputValue}
        menuMaxHeight="20rem"
        {...args}
      />
    );
  },
};

export const PortalElement = {
  args: {
    direction: '',
    disabled: Combobox.defaultProps.disabled,
    noResultsLabel: Combobox.defaultProps.noResultsLabel,
    placeholder: Combobox.defaultProps.placeholder,
    inputClassName: '',
  },
  render: function Render(args) {
    const [value, setValue] = useState();
    return (
      <>
        <div>value: {value}</div>
        <Combobox
          onChange={setValue}
          options={options}
          value={value}
          portalEl={document.body}
          {...args}
        />
      </>
    );
  },
};

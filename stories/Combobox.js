import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import Fuse from 'fuse.js';
import { boolean, text } from '@storybook/addon-knobs';
import { Col, Combobox, Row } from '../src';

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
  { label: 'Virgin Islands', value: 'VI' }
];

storiesOf('Combobox', module)
  .add('Live Example', () => {
    const [value, setValue] = useState();
    return (
      <Row>
        <Col>
          <Combobox
            onChange={setValue}
            options={options}
            value={value}
            disabled={boolean('disabled', Combobox.defaultProps.disabled)}
            noResultsLabel={text('noResultsLabel', Combobox.defaultProps.noResultsLabel)}
            placeholder={text('placeholder', Combobox.defaultProps.placeholder)}
          />
        </Col>
        <Col>
          {value}
        </Col>
      </Row>
    );
  })
  // .add('custom props', () => {
  //   const [value, setValue] = useState();
  //   return (
  //     <Row>
  //       <Col>
  //         <Combobox
  //           onChange={v => setValue(v)}
  //           options={options}
  //           value={value}
  //           filterOptions={(option, v) => {
  //             return v ? option.label.toLowerCase().indexOf(v.toLowerCase()) === 0 : true;
  //           }}
  //           // isSelected={(option, value) => true}
  //           // renderInputValue={option => option.label.toLowerCase()}
  //           renderOption={option => <>{option.label} <Badge>{option.value}</Badge></>}
  //         />
  //       </Col>
  //       <Col>
  //         {value}
  //       </Col>
  //     </Row>
  //   );
  // })
  .add('fuse', () => {
    const [value, setValue] = useState();
    const [fuse, setFuse] = useState(new Fuse(options, {
      keys: ['label', 'value'],
      threshold: 0.2
    }));

    useEffect(() => {
      setFuse(new Fuse(options, {
        keys: ['label', 'value'],
        threshold: 0.2
      }));
    }, []);

    return (
      <>
        <Combobox
          onChange={setValue}
          options={options}
          value={value}
          filterOptions={(os, v) => {
            if (v && v.length) {
              const results = fuse.search(v);
              return results;
            }
            return os;
          }}
        />
      </>
    );
  });


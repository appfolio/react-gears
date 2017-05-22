/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';

import CheckboxInput from '../../src/components/CheckboxInput';
import CheckboxBooleanInput from '../../src/components/CheckboxBooleanInput';
import CheckboxListInput from '../../src/components/CheckboxListInput';
import FormChoice from '../../src/components/FormChoice';

describe('<CheckboxInput />', () => {
  it('should be a CheckboxListInput when there are children (choices)', () => {
    const component = shallow(
      <CheckboxInput>
        <FormChoice>A</FormChoice>
      </CheckboxInput>
    );

    assert.equal(component.type(), CheckboxListInput);
  });

  it('should be a CheckboxBooleanInput when there are no children', () => {
    const component = shallow(<CheckboxInput />);

    assert.equal(component.type(), CheckboxBooleanInput);
  });
});

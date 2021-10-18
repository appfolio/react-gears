import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';

import { CheckboxInput, CheckboxBooleanInput, CheckboxListInput, FormChoice } from '../../src';

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

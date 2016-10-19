/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { Input } from 'reactstrap';

import PatternInput from '../../src/components/PatternInput';

describe('<PatternInput />', () => {
  it('should wrap a plain Input', () => {
    const input = shallow(<PatternInput coolProp="value" />);
    assert.equal(input.is(Input), true);
    assert.equal(input.prop('onKeyPress'), null);
  });

  it('should block non allowed characters', () => {
    const input = shallow(<PatternInput pattern={/[a7]/} />);
    assert(input.prop('onKeyPress'));
    let preventDefault = sinon.spy();
    input.simulate('keyPress', { charCode: 97, preventDefault });
    input.simulate('keyPress', { charCode: 98, preventDefault });
    assert(preventDefault.calledOnce);
  });
});

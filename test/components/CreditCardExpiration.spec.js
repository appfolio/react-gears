/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import { ButtonDropdown } from 'reactstrap';
import CreditCardExpiration from '../../src/components/CreditCardExpiration';

describe('<CreditCardExpiration />', () => {
  it('renders current month and year by default', () => {
    const component = mount(<CreditCardExpiration />);
    const cce = component.find(CreditCardExpiration).get(0);

    const today = new Date();
    assert.equal(cce.props.month, today.getMonth());
    assert.equal(cce.props.year, today.getFullYear());
  });
});

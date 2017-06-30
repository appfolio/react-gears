import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { Select, CreditCardExpiration } from '../../src';

describe('<CreditCardExpiration />', () => {
  const today = new Date();

  it('renders defaults correctly', () => {
    const component = mount(<CreditCardExpiration />);
    const cce = component.find(CreditCardExpiration).get(0);

    assert.equal(cce.props.month, CreditCardExpiration.defaultProps.month);
    assert.equal(cce.props.year, CreditCardExpiration.defaultProps.year);
  });

  it('invalid changes result in resetting to defaults', () => {
    const onChange = sinon.spy();
    const component = mount(<CreditCardExpiration onChange={onChange} />);
    const cce = component.find(CreditCardExpiration).get(0);

    const { month, year } = CreditCardExpiration.defaultProps;
    const EXPECTED = { month, year };

    cce.onYearSelection(undefined);
    assert(onChange.calledWith(EXPECTED));
    onChange.reset();

    cce.onYearSelection({ value: undefined });
    assert(onChange.calledWith(EXPECTED));
    onChange.reset();

    cce.onMonthSelection(undefined);
    assert(onChange.calledWith(EXPECTED));
    onChange.reset();

    cce.onMonthSelection({ value: undefined });
    assert(onChange.calledWith(EXPECTED));
    onChange.reset();
  });

  it('creates the correct entries for months and years', () => {
    const component = mount(<CreditCardExpiration />);
    const selects = component.find(Select);

    assert.equal(selects.length, 2);

    const months = selects.get(0);
    const monthOptions = months.props.options;
    assert.equal(monthOptions.length, 12);
    assert.deepEqual(monthOptions[0], { label: 'January', value: 1 });
    assert.deepEqual(monthOptions[11], { label: 'December', value: 12 });

    const years = selects.get(1);
    const yearsOptions = years.props.options;
    assert.equal(yearsOptions.length, 11);

    const thisYear = today.getFullYear();
    assert.deepEqual(yearsOptions[0], { label: thisYear, value: thisYear });
    assert.deepEqual(yearsOptions[10], { label: thisYear + 10, value: thisYear + 10 });
  });
});

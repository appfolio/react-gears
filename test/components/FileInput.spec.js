import assert from 'assert';
import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import { FileInput, Input } from '../../src';

describe('<FileInput />', () => {
  const sandbox = sinon.createSandbox();
  const onChangeStub = sandbox.stub();

  beforeEach(() => sandbox.restore());

  const component = shallow(<FileInput name="aFileInput" onChange={onChangeStub} />);

  it('should be an Input', () => {
    assert.equal(component.type(), Input);
  });

  it('renders an <input> with type file', () => {
    assert.equal(component.prop('type'), 'file');
  });

  it('should have correct name', () => {
    assert.equal(component.prop('name'), 'aFileInput');
  });

  it('calls supplied onChange function when file selected', () => {
    component.simulate('change', {
      target: { files: [{ name: 'your.mom' }] },
    });

    const expectedValue = [{ name: 'your.mom' }];
    assert(onChangeStub.calledWith(expectedValue));
  });

  it('calls supplied onChange function when multiple files selected', () => {
    component.simulate('change', {
      target: {
        files: [{ name: 'your.mom' }, { name: 'karans.mom' }, { name: 'justins.mom' }],
      },
    });

    const expectedValue = [{ name: 'your.mom' }, { name: 'karans.mom' }, { name: 'justins.mom' }];

    assert(onChangeStub.calledWith(expectedValue));
  });
});

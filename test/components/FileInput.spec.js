import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import assert from 'assert';

import FileInput from '../../src/components/FileInput';

class MockFileReader {
  readAsDataURL = stub();
}

describe('<FileInput />', () => {
  const sandbox = sinon.sandbox.create();
  const onChangeStub = sandbox.stub()
  beforeEach(() => {
    sandbox.restore();
  });

  const wrapper = shallow(<FileInput name="aFileInput" onChange={onChangeStub} />);
  it('renders an <input> with type file', () => {
    assert.equal(wrapper.find('Input').prop('type'), 'file');
  });

  it('rendered <input> has correct name', () => {
    assert.equal(wrapper.find('Input').prop('name'), 'aFileInput');
  });

  it('calls supplied onChange function when file selected', () => {
    wrapper.find('Input').simulate('change', {
      target: { files: [{ name: 'your.mom' }] }
    });

    const expectedValue = [{name: 'your.mom'}];
    assert(onChangeStub.calledWith(expectedValue));
  });

  it('calls supplied onChange function when multiple files selected', () => {
    wrapper.find('Input').simulate('change', {
      target: {
        files: [
          {name: 'your.mom'},
          {name: 'karans.mom'},
          {name: 'justins.mom'},
        ]}
    });

    const expectedValue = [
      {name: 'your.mom'},
      {name: 'karans.mom'},
      {name: 'justins.mom'}
    ];
    assert(onChangeStub.calledWith(expectedValue));
  });
});

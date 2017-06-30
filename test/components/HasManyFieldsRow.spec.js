import React from 'react';
import assert from 'assert';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import { Button, Col } from 'reactstrap';
import { Icon, HasManyFieldsRow } from '../../src';

describe('<HasManyFieldsRow />', () => {
  const onDelete = sinon.spy();
  const component = shallow(
    <HasManyFieldsRow onDelete={onDelete}>Stuff</HasManyFieldsRow>
  );

  const deleteButton = component.find(Button);

  it('should have a delete button', () => {
    assert.equal(deleteButton.prop('outline'), true);
    assert.equal(deleteButton.prop('color'), 'danger');
    assert.equal(deleteButton.find(Icon).prop('name'), 'trash-o');
  });

  it('should call onDelete', () => {
    deleteButton.simulate('click');
    assert.equal(onDelete.calledOnce, true);
  });

  it('should put content in first column', () =>
    assert.equal(component.find(Col).first().render().text(), 'Stuff')
  );
});

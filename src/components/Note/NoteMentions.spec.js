import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import NoteMentions from './NoteMentions';

describe('<NoteMentions />', () => {
  const note = {
    date: new Date('November 5, 1605 00:00:00'),
    from: 'Jim Nabors',
    text: 'Hello World!',
  };

  it('should pass headerActions to the note header', () => {
    const component = mount(
      <NoteMentions
        mentionableUsers={[]}
        note={note}
        headerActions={<span className="custom-action">Remind</span>}
      />
    );

    assert.strictEqual(component.find('.js-note-header__actions .custom-action').length, 1);
  });

  it('should render without headerActions', () => {
    const component = mount(<NoteMentions mentionableUsers={[]} note={note} />);

    assert.strictEqual(component.find('.js-note-header__actions').exists(), false);
    assert.strictEqual(component.find('CardBody').text(), 'Hello World!');
  });
});

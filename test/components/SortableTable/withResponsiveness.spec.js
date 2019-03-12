import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import withResponsiveness from '../../../src/components/SortableTable/withResponsiveness';

const Table = () => (
  <div className="table-responsive">
    <table />
  </div>
);
Table.defaultProps = { responsive: true };

const Component = withResponsiveness(Table);

function stubGetBoundingClientRect(component, { container, table }) {
  component
    .find('.table-responsive')
    .getDOMNode().getBoundingClientRect = () => {
      return {
        width: container
      };
    };
  component.find('table').getDOMNode().getBoundingClientRect = () => {
    return {
      width: table
    };
  };
}

function triggerScrollEvent(component, scrollLeft) {
  component.find('.table-responsive').getDOMNode().scrollLeft = scrollLeft;
  component
    .find('.table-responsive')
    .getDOMNode()
    .dispatchEvent(new Event('scroll'));
  component.update();
}

function assertHasScrollClasses(component, { left, right }) {
  assert.equal(
    component.find('.responsive-table').hasClass('is-left-scrollable'),
    left
  );
  assert.equal(
    component.find('.responsive-table').hasClass('is-right-scrollable'),
    right
  );
}

describe('withResponsiveness', () => {
  it('is a no-op when the table is nonresponsive', () => {
    const component = mount(<Component responsive={false} />);
    assert(!component.find('div.responsive-table').exists());
  });

  it('is a no-op when the table is nonresponsive', () => {
    const component = mount(<Component responsive={false} />);
    assert(!component.find('div.responsive-table').exists());
  });

  it('does not add classes when the table is smaller than the container', () => {
    const component = mount(<Component />);

    stubGetBoundingClientRect(component, {
      container: 1000,
      table: 100
    });

    triggerScrollEvent(component, 0);

    assertHasScrollClasses(component, { left: false, right: false });
  });

  it('does not add classes when the table is the same size as the container', () => {
    const component = mount(<Component />);

    stubGetBoundingClientRect(component, {
      container: 1000,
      table: 1000
    });

    triggerScrollEvent(component, 0);

    assertHasScrollClasses(component, { left: false, right: false });
  });

  it('adds classes when the table is larger than the container', () => {
    const component = mount(<Component />);

    stubGetBoundingClientRect(component, {
      container: 100,
      table: 1000
    });

    triggerScrollEvent(component, 0);

    assertHasScrollClasses(component, { left: false, right: true });

    triggerScrollEvent(component, 1);

    assertHasScrollClasses(component, { left: true, right: true });

    triggerScrollEvent(component, 1000);

    assertHasScrollClasses(component, { left: true, right: false });
  });
});

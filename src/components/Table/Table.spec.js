import assert from 'assert';
import { shallow } from 'enzyme';
import React from 'react';
import Table from './Table';

describe('<Table />', () => {
  it('should render correctly', () => {
    const component = shallow(<Table />);
    assert(component);
  });

  it('should render nested children correctly', () => {
    const component = shallow(
      <Table>
        <tr>
          <td id="a">1</td>
          <td id="b">2</td>
        </tr>
      </Table>
    );
    assert(component.find('#a'));
    assert.equal(component.find('#a').text(), '1');
    assert(component.find('#b'));
    assert.equal(component.find('#b').text(), '2');
  });

  it('should render with the correct default props', () => {
    const component = shallow(<Table />);
    const props = component.props();
    assert.equal(props.hover, true);
    assert.equal(props.responsive, true);
    assert.equal(props.size, 'sm');
    assert.equal(props.bordered, true);
  });
});

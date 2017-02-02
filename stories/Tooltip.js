import React from 'react';
import { Tooltip } from '../src';
import { storiesOf } from '@kadira/storybook';
import { select } from '@kadira/storybook-addon-knobs';

export default class TooltipExample extends React.Component {
  static displayName = 'Tooltip';

  state = {
    tooltipOpen: false
  };

  toggle = () => this.setState({
    tooltipOpen: !this.state.tooltipOpen
  });

  render() {
    return (
      <Tooltip
        placement={this.props.placement}
        isOpen={this.state.tooltipOpen}
        target={this.props.target}
        toggle={this.toggle}
      >
        {this.props.children}
      </Tooltip>
    );
  }
}

storiesOf('Tooltip', module)
  .addWithInfo('Live example', () => (
    <div>
      <p>
        Somewhere in here is a <a id="TooltipExample">tooltip</a>.
      </p>
      <TooltipExample
        placement={select('placement', ['top', 'left', 'bottom', 'right'], 'right')}
        target="TooltipExample"
      >
        Hello world!
      </TooltipExample>
    </div>
  )
);

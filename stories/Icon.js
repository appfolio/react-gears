import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { Button, Icon } from '../src';

storiesOf('Icon', module)
  .addWithInfo('Examples', () => (
    <h1>
      <Icon name="plus-circle" />
      <Icon name="minus-circle" />
      <Icon name="caret-up" />
      <Icon name="caret-down" />
      <Icon name="caret-left" />
      <Icon name="caret-right" />
      <Icon name="info-circle" />
      <Icon name="question-circle" />
      <Icon name="user" />
      <Icon name="print" />
      <Icon name="eye" />
      <Icon name="search" />
      <Icon name="calendar" />
      <Icon name="pencil" />
      <Icon name="pencil-square-o" />
      <Icon name="exclamation-triangle" />
      <Icon name="check" />
      <Icon name="check-circle" />
      <Icon name="times" />
      <Icon name="times-circle" />
      <Icon name="icon icon-ban" />
    </h1>
  ))
  .addWithInfo('with inline text', () => (
    <div>
      <p>
        <Icon name="print" /> Print
      </p>
      <p>
        <Icon name="plus-circle" /> Add Item
      </p>
      <p>
        <Icon name="pencil" /> Edit
      </p>
      <p>
        <Icon name="calendar" /> Lookup
      </p>
    </div>
  ))
  .addWithInfo('with buttons', () => (
    <div>
      <p>
        <Button>
          <Icon name="plus-circle" fixedWidth/> Add Item
        </Button>
      </p>
      <p>
        <Button color="primary">
          <Icon name="print" fixedWidth/> Print
        </Button>
      </p>
      <p>
        <Button color="success">
          <Icon name="pencil" fixedWidth/> Edit
        </Button>
      </p>
      <p>
        <Button color="info">
          <Icon name="calendar" fixedWidth/> Lookup
        </Button>
      </p>
    </div>
  ))
  .addWithInfo('with size', () => (
    <div>
      <Icon name="calendar" size="lg" /> lg<br />
      <Icon name="calendar" size="2x" /> 2x<br />
      <Icon name="calendar" size="3x" /> 3x<br />
      <Icon name="calendar" size="4x" /> 4x<br />
      <Icon name="calendar" size="5x" /> 5x<br />
    </div>
  ))
  .addWithInfo('with animation', () => (
    <div>
      <Icon name="spinner" spin size="3x" />
      <Icon name="circle-o-notch" spin size="3x" />
      <Icon name="refresh" spin size="3x" />
      <Icon name="cog" spin size="3x" />
      <Icon name="spinner" pulse size="3x" />
    </div>
  ))
  .addWithInfo('with rotate', () => (
    <div>
      <Icon name="female" rotate={90} /> 90<br />
      <Icon name="female" rotate={180} /> 180<br />
      <Icon name="female" rotate={270} /> 270<br />
    </div>))
  .addWithInfo('with other props', () => (
    <div className="bg-color-muted">
      <Icon name="angellist" size="4x" /> Default <br />
      <Icon name="angellist" size="4x" fixedWidth /> fixedWidth<br />
      <Icon name="angellist" size="4x" border /> border<br />
      <Icon name="angellist" size="4x" flip="horizontal" /> flip="horizontal"<br />
      <Icon name="angellist" size="4x" flip="vertical" /> flip="vertical"<br />
      <Icon name="angellist" size="4x" inverse /> inverse<br />
    </div>
  ));

//  className: React.PropTypes.string,
//  cssModule: React.PropTypes.object,
//  stack: React.PropTypes.oneOf(['1x', '2x'])`}

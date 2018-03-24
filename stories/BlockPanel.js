import React from 'react';
import { action, storiesOf } from '@storybook/react';

import { BlockPanel, Button, ButtonGroup, Icon, Input, InputGroup, InputGroupAddon, HelpBubble } from '../src';
import { boolean, select, text } from '@storybook/addon-knobs';

storiesOf('BlockPanel', module)
  .addWithInfo('Live example', () => (
    <BlockPanel
      title={text('title', 'Some simple content would go here')}
      onEdit={() => alert('Edit clicked!')}
      color={select('color', ['', 'primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light', 'dark'])}
      expandable={boolean('expandable', true)}
      hideOnToggle={boolean('hideOnToggle', false)}
      open={boolean('open', true)}
    >
      Now you see me.
    </BlockPanel>
  ))
  .addWithInfo('Initially closed', () => (
    <BlockPanel
      title={text('title', 'Some simple content would go here')}
      onEdit={() => alert('Edit clicked!')}
      expandable={boolean('expandable', true)}
      open={false}
    >
      Now you don't.
    </BlockPanel>
  ))
  .addWithInfo('onToggle', () => (
    <BlockPanel
      title={text('title', 'Click me you fool')}
      onToggle={action('onToggle')}
      expandable={boolean('expandable', true)}
    >
      Now you don't.
    </BlockPanel>
  ))
  .addWithInfo('components for title and controls', () => (
    <BlockPanel
      expandable
      title={
        <span className="text-uppercase">
          {text('title', 'Invoices')} <HelpBubble className="text-primary" title="What does this mean?">It means nothing.</HelpBubble>
        </span>
      }
      controls={[
        <InputGroup>
          <Input placeholder="Search" />
          <InputGroupAddon>
            <Icon name="search" />
          </InputGroupAddon>
        </InputGroup>,
        <ButtonGroup className="ml-1">
          <Button active>
            <Icon name="list" />
          </Button>
          <Button>
            <Icon name="th-list" />
          </Button>
        </ButtonGroup>
      ]}
    >
      Hello
    </BlockPanel>
  ));


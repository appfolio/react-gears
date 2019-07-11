import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import {
  BlockPanel,
  Button,
  ButtonGroup,
  Icon,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  HelpBubble
} from '../src';

storiesOf('BlockPanel', module)
  .add('Live example', () => (
    <BlockPanel
      title={text('title', 'Some simple content would go here')}
      onEdit={() => action('onEdit')}
      color={select('color', [
        '',
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'danger',
        'light',
        'dark'
      ])}
      expandable={boolean('expandable', true)}
      hideOnToggle={boolean('hideOnToggle', false)}
      open={boolean('open', true)}
    >
      Now you see me.
    </BlockPanel>
  ))
  .add('Initially closed', () => (
    <BlockPanel
      title={text('title', 'Some simple content would go here')}
      onEdit={() => action('onEdit')}
      expandable={boolean('expandable', true)}
      open={false}
    >
      Now you don't.
    </BlockPanel>
  ))
  .add('onToggle', () => (
    <BlockPanel
      title={text('title', 'Click me you fool')}
      onToggle={action('onToggle')}
      expandable={boolean('expandable', true)}
    >
      Now you don't.
    </BlockPanel>
  ))
  .add('components for title and controls', () => (
    <BlockPanel
      expandable
      title={
        <span className="text-uppercase">
          {text('title', 'Invoices')}{' '}
          <HelpBubble className="text-primary" title="What does this mean?">
            It means nothing.
          </HelpBubble>
        </span>
      }
      controls={[
        <InputGroup>
          <Input placeholder="Search" />
          <InputGroupAddon addonType="append">
            <InputGroupText className="p-0 px-2">
              <Icon name="search" />
            </InputGroupText>
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

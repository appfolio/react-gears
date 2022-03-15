import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import React from 'react';
import {
  BlockPanel,
  Button,
  ButtonGroup,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  HelpBubble,
  Icon,
  Input,
  InputGroup,
  InputGroupText,
  UncontrolledDropdown,
} from '../src';

export default {
  title: 'BlockPanel',
  component: BlockPanel,
};

export const LiveExample = () => (
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
      'dark',
    ])}
    expandable={boolean('expandable', true)}
    hideOnToggle={boolean('hideOnToggle', false)}
    open={boolean('open', true)}
  >
    Now you see me.
  </BlockPanel>
);

export const InitiallyClosed = () => (
  <BlockPanel
    title={text('title', 'Some simple content would go here')}
    onEdit={() => action('onEdit')}
    expandable={boolean('expandable', true)}
    open={false}
  >
    Now you don't.
  </BlockPanel>
);

export const OnToggle = () => (
  <BlockPanel
    title={text('title', 'Click me you fool')}
    onToggle={action('onToggle')}
    expandable={boolean('expandable', true)}
  >
    Now you don't.
  </BlockPanel>
);

export const ComponentsForTitleAndControls = () => (
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
        <InputGroupText className="p-0 px-2">
          <Icon name="search" />
        </InputGroupText>
      </InputGroup>,
      <ButtonGroup className="ms-1">
        <Button active>
          <Icon name="list" />
        </Button>
        <Button>
          <Icon name="th-list" />
        </Button>
      </ButtonGroup>,
    ]}
  >
    Hello
  </BlockPanel>
);

export const DropdownForControls = () => (
  <BlockPanel
    expandable
    title={<span className="text-uppercase">{text('title', 'Invoices')}</span>}
    controls={[
      <UncontrolledDropdown>
        <DropdownToggle
          id="toggle"
          outline={false}
          color="link"
          className="py-0 px-2"
          role="button"
          title="More options"
        >
          <Icon name="ellipsis-h" size="lg" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Eenie</DropdownItem>
          <DropdownItem>Meenie</DropdownItem>
          <DropdownItem>Min</DropdownItem>
          <DropdownItem>Delta</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>,
    ]}
  >
    The symbolic resource $all, located at the service root, identifies the collection of all
    entities in a service, i.e. the union of all entity sets plus all singletons. This symbolic
    resource is of type Collection(Edm.EntityType) and allows the $search system query option plus
    all other query options applicable to collections of entities. The $all resource can be appended
    with a path segment containing the qualified name of an entity type in order to restrict the
    collections to entities of that type. Query options such as $select, $filter, $expand and
    $orderby can be applied to this restricted set according to the specified type. Example 37: all
    entities in a service that somehow match red
  </BlockPanel>
);

export const StickyBlockPanel = () => (
  <BlockPanel expandable stickyId="rememberMe" title={text('title', 'I remember open/close')}>
    I feel sticky, oh so sticky, I feel sticky, and witty, and wise.
  </BlockPanel>
);

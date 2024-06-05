import { action } from '@storybook/addon-actions';
import React from 'react';
import Button from '../Button/Button';
import ButtonGroup from '../Button/ButtonGroup';
import DropdownItem from '../Dropdown/DropdownItem';
import DropdownMenu from '../Dropdown/DropdownMenu';
import DropdownToggle from '../Dropdown/DropdownToggle';
import UncontrolledDropdown from '../Dropdown/UncontrolledDropdown';
import HelpBubble from '../HelpBubble/HelpBubble';
import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import InputGroup from '../InputGroup/InputGroup';
import InputGroupText from '../InputGroup/InputGroupText';
import BlockPanel from './BlockPanel';

export default {
  title: 'BlockPanel',
  component: BlockPanel,
  parameters: {
    sourceLink: 'BlockPanel/BlockPanel.tsx',
  },
};

export const LiveExample = (args) => (
  <BlockPanel {...args}>
    {args.title ? (
      <div>
        The header is shown when a <em>title</em> prop is provided
      </div>
    ) : (
      <div>
        The header is removed when the <em>title</em> prop is <em>undefined</em>
      </div>
    )}
  </BlockPanel>
);
LiveExample.args = {
  title: 'Some simple content would go here',
  onEdit: action('onEdit'),
  color: '',
  expandable: true,
  hideOnToggle: false,
  open: true,
};
LiveExample.argTypes = {
  color: {
    options: ['', 'primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light', 'dark'],
    control: { type: 'select' },
  },
};

export const InitiallyClosed = (args) => (
  <BlockPanel open={false} {...args}>
    Now you don&apos;t.
  </BlockPanel>
);
InitiallyClosed.args = {
  title: 'Some simple content would go here',
  onEdit: action('onEdit'),
  expandable: true,
};

export const OnToggle = (args) => <BlockPanel {...args}>Now you don&apos;t.</BlockPanel>;
OnToggle.args = {
  title: 'Click me you fool',
  onToggle: action('onToggle'),
  expandable: true,
};

export const ComponentsForTitleAndControls = ({ title }) => (
  <BlockPanel
    expandable
    title={
      <span className="text-uppercase">
        {title}{' '}
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
          <Icon name="table-list" />
        </Button>
      </ButtonGroup>,
    ]}
  >
    Hello
  </BlockPanel>
);
ComponentsForTitleAndControls.args = {
  title: 'Invoices',
};

export const DropdownForControls = ({ title }) => (
  <BlockPanel
    expandable
    title={<span className="text-uppercase">{title}</span>}
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
          <Icon name="ellipsis" size="lg" />
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
DropdownForControls.args = {
  title: 'Invoices',
};

export const StickyBlockPanel = ({ title }) => (
  <BlockPanel expandable stickyId="rememberMe" title={title}>
    I feel sticky, oh so sticky, I feel sticky, and witty, and wise.
  </BlockPanel>
);
StickyBlockPanel.args = {
  title: 'I remember open/close',
};

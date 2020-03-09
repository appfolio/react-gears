import React from 'react';
import { addParameters, configure, setAddon, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import { themes } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Col,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from '../src';
import allThemes from './themes';

addDecorator(withA11y)
addParameters({
  a11y: {
    element: '#story-root'
  }
});

addDecorator(withInfo({
  header: false,
  inline: true
}));

// Option defaults.
addParameters({
  options: {
    theme: themes.dark,
  },
});

import pkg from '../package.json';

import './addons.js';

setOptions({
  name: `react-gears ${pkg.version}`,
  url: 'https://github.com/appfolio/react-gears',
  showAddonPanel: true,
  addonPanelInRight: true,
  downPanel: 'kadirahq%2Fstorybook-addon-knobs'
});

const changeTheme = url => {
  const link = document.getElementById('theme');
  link.href = url;

  try {
    localStorage.storybookTheme = url;
  } catch (err) {
    // Safari private mode
  }
};

const ThemeLink = props => {
  return (
    <NavLink href="#" onClick={() => changeTheme(props.url)}>
      {props.children}
    </NavLink>
  );
};

addDecorator(
  withKnobs({
    escapeHTML: false,
  })
);

addDecorator((story, info) => (
  <div>
    <Navbar color="light">
      <Nav>
        {Object.keys(allThemes).map(name => {
          const links = allThemes[name];
          return (
            <NavItem>
              <UncontrolledDropdown>
                <DropdownToggle nav caret>
                  {name}
                </DropdownToggle>
                <DropdownMenu>
                  {links.map((theme, i) => (
                    <DropdownItem>
                      <ThemeLink key={i} url={theme.url}>
                        {theme.name}
                      </ThemeLink>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
          );
        })}
      </Nav>
    </Navbar>
    <Container fluid className="my-5">
      <Col xl="7">
        <header className="mb-5">
          <h1 className="display-4 mb-3">{info.kind}</h1>
          <h2 className="lead">{info.story}</h2>
        </header>
        <section>{story()}</section>
      </Col>
    </Container>
  </div>
));

addDecorator((Story) => (
  <Story />
))

function loadStories() {
  require('../stories');

  const storybookTheme = localStorage.storybookTheme;

  if (storybookTheme) {
    changeTheme(storybookTheme);
  }
}

configure(loadStories, module);

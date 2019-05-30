import React from 'react';
import infoAddon, { setDefaults } from '@storybook/addon-info';
import {
  Button,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  NavbarToggler,
  Col,
  Container,
  UncontrolledCollapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from '../src';
import { configure, setAddon, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';

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
  // TODO reenable after 4.0.0 release
  // try {
  //   localStorage.storybookTheme = index;
  // } catch (err) {
  //   // Safari private mode
  // }
};

const ThemeLink = props => {
  return (
    <NavLink href="#" onClick={() => changeTheme(props.url)}>
      {props.children}
    </NavLink>
  );
};

const APM_THEMES = [
  {
    name: 'APM/Saffron',
    url:
      'https://d36t0nm30n26wn.cloudfront.net/saffron/4.3.1/bootstrap-saffron.min.css'
  },
  {
    name: 'APM/Cayenne',
    url:
      'https://d36t0nm30n26wn.cloudfront.net/cayenne/bootstrap-cayenne.min.css'
  },
  {
    name: 'APM/Listings',
    url:
      'https://d36t0nm30n26wn.cloudfront.net/listings/bootstrap-listings.min.css'
  },
  {
    name: 'APM/OPortal',
    url:
      'https://d36t0nm30n26wn.cloudfront.net/oportal/bootstrap-oportal.min.css'
  },
  {
    name: 'APM/Insights',
    url:
      'https://d36t0nm30n26wn.cloudfront.net/insights/bootstrap-insights.min.css'
  },
  {
    name: 'APM/Dream',
    url: 'https://d36t0nm30n26wn.cloudfront.net/dream/bootstrap-dream.min.css'
  }
];

const MYCASE_THEMES = [
  {
    name: 'MyCase',
    url: 'https://d36t0nm30n26wn.cloudfront.net/mycase/bootstrap-mycase.min.css'
  },
  {
    name: 'MyCase Focus',
    url: 'https://assets.mycase.com/packs/bootstrap-mycase-focus-54fbc74952.min.css'
  }
];

const BS4_THEMES = [
  {
    name: 'Default',
    url:
      'https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css'
  },
  {
    name: 'Material',
    url:
      'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/materia/bootstrap.min.css'
  },
  {
    name: 'Metro',
    url:
      'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/cosmo/bootstrap.min.css'
  },
  {
    name: 'Dark',
    url:
      'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/darkly/bootstrap.min.css'
  },
  {
    name: 'Sketch',
    url:
      'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/sketchy/bootstrap.min.css'
  }
];

addDecorator(withKnobs);

addDecorator((story, info) => (
  <div>
    <Navbar color="light">
      <Nav>
        <NavItem>
          <UncontrolledDropdown>
            <DropdownToggle nav caret>
              APM
            </DropdownToggle>
            <DropdownMenu>
              {APM_THEMES.map((theme, i) => (
                <DropdownItem>
                  <ThemeLink key={i} url={theme.url}>
                    {theme.name}
                  </ThemeLink>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
        </NavItem>
        <NavItem>
          <UncontrolledDropdown>
            <DropdownToggle nav caret>
              MyCase
            </DropdownToggle>
            <DropdownMenu>
              {MYCASE_THEMES.map((theme, i) => (
                <DropdownItem>
                  <ThemeLink key={i} url={theme.url}>
                    {theme.name}
                  </ThemeLink>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
        </NavItem>
        <NavItem>
          <UncontrolledDropdown>
            <DropdownToggle nav caret>
              Bootstrap
            </DropdownToggle>
            <DropdownMenu>
              {BS4_THEMES.map((theme, i) => (
                <DropdownItem>
                  <ThemeLink key={i} url={theme.url}>
                    {theme.name}
                  </ThemeLink>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </UncontrolledDropdown>
        </NavItem>
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

setAddon(infoAddon);
setDefaults({
  header: false,
  inline: true
});

function loadStories() {
  require('../stories');

  // const storybookTheme = parseInt(localStorage.storybookTheme);

  // if (storybookTheme) {
  //   changeTheme(storybookTheme);
  // }
}

configure(loadStories, module);

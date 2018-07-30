import React from 'react';
import infoAddon, { setDefaults } from '@storybook/addon-info';
import { Button, ButtonGroup, Col, Container } from '../src';
import { configure, setAddon, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';

import pkg from '../package.json';

import './addons.js';

setOptions({
  name: `react-gears ${pkg.version}`,
  url: 'https://github.com/appfolio/react-gears',
  showDownPanel: true,
  downPanelInRight: true,
  downPanel: 'kadirahq%2Fstorybook-addon-knobs'
});

const changeTheme = index => {
  const link = document.getElementById('theme');
  link.href = THEMES[index].url;
  try {
    localStorage.storybookTheme = index;
  } catch (err) {
    // Safari private mode
  }
}

const ThemeLink = props => {
  return <Button color="link" onClick={() => changeTheme(props.index)}>{props.children}</Button>
}

const THEMES = [
  { name: 'APM/Saffron', url: 'https://d36t0nm30n26wn.cloudfront.net/saffron/4.0.0-rc.6/bootstrap-saffron.min.css' },
  { name: 'MyCase', url: 'https://d36t0nm30n26wn.cloudfront.net/mycase/bootstrap-mycase.min.css' },
  { name: 'APM/Cayenne', url: 'https://d36t0nm30n26wn.cloudfront.net/cayenne/bootstrap-cayenne.min.css' },
  { name: 'APM/Listings', url: 'https://d36t0nm30n26wn.cloudfront.net/listings/bootstrap-listings.min.css' },
  { name: 'APM/OPortal', url: 'https://d36t0nm30n26wn.cloudfront.net/oportal/bootstrap-oportal.min.css' },
  { name: 'APM/Dream', url: 'https://d36t0nm30n26wn.cloudfront.net/dream/bootstrap-dream.min.css' },
  { name: 'Bootstrap default', url: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css' },
  { name: 'Material', url: 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/materia/bootstrap.min.css' },
  { name: 'Metro', url: 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/cosmo/bootstrap.min.css' },
  { name: 'Dark', url: 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/darkly/bootstrap.min.css' },
  { name: 'Sketch', url: 'https://stackpath.bootstrapcdn.com/bootswatch/4.1.2/sketchy/bootstrap.min.css' }
];

addDecorator(withKnobs);

addDecorator((story, info) => (
<div>
  <ButtonGroup size="sm">
    {THEMES.map((theme, i) => <ThemeLink key={i} index={i}>{theme.name}</ThemeLink>)}
  </ButtonGroup>
  <Container fluid className="my-5">
    <Col xl="7">
      <header className="mb-5">
        <h1 className="display-4 mb-3">{info.kind}</h1>
        <h2 className="lead">{info.story}</h2>
      </header>
      <section>
        {story()}
      </section>
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

  const storybookTheme = parseInt(localStorage.storybookTheme);

  if (storybookTheme in THEMES) {
    changeTheme(storybookTheme);
  }
}

configure(loadStories, module);

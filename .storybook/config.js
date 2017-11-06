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
  { name: 'APM/Saffron', url: 'https://pa.cdn.appfolio.com/appfolio/assets/styles/saffron/bootstrap-saffron.min.css' },
  { name: 'MyCase', url: 'https://s3.amazonaws.com/com.mycaseinc.dev-share/paulus/bootstrap-mycase.min.20170628.css' },
  { name: 'APM/Saffron 3 Preview', url: 'https://s3-us-west-2.amazonaws.com/appfolio-frontend-dev/styles/preview/bootstrap-saffron.min.css' },
  { name: 'Bootstrap default', url: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css' },
  // TODO Re-enable after update to BS4 Beta:
  // { name: 'Material', url: 'https://bootswatch.com/4-alpha/materia/bootstrap.min.css' },
  // { name: 'Metro', url: 'https://bootswatch.com/4-alpha/cosmo/bootstrap.min.css' },
  // { name: 'Dark', url: 'https://bootswatch.com/4-alpha/darkly/bootstrap.min.css' }
];

addDecorator(withKnobs);

addDecorator((story, info) => (
<div>
  <ButtonGroup size="sm">
    {THEMES.map((theme, i) => <ThemeLink key={i} index={i}>{theme.name}</ThemeLink>)}
  </ButtonGroup>
  <Container fluid className="m-5">
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

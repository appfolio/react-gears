import React from 'react';
import infoAddon from '@kadira/react-storybook-addon-info';
import { Button, ButtonGroup, Container } from '../src';
import { configure, setAddon, addDecorator } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import { withKnobs } from '@kadira/storybook-addon-knobs';

import pkg from '../package.json';

import './addons.js';

setOptions({
  name: `react-gears ${pkg.version}`,
  url: 'https://github.com/gthomas-appfolio/xanthous',
  showDownPanel: true,
  downPanelInRight: true,
  downPanel: 'kadirahq%2Fstorybook-addon-knobs'
});

const ThemeLink = props => {
  const changeTheme = url => {
    const link = document.getElementById('theme');
    link.href = url;
  }

  return <Button color="link" onClick={() => changeTheme(props.url)}>{props.children}</Button>
}

const THEMES = [
  { name: 'APM/Saffron', url: 'https://s3-us-west-2.amazonaws.com/appfolio-frontend-dev/styles/bootstrap.css' },
  { name: 'Bootstrap', url: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css' },
  { name: 'Admire', url: 'http://dev.lorvent.com/admire/css/components.css' },
  { name: 'Paper', url: 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/paper/bootstrap.min.css' },
  { name: 'Superhero', url: 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/superhero/bootstrap.min.css' },
];

addDecorator(withKnobs);

addDecorator((story, info) => (
<div>
  <ButtonGroup size="sm">
    {THEMES.map((theme, i) => <ThemeLink key={i} url={theme.url}>{theme.name}</ThemeLink>)}
  </ButtonGroup>
  <Container fluid className="m-5">
    <header className="mb-5">
      <h1 className="display-4 mb-3">{info.kind}</h1>
      <h2 className="lead">{info.story}</h2>
    </header>
    <section>
      {story()}
    </section>
  </Container>
</div>
));

setAddon(infoAddon);

function loadStories() {
  require('../stories');
}

configure(loadStories, module);

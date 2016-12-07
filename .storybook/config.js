import React from 'react';
import infoAddon from '@kadira/react-storybook-addon-info';
import { Button,ButtonGroup, Container } from '../src';
import { configure, setAddon, addDecorator } from '@kadira/storybook';

const ThemeLink = props => {
  const changeTheme = url => {
    const link = document.getElementById('theme');
    link.href = url;
  }

  return <Button onClick={() => changeTheme(props.url)}>{props.children}</Button>
}

const THEMES = [
  { url: 'https://s3-us-west-2.amazonaws.com/appfolio-frontend-dev/styles/bootstrap.css', name: 'APM' },
  { url: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css', name: 'Bootstrap' }
//  { url: 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cerulean/bootstrap.min.css', name: 'Cerulean' },
//  { url: 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cosmo/bootstrap.min.css', name: 'Cosmo' },
//  { url: 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cyborg/bootstrap.min.css', name: 'Cyborg' },
//  { url: 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/darkly/bootstrap.min.css', name: 'Darkly' },
//  { url: 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/flatly/bootstrap.min.css', name: 'Flatly' },
//  { url: 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/journal/bootstrap.min.css', name: 'Journal' },
//  { url: 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/lumen/bootstrap.min.css', name: 'Lumen' },
//  { url: 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/paper/bootstrap.min.css', name: 'Paper' },
//  { url: 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/readable/bootstrap.min.css', name: 'Readable' },
//  { url: 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/sandstone/bootstrap.min.css', name: 'Sandstone' },
//  { url: 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/simplex/bootstrap.min.css', name: 'Simplex' },
//  { url: 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/slate/bootstrap.min.css', name: 'Slate' },
//  { url: 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/spacelab/bootstrap.min.css', name: 'Spacelab' },
//  { url: 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/superhero/bootstrap.min.css', name: 'Superhero' },
//  { url: 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/united/bootstrap.min.css', name: 'United' },
//  { url: 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/yeti/bootstrap.min.css', name: 'Yeti' }
];
addDecorator((story, info) => (
  <Container fluid className="p-5">
    <ButtonGroup>
      {THEMES.map(theme => <ThemeLink url={theme.url}>{theme.name}</ThemeLink>)}
    </ButtonGroup>
    <hr />
    <h1>{info.kind}</h1>
    <h3 className="text-muted">{info.story}</h3>
    <hr />
    {story()}
  </Container>
));

setAddon(infoAddon);

function loadStories() {
  require('../stories');
}

configure(loadStories, module);

import React from 'react';
import infoAddon from '@kadira/react-storybook-addon-info';
import { Button,ButtonGroup, Container } from '../src';
import { configure, setAddon, addDecorator } from '@kadira/storybook';

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

addDecorator((story, info) => (<div>
  <ButtonGroup size="sm">
    {THEMES.map(theme => <ThemeLink url={theme.url}>{theme.name}</ThemeLink>)}
  </ButtonGroup>
  <Container fluid className="p-5">
    <hr />
    <h1>{info.kind}</h1>
    <h3 className="text-muted">{info.story}</h3>
    <hr />
    {story()}
  </Container>
  </div>
));

setAddon(infoAddon);

function loadStories() {
  require('../stories');
}

configure(loadStories, module);

import React from 'react';
import infoAddon from '@kadira/react-storybook-addon-info';
import { Container } from '../src';
import { configure, setAddon, addDecorator } from '@kadira/storybook';

import 'bootstrap/dist/css/bootstrap.css';

addDecorator((story, info) => (
  <Container className="mt-2">
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

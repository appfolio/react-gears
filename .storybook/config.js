import InfoAddon from '@kadira/react-storybook-addon-info';
import React from 'react';
import { Container } from '../src';
import { configure, setAddon, addDecorator } from '@kadira/storybook';

addDecorator((story) => (
  <Container className="m-t-2">
    {story()}
  </Container>
));

setAddon(InfoAddon);

function loadStories() {
  require('../stories');
}

configure(loadStories, module);

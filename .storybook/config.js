import React from 'react';
import infoAddon from '@kadira/react-storybook-addon-info';
import { Container } from '../src';
import { configure, setAddon, addDecorator } from '@kadira/storybook';

addDecorator((story, info) => (
  <Container fluid className="m-5">
    <header className="mb-5">
      <h1 className="display-4 mb-3">{info.kind}</h1>
      <h2 className="lead">{info.story}</h2>
    </header>
    <section style={{ maxWidth: '700px' }}>
      {story()}
    </section>
  </Container>
));

setAddon(infoAddon);

function loadStories() {
  require('../stories');
}

configure(loadStories, module);

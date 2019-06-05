import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import ScrollContainer from '../src/components/ScrollContainer';

storiesOf('ScrollContainer', module)
  .addWithInfo('Default', () => (
    <div>
      <ScrollContainer height={number('height')}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Flag-map_of_the_world.svg/1000px-Flag-map_of_the_world.svg.png" alt="Map" />
      </ScrollContainer>
    </div>
  ))
  .addWithInfo('Max height', () => (
    <div>
      <ScrollContainer height={number('height', 300)}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Flag-map_of_the_world.svg/1000px-Flag-map_of_the_world.svg.png" alt="Map" />
      </ScrollContainer>
    </div>
  ))
  .addWithInfo('custom theme', () => (
    <ScrollContainer
      height={number('height', 300)}
      theme={{
        overflowTop: 'border-dark border-top',
        overflowBottom: 'border-dark border-bottom',
        overflowLeft: 'border-dark border-left',
        overflowRight: 'border-dark border-right'
      }}
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Flag-map_of_the_world.svg/1000px-Flag-map_of_the_world.svg.png" alt="Map" />
    </ScrollContainer>
  ));

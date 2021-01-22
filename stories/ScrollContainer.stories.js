import React from 'react';
import { number } from '@storybook/addon-knobs';
import ScrollContainer from '../src/components/ScrollContainer';

export default {
  title: 'ScrollContainer',
  component: ScrollContainer,
};

export const Default = () => (
  <div>
    <ScrollContainer height={number('height')}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Flag-map_of_the_world.svg/1000px-Flag-map_of_the_world.svg.png" alt="Map" />
    </ScrollContainer>
  </div>
);

export const MaxHeight = () => (
  <div>
    <ScrollContainer height={number('height', 300)}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Flag-map_of_the_world.svg/1000px-Flag-map_of_the_world.svg.png" alt="Map" />
    </ScrollContainer>
  </div>
);

export const CustomTheme = () => (
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
);

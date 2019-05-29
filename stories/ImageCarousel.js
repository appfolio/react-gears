import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number } from '@storybook/addon-knobs';

import { ImageCarousel } from '../src';

const items = [
  {
    src: 'https://picsum.photos/id/1/800/600',
    altText: 'Slide 1'
  },
  {
    src: 'https://picsum.photos/id/2/1000/750',
    altText: 'Slide 2'
  },
  {
    src: 'https://picsum.photos/id/4/1200/900',
    altText: 'Slide 3'
  },
  {
    src: 'https://picsum.photos/id/5/1000/750',
    altText: 'Slide 4'
  },
  {
    src: 'https://picsum.photos/id/6/1200/900',
    altText: 'Slide 5',
  }
];

storiesOf('ImageCarousel', module)
  .addWithInfo('default props', () => (
    <ImageCarousel
      autoPlay={boolean('autoPlay', ImageCarousel.defaultProps.autoPlay)}
      controls={boolean('controls', true)}
      fade={boolean('fade', ImageCarousel.defaultProps.fade)}
      slide={boolean('slide', ImageCarousel.defaultProps.slide)}
      index={number('index', 0)}
      indicators={boolean('indicators', true)}
      interval={number('interval', ImageCarousel.defaultProps.interval)}
      isOpen={boolean('isOpen', true)}
      items={items}
    />
  ));

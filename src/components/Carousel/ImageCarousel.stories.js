import { boolean, number } from '@storybook/addon-knobs';
import React from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import ImageCarousel from './ImageCarousel';

const items = [
  {
    src: 'https://picsum.photos/id/1/800/600',
    altText: 'Slide 1',
  },
  {
    src: 'https://picsum.photos/id/2/1000/750',
    altText: 'Slide 2',
  },
  {
    src: 'https://picsum.photos/id/4/1200/900',
    altText: 'Slide 3',
  },
  {
    src: 'https://picsum.photos/id/5/1000/750',
    altText: 'Slide 4',
  },
  {
    children: (
      <Jumbotron className="h-100">
        <h1>Wow</h1>
        <p>Look you can put any React node in the carousel too.</p>
        <img alt="Success" src="https://upload.wikimedia.org/wikipedia/en/f/ff/SuccessKid.jpg" />
      </Jumbotron>
    ),
    altText: 'Slide 5',
  },
];

export default {
  title: 'Carousel',
  component: ImageCarousel,
};

export const DefaultProps = () => (
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
);

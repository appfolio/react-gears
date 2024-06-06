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
  title: 'ImageCarousel',
  component: ImageCarousel,
  parameters: {
    sourceLink: 'Carousel/ImageCarousel.js',
    docs: {
      // contain modal within iframe to enable user interaction
      // https://github.com/storybookjs/storybook/issues/16949#issuecomment-1106586570
      // unfortunately, it seems to break the controls functionality, but only in the Docs view
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
  argTypes: {
    interval: {
      control: 'number',
    },
  },
};

export const DefaultProps = (args) => <ImageCarousel items={items} {...args} />;
DefaultProps.args = {
  autoPlay: ImageCarousel.defaultProps.autoPlay,
  controls: true,
  fade: ImageCarousel.defaultProps.fade,
  slide: ImageCarousel.defaultProps.slide,
  index: 0,
  indicators: true,
  interval: ImageCarousel.defaultProps.interval,
  isOpen: true,
};

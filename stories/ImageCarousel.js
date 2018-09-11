import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import { ImageCarousel } from '../src';

const items = [
  {
    src: 'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/18q1/699327/2018-lamborghini-huracan-performante-test-review-car-and-driver-photo-702889-s-original.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: 'http://media.caranddriver.com/images/17q2/678295/2018-mclaren-720s-first-drive-review-car-and-driver-photo-680456-s-original.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/ferrari-458-speciale-rt-221-31.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

storiesOf('ImageCarousel', module)
  .addWithInfo('default props', () => (
    <ImageCarousel
      items={items}
      fade={boolean('fade', ImageCarousel.defaultProps.fade)}
      isOpen={boolean('isOpen', true)}
      keyboard={boolean('keyboard', ImageCarousel.defaultProps.keyboard)}
      indicators={boolean('indicators', ImageCarousel.defaultProps.indicators)}
      controls={boolean('controls', ImageCarousel.defaultProps.controls)}
      autoplay={boolean('autoplay', ImageCarousel.defaultProps.autoplay)}
    />
  ));

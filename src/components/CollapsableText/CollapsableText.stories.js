import { boolean, number, text } from '@storybook/addon-knobs';
import React from 'react';
import Icon from '../Icon/Icon';
import CollapsableText from './CollapsableText';

const loremIpsum = `Units Interested: 
Discover the epitome of modern living in our exquisite 2-bedroom, 2-bathroom luxury retreat, thoughtfully designed for ultimate comfort and style. 
<a href="http://localhost:3000/properties/256/units/2534">1424N</a> This spacious residence boasts a contemporary open-concept layout, high-quality finishes, and an abundance o, 
<a href="http://localhost:3000/properties/256/units/2534">1S</a>This should also show up 
`;

export default {
  title: 'CollapsableText',
  component: CollapsableText,
};

export const LiveExample = () => (
  <CollapsableText
    collapsed={boolean('collapsed', CollapsableText.defaultProps.collapsed)}
    maxLength={number('maxLength', CollapsableText.defaultProps.maxLength)}
    moreLabel={text('showMore', CollapsableText.defaultProps.moreLabel)}
    lessLabel={text('lessLabel', CollapsableText.defaultProps.lessLabel)}
  >
    {loremIpsum}
  </CollapsableText>
);

export const ShorterThanMaxLength = () => (
  <div>
    <CollapsableText maxLength={number('maxLength', 2048)}>{loremIpsum}</CollapsableText>
  </div>
);

export const CustomComponents = () => (
  <div>
    <CollapsableText
      moreLabel={<Icon name="circle-plus" className="text-success" />}
      lessLabel={<Icon name="circle-minus" className="text-danger" />}
    >
      {loremIpsum}
    </CollapsableText>
  </div>
);

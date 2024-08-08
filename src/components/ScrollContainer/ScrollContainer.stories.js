import React from 'react';
import ScrollContainer from './ScrollContainer';

const meta = {
  title: 'ScrollContainer',
  component: ScrollContainer,
  parameters: {
    sourceLink: 'ScrollContainer/ScrollContainer.tsx',
  },
  argTypes: {
    height: {
      control: {
        type: 'number',
      },
    },
  },
};
export default meta;

export const Default = (args) => (
  <div>
    <ScrollContainer {...args}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/f7/World_map_2011_CIA_World_Factbook.svg"
        alt="Map"
      />
    </ScrollContainer>
  </div>
);
Default.args = {
  height: undefined,
};

export const MaxHeight = (args) => (
  <div>
    <ScrollContainer {...args}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/f7/World_map_2011_CIA_World_Factbook.svg"
        alt="Map"
      />
    </ScrollContainer>
  </div>
);
MaxHeight.args = {
  height: 300,
};

export const SaveScrollPosition = (args) => (
  <div>
    <ScrollContainer {...args}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/f7/World_map_2011_CIA_World_Factbook.svg"
        alt="Map"
      />
    </ScrollContainer>
  </div>
);
SaveScrollPosition.args = {
  height: 500,
  scrollPositionKey: 'story-example',
};

export const CustomTheme = (args) => (
  <ScrollContainer
    theme={{
      overflowTop: 'border-dark border-top',
      overflowBottom: 'border-dark border-bottom',
      overflowLeft: 'border-dark border-start',
      overflowRight: 'border-dark border-end',
    }}
    {...args}
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/f/f7/World_map_2011_CIA_World_Factbook.svg"
      alt="Map"
    />
  </ScrollContainer>
);
CustomTheme.args = {
  height: 300,
};

module.exports = {
  stories: ['./stories/Welcome.stories.js', '../src/**/*.stories.js', './stories/More.stories.js'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        controls: false,
        docs: false,
      },
    },
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          enforce: 'pre',
        },
      },
    },
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-a11y',
      options: {
        element: '#story-root',
      },
    },
  ],
};

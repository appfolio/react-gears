module.exports = {
  stories: [
    './stories/Welcome.stories.js',
    '../src/**/*.stories.{js,tsx}',
    './stories/More.stories.js',
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        controls: false,
        docs: false,
      },
    },
    '@storybook/addon-controls',
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
  framework: '@storybook/react',
};

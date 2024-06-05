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
    '@storybook/addon-actions',
    'storybook-source-link',
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook',
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

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
};

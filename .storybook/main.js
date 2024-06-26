module.exports = {
  stories: [
    './stories/Welcome.stories.js',
    '../src/**/*.stories.{js,tsx}',
    './stories/More.stories.js',
  ],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    'storybook-source-link',
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook',
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

  typescript: {
    reactDocgen: false,
  },
};

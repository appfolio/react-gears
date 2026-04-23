module.exports = {
  stories: [
    './stories/Welcome.stories.js',
    '../src/**/*.stories.{js,tsx}',
    './stories/More.stories.js',
  ],

  addons: [
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook',
    {
      name: '@storybook/addon-a11y',
      options: {
        context: '#story-root',
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

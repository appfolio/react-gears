const path = require('path');

module.exports = {
  stories: ['../stories/index.js'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        controls: false,
        docs: false
      }
    },
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          include: [path.resolve(__dirname, '../stories')], // You can specify directories
          enforce: 'pre'
        }
      }
    },
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-a11y',
      options: {
        element: '#story-root'
      }
    }
  ]
};

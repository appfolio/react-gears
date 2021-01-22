import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import pkg from '../package.json';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: `react-gears ${pkg.version}`,
    brandUrl: 'https://github.com/appfolio/react-gears',
  })
});

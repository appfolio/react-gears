import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import { Media } from '../src';

storiesOf('Media', module)
  .add('Live example', () => (
    <Media>
      <Media left href="https://github.com/gthomas-appfolio">
        <Media
          className="mr-2 rounded"
          object
          src="https://avatars1.githubusercontent.com/u/18536746?s=460&v=4"
          alt="Gary"
        />
      </Media>
      <Media body>
        <Media heading>
          Media heading
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
  ));

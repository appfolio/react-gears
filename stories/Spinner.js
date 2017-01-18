import React from 'react';
import { Spinner } from '../src';
import { storiesOf } from '@kadira/storybook';

storiesOf('Spinner', module)
  .addWithInfo('Default', () => (
    <div>
      <Spinner style={{ fontSize: 2 }} />
      <Spinner style={{ fontSize: 4 }} />
      <Spinner style={{ fontSize: 8 }} />
      <Spinner />
      <Spinner style={{ fontSize: 16 }} />
      <Spinner style={{ fontSize: 20 }} />
    </div>
  ))
  .addWithInfo('This is what it used to look like', () => (
    <div>
      <img width="10" src="https://qa.qa.appfolio.com/assets/saffron/blue_spinner-4cde7d33f280e9454273abe82e4674f90959e137f28f2c195b28fb184e9e9ead.gif" />
      <img width="20" src="https://qa.qa.appfolio.com/assets/saffron/blue_spinner-4cde7d33f280e9454273abe82e4674f90959e137f28f2c195b28fb184e9e9ead.gif" />
      <img width="40" src="https://qa.qa.appfolio.com/assets/saffron/blue_spinner-4cde7d33f280e9454273abe82e4674f90959e137f28f2c195b28fb184e9e9ead.gif" />
      <img width="60" src="https://qa.qa.appfolio.com/assets/saffron/blue_spinner-4cde7d33f280e9454273abe82e4674f90959e137f28f2c195b28fb184e9e9ead.gif" />
      <img width="80" src="https://qa.qa.appfolio.com/assets/saffron/blue_spinner-4cde7d33f280e9454273abe82e4674f90959e137f28f2c195b28fb184e9e9ead.gif" />
      <img width="100" src="https://qa.qa.appfolio.com/assets/saffron/blue_spinner-4cde7d33f280e9454273abe82e4674f90959e137f28f2c195b28fb184e9e9ead.gif" />
    </div>
  ));

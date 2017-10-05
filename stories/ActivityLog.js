import React from 'react';
import { storiesOf } from '@storybook/react';
import { ActivityLog, Activity } from '../src';

storiesOf('ActivityLog', module)
  .addWithInfo('with props', () => (
    <ActivityLog>
      <Activity createdAt={new Date()} action='Created' createdBy='services' />
      <Activity createdAt={new Date()} action='Edited' createdBy='Jane Doe' />
      <Activity createdAt={new Date()} action='Published' createdBy='Martha (Leasing)' />
    </ActivityLog>
  ))
  .addWithInfo('Adding custom components', () => (
    <ActivityLog>
      <Activity createdAt={new Date()} action='Edited' createdBy='Jane Doe' />
      <Activity createdAt={new Date()} action='Published' createdBy='Martha (Leasing)' />
      <Activity createdAt={new Date()} action='Created' createdBy='services'>
        Please contact <a href="mailto:william@awesomepm.com">William</a> for details.
      </Activity>
    </ActivityLog>
  ));

import React from 'react';
import { action, storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { ActivityLog, Activity } from '../src';

const r = n => Math.ceil(Math.random() * n);

storiesOf('ActivityLog', module)
  .addWithInfo('with props', () => (
    <ActivityLog>
      <Activity date={new Date(2017, r(12), r(28), r(24), r(60))} action="Created" by="Services" />
      <Activity date={new Date(2017, r(12), r(28), r(24), r(60))} action="Edited" />
      <Activity date={new Date(2017, r(12), r(28), r(24), r(60))} action="Edited" by="Gary">
        He messed this up
      </Activity>
      <Activity date={new Date(2017, r(12), r(28), r(24), r(60))} />
      <Activity date={new Date()}>
        Nothing to see here, move on
      </Activity>
    </ActivityLog>
  ))
  .addWithInfo('Adding custom components', () => (
    <ActivityLog>
      <Activity date={new Date()} action="Edited" by="Jane Doe" />
      <Activity
        date={new Date()}
        action="Published"
        by="Martha (Leasing)"
      />
      <Activity date={new Date()} action="Created" by="services">
        Please contact <a href="mailto:william@awesomepm.com">William</a> for
        details.
      </Activity>
    </ActivityLog>
  ))
  .addWithInfo('Activity', () => (
    <Activity
      action={text('action', 'Published')}
      active={boolean('active', false)}
      by={text('by', 'Joel Bandi')}
      color={select('color', ['', 'info', 'success', 'warning', 'danger'], 'primary')}
      date={new Date()}
      dateFormat={text('dateFormat', Activity.defaultProps.dateFormat)}
      disabled={boolean('disabled', false)}
      onClick={action('onClick')}
    >
      {text('content')}
    </Activity>
  ));

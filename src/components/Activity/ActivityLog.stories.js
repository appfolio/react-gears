import React from 'react';
import Activity from './Activity';
import ActivityLog from './ActivityLog';

export default {
  title: 'ActivityLog',
  component: ActivityLog,
  parameters: {
    sourceLink: 'Activity/ActivityLog.tsx',
  },
};

export const WithProps = (args) => (
  <ActivityLog {...args}>
    <Activity date={new Date(2017, 10, 31, 23, 15)} action="Created" by="Services" />
    <Activity date={new Date(2017, 9, 13, 13, 0)} action="Edited" />
    <Activity date={new Date(2017, 4, 1, 6, 0)} action="Edited" by="Gary">
      He messed this up
    </Activity>
    <Activity date={new Date(2017, 2, 28, 12, 1)} />
    <Activity date={new Date()}>Nothing to see here, move on</Activity>
  </ActivityLog>
);
WithProps.args = {
  flush: false,
};

export const AddingCustomComponents = (args) => (
  <ActivityLog {...args}>
    <Activity date={new Date()} action="Edited" by="Jane Doe" />
    <Activity date={new Date()} action="Published" by="Martha (Leasing)" />
    <Activity date={new Date()} action="Created" by="services">
      Please contact <a href="mailto:william@awesomepm.com">William</a> for details.
    </Activity>
  </ActivityLog>
);

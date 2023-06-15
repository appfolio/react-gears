import React from 'react';
import { Progress } from 'reactstrap';

export default ({ animated = true, ...props }) => <Progress {...props} animated={animated} />;

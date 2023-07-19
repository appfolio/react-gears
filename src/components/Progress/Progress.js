import React from 'react';
import { Progress as RsProgress } from 'reactstrap';

const Progress = ({ animated = true, ...props }) => <RsProgress {...props} animated={animated} />;

export default Progress;

import React from 'react';
import type { FontAwesomeAPMProps } from './icon/FontAwesomeAPM';
import FontAwesomeAPM from './icon/FontAwesomeAPM';

const Icon = (props: FontAwesomeAPMProps) => <FontAwesomeAPM {...props} />;

Icon.displayName = 'Icon';

export default Icon;

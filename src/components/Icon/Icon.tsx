import type { FC } from 'react';
import React from 'react';
import type { FontAwesomeAPMProps } from './FontAwesomeAPM';
import FontAwesomeAPM from './FontAwesomeAPM';

const Icon: FC<FontAwesomeAPMProps> = (props) => <FontAwesomeAPM {...props} />;

Icon.displayName = 'Icon';

export default Icon;

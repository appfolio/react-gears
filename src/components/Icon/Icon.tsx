import React, { type FC } from 'react';
import FontAwesomeAPM, { type FontAwesomeAPMProps } from './FontAwesomeAPM';

const Icon: FC<FontAwesomeAPMProps> = (props) => <FontAwesomeAPM {...props} />;

Icon.displayName = 'Icon';

export default Icon;

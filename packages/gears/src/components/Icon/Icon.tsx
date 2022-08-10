import React, { FC } from 'react';
import FontAwesomeAPM, { FontAwesomeAPMProps } from './FontAwesomeAPM';

const Icon: FC<FontAwesomeAPMProps> = (props) => <FontAwesomeAPM {...props} />;

Icon.displayName = 'Icon';

export default Icon;

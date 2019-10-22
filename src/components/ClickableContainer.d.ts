import * as React from 'react';

export type ClickableContainerTag = string | ((...args: any[]) => any);

export interface ClickableContainerProps {
  onClick: () => void;
  tag?: ClickableContainerTag;
}

const ClickableContainer: FunctionComponent<ClickableContainerProps>;

export default ClickableContainer;

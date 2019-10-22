import * as React from 'react';

export interface CollapsableTextProps {
  children?: string;
  collapsed?: boolean;
  lessLabel?: ReactNode;
  maxLength?: number;
  moreLabel?: ReactNode;
}

export default class CollapsableText extends React.Component<CollapsableTextProps, any> {
  render(): JSX.Element;
}

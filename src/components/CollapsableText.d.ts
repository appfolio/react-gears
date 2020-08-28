import * as React from 'react';

export interface CollapsableTextProps {
  children?: string;
  collapsed?: boolean;
  lessLabel?: React.ReactNode;
  maxLength?: number;
  moreLabel?: React.ReactNode;
}

export default class CollapsableText extends React.Component<CollapsableTextProps, any> {
  render(): JSX.Element;
}

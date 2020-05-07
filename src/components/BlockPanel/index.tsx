import React, { FunctionComponent } from 'react';
import BasicBlockPanel, { BasicBlockPanelProps } from './BlockPanel';
import StickyBlockPanel, { StickyBlockPanelProps } from './StickyBlockPanel';

interface SBlockPanelProps extends StickyBlockPanelProps {
  sticky: true,
}

interface BBlockPanelProps extends BasicBlockPanelProps {
  sticky?: false,
}

type BlockPanelProps = SBlockPanelProps | BBlockPanelProps;

const BlockPanel: FunctionComponent<BlockPanelProps> = ({ sticky, ...props }: BlockPanelProps) => {
  if (sticky) {
    return <StickyBlockPanel {...(props as StickyBlockPanelProps)} />;
  }

  return <BasicBlockPanel {...props} />;
};

export default BlockPanel;

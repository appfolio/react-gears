import React from 'react';
type Target = string | ((...args: any[]) => any) | Element | { current: any };
declare class PopperTargetHelper extends React.Component<{ target: Target }, {}> {}
export default PopperTargetHelper;

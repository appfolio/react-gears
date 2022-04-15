/* eslint-disable no-unused-expressions */

import React from 'react';

export const srOnlyStyle: React.CSSProperties = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0px',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0px, 0px, 0px, 0px)',
  border: '0px',
};

export interface FontAwesomeAPMProps extends React.HTMLAttributes<any> {
  ariaLabel?: string;
  border?: boolean;
  className?: string;
  cssModule?: any;
  fixedWidth?: boolean;
  flip?: 'horizontal' | 'vertical';
  inverse?: boolean;
  name: string;
  pulse?: boolean;
  rotate?: 90 | 180 | 270;
  size?: 'xs' | 'sm' | 'lg' | '2x' | '3x' | '4x' | '5x';
  spin?: boolean;
  stack?: '1x' | '2x';
  tabIndex?: number;
  tag?: keyof JSX.IntrinsicElements;
  iconStyle?: 'regular' | 'solid' | 'thin' | 'light' | 'duotone';
}

/**
 * A React component for the fontawesome icon library.
 *
 *
 * @param {String} [ariaLabel] An extra accessibility label to put on the icon
 * @param {Boolean} [border=false] Whether or not to show a border radius
 * @param {String} [className] An extra set of CSS classes to add to the component
 * @param {Object} [cssModule] Option to pass FontAwesome CSS as a module
 * @param {Boolean} [fixedWidth=false] Make buttons fixed width
 * @param {String} [flip=false] Flip the icon's orientation.
 * @param {Boolean} [inverse=false]Inverse the icon's color
 * @param {String} name Name of the icon to use
 * @param {Boolean} [pulse=false] Rotate icon with 8 steps (rather than smoothly)
 * @param {Number} [rotate] The degress to rotate the icon by
 * @param {String} [size] The icon scaling size
 * @param {Boolean} [spin=false] Spin the icon
 * @param {String} [stack] Stack an icon on top of another
 * @param {String} [tag=span] The HTML tag to use as a string (eg 'i' or 'em')
 * @param {String} [iconStyle] Font Awesome classic family with multiple icon styles to choose from
 * @param {Number} [tabIndex] Tab index as per HTML Spec
 * @module FontAwesome
 * @type {ReactClass}
 */
export default class FontAwesomeAPM extends React.Component<FontAwesomeAPMProps> {
  render() {
    const {
      border,
      cssModule,
      className,
      fixedWidth,
      flip,
      inverse,
      name,
      pulse,
      rotate,
      size,
      spin,
      stack,
      tag: Tag = 'i',
      iconStyle,
      ariaLabel,
      tabIndex,
      ...props
    } = this.props;

    let classNames = [];

    if (cssModule) {
      classNames.push(cssModule.fa);
      classNames.push(cssModule[`fa-${name}`]);
      size && classNames.push(cssModule[`fa-${size}`]);
      spin && classNames.push(cssModule['fa-spin']);
      pulse && classNames.push(cssModule['fa-pulse']);
      border && classNames.push(cssModule['fa-border']);
      fixedWidth && classNames.push(cssModule['fa-fw']);
      flip && classNames.push(cssModule[`fa-flip-${flip}`]);
      rotate && classNames.push(cssModule[`fa-rotate-${rotate}`]);
      stack && classNames.push(cssModule[`fa-stack-${stack}`]);
      inverse && classNames.push(cssModule['fa-inverse']);
    } else {
      classNames.push(name);
      size && classNames.push(size);
      spin && classNames.push('spin');
      pulse && classNames.push('pulse');
      border && classNames.push('border');
      fixedWidth && classNames.push('fw');
      flip && classNames.push(`flip-${flip}`);
      rotate && classNames.push(`rotate-${rotate}`);
      stack && classNames.push(`stack-${stack}`);
      inverse && classNames.push('inverse');

      const fa = classNames.map((iconName) => `fa-${iconName}`);
      !iconStyle ? fa.unshift(`fa-solid`) : fa.unshift(`fa-${iconStyle}`);

      classNames = fa;
    }

    // Add any custom class names at the end.
    className && classNames.push(className);

    return (
      <Tag {...props} aria-hidden className={classNames.join(' ')} tabIndex={tabIndex}>
        {ariaLabel && <span style={srOnlyStyle}>{ariaLabel}</span>}
      </Tag>
    );
  }
}

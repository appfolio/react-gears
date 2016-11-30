import React from 'react';

export const srOnlyStyle = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0px',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0px, 0px, 0px, 0px)',
  border: '0px'
};

/**
 * A React component for the font-awesome icon library.
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
 * @module FontAwesome
 * @type {ReactClass}
 */
export default React.createClass({

  displayName: 'Icon',

  propTypes: {
    ariaLabel: React.PropTypes.string,
    border: React.PropTypes.bool,
    className: React.PropTypes.string,
    cssModule: React.PropTypes.object,
    fixedWidth: React.PropTypes.bool,
    flip: React.PropTypes.oneOf(['horizontal', 'vertical']),
    inverse: React.PropTypes.bool,
    name: React.PropTypes.string.isRequired,
    pulse: React.PropTypes.bool,
    rotate: React.PropTypes.oneOf([90, 180, 270]),
    size: React.PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
    spin: React.PropTypes.bool,
    stack: React.PropTypes.oneOf(['1x', '2x']),
    tag: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      prefix: 'icon'
    };
  },

  render() {
    const {
      border,
      cssModule,
      className,
      fixedWidth,
      flip,
      inverse,
      name,
      prefix,
      pulse,
      rotate,
      size,
      spin,
      stack,
      tag = 'span',
      ariaLabel,
      ...props,
    } = this.props;

    const classNames = [];

    if (cssModule) {
      classNames.push(cssModule[prefix])
      classNames.push(cssModule[prefix + '-' + name])
      size && classNames.push(cssModule[prefix + '-' + size])
      spin && classNames.push(cssModule[prefix + '-spin'])
      pulse && classNames.push(cssModule[prefix + '-pulse'])
      border && classNames.push(cssModule[prefix + '-border'])
      fixedWidth && classNames.push(cssModule[prefix + '-fw'])
      flip && classNames.push(cssModule[prefix + '-flip-' + flip])
      rotate && classNames.push(cssModule[prefix + '-rotate-' + rotate])
      stack && classNames.push(cssModule[prefix + '-stack-' + stack])
    } else {
      classNames.push(prefix)
      classNames.push(prefix + '-' + name)
      size && classNames.push(`${prefix}-${size}`);
      spin && classNames.push(prefix + '-spin')
      pulse && classNames.push(prefix + '-pulse')
      border && classNames.push(prefix + '-border')
      fixedWidth && classNames.push(prefix + '-fw')
      flip && classNames.push(prefix + '-flip-' + flip)
      rotate && classNames.push(prefix + '-rotate-' + rotate)
      stack && classNames.push(prefix + '-stack-' + stack)
    }

    // Add any custom class names at the end.
    className && classNames.push(className)
    return React.createElement(
      tag, { ...props, 'aria-hidden': true, className: classNames.join(' ') },
      ariaLabel ? React.createElement('span', { style: srOnlyStyle }, ariaLabel) : null
    )
  },
});


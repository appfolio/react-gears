"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[1283],{"./src/components/CollapsableText/CollapsableText.stories.js":function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.ShorterThanMaxLines=exports.LiveExample=exports.CustomComponents=exports.AlignToggleButtonStart=exports.AlignToggleButtonEnd=exports.AlignToggleButtonCenter=exports.AlignToggleButtonAuto=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_Icon=_interopRequireDefault(__webpack_require__("./src/components/Icon/Icon.tsx")),_CollapsableText=_interopRequireDefault(__webpack_require__("./src/components/CollapsableText/CollapsableText.tsx"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var loremIpsum="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\nexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\nin reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\nsint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\nlaborum.",LiveExample=(exports.default={title:"CollapsableText",component:_CollapsableText.default,parameters:{sourceLink:"CollapsableText/CollapsableText.tsx"}},args=>_react.default.createElement(_CollapsableText.default,args,"Some text ",_react.default.createElement("strong",null,"with bold")," and ",_react.default.createElement("a",{href:"#"},"links and other things"),_react.default.createElement("br",null),loremIpsum));exports.LiveExample=LiveExample,LiveExample.displayName="LiveExample",LiveExample.args={collapsed:_CollapsableText.default.defaultProps.collapsed,maxLines:_CollapsableText.default.defaultProps.maxLines,moreLabel:_CollapsableText.default.defaultProps.moreLabel,lessLabel:_CollapsableText.default.defaultProps.lessLabel,alignToggleButton:_CollapsableText.default.defaultProps.alignToggleButton},LiveExample.argTypes={alignToggleButton:{options:["start","center","end","auto"],control:{type:"radio"}}};var ShorterThanMaxLines=_ref=>{var maxLines=_ref.maxLines;return _react.default.createElement("div",null,_react.default.createElement(_CollapsableText.default,{maxLines:maxLines},"Short text"))};exports.ShorterThanMaxLines=ShorterThanMaxLines,ShorterThanMaxLines.displayName="ShorterThanMaxLines",ShorterThanMaxLines.args={maxLines:2};var CustomComponents=args=>_react.default.createElement("div",null,_react.default.createElement(_CollapsableText.default,_extends({moreLabel:_react.default.createElement(_Icon.default,{name:"circle-plus",className:"text-success"}),lessLabel:_react.default.createElement(_Icon.default,{name:"circle-minus",className:"text-danger"})},args),loremIpsum));exports.CustomComponents=CustomComponents,CustomComponents.displayName="CustomComponents";var AlignToggleButtonStart=args=>_react.default.createElement("div",null,_react.default.createElement(_CollapsableText.default,_extends({alignToggleButton:"start"},args),loremIpsum));exports.AlignToggleButtonStart=AlignToggleButtonStart,AlignToggleButtonStart.displayName="AlignToggleButtonStart";var AlignToggleButtonCenter=args=>_react.default.createElement("div",null,_react.default.createElement(_CollapsableText.default,_extends({alignToggleButton:"center"},args),loremIpsum));exports.AlignToggleButtonCenter=AlignToggleButtonCenter,AlignToggleButtonCenter.displayName="AlignToggleButtonCenter";var AlignToggleButtonEnd=args=>_react.default.createElement("div",null,_react.default.createElement(_CollapsableText.default,_extends({alignToggleButton:"end"},args),loremIpsum));exports.AlignToggleButtonEnd=AlignToggleButtonEnd,AlignToggleButtonEnd.displayName="AlignToggleButtonEnd";var AlignToggleButtonAuto=args=>_react.default.createElement("div",null,_react.default.createElement(_CollapsableText.default,_extends({alignToggleButton:"auto"},args),loremIpsum));exports.AlignToggleButtonAuto=AlignToggleButtonAuto,AlignToggleButtonAuto.displayName="AlignToggleButtonAuto",module.exports.__namedExportsOrder=["ShorterThanMaxLines","LiveExample","CustomComponents","AlignToggleButtonStart","AlignToggleButtonEnd","AlignToggleButtonCenter","AlignToggleButtonAuto"]}}]);
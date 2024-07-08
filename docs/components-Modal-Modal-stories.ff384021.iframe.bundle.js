"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[4607],{"./src/components/Modal/Modal.stories.js":function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.LiveExample=exports.Autofocus=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_Button=_interopRequireDefault(__webpack_require__("./src/components/Button/Button.tsx")),_ButtonToolbar=_interopRequireDefault(__webpack_require__("./src/components/Button/ButtonToolbar.tsx")),_Input=_interopRequireDefault(__webpack_require__("./src/components/Input/Input.tsx")),_Modal=_interopRequireDefault(__webpack_require__("./src/components/Modal/Modal.js")),_ModalBody=_interopRequireDefault(__webpack_require__("./src/components/Modal/ModalBody.tsx")),_ModalFooter=_interopRequireDefault(__webpack_require__("./src/components/Modal/ModalFooter.tsx")),_ModalHeader=_interopRequireDefault(__webpack_require__("./src/components/Modal/ModalHeader.tsx"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var meta={title:"Modal",component:_Modal.default,parameters:{sourceLink:"Modal/Modal.js",docs:{story:{inline:!1,iframeHeight:500}}},argTypes:{fullscreen:{control:{type:"select"},options:[null,!0,"sm","md","lg","xl","xxl"]},size:{control:{type:"radio"},options:[null,"sm","lg","xl"]}}};exports.default=meta,exports.LiveExample={args:{isOpen:!0,backdrop:!0,fade:!1,fullscreen:null,size:null},render:args=>_react.default.createElement(_Modal.default,args,_react.default.createElement(_ModalHeader.default,{toggle:()=>{}},"Modal title"),_react.default.createElement(_ModalBody.default,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),_react.default.createElement(_ModalFooter.default,null,_react.default.createElement(_ButtonToolbar.default,null,_react.default.createElement(_Button.default,{color:"primary"},"Do Something"),_react.default.createElement(_Button.default,{color:"link"},"Cancel"))))},exports.Autofocus={args:{isOpen:!0,backdrop:!0,size:null},render:args=>_react.default.createElement(_Modal.default,_extends({autoFocus:!1},args),_react.default.createElement(_ModalHeader.default,{toggle:()=>{}},"Modal title"),_react.default.createElement(_ModalBody.default,null,"This input should have focus: ",_react.default.createElement(_Input.default,{autoFocus:!0})),_react.default.createElement(_ModalFooter.default,null,_react.default.createElement(_ButtonToolbar.default,null,_react.default.createElement(_Button.default,{color:"primary"},"Do Something"),_react.default.createElement(_Button.default,{color:"link"},"Cancel"))))};module.exports.__namedExportsOrder=["LiveExample","Autofocus"]}}]);
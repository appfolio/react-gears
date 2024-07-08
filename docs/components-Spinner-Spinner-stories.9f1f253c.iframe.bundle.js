"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[8879],{"./src/tooling/colors.js":function(__unused_webpack_module,exports){Object.defineProperty(exports,"__esModule",{value:!0}),exports.textColors=exports.colors=exports.buttonColors=exports.bgColors=void 0;var colors=exports.colors=["primary","secondary","success","danger","warning","info","ai","light","dark"];exports.buttonColors=[...colors,"link"],exports.bgColors=[...colors,"transparent"],exports.textColors=[...colors,"body","muted","white","black-50","white-50"]},"./src/components/Spinner/Spinner.stories.js":function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Default=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_colors=__webpack_require__("./src/tooling/colors.js"),_Button=_interopRequireDefault(__webpack_require__("./src/components/Button/Button.tsx")),_Spinner=_interopRequireDefault(__webpack_require__("./src/components/Spinner/Spinner.tsx"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.default={title:"Spinner",component:_Spinner.default,parameters:{sourceLink:"Spinner/Spinner.tsx"}};var Default=_ref=>{var color=_ref.color,type=_ref.type,label=_ref.label,fontSize=_ref.fontSize;return _react.default.createElement("div",null,_react.default.createElement("p",{style:{fontSize:`${fontSize}rem`}},"The ",_react.default.createElement(_Spinner.default,{type:type})," will scale with the font size of its container,"),_react.default.createElement("hr",null),_react.default.createElement("h3",null,"...and inherit color from its container:"),_react.default.createElement("p",null,_react.default.createElement(_Button.default,{color:"secondary",size:"lg",className:"me-3"},_react.default.createElement(_Spinner.default,{type:type})," Loading"),_react.default.createElement(_Button.default,{color:"primary",outline:!0,size:"lg"},_react.default.createElement(_Spinner.default,{type:type})," Loading")),_react.default.createElement("h1",{className:`text-${color}`},"text-",color,": ",_react.default.createElement(_Spinner.default,{type:type,className:`text-${color}`})),_react.default.createElement("hr",null),_react.default.createElement("h2",null,"...and accept a label prop for accessibility by screen-readers (default to 'loading'):"," "),_react.default.createElement("p",null," ",_react.default.createElement(_Spinner.default,{type:type,label:label})," "))};exports.Default=Default,Default.displayName="Default",Default.args={color:"primary",type:_Spinner.default.default,label:"loading",fontSize:1},Default.argTypes={color:{control:{type:"select"},options:_colors.textColors},type:{control:{type:"select"},options:["spin","border","grow"]},fontSize:{control:{type:"range",min:1,max:5,step:.25}}},module.exports.__namedExportsOrder=["Default"]}}]);
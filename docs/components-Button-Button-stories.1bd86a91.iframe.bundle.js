"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[7721],{"./src/tooling/colors.js":function(__unused_webpack_module,exports){Object.defineProperty(exports,"__esModule",{value:!0}),exports.textColors=exports.colors=exports.buttonColors=exports.bgColors=void 0;var colors=exports.colors=["primary","secondary","success","danger","warning","info","ai","light","dark"];exports.buttonColors=[...colors,"link"],exports.bgColors=[...colors,"transparent"],exports.textColors=[...colors,"body","muted","white","black-50","white-50"]},"./src/components/Button/Button.stories.js":function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.TooltipButtonExample=exports.Sizes=exports.Outline=exports.LiveExample=exports.Disabled=exports.ConfirmationButtonExample=exports.Colors=exports.ButtonGroupExample=void 0;var _addonActions=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js"),_react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_colors=__webpack_require__("./src/tooling/colors.js"),_DropdownItem=_interopRequireDefault(__webpack_require__("./src/components/Dropdown/DropdownItem.tsx")),_DropdownMenu=_interopRequireDefault(__webpack_require__("./src/components/Dropdown/DropdownMenu.tsx")),_DropdownToggle=_interopRequireDefault(__webpack_require__("./src/components/Dropdown/DropdownToggle.tsx")),_TooltipButton=_interopRequireDefault(__webpack_require__("./src/components/Tooltip/TooltipButton.tsx")),_Button=_interopRequireDefault(__webpack_require__("./src/components/Button/Button.tsx")),_ButtonDropdown=_interopRequireDefault(__webpack_require__("./src/components/Button/ButtonDropdown.tsx")),_ButtonGroup=_interopRequireDefault(__webpack_require__("./src/components/Button/ButtonGroup.tsx")),_ButtonToolbar=_interopRequireDefault(__webpack_require__("./src/components/Button/ButtonToolbar.tsx")),_ConfirmationButton=_interopRequireDefault(__webpack_require__("./src/components/Button/ConfirmationButton.tsx")),_excluded=["label"],_excluded2=["label"];function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)>=0)continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}exports.default={title:"Buttons",component:_Button.default,parameters:{sourceLink:"Button/Button.tsx"}};var LiveExample=_ref=>{var label=_ref.label,args=_objectWithoutProperties(_ref,_excluded);return _react.default.createElement(_Button.default,args,label)};exports.LiveExample=LiveExample,LiveExample.displayName="LiveExample",LiveExample.args={color:"primary",block:!1,disabled:!1,outline:!1,active:!1,size:void 0,label:"Click Me"},LiveExample.argTypes={color:{options:_colors.buttonColors,control:{type:"select"}},size:{options:["","sm","lg"],control:{type:"select"}}};var Colors=args=>_react.default.createElement(_ButtonToolbar.default,null,_react.default.createElement(_Button.default,args,"Default"),_react.default.createElement(_Button.default,{color:"primary"},"Primary"),_react.default.createElement(_Button.default,{color:"secondary"},"Secondary"),_react.default.createElement(_Button.default,{color:"success"},"Success"),_react.default.createElement(_Button.default,{color:"info"},"Info"),_react.default.createElement(_Button.default,{color:"warning"},"Warning"),_react.default.createElement(_Button.default,{color:"danger"},"Danger"),_react.default.createElement(_Button.default,{color:"dark"},"Dark"),_react.default.createElement(_Button.default,{color:"light"},"Light"),_react.default.createElement(_Button.default,{color:"link"},"Link"));exports.Colors=Colors,Colors.displayName="Colors";var Disabled=args=>_react.default.createElement(_ButtonToolbar.default,null,_react.default.createElement(_Button.default,_extends({disabled:!0},args),"Default"),_react.default.createElement(_Button.default,{disabled:!0,color:"primary"},"Primary"),_react.default.createElement(_Button.default,{disabled:!0,color:"secondary"},"Secondary"),_react.default.createElement(_Button.default,{disabled:!0,color:"success"},"Success"),_react.default.createElement(_Button.default,{disabled:!0,color:"info"},"Info"),_react.default.createElement(_Button.default,{disabled:!0,color:"warning"},"Warning"),_react.default.createElement(_Button.default,{disabled:!0,color:"danger"},"Danger"),_react.default.createElement(_Button.default,{disabled:!0,color:"dark"},"Dark"),_react.default.createElement(_Button.default,{disabled:!0,color:"light"},"Light"),_react.default.createElement(_Button.default,{disabled:!0,color:"link"},"Link"));exports.Disabled=Disabled,Disabled.displayName="Disabled";var Outline=args=>_react.default.createElement(_ButtonToolbar.default,null,_react.default.createElement(_Button.default,_extends({outline:!0},args),"Default"),_react.default.createElement(_Button.default,{outline:!0,color:"primary"},"Primary"),_react.default.createElement(_Button.default,{outline:!0,color:"secondary"},"Secondary"),_react.default.createElement(_Button.default,{outline:!0,color:"success"},"Success"),_react.default.createElement(_Button.default,{outline:!0,color:"info"},"Info"),_react.default.createElement(_Button.default,{outline:!0,color:"warning"},"Warning"),_react.default.createElement(_Button.default,{outline:!0,color:"danger"},"Danger"),_react.default.createElement(_Button.default,{outline:!0,color:"dark"},"Dark"),_react.default.createElement(_Button.default,{outline:!0,color:"light"},"Light"),_react.default.createElement(_Button.default,{outline:!0,color:"link"},"Link"));exports.Outline=Outline,Outline.displayName="Outline";var Sizes=args=>_react.default.createElement("div",null,_react.default.createElement(_Button.default,_extends({color:"primary",size:"lg"},args),"Large button")," ",_react.default.createElement(_Button.default,{color:"primary",size:"md"},"Medium button")," ",_react.default.createElement(_Button.default,{color:"primary",size:"sm"},"Small button"));exports.Sizes=Sizes,Sizes.displayName="Sizes";var TooltipButtonExample=_ref2=>{var label=_ref2.label,args=_objectWithoutProperties(_ref2,_excluded2);return _react.default.createElement(_TooltipButton.default,args,label)};exports.TooltipButtonExample=TooltipButtonExample,TooltipButtonExample.displayName="TooltipButtonExample",TooltipButtonExample.args={color:"primary",disabled:!1,onClick:(0,_addonActions.action)("onClick"),tooltip:"Here is a tooltip.",placement:"top",label:"Click Me"},TooltipButtonExample.argTypes={color:{options:_colors.buttonColors,control:{type:"select"}},placement:{options:["top","left","bottom","right"],control:{type:"select"}}};var ButtonGroupExample=args=>_react.default.createElement("div",null,_react.default.createElement("div",{className:"mb-1"},_react.default.createElement(_Button.default,_extends({size:"lg",block:!0},args),"Block level button")),_react.default.createElement("div",{className:"mb-1"},_react.default.createElement(_ButtonGroup.default,null,_react.default.createElement(_Button.default,null,"Left"),_react.default.createElement(_Button.default,{active:!0},"Middle"),_react.default.createElement(_Button.default,null,"Right"))),_react.default.createElement("div",{className:"mb-1"},_react.default.createElement(_ButtonToolbar.default,null,_react.default.createElement(_ButtonGroup.default,null,_react.default.createElement(_Button.default,null,"1"),_react.default.createElement(_Button.default,{active:!0},"2"),_react.default.createElement(_Button.default,null,"3"),_react.default.createElement(_Button.default,null,"4")),_react.default.createElement(_ButtonGroup.default,null,_react.default.createElement(_Button.default,null,"5"),_react.default.createElement(_Button.default,{active:!0},"6"),_react.default.createElement(_Button.default,null,"7")),_react.default.createElement(_ButtonGroup.default,null,_react.default.createElement(_Button.default,null,"8"),_react.default.createElement(_ButtonDropdown.default,{toggle:()=>{}},_react.default.createElement(_DropdownToggle.default,{caret:!0},"Dropdown"),_react.default.createElement(_DropdownMenu.default,null,_react.default.createElement(_DropdownItem.default,{header:!0},"Header"),_react.default.createElement(_DropdownItem.default,{disabled:!0},"Action"),_react.default.createElement(_DropdownItem.default,null,"Another Action"),_react.default.createElement(_DropdownItem.default,{divider:!0}),_react.default.createElement(_DropdownItem.default,null,"Another Action")))))),_react.default.createElement("div",null,_react.default.createElement(_ButtonGroup.default,{vertical:!0},_react.default.createElement(_Button.default,null,"Button"),_react.default.createElement(_Button.default,{active:!0},"Button"),_react.default.createElement(_Button.default,null,"Button"),_react.default.createElement(_Button.default,null,"Button"))));exports.ButtonGroupExample=ButtonGroupExample,ButtonGroupExample.displayName="ButtonGroupExample";var ConfirmationButtonExample=args=>_react.default.createElement(_ConfirmationButton.default,_extends({confirmation:"You sure?",onClick:(0,_addonActions.action)("onClick")},args),"Do the thing!");exports.ConfirmationButtonExample=ConfirmationButtonExample,ConfirmationButtonExample.displayName="ConfirmationButtonExample",module.exports.__namedExportsOrder=["TooltipButtonExample","Sizes","Outline","LiveExample","Disabled","ConfirmationButtonExample","Colors","ButtonGroupExample"]}}]);
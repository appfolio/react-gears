"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[807],{"./src/components/Input/DateInput.stories.js":function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.WithProps=exports.WithId=exports.ValueControlled=exports.UncontrolledDefaultValue=exports.DateEnabled=exports.CustomHeaderAndFooter=exports.CalendarDefault=exports.CalendarCustomDay=void 0;var _addonActions=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js"),_classnames=_interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js")),_react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_Calendar=_interopRequireDefault(__webpack_require__("./src/components/Calendar/Calendar.tsx")),_FormRow=_interopRequireDefault(__webpack_require__("./src/components/Form/FormRow.tsx")),_Icon=_interopRequireDefault(__webpack_require__("./src/components/Icon/Icon.tsx")),_Label=_interopRequireDefault(__webpack_require__("./src/components/Label/Label.tsx")),_DateInput=_interopRequireDefault(__webpack_require__("./src/components/Input/DateInput.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}exports.default={title:"DateInput",component:_DateInput.default,parameters:{sourceLink:"Input/DateInput.js"}};var WithProps=args=>_react.default.createElement("div",null,_react.default.createElement(_DateInput.default,args));exports.WithProps=WithProps,WithProps.displayName="WithProps",WithProps.args={dateFormat:_DateInput.default.defaultProps.dateFormat,showOnFocus:_DateInput.default.defaultProps.showOnFocus,direction:"down",disabled:_DateInput.default.defaultProps.disabled,readOnly:!1,onBlur:(0,_addonActions.action)("onBlur"),onChange:(0,_addonActions.action)("onChange"),onClose:(0,_addonActions.action)("onClose"),positionFixed:!1};var WithId=args=>_react.default.createElement("div",null,_react.default.createElement(_Label.default,{for:"calendar"},"Click this label to Focus Calendar Input:"),_react.default.createElement(_DateInput.default,_extends({id:"calendar"},args)));exports.WithId=WithId,WithId.displayName="WithId",WithId.args={dateFormat:_DateInput.default.defaultProps.dateFormat,showOnFocus:_DateInput.default.defaultProps.showOnFocus,disabled:_DateInput.default.defaultProps.disabled,onBlur:(0,_addonActions.action)("onBlur"),onChange:(0,_addonActions.action)("onChange")};var UncontrolledDefaultValue=args=>_react.default.createElement("div",null,_react.default.createElement("p",null,"When defaultValue is set, component is 'uncontrolled' and maintains its own state. onChange events will be emitted with the current value."),_react.default.createElement(_FormRow.default,{type:_DateInput.default,onChange:(0,_addonActions.action)("onChange"),label:"null"}),_react.default.createElement(_FormRow.default,{type:_DateInput.default,onChange:(0,_addonActions.action)("onChange"),label:"new Date()",defaultValue:new Date}),_react.default.createElement(_FormRow.default,{type:_DateInput.default,onChange:(0,_addonActions.action)("onChange"),label:"new Date(2000, 0, 1)",defaultValue:new Date(2e3,0,1)}),_react.default.createElement(_FormRow.default,{type:_DateInput.default,onChange:(0,_addonActions.action)("onChange"),label:"'1/23/2004'",defaultValue:"1/23/2004"}),_react.default.createElement(_FormRow.default,{type:_DateInput.default,onChange:(0,_addonActions.action)("onChange"),label:"'Garbage in'",defaultValue:"Garbage in"}));exports.UncontrolledDefaultValue=UncontrolledDefaultValue,UncontrolledDefaultValue.displayName="UncontrolledDefaultValue";var ValueControlled=args=>_react.default.createElement("div",null,_react.default.createElement("p",null,"When value is set, component is 'controlled' and does not maintain its own state. onChange events will be emitted with the current value, and parent components using the DateInput must update the value prop with the current date."),_react.default.createElement(_FormRow.default,{type:_DateInput.default,onChange:(0,_addonActions.action)("onChange"),label:"null",value:null}),_react.default.createElement(_FormRow.default,{type:_DateInput.default,onChange:(0,_addonActions.action)("onChange"),label:"new Date()",value:new Date}),_react.default.createElement(_FormRow.default,{type:_DateInput.default,onChange:(0,_addonActions.action)("onChange"),label:"new Date(2000, 0, 1)",value:new Date(2e3,0,1)}),_react.default.createElement(_FormRow.default,{type:_DateInput.default,onChange:(0,_addonActions.action)("onChange"),label:"'1/23/2004'",value:"1/23/2004"}),_react.default.createElement(_FormRow.default,{type:_DateInput.default,onChange:(0,_addonActions.action)("onChange"),label:"'Garbage in'",value:"Garbage in"}));exports.ValueControlled=ValueControlled,ValueControlled.displayName="ValueControlled";var CustomHeaderAndFooter=args=>_react.default.createElement("div",{className:"d-inline-flex"},_react.default.createElement(_DateInput.default,_extends({header:_react.default.createElement("h2",{className:"text-center text-danger p-2 font-italic"},"PIRELLI"),footer:_react.default.createElement("div",{className:"d-flex justify-content-around p-3"},_react.default.createElement(_Icon.default,{name:"flag-checkered"}),_react.default.createElement(_Icon.default,{name:"flag-checkered"}),_react.default.createElement(_Icon.default,{name:"flag-checkered"}),_react.default.createElement(_Icon.default,{name:"flag-checkered"}),_react.default.createElement(_Icon.default,{name:"flag-checkered"}))},args)));exports.CustomHeaderAndFooter=CustomHeaderAndFooter,CustomHeaderAndFooter.displayName="CustomHeaderAndFooter";var DateEnabled=args=>_react.default.createElement("div",{className:"d-inline-flex"},_react.default.createElement(_DateInput.default,_extends({dateEnabled:date=>date.getDay()>0&&date.getDay()<6},args)));exports.DateEnabled=DateEnabled,DateEnabled.displayName="DateEnabled";var CalendarDefault=args=>_react.default.createElement("div",{className:"d-inline-flex"},_react.default.createElement(_Calendar.default,args));exports.CalendarDefault=CalendarDefault,CalendarDefault.displayName="CalendarDefault",CalendarDefault.args={dateFormat:"D",onSelect:(0,_addonActions.action)("onSelect")};var CalendarCustomDay=args=>_react.default.createElement("div",{className:"d-inline-flex"},_react.default.createElement(_Calendar.default,_extends({renderDay:day=>{var className=(0,_classnames.default)("px-2 py-1 text-center",{"text-danger":!day.future,"text-muted":!day.sameMonth,"text-white bg-primary":24===day.date.getDate(),"bg-info-subtle":28===day.date.getDate()});return _react.default.createElement("td",{className:className},_react.default.createElement("div",null,day.future?day.date.getDate():"✘"))}},args)));exports.CalendarCustomDay=CalendarCustomDay,CalendarCustomDay.displayName="CalendarCustomDay",module.exports.__namedExportsOrder=["WithProps","WithId","ValueControlled","UncontrolledDefaultValue","DateEnabled","CustomHeaderAndFooter","CalendarDefault","CalendarCustomDay"]}}]);
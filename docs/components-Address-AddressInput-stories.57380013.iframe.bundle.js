"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[7473],{"./src/components/Address/AddressInput.stories.js":function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.WithId=exports.Default=exports.Controlled=void 0;var _addonActions=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js"),_react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_Label=_interopRequireDefault(__webpack_require__("./src/components/Label/Label.tsx")),_AddressInput=_interopRequireDefault(__webpack_require__("./src/components/Address/AddressInput.tsx")),_USStates=_interopRequireDefault(__webpack_require__("./src/components/Address/util/USStates.ts")),_excluded=["address1","address2","city","state","postal","countryCode"];function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}exports.default={title:"AddressInput",component:_AddressInput.default,parameters:{sourceLink:"Address/AddressInput.tsx"}};var Default=args=>_react.default.createElement("div",null,_react.default.createElement(_AddressInput.default,_extends({defaultValue:{address1:"123 No Way",address2:"Suite 16",city:"Smallsville",state:"AL",postal:"12345-1234",countryCode:"US"}},args)));exports.Default=Default,Default.displayName="Default",Default.args={compact:!1,onBlur:(0,_addonActions.action)("address onBlur"),onChange:(0,_addonActions.action)("address onChange"),countries:["US"],disabled:!1,error:{},showCountry:!0,showLabels:!1,labels:{address1:"Address",address2:"Address 2",city:"City",state:"State",postal:"Zip",countryCode:"Country"},hints:{}};var WithId=args=>_react.default.createElement("div",null,_react.default.createElement(_Label.default,{for:"myid_address1"},"Click This Label to Focus First Input:"),_react.default.createElement(_AddressInput.default,_extends({defaultValue:{address1:"123 No Way",address2:"Suite 16",city:"Smallsville",state:"AL",postal:"12345-1234",countryCode:"US"},id:"myid"},args)));exports.WithId=WithId,WithId.displayName="WithId";var Controlled=_ref=>{var address1=_ref.address1,address2=_ref.address2,city=_ref.city,state=_ref.state,postal=_ref.postal,countryCode=_ref.countryCode,args=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)>=0)continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return _react.default.createElement("div",null,_react.default.createElement(_AddressInput.default,_extends({value:{address1:address1,address2:address2,city:city,state:state,postal:postal,countryCode:countryCode}},args)))};exports.Controlled=Controlled,Controlled.displayName="Controlled",Controlled.args={address1:"123 No Way",address2:"Suite 16",city:"Smallsville",state:"AL",postal:"12345-1234",countryCode:"US",error:{address1:"bad stuff",state:"no"},onChange:(0,_addonActions.action)("address onChange"),disabled:void 0},Controlled.argTypes={state:{control:"select",options:_USStates.default.map((s=>s.value))},disabled:{control:"boolean"}},module.exports.__namedExportsOrder=["WithId","Default","Controlled"]}}]);
"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[7361],{"./src/components/List/SortableList.stories.js":function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.WithSort=exports.WithSelection=exports.WithOptionalExpand=exports.WithFiltering=exports.WithExpandableRow=exports.WithEverything=exports.WithCustomHeader=exports.WithControlledSelection=exports.Areas=void 0;var _addonActions=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js"),_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_Alert=_interopRequireDefault(__webpack_require__("./src/components/Alert/Alert.tsx")),_Button=_interopRequireDefault(__webpack_require__("./src/components/Button/Button.tsx")),_Label=_interopRequireDefault(__webpack_require__("./src/components/Label/Label.tsx")),_SortableList=_interopRequireDefault(__webpack_require__("./src/components/List/SortableList.tsx")),_data=_interopRequireDefault(__webpack_require__("./src/components/List/util/data.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var meta={title:"SortableList",component:_SortableList.default,parameters:{sourceLink:"List/SortableList.tsx"},argTypes:{select:{control:{type:"select"},options:["","checkbox","radio","switch"]},flush:{control:"boolean"}}},currency=(exports.default=meta,new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}));function filterItems(filter,item){var f=filter.toLowerCase();return item.first.toLowerCase().includes(f)||item.last.toLowerCase().includes(f)||item.fee==filter}var ExpandoOne=item=>_react.default.createElement(_react.default.Fragment,null,_react.default.createElement(_Label.default,{className:"text-muted"},"Base late fee for October 2019:")," ",currency.format(item.fee)),ExpandoTwo=()=>_react.default.createElement(_Alert.default,{color:"info",className:"m-0 "},"Expandable area");ExpandoTwo.displayName="ExpandoTwo";exports.WithEverything={args:{className:"",filterPlaceholder:_SortableList.default.defaultProps.filterPlaceholder,flush:_SortableList.default.defaultProps.flush,height:"70vh",scrollPositionKey:"sortableList-example",striped:!1,onSelect:(0,_addonActions.action)("onSelect"),select:"checkbox",sortByLabel:_SortableList.default.defaultProps.sortByLabel},render:args=>_react.default.createElement(_SortableList.default,_extends({items:_data.default.slice(0,20),onExpand:ExpandoOne,onFilter:filterItems,sort:{property:["last","first"]},sortOptions:[{label:"First Name",value:["first","last"]},{label:"Last Name",value:["last","first"]},{label:"Late Fee",value:"fee"}],selectable:item=>item.id%2},args),(item=>_react.default.createElement("div",{className:"d-flex justify-content-between flex-column flex-sm-row"},_react.default.createElement("div",{className:"me-auto pb-2"},_react.default.createElement("h4",{className:"m-0"},item.first," ",item.last),_react.default.createElement("p",{className:"mb-0"},item.address)),_react.default.createElement("div",{className:"pe-3 pb-2"},currency.format(item.fee),_react.default.createElement(_Label.default,{className:"text-muted d-block"},"Late Fee Amount")),_react.default.createElement("div",{className:"pe-3"},currency.format(item.fee),_react.default.createElement(_Label.default,{className:"text-muted d-block"},"Balance Subject to Late Fees")))))},exports.WithExpandableRow={render:args=>_react.default.createElement(_SortableList.default,_extends({items:_data.default.slice(0,10),onExpand:ExpandoOne},args),(item=>_react.default.createElement("div",{className:"d-flex justify-content-between flex-column flex-sm-row"},_react.default.createElement("div",{className:"me-auto"},_react.default.createElement("h4",{className:"m-0"},item.first," ",item.last),_react.default.createElement("p",{className:"mb-0"},item.address)))))},exports.WithSelection={args:{onSelect:(0,_addonActions.action)("onSelect")},render:args=>_react.default.createElement(_SortableList.default,_extends({items:_data.default.slice(0,10),select:"checkbox"},args),(item=>_react.default.createElement("div",{className:"d-flex justify-content-between flex-column flex-sm-row"},_react.default.createElement("div",{className:"me-auto"},_react.default.createElement("h4",{className:"m-0"},item.first," ",item.last),_react.default.createElement("p",{className:"mb-0"},item.address)))))},exports.WithSort={render:args=>_react.default.createElement(_SortableList.default,_extends({items:_data.default.slice(0,10),sort:{property:"last",ascending:!0},sortOptions:[{label:"First Name",value:"first"},{label:"Last Name",value:"last"},{label:"Address",value:"address"}]},args),(item=>_react.default.createElement("div",{className:"d-flex justify-content-between flex-column flex-sm-row"},_react.default.createElement("div",{className:"me-auto"},_react.default.createElement("h4",{className:"m-0"},item.first," ",item.last),_react.default.createElement("p",{className:"mb-0"},item.address)))))},exports.WithFiltering={render:args=>_react.default.createElement(_SortableList.default,_extends({height:"60vh",items:_data.default,onFilter:filterItems},args),(item=>_react.default.createElement("div",{className:"d-flex justify-content-between flex-column flex-sm-row"},_react.default.createElement("div",{className:"me-auto pb-2"},_react.default.createElement("h4",{className:"m-0"},item.first," ",item.last),_react.default.createElement("p",null,item.address)),_react.default.createElement("div",{className:"pe-3 pb-2"},currency.format(item.fee),_react.default.createElement(_Label.default,{className:"text-muted d-block"},"Late Fee Amount")),_react.default.createElement("div",{className:"pe-3"},currency.format(item.fee),_react.default.createElement(_Label.default,{className:"text-muted d-block"},"Balance Subject to Late Fees")))))},exports.WithCustomHeader={args:{onSelect:(0,_addonActions.action)("onSelect")},render:args=>_react.default.createElement(_SortableList.default,_extends({height:"60vh",items:_data.default,onFilter:filterItems,select:"checkbox",header:_react.default.createElement("h4",{className:"m-0 text-danger"},"Hey it's me, your custom header")},args),(item=>_react.default.createElement("div",{className:"d-flex justify-content-between flex-column flex-sm-row"},_react.default.createElement("div",{className:"me-auto pb-2"},_react.default.createElement("h4",{className:"m-0"},item.first," ",item.last),_react.default.createElement("p",null,item.address)),_react.default.createElement("div",{className:"pe-3 pb-2"},currency.format(item.fee),_react.default.createElement(_Label.default,{className:"text-muted d-block"},"Late Fee Amount")),_react.default.createElement("div",{className:"pe-3"},currency.format(item.fee),_react.default.createElement(_Label.default,{className:"text-muted d-block"},"Balance Subject to Late Fees")))))},exports.Areas={args:{height:"70vh",onSelect:(0,_addonActions.action)("onSelect"),select:"checkbox"},render:args=>_react.default.createElement(_SortableList.default,_extends({items:_data.default.slice(0,20),onExpand:ExpandoTwo},args),(()=>_react.default.createElement(_Alert.default,{className:"m-0"},"Item area")))},exports.WithOptionalExpand={args:{select:"checkbox",onSelect:(0,_addonActions.action)("onSelect")},render:args=>_react.default.createElement(_SortableList.default,_extends({items:_data.default.slice(0,10),onExpand:item=>item.id%2==0?ExpandoTwo():void 0},args),(item=>item.id%2==0?"Expand Me":"I can't be expanded..."))},exports.WithControlledSelection={render:function Render(args){var _useState2=_slicedToArray((0,_react.useState)(_data.default.slice(1,5)),2),selection=_useState2[0],setSelection=_useState2[1];return _react.default.createElement(_react.default.Fragment,null,_react.default.createElement(_SortableList.default,_extends({items:_data.default.slice(0,10),onSelect:setSelection,selected:selection,select:"checkbox"},args),(item=>_react.default.createElement("h3",{className:"m-0"},item.first," ",item.last))),_react.default.createElement("h3",null,"Current selection: "),_react.default.createElement("pre",null,JSON.stringify(selection.map((item=>`${item.first} ${item.last}`)),null,"  ")),_react.default.createElement(_Button.default,{onClick:()=>setSelection(_data.default.slice(2,4))},"Replace the Selection"))}};module.exports.__namedExportsOrder=["WithSort","WithSelection","WithOptionalExpand","WithFiltering","WithExpandableRow","WithEverything","WithCustomHeader","WithControlledSelection","Areas"]}}]);
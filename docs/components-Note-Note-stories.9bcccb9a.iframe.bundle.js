"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[5385],{"./src/components/Note/Note.stories.js":function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.WithChildren=exports.NoteWithMentions=exports.LiveExample=exports.EditableNoteWithMentionsEditNotificationAlert=exports.EditableNoteWithMentions=exports.EditableNoteWithChildren=exports.EditableNoteExample=void 0;var _addonActions=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js"),_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_EditableNote=_interopRequireDefault(__webpack_require__("./src/components/Note/EditableNote.tsx")),_EditableNoteMentions=_interopRequireDefault(__webpack_require__("./src/components/Note/EditableNoteMentions.tsx")),_Note=_interopRequireDefault(__webpack_require__("./src/components/Note/Note.tsx")),_NoteMentions=_interopRequireDefault(__webpack_require__("./src/components/Note/NoteMentions.tsx")),_excluded=["deleted","edited","editing","from","text","title"],_excluded2=["deleted","edited","editing","from","text"],_excluded3=["withNote"],_excluded4=["withNote"],_excluded5=["deleted","edited","editing","from","text","title"];function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)>=0)continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var noteToEdit={date:new Date,from:"Gary Thomas",text:"Hello World"},LiveExample=(exports.default={title:"Note",component:_Note.default,parameters:{sourceLink:"Note/Note.tsx"},argTypes:{saving:{control:"boolean"}}},_ref=>{var deleted=_ref.deleted,edited=_ref.edited,editing=_ref.editing,from=_ref.from,text=_ref.text,title=_ref.title,args=_objectWithoutProperties(_ref,_excluded),note={date:new Date,deleted:deleted,edited:edited,editing:editing,from:from,text:text,title:title};return _react.default.createElement(_Note.default,_extends({note:note},args))});exports.LiveExample=LiveExample,LiveExample.displayName="LiveExample",LiveExample.args={deleted:!1,edited:!1,editing:!1,from:"Gary Thomas",text:"Goodbye Cruel World",title:"",dateFormat:_Note.default.defaultProps.dateFormat,rows:_Note.default.defaultProps.rows,saving:void 0,saveLabel:_EditableNote.default.defaultProps.saveLabel,savingLabel:_EditableNote.default.defaultProps.savingLabel,onCancel:(0,_addonActions.action)("onCancel"),onChange:(0,_addonActions.action)("onChange"),onDelete:(0,_addonActions.action)("onDelete"),onEdit:(0,_addonActions.action)("onEdit"),onSave:(0,_addonActions.action)("onSave"),onUndelete:(0,_addonActions.action)("onUndelete")};var WithChildren=_ref2=>{var deleted=_ref2.deleted,edited=_ref2.edited,editing=_ref2.editing,from=_ref2.from,text=_ref2.text,args=_objectWithoutProperties(_ref2,_excluded2),note={date:new Date,deleted:deleted,edited:edited,editing:editing,from:from,text:text};return _react.default.createElement(_Note.default,_extends({note:note},args),_react.default.createElement("img",{src:"http://lorempixel.com/200/100/sports/",alt:"Sample"}))};exports.WithChildren=WithChildren,WithChildren.displayName="WithChildren",WithChildren.args={deleted:!1,edited:!1,editing:!1,from:"Aaron Panchal",text:"Everybody wants to rule the world.",onCancel:(0,_addonActions.action)("onCancel"),onChange:(0,_addonActions.action)("onChange"),onDelete:(0,_addonActions.action)("onDelete"),onEdit:(0,_addonActions.action)("onEdit"),onSave:(0,_addonActions.action)("onSave"),onUndelete:(0,_addonActions.action)("onUndelete"),rows:_Note.default.defaultProps.rows,saving:void 0};var EditableNoteExample=_ref3=>{var withNote=_ref3.withNote,args=_objectWithoutProperties(_ref3,_excluded3),note=withNote?noteToEdit:{text:""};return _react.default.createElement(_EditableNote.default,_extends({note:note},args))};exports.EditableNoteExample=EditableNoteExample,EditableNoteExample.displayName="EditableNoteExample",EditableNoteExample.args={withNote:!0,onCancel:(0,_addonActions.action)("onCancel"),onChange:(0,_addonActions.action)("onChange"),onSave:(0,_addonActions.action)("onSave"),saving:!1};var EditableNoteWithChildren=_ref4=>{var withNote=_ref4.withNote,args=_objectWithoutProperties(_ref4,_excluded4),note=withNote?noteToEdit:{text:""};return _react.default.createElement(_EditableNote.default,_extends({note:note},args),_react.default.createElement("span",null,"Add an attachment: "),_react.default.createElement("button",{disabled:args.saving,type:"button"},"Choose file..."),_react.default.createElement("hr",null))};exports.EditableNoteWithChildren=EditableNoteWithChildren,EditableNoteWithChildren.displayName="EditableNoteWithChildren",EditableNoteWithChildren.args={withNote:!0,saving:!1,onCancel:(0,_addonActions.action)("onCancel"),onChange:(0,_addonActions.action)("onChange"),onSave:(0,_addonActions.action)("onSave")};var mentionableUsers=[{key:"Satoshi Nakamoto",value:"Satoshi.Nakamoto",email:"satoshi@appfolio.com"},{key:"LeBron James",value:"LeBron.James",email:"lebron.james@appfolio.com"},{key:"Barbra Streisand",value:"Barbra.Streisand",email:"barbra.streisand@appfolio.com"},{key:"Barry Bonds",value:"Barry.Bonds",email:"barry.bonds@appfolio.com"}],NoteWithMentions=_ref5=>{var deleted=_ref5.deleted,edited=_ref5.edited,editing=_ref5.editing,from=_ref5.from,text=_ref5.text,title=_ref5.title,args=_objectWithoutProperties(_ref5,_excluded5),noteWithMentions={date:new Date,deleted:deleted,edited:edited,editing:editing,from:from,text:text,title:title};return _react.default.createElement(_NoteMentions.default,_extends({mentionableUsers:mentionableUsers,note:noteWithMentions},args))};exports.NoteWithMentions=NoteWithMentions,NoteWithMentions.displayName="NoteWithMentions",NoteWithMentions.args={deleted:!1,edited:!1,editing:!1,from:"Tom Brady",text:"Hi @Satoshi.Nakamoto Who are you??? I lost all my crypto.",title:"",onCancel:(0,_addonActions.action)("onCancel"),onChange:(0,_addonActions.action)("onChange"),onDelete:(0,_addonActions.action)("onDelete"),onEdit:(0,_addonActions.action)("onEdit"),onSave:(0,_addonActions.action)("onSave"),onUndelete:(0,_addonActions.action)("onUndelete"),rows:_Note.default.defaultProps.rows,saving:void 0};var EditableNoteWithMentions=args=>{var _useState2=_slicedToArray((0,_react.useState)({date:new Date,from:"Tom Brady",text:""}),2),note=_useState2[0],setNote=_useState2[1];return _react.default.createElement(_EditableNoteMentions.default,_extends({mentionableUsers:mentionableUsers,note:note,onChange:e=>{setNote(_objectSpread(_objectSpread({},note),{},{text:e.target.value}))},showMentionsEditNotificationWarning:!0},args))};exports.EditableNoteWithMentions=EditableNoteWithMentions,EditableNoteWithMentions.displayName="EditableNoteWithMentions",EditableNoteWithMentions.args={onCancel:(0,_addonActions.action)("onCancel"),onSave:(0,_addonActions.action)("onSave"),saving:!1};var EditableNoteWithMentionsEditNotificationAlert=args=>{var _useState4=_slicedToArray((0,_react.useState)({date:new Date,from:"Tom Brady",text:"Hey! @Satoshi.Nakamoto why did BTC drop 20% today?"}),2),note=_useState4[0],setNote=_useState4[1];return _react.default.createElement(_EditableNoteMentions.default,_extends({mentionableUsers:mentionableUsers,note:note,onChange:e=>{setNote(_objectSpread(_objectSpread({},note),{},{text:e.target.value}))},showMentionsEditNotificationWarning:!0},args))};exports.EditableNoteWithMentionsEditNotificationAlert=EditableNoteWithMentionsEditNotificationAlert,EditableNoteWithMentionsEditNotificationAlert.displayName="EditableNoteWithMentionsEditNotificationAlert",EditableNoteWithMentionsEditNotificationAlert.args={onCancel:(0,_addonActions.action)("onCancel"),onSave:(0,_addonActions.action)("onSave"),saving:!1},module.exports.__namedExportsOrder=["WithChildren","NoteWithMentions","LiveExample","EditableNoteWithMentionsEditNotificationAlert","EditableNoteWithMentions","EditableNoteWithChildren","EditableNoteExample"]}}]);
"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[15],{"./node_modules/@storybook/addon-actions/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{XI:function(){return action}});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name:name,deprecated:deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id:id,count:0,data:{name:name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/HasManyFields/HasManyFields.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AddItemButton:function(){return AddItemButton},LiveExample:function(){return LiveExample},RowWrapper:function(){return RowWrapper},__namedExportsOrder:function(){return __namedExportsOrder}});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_Address_AddressInput__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Address/AddressInput.tsx"),_Input_Input__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Input/Input.tsx"),_HasManyFields__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/HasManyFields/HasManyFields.js"),_HasManyFieldsAdd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/HasManyFields/HasManyFieldsAdd.js"),_HasManyFieldsRow__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/HasManyFields/HasManyFieldsRow.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const items=[{address1:"50 Castilian Dr.",address2:"",city:"Goleta",state:"CA",postal:"93117",countryCode:"US"},{address1:"70 Castilian Dr.",address2:"",city:"Goleta",state:"CA",postal:"93117",countryCode:"US"},{address1:"90 Castilian Dr.",address2:"",city:"Goleta",state:"CA",postal:"93117",countryCode:"US"}];__webpack_exports__.default={title:"HasManyFields",component:_HasManyFields__WEBPACK_IMPORTED_MODULE_2__.default,parameters:{sourceLink:"HasManyFields/HasManyFields.js"}};const LiveExample=args=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_HasManyFields__WEBPACK_IMPORTED_MODULE_2__.default,_extends({defaultValue:items,template:_Address_AddressInput__WEBPACK_IMPORTED_MODULE_3__.default,blank:{address1:"",address2:"",city:"",state:"",postal:"",countryCode:"US"},label:"Add an Address"},args));LiveExample.displayName="LiveExample",LiveExample.args={disabled:!1,onAdd:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("hasManyFields onAdd"),onRemove:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("hasManyFields onRemove"),onUpdate:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("hasManyFields onUpdate"),onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("hasManyFields onChange"),minimumRows:1,maximumRows:5,reorderable:!1};const RowWrapper=args=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_HasManyFieldsRow__WEBPACK_IMPORTED_MODULE_4__.default,args,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Input_Input__WEBPACK_IMPORTED_MODULE_5__.default,{defaultValue:"I can put an input (or whatever else) inside a HasManyFieldsRow"}));RowWrapper.displayName="RowWrapper",RowWrapper.args={onDelete:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onDelete"),disabled:!1,disabledReason:void 0,disabledReasonPlacement:"top"},RowWrapper.argTypes={disabledReasonPlacement:{control:{type:"select"},options:["top","left","bottom","right"]}};const AddItemButton=args=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_HasManyFieldsAdd__WEBPACK_IMPORTED_MODULE_6__.default,_extends({onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onClick")},args),"Button Label Content");AddItemButton.displayName="AddItemButton";const __namedExportsOrder=["LiveExample","RowWrapper","AddItemButton"];LiveExample.parameters={...LiveExample.parameters,docs:{...LiveExample.parameters?.docs,source:{originalSource:"args => <HasManyFields defaultValue={items} template={AddressInput} blank={{\n  address1: '',\n  address2: '',\n  city: '',\n  state: '',\n  postal: '',\n  countryCode: 'US'\n}} label=\"Add an Address\" {...args} />",...LiveExample.parameters?.docs?.source}}},RowWrapper.parameters={...RowWrapper.parameters,docs:{...RowWrapper.parameters?.docs,source:{originalSource:'args => <HasManyFieldsRow {...args}>\n    <Input defaultValue="I can put an input (or whatever else) inside a HasManyFieldsRow" />\n  </HasManyFieldsRow>',...RowWrapper.parameters?.docs?.source}}},AddItemButton.parameters={...AddItemButton.parameters,docs:{...AddItemButton.parameters?.docs,source:{originalSource:"args => <HasManyFieldsAdd onClick={action('onClick')} {...args}>\n    Button Label Content\n  </HasManyFieldsAdd>",...AddItemButton.parameters?.docs?.source}}}}}]);
"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[9215],{"./node_modules/@storybook/addon-actions/dist/index.js":function(__unused_webpack_module,exports,__webpack_require__){var uuid=__webpack_require__("./node_modules/uuid/dist/commonjs-browser/index.js"),previewApi=__webpack_require__("@storybook/preview-api"),global=__webpack_require__("@storybook/global"),previewErrors=__webpack_require__("@storybook/core-events/preview-errors"),ADDON_ID="storybook/actions",PANEL_ID=`${ADDON_ID}/panel`,EVENT_ID=`${ADDON_ID}/action-event`,CLEAR_ID=`${ADDON_ID}/action-clear`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in global.global?global.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new previewErrors.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name:name,deprecated:deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=previewApi.addons.getChannel(),id="object"==typeof crypto&&"function"==typeof crypto.getRandomValues?uuid.v4():Date.now().toString(36)+Math.random().toString(36).substring(2),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id:id,count:0,data:{name:name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}exports.ADDON_ID=ADDON_ID,exports.CLEAR_ID=CLEAR_ID,exports.CYCLIC_KEY="$___storybook.isCyclic",exports.EVENT_ID=EVENT_ID,exports.PANEL_ID=PANEL_ID,exports.PARAM_KEY="actions",exports.action=action,exports.actions=(...args)=>{let options=config,names=args;1===names.length&&Array.isArray(names[0])&&([names]=names),1!==names.length&&"string"!=typeof names[names.length-1]&&(options={...config,...names.pop()});let namesObject=names[0];(1!==names.length||"string"==typeof namesObject)&&(namesObject={},names.forEach((name=>{namesObject[name]=name})));let actionsObject={};return Object.keys(namesObject).forEach((name=>{actionsObject[name]=action(namesObject[name],options)})),actionsObject},exports.config=config,exports.configureActions=(options={})=>{Object.assign(config,options)}},"./src/tooling/colors.js":function(__unused_webpack_module,exports){Object.defineProperty(exports,"__esModule",{value:!0}),exports.textColors=exports.colors=exports.buttonColors=exports.bgColors=void 0;var colors=exports.colors=["primary","secondary","success","danger","warning","info","ai","light","dark","white"];exports.buttonColors=[...colors,"link"],exports.bgColors=[...colors,"transparent"],exports.textColors=[...colors,"body","muted","white","black-50","white-50"]},"./src/components/Dropdown/Dropdown.stories.js":function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Uncontrolled=exports.Controlled=void 0;var _addonActions=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js"),_react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_colors=__webpack_require__("./src/tooling/colors.js"),_Dropdown=_interopRequireDefault(__webpack_require__("./src/components/Dropdown/Dropdown.tsx")),_DropdownItem=_interopRequireDefault(__webpack_require__("./src/components/Dropdown/DropdownItem.tsx")),_DropdownMenu=_interopRequireDefault(__webpack_require__("./src/components/Dropdown/DropdownMenu.tsx")),_DropdownToggle=_interopRequireDefault(__webpack_require__("./src/components/Dropdown/DropdownToggle.tsx")),_UncontrolledDropdown=_interopRequireDefault(__webpack_require__("./src/components/Dropdown/UncontrolledDropdown.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var meta={title:"Dropdown",component:_Dropdown.default,parameters:{sourceLink:"Dropdown/Dropdown.tsx"},argTypes:{direction:{options:["","down","up","left","right"],control:{type:"select"}},color:{options:_colors.colors,control:{type:"select"}},size:{options:["","sm","lg"],control:{type:"select"}}}};exports.default=meta,exports.Uncontrolled={args:{direction:"",color:"primary",disabled:!1,outline:!1,size:void 0,text:"Click Me"},render:_ref=>{var direction=_ref.direction,color=_ref.color,disabled=_ref.disabled,outline=_ref.outline,size=_ref.size,text=_ref.text;return _react.default.createElement(_UncontrolledDropdown.default,{direction:direction},_react.default.createElement(_DropdownToggle.default,{color:color,disabled:disabled,outline:outline,size:size,caret:!0},text),_react.default.createElement(_DropdownMenu.default,null,_react.default.createElement(_DropdownItem.default,null,"Action"),_react.default.createElement(_DropdownItem.default,null,"Another Action"),_react.default.createElement(_DropdownItem.default,{divider:!0}),_react.default.createElement(_DropdownItem.default,{header:!0},"Header"),_react.default.createElement(_DropdownItem.default,{disabled:!0},"Disabled Action")))}},exports.Controlled={args:{direction:"",isOpen:!1,toggle:(0,_addonActions.action)("toggle"),color:"primary",disabled:!1,outline:!1,size:void 0,text:"Click Me"},render:_ref2=>{var direction=_ref2.direction,isOpen=_ref2.isOpen,toggle=_ref2.toggle,color=_ref2.color,disabled=_ref2.disabled,outline=_ref2.outline,size=_ref2.size,text=_ref2.text;return _react.default.createElement(_Dropdown.default,{direction:direction,isOpen:isOpen,toggle:toggle},_react.default.createElement(_DropdownToggle.default,{color:color,disabled:disabled,outline:outline,size:size,caret:!0},text),_react.default.createElement(_DropdownMenu.default,null,_react.default.createElement(_DropdownItem.default,null,"Action"),_react.default.createElement(_DropdownItem.default,null,"Another Action"),_react.default.createElement(_DropdownItem.default,{divider:!0}),_react.default.createElement(_DropdownItem.default,{header:!0},"Header"),_react.default.createElement(_DropdownItem.default,{disabled:!0},"Disabled Action")))}};module.exports.__namedExportsOrder=["Uncontrolled","Controlled"]}}]);
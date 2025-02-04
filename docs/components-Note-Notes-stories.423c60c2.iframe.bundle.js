"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[1788],{"./node_modules/@storybook/addon-actions/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{XI:function(){return action}});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name:name,deprecated:deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id:id,count:0,data:{name:name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/Note/Notes.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithChildren:function(){return WithChildren},WithNotesProp:function(){return WithNotesProp},__namedExportsOrder:function(){return __namedExportsOrder}});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_Note__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Note/Note.tsx"),_Notes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Note/Notes.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const moreNotes=[{id:1,date:new Date,from:"Aaron Panchal",text:"Hello World as well!"},{id:2,date:new Date,from:"Gary Thomas",text:"Goodbye Cruel World"}];__webpack_exports__.default={title:"Notes",component:_Notes__WEBPACK_IMPORTED_MODULE_2__.default,parameters:{sourceLink:"Note/Notes.tsx"}};const WithNotesProp=({deleted:deleted,edited:edited,editing:editing,saving:saving,...args})=>{const notes=[{id:0,date:new Date,deleted:deleted,edited:edited,editing:editing,saving:saving,from:"Gary Thomas",text:"Hello World"},...moreNotes];return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Notes__WEBPACK_IMPORTED_MODULE_2__.default,_extends({notes:notes},args))};WithNotesProp.displayName="WithNotesProp",WithNotesProp.args={deleted:!1,edited:!1,editing:!1,saving:!1,onCancel:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onCancel"),onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onChange"),onDelete:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onDelete"),onEdit:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onEdit"),onSave:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onSave"),onUndelete:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onUndelete")};const WithChildren=({deleted:deleted,edited:edited,editing:editing,saving:saving,...args})=>{const notes=[{date:new Date,deleted:deleted,edited:edited,editing:editing,saving:saving,from:"Gary Thomas",text:"Hello World"},...moreNotes];return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Notes__WEBPACK_IMPORTED_MODULE_2__.default,null,notes.map((note=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Note__WEBPACK_IMPORTED_MODULE_3__.default,_extends({note:note,saving:note.saving},args)))))};WithChildren.displayName="WithChildren",WithChildren.args={deleted:!1,edited:!1,editing:!1,saving:!1,onCancel:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onCancel"),onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onChange"),onDelete:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onDelete"),onEdit:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onEdit"),onSave:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onSave"),onUndelete:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onUndelete")};const __namedExportsOrder=["WithNotesProp","WithChildren"];WithNotesProp.parameters={...WithNotesProp.parameters,docs:{...WithNotesProp.parameters?.docs,source:{originalSource:"({\n  deleted,\n  edited,\n  editing,\n  saving,\n  ...args\n}) => {\n  const notes = [{\n    id: 0,\n    date: new Date(),\n    deleted,\n    edited,\n    editing,\n    saving,\n    from: 'Gary Thomas',\n    text: 'Hello World'\n  }, ...moreNotes];\n  return <Notes notes={notes} {...args} />;\n}",...WithNotesProp.parameters?.docs?.source}}},WithChildren.parameters={...WithChildren.parameters,docs:{...WithChildren.parameters?.docs,source:{originalSource:"({\n  deleted,\n  edited,\n  editing,\n  saving,\n  ...args\n}) => {\n  const notes = [{\n    date: new Date(),\n    deleted,\n    edited,\n    editing,\n    saving,\n    from: 'Gary Thomas',\n    text: 'Hello World'\n  }, ...moreNotes];\n  return <Notes>\n      {notes.map(note => <Note note={note} saving={note.saving} {...args} />)}\n    </Notes>;\n}",...WithChildren.parameters?.docs?.source}}}}}]);
"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[8427],{"./node_modules/@storybook/addon-actions/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{XI:function(){return action}});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name:name,deprecated:deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id:id,count:0,data:{name:name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/tooling/colors.js":function(__unused_webpack_module,exports){exports.qd=exports.Tj=exports.vx=exports._z=void 0;var colors=exports.Tj=["primary","secondary","success","danger","warning","info","ai","light","dark","white"];exports.vx=[...colors,"link"],exports._z=[...colors,"transparent"],exports.qd=[...colors,"body","muted","white","black-50","white-50"]},"./src/components/FeedbackButton/FeedbackButton.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllProps:function(){return AllProps},Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_tooling_colors__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/tooling/colors.js"),_FeedbackButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/FeedbackButton/FeedbackButton.tsx");const meta={title:"FeedbackButton",component:_FeedbackButton__WEBPACK_IMPORTED_MODULE_2__.default,parameters:{sourceLink:"FeedbackButton/FeedbackButton.tsx"},argTypes:{color:{options:_tooling_colors__WEBPACK_IMPORTED_MODULE_3__.vx,control:{type:"select"}},size:{options:["lg","md","sm"],control:{type:"inline-radio"}}}};__webpack_exports__.default=meta;const Default={args:{backdrop:!1,className:"",color:"primary",disabled:!1,doSubmit:async()=>{(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("doSubmit")},feature:"default",modalTitle:"Modal Title",outline:!1,recipient:"my_team_name"},render:args=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_FeedbackButton__WEBPACK_IMPORTED_MODULE_2__.default,args)},AllProps={args:{backdrop:!0,block:!0,cancelButtonText:"Cancel",className:"",color:"primary",commentIncluded:!1,commentPlaceholder:"Please give as much detail as you can. Thanks!",commentRequired:!1,commentSubtitle:"How could we improve the way this works for you?",disabled:!1,doSubmit:async()=>{(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("doSubmit")},feature:"default",highRatingText:"Very satisfied",lowRatingText:"Not satisfied at all",modalTitle:"Give Feedback",outline:!1,pleaseWaitButtonText:"Please Wait...",ratingIncluded:!1,ratingRequired:!1,ratingSubtitle:"So far, how satisfied are you with this feature?",recipient:"recipient@example.com",size:"md",submitButtonText:"Send"},render:args=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_FeedbackButton__WEBPACK_IMPORTED_MODULE_2__.default,args)},__namedExportsOrder=["Default","AllProps"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    backdrop: false,\n    className: '',\n    color: 'primary',\n    disabled: false,\n    doSubmit: async () => {\n      action('doSubmit');\n    },\n    feature: 'default',\n    modalTitle: 'Modal Title',\n    outline: false,\n    recipient: 'my_team_name'\n  },\n  render: args => <FeedbackButton {...args} />\n}",...Default.parameters?.docs?.source}}},AllProps.parameters={...AllProps.parameters,docs:{...AllProps.parameters?.docs,source:{originalSource:"{\n  args: {\n    backdrop: true,\n    block: true,\n    cancelButtonText: 'Cancel',\n    className: '',\n    color: 'primary',\n    commentIncluded: false,\n    commentPlaceholder: 'Please give as much detail as you can. Thanks!',\n    commentRequired: false,\n    commentSubtitle: 'How could we improve the way this works for you?',\n    disabled: false,\n    doSubmit: async () => {\n      action('doSubmit');\n    },\n    feature: 'default',\n    highRatingText: 'Very satisfied',\n    lowRatingText: 'Not satisfied at all',\n    modalTitle: 'Give Feedback',\n    outline: false,\n    pleaseWaitButtonText: 'Please Wait...',\n    ratingIncluded: false,\n    ratingRequired: false,\n    ratingSubtitle: 'So far, how satisfied are you with this feature?',\n    recipient: 'recipient@example.com',\n    size: 'md',\n    submitButtonText: 'Send'\n  },\n  render: args => <FeedbackButton {...args} />\n}",...AllProps.parameters?.docs?.source}}}}}]);
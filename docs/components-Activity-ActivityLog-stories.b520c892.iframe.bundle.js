"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[4307],{"./src/components/Activity/ActivityLog.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AddingCustomComponents:function(){return AddingCustomComponents},WithProps:function(){return WithProps},__namedExportsOrder:function(){return __namedExportsOrder}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Activity__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Activity/Activity.tsx"),_ActivityLog__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Activity/ActivityLog.tsx");__webpack_exports__.default={title:"ActivityLog",component:_ActivityLog__WEBPACK_IMPORTED_MODULE_1__.default,parameters:{sourceLink:"Activity/ActivityLog.tsx"}};const WithProps=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ActivityLog__WEBPACK_IMPORTED_MODULE_1__.default,args,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Activity__WEBPACK_IMPORTED_MODULE_2__.default,{date:new Date(2017,10,31,23,15),action:"Created",by:"Services"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Activity__WEBPACK_IMPORTED_MODULE_2__.default,{date:new Date(2017,9,13,13,0),action:"Edited"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Activity__WEBPACK_IMPORTED_MODULE_2__.default,{date:new Date(2017,4,1,6,0),action:"Edited",by:"Gary"},"He messed this up"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Activity__WEBPACK_IMPORTED_MODULE_2__.default,{date:new Date(2017,2,28,12,1)}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Activity__WEBPACK_IMPORTED_MODULE_2__.default,{date:new Date},"Nothing to see here, move on"));WithProps.displayName="WithProps",WithProps.args={flush:!1};const AddingCustomComponents=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ActivityLog__WEBPACK_IMPORTED_MODULE_1__.default,args,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Activity__WEBPACK_IMPORTED_MODULE_2__.default,{date:new Date,action:"Edited",by:"Jane Doe"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Activity__WEBPACK_IMPORTED_MODULE_2__.default,{date:new Date,action:"Published",by:"Martha (Leasing)"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Activity__WEBPACK_IMPORTED_MODULE_2__.default,{date:new Date,action:"Created",by:"services"},"Please contact ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"mailto:william@awesomepm.com"},"William")," for details."));AddingCustomComponents.displayName="AddingCustomComponents";const __namedExportsOrder=["WithProps","AddingCustomComponents"];WithProps.parameters={...WithProps.parameters,docs:{...WithProps.parameters?.docs,source:{originalSource:'args => <ActivityLog {...args}>\n    <Activity date={new Date(2017, 10, 31, 23, 15)} action="Created" by="Services" />\n    <Activity date={new Date(2017, 9, 13, 13, 0)} action="Edited" />\n    <Activity date={new Date(2017, 4, 1, 6, 0)} action="Edited" by="Gary">\n      He messed this up\n    </Activity>\n    <Activity date={new Date(2017, 2, 28, 12, 1)} />\n    <Activity date={new Date()}>Nothing to see here, move on</Activity>\n  </ActivityLog>',...WithProps.parameters?.docs?.source}}},AddingCustomComponents.parameters={...AddingCustomComponents.parameters,docs:{...AddingCustomComponents.parameters?.docs,source:{originalSource:'args => <ActivityLog {...args}>\n    <Activity date={new Date()} action="Edited" by="Jane Doe" />\n    <Activity date={new Date()} action="Published" by="Martha (Leasing)" />\n    <Activity date={new Date()} action="Created" by="services">\n      Please contact <a href="mailto:william@awesomepm.com">William</a> for details.\n    </Activity>\n  </ActivityLog>',...AddingCustomComponents.parameters?.docs?.source}}}}}]);
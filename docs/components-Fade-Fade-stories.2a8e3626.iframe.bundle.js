"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[1285],{"./src/components/Fade/Fade.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LiveExample:function(){return LiveExample},__namedExportsOrder:function(){return __namedExportsOrder}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Button_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Button/Button.tsx"),_Fade__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Fade/Fade.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}__webpack_exports__.default={title:"Fade",component:_Fade__WEBPACK_IMPORTED_MODULE_1__.default,parameters:{sourceLink:"Fade/Fade.tsx"}};const LiveExample=args=>{const[open,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_2__.default,{color:"primary",onClick:()=>setOpen(!open)},"Toggle Fade"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Fade__WEBPACK_IMPORTED_MODULE_1__.default,_extends({in:open,className:"mt-3"},args),"This content will fade in and out as the button is pressed"))};LiveExample.displayName="LiveExample";const __namedExportsOrder=["LiveExample"];LiveExample.parameters={...LiveExample.parameters,docs:{...LiveExample.parameters?.docs,source:{originalSource:'args => {\n  const [open, setOpen] = useState(false);\n  return <div>\n      <Button color="primary" onClick={() => setOpen(!open)}>\n        Toggle Fade\n      </Button>\n      <Fade in={open} className="mt-3" {...args}>\n        This content will fade in and out as the button is pressed\n      </Fade>\n    </div>;\n}',...LiveExample.parameters?.docs?.source}}}}}]);
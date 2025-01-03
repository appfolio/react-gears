"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[2513],{"./src/tooling/colors.js":function(__unused_webpack_module,exports){Object.defineProperty(exports,"__esModule",{value:!0}),exports.textColors=exports.colors=exports.buttonColors=exports.bgColors=void 0;var colors=exports.colors=["primary","secondary","success","danger","warning","info","ai","light","dark","white"];exports.buttonColors=[...colors,"link"],exports.bgColors=[...colors,"transparent"],exports.textColors=[...colors,"body","muted","white","black-50","white-50"]},"./src/components/Card/Card.stories.js":function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Outline=exports.LiveExample=exports.Colors=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_colors=__webpack_require__("./src/tooling/colors.js"),_Card=_interopRequireDefault(__webpack_require__("./src/components/Card/Card.tsx")),_CardBody=_interopRequireDefault(__webpack_require__("./src/components/Card/CardBody.tsx")),_CardFooter=_interopRequireDefault(__webpack_require__("./src/components/Card/CardFooter.tsx")),_CardHeader=_interopRequireDefault(__webpack_require__("./src/components/Card/CardHeader.tsx")),_CardTitle=_interopRequireDefault(__webpack_require__("./src/components/Card/CardTitle.tsx"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.default={title:"Card",component:_Card.default,parameters:{sourceLink:"Card/Card.tsx"}};var LiveExample=_ref=>{var outline=_ref.outline,footer=_ref.footer,inverse=_ref.inverse,title=_ref.title,content=_ref.content;return _react.default.createElement("div",null,_react.default.createElement(_Card.default,{inverse:inverse,outline:outline},_react.default.createElement(_CardHeader.default,null,_react.default.createElement(_CardTitle.default,null,title)),_react.default.createElement(_CardBody.default,null,content),footer&&_react.default.createElement(_CardFooter.default,null,footer)))};exports.LiveExample=LiveExample,LiveExample.displayName="LiveExample",LiveExample.args={outline:!1,footer:"",inverse:!1,title:"Hello World!",content:"Lorem ipsum dolor sit amet, consectetur adipiscing\n  elit, sed do eiusmod tempor incididunt ut labore\n  et dolore magna aliqua.  Ut enim ad minim veniam,\n  quis nostrud exercitation ullamco laboris nisi ut\n  aliquip ex ea commodo consequat."};var Colors=()=>_react.default.createElement("div",null,[null,..._colors.colors].map((color=>_react.default.createElement(_Card.default,{color:color,className:"mb-4"},_react.default.createElement(_CardBody.default,null,_react.default.createElement(_CardTitle.default,null,color||"default"),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))));exports.Colors=Colors,Colors.displayName="Colors";var Outline=_ref2=>{var squareCorners=_ref2.squareCorners;return _react.default.createElement("div",null,_react.default.createElement(_Card.default,{outline:!0,className:"mb-4 "+(squareCorners?"rounded-0":"")},_react.default.createElement(_CardBody.default,null,_react.default.createElement(_CardTitle.default,null,"Default"),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),_colors.colors.map((color=>_react.default.createElement(_Card.default,{outline:!0,color:color,className:"mb-4 "+(squareCorners?"rounded-0":"")},_react.default.createElement(_CardBody.default,null,_react.default.createElement(_CardTitle.default,null,color),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))))};exports.Outline=Outline,Outline.displayName="Outline",Outline.args={squareCorners:!0},module.exports.__namedExportsOrder=["Outline","LiveExample","Colors"]}}]);
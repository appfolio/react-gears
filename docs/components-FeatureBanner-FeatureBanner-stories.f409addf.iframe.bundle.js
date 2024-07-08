"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[811],{"./src/tooling/colors.js":function(__unused_webpack_module,exports){Object.defineProperty(exports,"__esModule",{value:!0}),exports.textColors=exports.colors=exports.buttonColors=exports.bgColors=void 0;var colors=exports.colors=["primary","secondary","success","danger","warning","info","ai","light","dark"];exports.buttonColors=[...colors,"link"],exports.bgColors=[...colors,"transparent"],exports.textColors=[...colors,"body","muted","white","black-50","white-50"]},"./src/components/FeatureBanner/FeatureBanner.stories.tsx":function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.LiveExample=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_colors=__webpack_require__("./src/tooling/colors.js"),_Button=_interopRequireDefault(__webpack_require__("./src/components/Button/Button.tsx")),_Icon=_interopRequireDefault(__webpack_require__("./src/components/Icon/Icon.tsx")),_FeatureBanner=_interopRequireDefault(__webpack_require__("./src/components/FeatureBanner/FeatureBanner.tsx"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var meta={title:"FeatureBanner",component:_FeatureBanner.default,parameters:{sourceLink:"FeatureBanner/FeatureBanner.tsx"},argTypes:{color:{options:_colors.colors,control:{type:"select"}}}};exports.default=meta,exports.LiveExample={args:{alertText:"New",color:"info",title:"Company-Wide View of Text Messages",subtitle:"View all text messages sent by your company from this page."},render:args=>_react.default.createElement(_FeatureBanner.default,args,_react.default.createElement(_Button.default,{color:"primary",outline:!0,className:"fw-bold text-uppercase"},_react.default.createElement(_Icon.default,{name:"envelope",className:"me-2"}),"Feedback"))};module.exports.__namedExportsOrder=["LiveExample"]}}]);
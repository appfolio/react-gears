"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[2839],{"./src/components/Highlight/Highlight.stories.js":function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.UseRegexAsPattern=exports.LiveExample=exports.DOMNodesAsChildren=void 0;var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_Highlight=_interopRequireDefault(__webpack_require__("./src/components/Highlight/Highlight.tsx")),_excluded=["children"];function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.default={title:"Highlight",component:_Highlight.default,parameters:{sourceLink:"Highlight/Highlight.tsx"}};var LiveExample=_ref=>{var children=_ref.children,args=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)>=0)continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return _react.default.createElement(_Highlight.default,args,children)};exports.LiveExample=LiveExample,LiveExample.displayName="LiveExample",LiveExample.args={caseSensitive:!1,ignoreSpecial:!1,pattern:"dog",children:"The quick brown fox jumps over the lazy dog."};var DOMNodesAsChildren=args=>_react.default.createElement(_Highlight.default,args,_react.default.createElement("div",null,"The quick brown fox jumps over the lazy dog."),_react.default.createElement("div",null,"Henlo, I am doge. Gib treatos pls.",_react.default.createElement("span",null,"wowoweeow dogtor doglittle")));exports.DOMNodesAsChildren=DOMNodesAsChildren,DOMNodesAsChildren.displayName="DOMNodesAsChildren",DOMNodesAsChildren.args={caseSensitive:!1,ignoreSpecial:!1,pattern:"dog"};var UseRegexAsPattern=args=>_react.default.createElement(_Highlight.default,args,_react.default.createElement("div",null,"The quick brown fox jumps over the lazy dog."),_react.default.createElement("div",null,"THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."));exports.UseRegexAsPattern=UseRegexAsPattern,UseRegexAsPattern.displayName="UseRegexAsPattern",UseRegexAsPattern.args={caseSensitive:!1,ignoreSpecial:!1,escape:!1,pattern:"(fox)|(dog)"},module.exports.__namedExportsOrder=["UseRegexAsPattern","LiveExample","DOMNodesAsChildren"]}}]);
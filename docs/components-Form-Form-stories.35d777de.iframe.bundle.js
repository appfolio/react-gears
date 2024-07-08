"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[3697],{"./src/components/Form/Form.stories.js":function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Inputs=exports.FormRows=exports.FloatingLabels=exports.Bound=void 0;var _addonActions=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.js"),_react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),_AddressInput=_interopRequireDefault(__webpack_require__("./src/components/Address/AddressInput.tsx")),_CountryInput=_interopRequireDefault(__webpack_require__("./src/components/Address/CountryInput.tsx")),_StateInput=_interopRequireDefault(__webpack_require__("./src/components/Address/StateInput.tsx")),_Button=_interopRequireDefault(__webpack_require__("./src/components/Button/Button.tsx")),_CheckboxInput=_interopRequireDefault(__webpack_require__("./src/components/Checkbox/CheckboxInput.tsx")),_CreditCardNumber=_interopRequireDefault(__webpack_require__("./src/components/Input/CreditCardNumber.tsx")),_CurrencyInput=_interopRequireDefault(__webpack_require__("./src/components/Input/CurrencyInput.tsx")),_DateInput=_interopRequireDefault(__webpack_require__("./src/components/Input/DateInput.js")),_FileInput=_interopRequireDefault(__webpack_require__("./src/components/Input/FileInput.tsx")),_Input=_interopRequireDefault(__webpack_require__("./src/components/Input/Input.tsx")),_MonthInput=_interopRequireDefault(__webpack_require__("./src/components/Input/MonthInput.js")),_StaticInput=_interopRequireDefault(__webpack_require__("./src/components/Input/StaticInput.tsx")),_Label=_interopRequireDefault(__webpack_require__("./src/components/Label/Label.tsx")),_BoundForm=_interopRequireDefault(__webpack_require__("./src/components/Form/BoundForm.js")),_BoundFormRow=_interopRequireDefault(__webpack_require__("./src/components/Form/BoundFormRow.js")),_Form=_interopRequireDefault(__webpack_require__("./src/components/Form/Form.tsx")),_FormChoice=_interopRequireDefault(__webpack_require__("./src/components/Form/FormChoice.js")),_FormGroup=_interopRequireDefault(__webpack_require__("./src/components/Form/FormGroup.tsx")),_FormLabelGroup=_interopRequireDefault(__webpack_require__("./src/components/Form/FormLabelGroup.tsx")),_FormRow=_interopRequireDefault(__webpack_require__("./src/components/Form/FormRow.tsx"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var formData={firstName:"Obi-Wan",movie:"The Force Awakens",ship:"Millennium Falcon",characters:["Luke Skywalker","awesome"],address:{address1:"123 Best Avenue"},mindTricks:!0},Inputs=(exports.default={title:"Forms",parameters:{sourceLink:"Form/Form.tsx"}},args=>_react.default.createElement("div",null,_react.default.createElement(_FormLabelGroup.default,_extends({label:"Input",inputId:"hello"},args),_react.default.createElement(_Input.default,{placeholder:"Hello World",id:"hello"})),_react.default.createElement("p",null,"See all supported Input types here:"," ",_react.default.createElement("a",{href:"https://reactstrap.github.io/components/form/"},"Reactstrap Form"),".",_react.default.createElement("br",null),"In addition, we add these input components below:"),_react.default.createElement("hr",null),_react.default.createElement(_FormLabelGroup.default,{label:"CheckboxInput",inputId:"helloworld"},_react.default.createElement(_CheckboxInput.default,{id:"helloworld",checkboxLabel:"Hello World"})),_react.default.createElement(_FormLabelGroup.default,{label:"CountryInput",inputId:"countryinput"},_react.default.createElement(_CountryInput.default,{id:"countryinput"})),_react.default.createElement(_FormLabelGroup.default,{label:"CreditCardNumber",inputId:"creditcardnumber"},_react.default.createElement(_CreditCardNumber.default,{value:"4111111111111111",id:"creditcardnumber"})),_react.default.createElement(_FormLabelGroup.default,{label:"CurrencyInput",inputId:"currencyinput"},_react.default.createElement(_CurrencyInput.default,{value:123456.789,id:"currencyinput"})),_react.default.createElement(_FormLabelGroup.default,{label:"DateInput",inputId:"dateinput"},_react.default.createElement(_DateInput.default,{id:"dateinput"})),_react.default.createElement(_FormLabelGroup.default,{label:"FileInput",inputId:"fileinput"},_react.default.createElement(_FileInput.default,{id:"fileinput"})),_react.default.createElement(_FormLabelGroup.default,{label:"MonthInput",inputId:"monthinput"},_react.default.createElement(_MonthInput.default,{id:"monthinput"})),_react.default.createElement(_FormLabelGroup.default,{label:"StateInput",inputId:"stateinput"},_react.default.createElement(_StateInput.default,{id:"stateinput"})),_react.default.createElement(_FormLabelGroup.default,{label:"StaticInput",inputId:"staticinput"},_react.default.createElement(_StaticInput.default,{value:"No Change",id:"staticinput"}))));exports.Inputs=Inputs,Inputs.displayName="Inputs";exports.FloatingLabels=args=>_react.default.createElement(_react.default.Fragment,null,_react.default.createElement("p",null,"Wrap a pair of ",_react.default.createElement("code",null,"<Input>")," and ",_react.default.createElement("code",null,"<Label>")," components in"," ",_react.default.createElement("code",null,"<FormGroup floating>")," to enable floating labels with Bootstrap’s textual form fields. A ",_react.default.createElement("code",null,"placeholder")," is required on each ",_react.default.createElement("code",null,"<Input>")," as our method of CSS-only floating labels uses the ",_react.default.createElement("code",null,":placeholder-shown")," pseudo-element. Also note that the ",_react.default.createElement("code",null,"<Input>")," must come first so we can utilize a sibling selector (e.g., ",_react.default.createElement("code",null,"~"),")."),_react.default.createElement(_Form.default,_extends({inline:!0},args),_react.default.createElement(_FormGroup.default,{floating:!0},_react.default.createElement(_Input.default,{type:"email",name:"email",id:"exampleEmail",placeholder:"Email"}),_react.default.createElement(_Label.default,{for:"exampleEmail"},"Email"))," ",_react.default.createElement(_FormGroup.default,{floating:!0},_react.default.createElement(_Input.default,{type:"password",name:"password",id:"examplePassword",placeholder:"Password"}),_react.default.createElement(_Label.default,{for:"examplePassword"},"Password"))," ",_react.default.createElement(_Button.default,null,"Submit")));var FormRows=args=>_react.default.createElement(_Form.default,null,_react.default.createElement(_FormRow.default,_extends({label:"First Name",id:"first"},args)),_react.default.createElement(_FormRow.default,{label:"Last Name",feedback:"can't be blank",color:"danger",id:"last"}),_react.default.createElement(_FormRow.default,{label:"Nickname",hint:"A fun name to describe yourself!",id:"nick"}),_react.default.createElement(_FormRow.default,{label:"DOB",required:!0,id:"dob"}),_react.default.createElement(_FormRow.default,{label:"Disabled Field",disabled:!0,id:"disabled"}),_react.default.createElement(_FormRow.default,{label:"Who is Luke's Father?",value:"Darth Vader",type:"static",id:"luke"}),_react.default.createElement(_FormRow.default,{type:"textarea",label:"Notes",id:"notes"}),_react.default.createElement(_FormRow.default,{type:"select",label:"Select Movie",color:"success",feedback:"Awesome!",id:"movie"},_react.default.createElement(_FormChoice.default,{value:"override"},"A New Hope"),_react.default.createElement(_FormChoice.default,null,"The Empire Strikes Back"),_react.default.createElement(_FormChoice.default,null,"The Force Awakens")),_react.default.createElement(_FormRow.default,{type:"radio",label:"Select Ship",hint:"Some ships are unreliable...",name:"ship",id:"ship"},_react.default.createElement(_FormChoice.default,{color:"danger"},"Death Star"),_react.default.createElement(_FormChoice.default,{color:"warning"},"Millennium Falcon"),_react.default.createElement(_FormChoice.default,{color:"success"},"Imperial Shuttle")),_react.default.createElement(_FormRow.default,{type:"checkbox",label:"Select the character(s) you like",id:"characters"},_react.default.createElement(_FormChoice.default,null,"Darth Vader"),_react.default.createElement(_FormChoice.default,null,"Luke Skywalker"),_react.default.createElement(_FormChoice.default,{disabled:!0},"Emperor Palpatine"),_react.default.createElement(_FormChoice.default,null,"Rey"),_react.default.createElement(_FormChoice.default,null,"TK-421")),_react.default.createElement(_FormRow.default,{type:"checkbox",label:"Use Jedi mind tricks?",id:"jedi"}),_react.default.createElement(_FormRow.default,{type:"radio",label:"Do you like Star Wars?",inline:!0,name:"movie",id:"starwars"},_react.default.createElement(_FormChoice.default,null,"Yes"),_react.default.createElement(_FormChoice.default,{disabled:!0},"No")),_react.default.createElement(_FormRow.default,{type:_CurrencyInput.default,label:"How much would you pay to meet the cast?",id:"pay"}));exports.FormRows=FormRows,FormRows.displayName="FormRows";var Bound=args=>_react.default.createElement(_BoundForm.default,_extends({object:formData},args),_react.default.createElement(_BoundFormRow.default,{label:"First Name",name:"firstName",id:"firstName"}),_react.default.createElement(_BoundFormRow.default,{label:"Last Name",name:"lastName",required:!0,id:"lastName"}),_react.default.createElement(_BoundFormRow.default,{type:_CurrencyInput.default,label:"How much would you pay to meet the cast?",name:"amount",id:"pay"}),_react.default.createElement(_BoundFormRow.default,{type:"select",label:"Select Movie",name:"movie",id:"movie"},_react.default.createElement(_FormChoice.default,null,"A New Hope"),_react.default.createElement(_FormChoice.default,{value:"episode6"},"The Empire Strikes Back"),_react.default.createElement(_FormChoice.default,null,"The Force Awakens")),_react.default.createElement(_BoundFormRow.default,{type:"checkbox",label:"Select the character(s) you like",name:"characters",id:"characters"},_react.default.createElement(_FormChoice.default,null,"Darth Vader"),_react.default.createElement(_FormChoice.default,null,"Luke Skywalker"),_react.default.createElement(_FormChoice.default,{disabled:!0},"Emperor Palpatine"),_react.default.createElement(_FormChoice.default,{value:"awesome"},"Rey"),_react.default.createElement(_FormChoice.default,null,"TK-421")),_react.default.createElement(_BoundFormRow.default,{type:"checkbox",label:"Use Jedi mind tricks?",name:"mindTricks",id:"mindTricks"}),_react.default.createElement(_BoundFormRow.default,{type:"radio",label:"Select Ship",name:"ship",id:"ship"},_react.default.createElement(_FormChoice.default,null,"Death Star"),_react.default.createElement(_FormChoice.default,null,"Millennium Falcon"),_react.default.createElement(_FormChoice.default,{value:"shuttle"},"Imperial Shuttle")),_react.default.createElement(_BoundFormRow.default,{type:_AddressInput.default,name:"address",label:"Address",id:"address"}),_react.default.createElement(_BoundFormRow.default,{type:"file",label:"Death Star Schematics",name:"deathStarPlans",id:"deathStarPlans",multiple:!0}),_react.default.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit"));exports.Bound=Bound,Bound.displayName="Bound",Bound.args={errors:{lastName:"Last Name is required"},onSubmit:(0,_addonActions.action)("submit")},module.exports.__namedExportsOrder=["Inputs","FormRows","FloatingLabels","Bound"]}}]);
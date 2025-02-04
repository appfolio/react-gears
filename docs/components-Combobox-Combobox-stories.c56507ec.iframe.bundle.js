"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[9647],{"./src/components/Combobox/Combobox.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CreatableOptions:function(){return CreatableOptions},CustomOptions:function(){return CustomOptions},Grouped:function(){return Grouped},LiveExample:function(){return LiveExample},Multi:function(){return Multi},PortalElement:function(){return PortalElement},__namedExportsOrder:function(){return __namedExportsOrder}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/Icon.tsx"),_Combobox__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Combobox/Combobox.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const options=[{label:"Alaska",value:"AK"},{label:"Alabama",value:"AL"},{label:"Arkansas",value:"AR"},{label:"Arizona",value:"AZ"},{label:"California",value:"CA"},{label:"Colorado",value:"CO"},{label:"Connecticut",value:"CT"},{label:"Washington, D.C.",value:"DC"},{label:"Delaware",value:"DE"},{label:"Florida",value:"FL"},{label:"Georgia",value:"GA"},{label:"Hawaii",value:"HI"},{label:"Iowa",value:"IA"},{label:"Idaho",value:"ID"},{label:"Illinois",value:"IL"},{label:"Indiana",value:"IN"},{label:"Kansas",value:"KS"},{label:"Kentucky",value:"KY"},{label:"Louisiana",value:"LA"},{label:"Massachusetts",value:"MA"},{label:"Maryland",value:"MD"},{label:"Maine",value:"ME"},{label:"Michigan",value:"MI"},{label:"Minnesota",value:"MN"},{label:"Missouri",value:"MO"},{label:"Mississippi",value:"MS"},{label:"Montana",value:"MT"},{label:"North Carolina",value:"NC"},{label:"North Dakota",value:"ND"},{label:"Nebraska",value:"NE"},{label:"New Hampshire",value:"NH"},{label:"New Jersey",value:"NJ"},{label:"New Mexico",value:"NM"},{label:"Nevada",value:"NV"},{label:"New York",value:"NY"},{label:"Ohio",value:"OH"},{label:"Oklahoma",value:"OK"},{label:"Oregon",value:"OR"},{label:"Pennsylvania",value:"PA"},{label:"Rhode Island",value:"RI"},{label:"South Carolina",value:"SC"},{label:"South Dakota",value:"SD"},{label:"Tennessee",value:"TN"},{label:"Texas",value:"TX"},{label:"Utah",value:"UT"},{label:"Virginia",value:"VA"},{label:"Vermont",value:"VT"},{label:"Washington",value:"WA"},{label:"Wisconsin",value:"WI"},{label:"West Virginia",value:"WV"},{label:"Wyoming",value:"WY"},{label:"U.S. Armed Forces Americas",value:"AA"},{label:"U.S. Armed Forces Europe",value:"AE"},{label:"U.S. Armed Forces Pacific",value:"AP"},{label:"American Samoa",value:"AS"},{label:"Micronesia",value:"FM"},{label:"Guam",value:"GU"},{label:"Marshall Islands",value:"MH"},{label:"Northern Mariana Islands",value:"MP"},{label:"Puerto Rico",value:"PR"},{label:"Virgin Islands",value:"VI"}],meta={title:"Combobox",component:_Combobox__WEBPACK_IMPORTED_MODULE_1__.default,parameters:{sourceLink:"Combobox/Combobox.tsx"},argTypes:{direction:{options:["","down","up"],control:{type:"select"}},disabled:{control:"boolean"},noResultsLabel:{control:"text"},placeholder:{control:"text"}}};__webpack_exports__.default=meta;const LiveExample={args:{direction:"",disabled:_Combobox__WEBPACK_IMPORTED_MODULE_1__.default.defaultProps.disabled,noResultsLabel:_Combobox__WEBPACK_IMPORTED_MODULE_1__.default.defaultProps.noResultsLabel,placeholder:_Combobox__WEBPACK_IMPORTED_MODULE_1__.default.defaultProps.placeholder,inputClassName:""},render:function Render(args){const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"value: ",value),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Combobox__WEBPACK_IMPORTED_MODULE_1__.default,_extends({onChange:setValue,options:options,value:value},args)))}},Multi={args:{direction:"",disabled:_Combobox__WEBPACK_IMPORTED_MODULE_1__.default.defaultProps.disabled,noResultsLabel:_Combobox__WEBPACK_IMPORTED_MODULE_1__.default.defaultProps.noResultsLabel,placeholder:_Combobox__WEBPACK_IMPORTED_MODULE_1__.default.defaultProps.placeholder,inputClassName:""},render:function Render(args){const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Combobox__WEBPACK_IMPORTED_MODULE_1__.default,_extends({multi:!0,onChange:setValue,options:options,value:value},args))}},Grouped={args:{multi:!1,direction:"",disabled:_Combobox__WEBPACK_IMPORTED_MODULE_1__.default.defaultProps.disabled,noResultsLabel:_Combobox__WEBPACK_IMPORTED_MODULE_1__.default.defaultProps.noResultsLabel,placeholder:_Combobox__WEBPACK_IMPORTED_MODULE_1__.default.defaultProps.placeholder,inputClassName:""},render:function Render(args){const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Combobox__WEBPACK_IMPORTED_MODULE_1__.default,_extends({onChange:setValue,options:[{label:"Colors",options:[{label:"Red",value:"red"},{label:"Blue",value:"blue"}]},{label:"States",options:options}],value:value,menuMaxHeight:"20rem"},args))}},CreatableOptions={args:{direction:"",disabled:_Combobox__WEBPACK_IMPORTED_MODULE_1__.default.defaultProps.disabled,noResultsLabel:_Combobox__WEBPACK_IMPORTED_MODULE_1__.default.defaultProps.noResultsLabel,placeholder:_Combobox__WEBPACK_IMPORTED_MODULE_1__.default.defaultProps.placeholder,inputClassName:""},render:function Render(args){const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[opts,setOpts]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(options);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Combobox__WEBPACK_IMPORTED_MODULE_1__.default,_extends({onChange:setValue,onCreate:str=>{const newOpt={value:str,label:str};return setOpts([...opts,newOpt]),newOpt.value},options:opts,value:value},args))}},CustomOptions={render:function Render(args){const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Combobox__WEBPACK_IMPORTED_MODULE_1__.default,_extends({onChange:setValue,options:[{label:"71548561868 Super-duper long word like impossibly long Lane",value:"address-1",type:"address"},{label:"439 Sunset Drive",value:"address-2",disabled:!0,type:"address"},{label:"940 Penguin Ct",value:"address-3",type:"address"},{label:"Ice Bear",value:"tenant-1",type:"tenant"},{label:"Panda",value:"tenant-2",type:"tenant"},{label:"77 Snowball Blvd",value:"address-4",type:"address"},{label:"Bob",value:"tenant-3",type:"tenant"}],value:value,renderOption:option=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__.default,{name:"address"===option.type?"home":"user",className:"me-2 py-4"}),option.label),renderInputValue:option=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},option.label),menuMaxHeight:"20rem"},args))}},PortalElement={args:{direction:"",disabled:_Combobox__WEBPACK_IMPORTED_MODULE_1__.default.defaultProps.disabled,noResultsLabel:_Combobox__WEBPACK_IMPORTED_MODULE_1__.default.defaultProps.noResultsLabel,placeholder:_Combobox__WEBPACK_IMPORTED_MODULE_1__.default.defaultProps.placeholder,inputClassName:""},render:function Render(args){const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"value: ",value),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Combobox__WEBPACK_IMPORTED_MODULE_1__.default,_extends({onChange:setValue,options:options,value:value,portalEl:document.body},args)))}},__namedExportsOrder=["LiveExample","Multi","Grouped","CreatableOptions","CustomOptions","PortalElement"];LiveExample.parameters={...LiveExample.parameters,docs:{...LiveExample.parameters?.docs,source:{originalSource:"{\n  args: {\n    direction: '',\n    disabled: Combobox.defaultProps.disabled,\n    noResultsLabel: Combobox.defaultProps.noResultsLabel,\n    placeholder: Combobox.defaultProps.placeholder,\n    inputClassName: ''\n  },\n  render: function Render(args) {\n    const [value, setValue] = useState();\n    return <>\n        <div>value: {value}</div>\n        <Combobox onChange={setValue} options={options} value={value} {...args} />\n      </>;\n  }\n}",...LiveExample.parameters?.docs?.source}}},Multi.parameters={...Multi.parameters,docs:{...Multi.parameters?.docs,source:{originalSource:"{\n  args: {\n    direction: '',\n    disabled: Combobox.defaultProps.disabled,\n    noResultsLabel: Combobox.defaultProps.noResultsLabel,\n    placeholder: Combobox.defaultProps.placeholder,\n    inputClassName: ''\n  },\n  render: function Render(args) {\n    const [value, setValue] = useState();\n    return <Combobox multi onChange={setValue} options={options} value={value} {...args} />;\n  }\n}",...Multi.parameters?.docs?.source}}},Grouped.parameters={...Grouped.parameters,docs:{...Grouped.parameters?.docs,source:{originalSource:"{\n  args: {\n    multi: false,\n    direction: '',\n    disabled: Combobox.defaultProps.disabled,\n    noResultsLabel: Combobox.defaultProps.noResultsLabel,\n    placeholder: Combobox.defaultProps.placeholder,\n    inputClassName: ''\n  },\n  render: function Render(args) {\n    const [value, setValue] = useState();\n    return <Combobox onChange={setValue} options={[{\n      label: 'Colors',\n      options: [{\n        label: 'Red',\n        value: 'red'\n      }, {\n        label: 'Blue',\n        value: 'blue'\n      }]\n    }, {\n      label: 'States',\n      options\n    }]} value={value} menuMaxHeight=\"20rem\" {...args} />;\n  }\n}",...Grouped.parameters?.docs?.source}}},CreatableOptions.parameters={...CreatableOptions.parameters,docs:{...CreatableOptions.parameters?.docs,source:{originalSource:"{\n  args: {\n    direction: '',\n    disabled: Combobox.defaultProps.disabled,\n    noResultsLabel: Combobox.defaultProps.noResultsLabel,\n    placeholder: Combobox.defaultProps.placeholder,\n    inputClassName: ''\n  },\n  render: function Render(args) {\n    const [value, setValue] = useState();\n    const [opts, setOpts] = useState(options);\n    const onCreate = str => {\n      const newOpt = {\n        value: str,\n        label: str\n      };\n      setOpts([...opts, newOpt]);\n      return newOpt.value;\n    };\n    return <Combobox onChange={setValue} onCreate={onCreate} options={opts} value={value} {...args} />;\n  }\n}",...CreatableOptions.parameters?.docs?.source}}},CustomOptions.parameters={...CustomOptions.parameters,docs:{...CustomOptions.parameters?.docs,source:{originalSource:"{\n  render: function Render(args) {\n    const [value, setValue] = useState();\n    const mixedOptions = [{\n      label: '71548561868 Super-duper long word like impossibly long Lane',\n      value: 'address-1',\n      type: 'address'\n    }, {\n      label: '439 Sunset Drive',\n      value: 'address-2',\n      disabled: true,\n      type: 'address'\n    }, {\n      label: '940 Penguin Ct',\n      value: 'address-3',\n      type: 'address'\n    }, {\n      label: 'Ice Bear',\n      value: 'tenant-1',\n      type: 'tenant'\n    }, {\n      label: 'Panda',\n      value: 'tenant-2',\n      type: 'tenant'\n    }, {\n      label: '77 Snowball Blvd',\n      value: 'address-4',\n      type: 'address'\n    }, {\n      label: 'Bob',\n      value: 'tenant-3',\n      type: 'tenant'\n    }];\n    const renderOption = option => <div>\n        <Icon name={option.type === 'address' ? 'home' : 'user'} className=\"me-2 py-4\" />\n        {option.label}\n      </div>;\n    const renderInputValue = option => <div style={{\n      whiteSpace: 'nowrap',\n      overflow: 'hidden',\n      textOverflow: 'ellipsis'\n    }}>\n        {option.label}\n      </div>;\n    return <Combobox onChange={setValue} options={mixedOptions} value={value} renderOption={renderOption} renderInputValue={renderInputValue} menuMaxHeight=\"20rem\" {...args} />;\n  }\n}",...CustomOptions.parameters?.docs?.source}}},PortalElement.parameters={...PortalElement.parameters,docs:{...PortalElement.parameters?.docs,source:{originalSource:"{\n  args: {\n    direction: '',\n    disabled: Combobox.defaultProps.disabled,\n    noResultsLabel: Combobox.defaultProps.noResultsLabel,\n    placeholder: Combobox.defaultProps.placeholder,\n    inputClassName: ''\n  },\n  render: function Render(args) {\n    const [value, setValue] = useState();\n    return <>\n        <div>value: {value}</div>\n        <Combobox onChange={setValue} options={options} value={value} portalEl={document.body} {...args} />\n      </>;\n  }\n}",...PortalElement.parameters?.docs?.source}}}}}]);
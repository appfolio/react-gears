"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[7361],{"./src/components/List/SortableList.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Areas:function(){return Areas},WithControlledSelection:function(){return WithControlledSelection},WithCustomHeader:function(){return WithCustomHeader},WithEverything:function(){return WithEverything},WithExpandableRow:function(){return WithExpandableRow},WithFiltering:function(){return WithFiltering},WithOptionalExpand:function(){return WithOptionalExpand},WithSelection:function(){return WithSelection},WithSort:function(){return WithSort},__namedExportsOrder:function(){return __namedExportsOrder}});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_Alert_Alert__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Alert/Alert.tsx"),_Button_Button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Button/Button.tsx"),_Label_Label__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Label/Label.tsx"),_SortableList__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/List/SortableList.tsx"),_util_data__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/List/util/data.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const meta={title:"SortableList",component:_SortableList__WEBPACK_IMPORTED_MODULE_2__.default,parameters:{sourceLink:"List/SortableList.tsx"},argTypes:{select:{control:{type:"select"},options:["","checkbox","radio","switch"]},flush:{control:"boolean"}}};__webpack_exports__.default=meta;const currency=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});function filterItems(filter,item){const f=filter.toLowerCase();return item.first.toLowerCase().includes(f)||item.last.toLowerCase().includes(f)||item.fee==filter}const ExpandoOne=item=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Label_Label__WEBPACK_IMPORTED_MODULE_3__.default,{className:"text-muted"},"Base late fee for October 2019:")," ",currency.format(item.fee)),ExpandoTwo=()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Alert_Alert__WEBPACK_IMPORTED_MODULE_4__.default,{color:"info",className:"m-0 "},"Expandable area");ExpandoTwo.displayName="ExpandoTwo";const WithEverything={args:{className:"",filterPlaceholder:_SortableList__WEBPACK_IMPORTED_MODULE_2__.default.defaultProps.filterPlaceholder,flush:_SortableList__WEBPACK_IMPORTED_MODULE_2__.default.defaultProps.flush,height:"70vh",scrollPositionKey:"sortableList-example",striped:!1,onSelect:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onSelect"),select:"checkbox",sortByLabel:_SortableList__WEBPACK_IMPORTED_MODULE_2__.default.defaultProps.sortByLabel},render:args=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SortableList__WEBPACK_IMPORTED_MODULE_2__.default,_extends({items:_util_data__WEBPACK_IMPORTED_MODULE_5__.A.slice(0,20),onExpand:ExpandoOne,onFilter:filterItems,sort:{property:["last","first"]},sortOptions:[{label:"First Name",value:["first","last"]},{label:"Last Name",value:["last","first"]},{label:"Late Fee",value:"fee"}],selectable:item=>item.id%2},args),(item=>react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"d-flex justify-content-between flex-column flex-sm-row"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"me-auto pb-2"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("h4",{className:"m-0"},item.first," ",item.last),react__WEBPACK_IMPORTED_MODULE_1__.createElement("p",{className:"mb-0"},item.address)),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"pe-3 pb-2"},currency.format(item.fee),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Label_Label__WEBPACK_IMPORTED_MODULE_3__.default,{className:"text-muted d-block"},"Late Fee Amount")),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"pe-3"},currency.format(item.fee),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Label_Label__WEBPACK_IMPORTED_MODULE_3__.default,{className:"text-muted d-block"},"Balance Subject to Late Fees")))))},WithExpandableRow={render:args=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SortableList__WEBPACK_IMPORTED_MODULE_2__.default,_extends({items:_util_data__WEBPACK_IMPORTED_MODULE_5__.A.slice(0,10),onExpand:ExpandoOne},args),(item=>react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"d-flex justify-content-between flex-column flex-sm-row"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"me-auto"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("h4",{className:"m-0"},item.first," ",item.last),react__WEBPACK_IMPORTED_MODULE_1__.createElement("p",{className:"mb-0"},item.address)))))},WithSelection={args:{onSelect:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onSelect")},render:args=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SortableList__WEBPACK_IMPORTED_MODULE_2__.default,_extends({items:_util_data__WEBPACK_IMPORTED_MODULE_5__.A.slice(0,10),select:"checkbox"},args),(item=>react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"d-flex justify-content-between flex-column flex-sm-row"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"me-auto"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("h4",{className:"m-0"},item.first," ",item.last),react__WEBPACK_IMPORTED_MODULE_1__.createElement("p",{className:"mb-0"},item.address)))))},WithSort={render:args=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SortableList__WEBPACK_IMPORTED_MODULE_2__.default,_extends({items:_util_data__WEBPACK_IMPORTED_MODULE_5__.A.slice(0,10),sort:{property:"last",ascending:!0},sortOptions:[{label:"First Name",value:"first"},{label:"Last Name",value:"last"},{label:"Address",value:"address"}]},args),(item=>react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"d-flex justify-content-between flex-column flex-sm-row"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"me-auto"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("h4",{className:"m-0"},item.first," ",item.last),react__WEBPACK_IMPORTED_MODULE_1__.createElement("p",{className:"mb-0"},item.address)))))},WithFiltering={render:args=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SortableList__WEBPACK_IMPORTED_MODULE_2__.default,_extends({height:"60vh",items:_util_data__WEBPACK_IMPORTED_MODULE_5__.A,onFilter:filterItems},args),(item=>react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"d-flex justify-content-between flex-column flex-sm-row"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"me-auto pb-2"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("h4",{className:"m-0"},item.first," ",item.last),react__WEBPACK_IMPORTED_MODULE_1__.createElement("p",null,item.address)),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"pe-3 pb-2"},currency.format(item.fee),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Label_Label__WEBPACK_IMPORTED_MODULE_3__.default,{className:"text-muted d-block"},"Late Fee Amount")),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"pe-3"},currency.format(item.fee),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Label_Label__WEBPACK_IMPORTED_MODULE_3__.default,{className:"text-muted d-block"},"Balance Subject to Late Fees")))))},WithCustomHeader={args:{onSelect:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onSelect")},render:args=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SortableList__WEBPACK_IMPORTED_MODULE_2__.default,_extends({height:"60vh",items:_util_data__WEBPACK_IMPORTED_MODULE_5__.A,onFilter:filterItems,select:"checkbox",header:react__WEBPACK_IMPORTED_MODULE_1__.createElement("h4",{className:"m-0 text-danger"},"Hey it's me, your custom header")},args),(item=>react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"d-flex justify-content-between flex-column flex-sm-row"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"me-auto pb-2"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("h4",{className:"m-0"},item.first," ",item.last),react__WEBPACK_IMPORTED_MODULE_1__.createElement("p",null,item.address)),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"pe-3 pb-2"},currency.format(item.fee),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Label_Label__WEBPACK_IMPORTED_MODULE_3__.default,{className:"text-muted d-block"},"Late Fee Amount")),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"pe-3"},currency.format(item.fee),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Label_Label__WEBPACK_IMPORTED_MODULE_3__.default,{className:"text-muted d-block"},"Balance Subject to Late Fees")))))},Areas={args:{height:"70vh",onSelect:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onSelect"),select:"checkbox"},render:args=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SortableList__WEBPACK_IMPORTED_MODULE_2__.default,_extends({items:_util_data__WEBPACK_IMPORTED_MODULE_5__.A.slice(0,20),onExpand:ExpandoTwo},args),(()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Alert_Alert__WEBPACK_IMPORTED_MODULE_4__.default,{className:"m-0"},"Item area")))},WithOptionalExpand={args:{select:"checkbox",onSelect:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onSelect")},render:args=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SortableList__WEBPACK_IMPORTED_MODULE_2__.default,_extends({items:_util_data__WEBPACK_IMPORTED_MODULE_5__.A.slice(0,10),onExpand:item=>item.id%2==0?ExpandoTwo():void 0},args),(item=>item.id%2==0?"Expand Me":"I can't be expanded..."))},WithControlledSelection={render:function Render(args){const[selection,setSelection]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_util_data__WEBPACK_IMPORTED_MODULE_5__.A.slice(1,5));return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SortableList__WEBPACK_IMPORTED_MODULE_2__.default,_extends({items:_util_data__WEBPACK_IMPORTED_MODULE_5__.A.slice(0,10),onSelect:setSelection,selected:selection,select:"checkbox"},args),(item=>react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3",{className:"m-0"},item.first," ",item.last))),react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3",null,"Current selection: "),react__WEBPACK_IMPORTED_MODULE_1__.createElement("pre",null,JSON.stringify(selection.map((item=>`${item.first} ${item.last}`)),null,"  ")),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_6__.default,{onClick:()=>setSelection(_util_data__WEBPACK_IMPORTED_MODULE_5__.A.slice(2,4))},"Replace the Selection"))}},__namedExportsOrder=["WithEverything","WithExpandableRow","WithSelection","WithSort","WithFiltering","WithCustomHeader","Areas","WithOptionalExpand","WithControlledSelection"];WithEverything.parameters={...WithEverything.parameters,docs:{...WithEverything.parameters?.docs,source:{originalSource:"{\n  args: {\n    className: '',\n    filterPlaceholder: SortableList.defaultProps.filterPlaceholder,\n    flush: SortableList.defaultProps.flush,\n    height: '70vh',\n    scrollPositionKey: 'sortableList-example',\n    striped: false,\n    onSelect: action('onSelect'),\n    select: 'checkbox',\n    sortByLabel: SortableList.defaultProps.sortByLabel\n  },\n  render: args => <SortableList items={data.slice(0, 20)} onExpand={ExpandoOne} onFilter={filterItems} sort={{\n    property: ['last', 'first']\n  }} sortOptions={[{\n    label: 'First Name',\n    value: ['first', 'last']\n  }, {\n    label: 'Last Name',\n    value: ['last', 'first']\n  }, {\n    label: 'Late Fee',\n    value: 'fee'\n  }]} selectable={item => item.id % 2} {...args}>\n      {item => <div className=\"d-flex justify-content-between flex-column flex-sm-row\">\n          <div className=\"me-auto pb-2\">\n            <h4 className=\"m-0\">\n              {item.first} {item.last}\n            </h4>\n            <p className=\"mb-0\">{item.address}</p>\n          </div>\n          <div className=\"pe-3 pb-2\">\n            {currency.format(item.fee)}\n            <Label className=\"text-muted d-block\">Late Fee Amount</Label>\n          </div>\n          <div className=\"pe-3\">\n            {currency.format(item.fee)}\n            <Label className=\"text-muted d-block\">Balance Subject to Late Fees</Label>\n          </div>\n        </div>}\n    </SortableList>\n}",...WithEverything.parameters?.docs?.source}}},WithExpandableRow.parameters={...WithExpandableRow.parameters,docs:{...WithExpandableRow.parameters?.docs,source:{originalSource:'{\n  render: args => <SortableList items={data.slice(0, 10)} onExpand={ExpandoOne} {...args}>\n      {item => <div className="d-flex justify-content-between flex-column flex-sm-row">\n          <div className="me-auto">\n            <h4 className="m-0">\n              {item.first} {item.last}\n            </h4>\n            <p className="mb-0">{item.address}</p>\n          </div>\n        </div>}\n    </SortableList>\n}',...WithExpandableRow.parameters?.docs?.source}}},WithSelection.parameters={...WithSelection.parameters,docs:{...WithSelection.parameters?.docs,source:{originalSource:'{\n  args: {\n    onSelect: action(\'onSelect\')\n  },\n  render: args => <SortableList items={data.slice(0, 10)} select="checkbox" {...args}>\n      {item => <div className="d-flex justify-content-between flex-column flex-sm-row">\n          <div className="me-auto">\n            <h4 className="m-0">\n              {item.first} {item.last}\n            </h4>\n            <p className="mb-0">{item.address}</p>\n          </div>\n        </div>}\n    </SortableList>\n}',...WithSelection.parameters?.docs?.source}}},WithSort.parameters={...WithSort.parameters,docs:{...WithSort.parameters?.docs,source:{originalSource:"{\n  render: args => <SortableList items={data.slice(0, 10)} sort={{\n    property: 'last',\n    ascending: true\n  }} sortOptions={[{\n    label: 'First Name',\n    value: 'first'\n  }, {\n    label: 'Last Name',\n    value: 'last'\n  }, {\n    label: 'Address',\n    value: 'address'\n  }]} {...args}>\n      {item => <div className=\"d-flex justify-content-between flex-column flex-sm-row\">\n          <div className=\"me-auto\">\n            <h4 className=\"m-0\">\n              {item.first} {item.last}\n            </h4>\n            <p className=\"mb-0\">{item.address}</p>\n          </div>\n        </div>}\n    </SortableList>\n}",...WithSort.parameters?.docs?.source}}},WithFiltering.parameters={...WithFiltering.parameters,docs:{...WithFiltering.parameters?.docs,source:{originalSource:'{\n  render: args => <SortableList height="60vh" items={data} onFilter={filterItems} {...args}>\n      {item => <div className="d-flex justify-content-between flex-column flex-sm-row">\n          <div className="me-auto pb-2">\n            <h4 className="m-0">\n              {item.first} {item.last}\n            </h4>\n            <p>{item.address}</p>\n          </div>\n          <div className="pe-3 pb-2">\n            {currency.format(item.fee)}\n            <Label className="text-muted d-block">Late Fee Amount</Label>\n          </div>\n          <div className="pe-3">\n            {currency.format(item.fee)}\n            <Label className="text-muted d-block">Balance Subject to Late Fees</Label>\n          </div>\n        </div>}\n    </SortableList>\n}',...WithFiltering.parameters?.docs?.source}}},WithCustomHeader.parameters={...WithCustomHeader.parameters,docs:{...WithCustomHeader.parameters?.docs,source:{originalSource:'{\n  args: {\n    onSelect: action(\'onSelect\')\n  },\n  render: args => <SortableList height="60vh" items={data} onFilter={filterItems} select="checkbox" header={<h4 className="m-0 text-danger">Hey it&apos;s me, your custom header</h4>} {...args}>\n      {item => <div className="d-flex justify-content-between flex-column flex-sm-row">\n          <div className="me-auto pb-2">\n            <h4 className="m-0">\n              {item.first} {item.last}\n            </h4>\n            <p>{item.address}</p>\n          </div>\n          <div className="pe-3 pb-2">\n            {currency.format(item.fee)}\n            <Label className="text-muted d-block">Late Fee Amount</Label>\n          </div>\n          <div className="pe-3">\n            {currency.format(item.fee)}\n            <Label className="text-muted d-block">Balance Subject to Late Fees</Label>\n          </div>\n        </div>}\n    </SortableList>\n}',...WithCustomHeader.parameters?.docs?.source}}},Areas.parameters={...Areas.parameters,docs:{...Areas.parameters?.docs,source:{originalSource:"{\n  args: {\n    height: '70vh',\n    onSelect: action('onSelect'),\n    select: 'checkbox'\n  },\n  render: args => <SortableList items={data.slice(0, 20)} onExpand={ExpandoTwo} {...args}>\n      {() => <Alert className=\"m-0\">Item area</Alert>}\n    </SortableList>\n}",...Areas.parameters?.docs?.source}}},WithOptionalExpand.parameters={...WithOptionalExpand.parameters,docs:{...WithOptionalExpand.parameters?.docs,source:{originalSource:"{\n  args: {\n    select: 'checkbox',\n    onSelect: action('onSelect')\n  },\n  render: args => <SortableList items={data.slice(0, 10)} onExpand={item => item.id % 2 === 0 ? ExpandoTwo() : undefined} {...args}>\n      {item => item.id % 2 === 0 ? 'Expand Me' : \"I can't be expanded...\"}\n    </SortableList>\n}",...WithOptionalExpand.parameters?.docs?.source}}},WithControlledSelection.parameters={...WithControlledSelection.parameters,docs:{...WithControlledSelection.parameters?.docs,source:{originalSource:'{\n  render: function Render(args) {\n    const [selection, setSelection] = useState(data.slice(1, 5));\n    return <>\n        <SortableList items={data.slice(0, 10)} onSelect={setSelection} selected={selection} select="checkbox" {...args}>\n          {item => <h3 className="m-0">\n              {item.first} {item.last}\n            </h3>}\n        </SortableList>\n\n        <h3>Current selection: </h3>\n        <pre>\n          {JSON.stringify(selection.map(item => `${item.first} ${item.last}`), null, \'  \')}\n        </pre>\n        <Button onClick={() => setSelection(data.slice(2, 4))}>Replace the Selection</Button>\n      </>;\n  }\n}',...WithControlledSelection.parameters?.docs?.source}}}}}]);
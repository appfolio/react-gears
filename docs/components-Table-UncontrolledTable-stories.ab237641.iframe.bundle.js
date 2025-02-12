"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[7850],{"./node_modules/@storybook/addon-actions/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{XI:function(){return action}});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name:name,deprecated:deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id:id,count:0,data:{name:name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/Table/UncontrolledTable.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomExpandColumn:function(){return CustomExpandColumn},CustomFooter:function(){return CustomFooter},CustomHeader:function(){return CustomHeader},UncontrolledTableExample:function(){return UncontrolledTableExample},UnsortableColumn:function(){return UnsortableColumn},__namedExportsOrder:function(){return __namedExportsOrder}});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),fecha__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fecha/fecha.js"),fecha__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(fecha__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_Button_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Button/Button.tsx"),_UncontrolledTable__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Table/UncontrolledTable.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const DATA=[{key:"111",expanded:!1,first:"Rufus Xavier Sarsparilla",last:"Jones",email:"rufus.xavier.sarsparilla@example.com",dob:new Date(1968,6,15),estimatedAge:"25-37"},{key:"222",expanded:!1,first:"Albert Andreas Armadillo",last:"Thomas",email:"albert.andreas.armadillo@example.com",dob:new Date(1972,7,17),estimatedAge:"29-80"},{key:"333",expanded:!1,first:"Arron",last:"Douglas",email:"arron.douglas@example.com",dob:new Date(1982,4,1),estimatedAge:"31-85"},{key:"444",expanded:!1,first:"Reginald",last:"Rhodes",email:"reginald.rhodes@example.com",dob:new Date(1968,8,14),estimatedAge:"40-69"},{key:"555",expanded:!1,first:"Jimmy",last:"Mendoza",email:"jimmy.mendoza@example.com",dob:new Date(1964,1,1),estimatedAge:"45-91"},{key:"666",expanded:!1,first:"Georgia",last:"Montgomery",email:"georgia.montgomery@example.com",dob:new Date(1960,6,4),estimatedAge:"50-99"},{key:"777",expanded:!0,first:"Serenity",last:"Thomas",email:"serenity.thomas@example.com",dob:new Date(1973,0,11),estimatedAge:"1-47"},{key:"888",expanded:!1,first:"Tonya",last:"Elliott",email:"tonya.elliott@example.com",dob:new Date(1954,7,17),estimatedAge:"2-16"},{key:"999",expanded:!1,first:"Maxine",last:"Turner",email:"maxine.turner@example.com",dob:new Date(1961,8,19),disabled:!0,estimatedAge:"4-88"},{key:"000",expanded:!1,first:"Max",last:"Headroom",email:"max.headroom@example.com",dob:new Date(1984,6,1),disabled:!0,estimatedAge:"70-72"}],EmailCell=row=>react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href:`mailto:${row.email}`},row.email);EmailCell.displayName="EmailCell";const FullName=row=>react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",null,row.first," ",row.last);FullName.displayName="FullName";const EditButton=()=>react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_3__.default,{size:"sm"},"Edit");EditButton.displayName="EditButton",__webpack_exports__.default={title:"UncontrolledTable",component:_UncontrolledTable__WEBPACK_IMPORTED_MODULE_4__.default,parameters:{sourceLink:"Table/UncontrolledTable.js"}};const UncontrolledTableExample=args=>react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_2__.createElement(_UncontrolledTable__WEBPACK_IMPORTED_MODULE_4__.default,_extends({columns:[{header:"First",key:"first",cell:row=>row.first,width:"20%"},{header:"Last",key:"last",cell:row=>row.last,width:"30%"},{header:"DOB",key:"dob",cell:row=>fecha__WEBPACK_IMPORTED_MODULE_1___default().format(row.dob,"MM/DD/YYYY"),width:"15%"},{header:"Email",key:"email",cell:EmailCell,width:"35%"}],rows:DATA,rowExpanded:FullName,sort:{column:"last",ascending:!0}},args)));UncontrolledTableExample.displayName="UncontrolledTableExample",UncontrolledTableExample.args={expandable:!1,responsive:!0,selectable:!1,truncate:!1,paginated:!1,pageSize:10,onSelect:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onSelect"),onSort:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onSort"),onPageChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onPageChange"),onVisibleRowsChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("onVisibleRowsChange")};const CustomHeader=args=>react__WEBPACK_IMPORTED_MODULE_2__.createElement(_UncontrolledTable__WEBPACK_IMPORTED_MODULE_4__.default,_extends({columns:[{header:"First",key:"first",cell:row=>row.first,width:"20%"},{header:"Last",key:"last",cell:row=>row.last,width:"30%"},{header:"DOB",key:"dob",cell:row=>fecha__WEBPACK_IMPORTED_MODULE_1___default().format(row.dob,"MM/DD/YYYY"),width:"15%"},{header:"Email",key:"email",cell:EmailCell,width:"35%"}],rows:DATA,rowExpanded:FullName,sort:{column:"last",ascending:!0},header:[react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_2__.createElement("th",{colSpan:3},"Basic Info")," ",react__WEBPACK_IMPORTED_MODULE_2__.createElement("th",{colSpan:1},"Contact Info"))]},args));CustomHeader.displayName="CustomHeader";const CustomFooter=args=>react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_2__.createElement(_UncontrolledTable__WEBPACK_IMPORTED_MODULE_4__.default,_extends({columns:[{header:"Date",key:"date",cell:row=>fecha__WEBPACK_IMPORTED_MODULE_1___default().format(row.date,"MM/DD/YYYY"),width:"25%"},{header:"Description",key:"name",cell:row=>row.name,width:"50%"},{header:"Cost",key:"cost",cell:row=>row.cost,width:"25%",align:"end"}],rows:[{key:"111",expanded:!1,date:new Date(2016,6,15),name:"Utility bill",cost:"$123.45"},{key:"222",expanded:!1,date:new Date(2016,7,17),name:"Roof repair",cost:"$4000.00"},{key:"333",expanded:!1,date:new Date(2017,4,1),name:"Plumbing",cost:"$350"},{key:"444",expanded:!1,date:new Date(2018,8,14),name:"Painting",cost:"$1500"}],footer:[react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_2__.createElement("td",{colSpan:2,className:"text-end"},"Total Costs"),react__WEBPACK_IMPORTED_MODULE_2__.createElement("td",{className:"text-end"},"$5973.45")),react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_2__.createElement("td",{colSpan:2,className:"text-end"},"Total Income"),react__WEBPACK_IMPORTED_MODULE_2__.createElement("td",{className:"text-end"},"$26,200.00")),react__WEBPACK_IMPORTED_MODULE_2__.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_2__.createElement("td",{colSpan:2,className:"text-end"},"Total Gain"),react__WEBPACK_IMPORTED_MODULE_2__.createElement("td",{className:"text-end"},"$20,226.55"))]},args)));CustomFooter.displayName="CustomFooter";const CustomExpandColumn=args=>react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_2__.createElement(_UncontrolledTable__WEBPACK_IMPORTED_MODULE_4__.default,_extends({columns:[{header:"First",key:"first",cell:row=>row.first,width:"20%"},{header:"Last",key:"last",cell:row=>row.last,width:"30%"},{header:"DOB",key:"dob",cell:row=>fecha__WEBPACK_IMPORTED_MODULE_1___default().format(row.dob,"MM/DD/YYYY"),width:"15%"},{header:"Email",key:"email",cell:EmailCell,width:"35%"}],rows:DATA,rowExpanded:FullName,sort:{column:"last",ascending:!0},expandable:!0,expandableColumn:{align:"end",header:"Actions",cell:EditButton}},args)));CustomExpandColumn.displayName="CustomExpandColumn";const UnsortableColumn=args=>react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_2__.createElement(_UncontrolledTable__WEBPACK_IMPORTED_MODULE_4__.default,_extends({columns:[{header:"First",key:"first",cell:row=>row.first,width:"20%"},{header:"Last",key:"last",cell:row=>row.last,width:"30%"},{header:"Estimated Age",key:"estimatedAge",cell:row=>row.estimatedAge,width:"15%",sortable:!1},{header:"Email",key:"email",cell:EmailCell,width:"35%"}],rows:DATA,rowExpanded:FullName,sort:{column:"last",ascending:!0}},args)));UnsortableColumn.displayName="UnsortableColumn";const __namedExportsOrder=["UncontrolledTableExample","CustomHeader","CustomFooter","CustomExpandColumn","UnsortableColumn"];UncontrolledTableExample.parameters={...UncontrolledTableExample.parameters,docs:{...UncontrolledTableExample.parameters?.docs,source:{originalSource:"args => <div>\n    <UncontrolledTable columns={[{\n    header: 'First',\n    key: 'first',\n    cell: row => row.first,\n    width: '20%'\n  }, {\n    header: 'Last',\n    key: 'last',\n    cell: row => row.last,\n    width: '30%'\n  }, {\n    header: 'DOB',\n    key: 'dob',\n    cell: row => fecha.format(row.dob, 'MM/DD/YYYY'),\n    width: '15%'\n  }, {\n    header: 'Email',\n    key: 'email',\n    cell: EmailCell,\n    width: '35%'\n  }]} rows={DATA} rowExpanded={FullName} sort={{\n    column: 'last',\n    ascending: true\n  }} {...args} />\n  </div>",...UncontrolledTableExample.parameters?.docs?.source}}},CustomHeader.parameters={...CustomHeader.parameters,docs:{...CustomHeader.parameters?.docs,source:{originalSource:"args => <UncontrolledTable columns={[{\n  header: 'First',\n  key: 'first',\n  cell: row => row.first,\n  width: '20%'\n}, {\n  header: 'Last',\n  key: 'last',\n  cell: row => row.last,\n  width: '30%'\n}, {\n  header: 'DOB',\n  key: 'dob',\n  cell: row => fecha.format(row.dob, 'MM/DD/YYYY'),\n  width: '15%'\n}, {\n  header: 'Email',\n  key: 'email',\n  cell: EmailCell,\n  width: '35%'\n}]} rows={DATA} rowExpanded={FullName} sort={{\n  column: 'last',\n  ascending: true\n}} header={[<tr>\n        <th colSpan={3}>Basic Info</th> <th colSpan={1}>Contact Info</th>\n      </tr>]} {...args} />",...CustomHeader.parameters?.docs?.source}}},CustomFooter.parameters={...CustomFooter.parameters,docs:{...CustomFooter.parameters?.docs,source:{originalSource:"args => <div>\n    <UncontrolledTable columns={[{\n    header: 'Date',\n    key: 'date',\n    cell: row => fecha.format(row.date, 'MM/DD/YYYY'),\n    width: '25%'\n  }, {\n    header: 'Description',\n    key: 'name',\n    cell: row => row.name,\n    width: '50%'\n  }, {\n    header: 'Cost',\n    key: 'cost',\n    cell: row => row.cost,\n    width: '25%',\n    align: 'end'\n  }]} rows={[{\n    key: '111',\n    expanded: false,\n    date: new Date(2016, 6, 15),\n    name: 'Utility bill',\n    cost: '$123.45'\n  }, {\n    key: '222',\n    expanded: false,\n    date: new Date(2016, 7, 17),\n    name: 'Roof repair',\n    cost: '$4000.00'\n  }, {\n    key: '333',\n    expanded: false,\n    date: new Date(2017, 4, 1),\n    name: 'Plumbing',\n    cost: '$350'\n  }, {\n    key: '444',\n    expanded: false,\n    date: new Date(2018, 8, 14),\n    name: 'Painting',\n    cost: '$1500'\n  }]} footer={[<tr>\n          <td colSpan={2} className=\"text-end\">\n            Total Costs\n          </td>\n          <td className=\"text-end\">$5973.45</td>\n        </tr>, <tr>\n          <td colSpan={2} className=\"text-end\">\n            Total Income\n          </td>\n          <td className=\"text-end\">$26,200.00</td>\n        </tr>, <tr>\n          <td colSpan={2} className=\"text-end\">\n            Total Gain\n          </td>\n          <td className=\"text-end\">$20,226.55</td>\n        </tr>]} {...args} />\n  </div>",...CustomFooter.parameters?.docs?.source}}},CustomExpandColumn.parameters={...CustomExpandColumn.parameters,docs:{...CustomExpandColumn.parameters?.docs,source:{originalSource:"args => <div>\n    <UncontrolledTable columns={[{\n    header: 'First',\n    key: 'first',\n    cell: row => row.first,\n    width: '20%'\n  }, {\n    header: 'Last',\n    key: 'last',\n    cell: row => row.last,\n    width: '30%'\n  }, {\n    header: 'DOB',\n    key: 'dob',\n    cell: row => fecha.format(row.dob, 'MM/DD/YYYY'),\n    width: '15%'\n  }, {\n    header: 'Email',\n    key: 'email',\n    cell: EmailCell,\n    width: '35%'\n  }]} rows={DATA} rowExpanded={FullName} sort={{\n    column: 'last',\n    ascending: true\n  }} expandable expandableColumn={{\n    align: 'end',\n    header: 'Actions',\n    cell: EditButton\n  }} {...args} />\n  </div>",...CustomExpandColumn.parameters?.docs?.source}}},UnsortableColumn.parameters={...UnsortableColumn.parameters,docs:{...UnsortableColumn.parameters?.docs,source:{originalSource:"args => <div>\n    <UncontrolledTable columns={[{\n    header: 'First',\n    key: 'first',\n    cell: row => row.first,\n    width: '20%'\n  }, {\n    header: 'Last',\n    key: 'last',\n    cell: row => row.last,\n    width: '30%'\n  }, {\n    header: 'Estimated Age',\n    key: 'estimatedAge',\n    cell: row => row.estimatedAge,\n    width: '15%',\n    sortable: false\n  }, {\n    header: 'Email',\n    key: 'email',\n    cell: EmailCell,\n    width: '35%'\n  }]} rows={DATA} rowExpanded={FullName} sort={{\n    column: 'last',\n    ascending: true\n  }} {...args} />\n  </div>",...UnsortableColumn.parameters?.docs?.source}}}}}]);
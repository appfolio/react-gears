"use strict";(self.webpackChunk_appfolio_react_gears=self.webpackChunk_appfolio_react_gears||[]).push([[6623],{"./src/components/Table/Table.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var fecha__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/fecha/fecha.js"),fecha__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(fecha__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_Table__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Table/Table.tsx");const DATA=[{key:"111",expanded:!1,first:"Rufus Xavier Sarsparilla",last:"Jones",email:"rufus.xavier.sarsparilla@example.com",dob:new Date(1968,6,15)},{key:"222",expanded:!1,first:"Albert Andreas Armadillo",last:"Thomas",email:"albert.andreas.armadillo@example.com",dob:new Date(1972,7,17)},{key:"333",expanded:!1,first:"Arron",last:"Douglas",email:"arron.douglas@example.com",dob:new Date(1982,4,1)},{key:"444",expanded:!1,first:"Reginald",last:"Rhodes",email:"reginald.rhodes@example.com",dob:new Date(1968,8,14)},{key:"555",expanded:!1,first:"Jimmy",last:"Mendoza",email:"jimmy.mendoza@example.com",dob:new Date(1964,1,1)},{key:"666",expanded:!1,first:"Georgia",last:"Montgomery",email:"georgia.montgomery@example.com",dob:new Date(1960,6,4)},{key:"777",expanded:!0,first:"Serenity",last:"Thomas",email:"serenity.thomas@example.com",dob:new Date(1973,0,11)},{key:"888",expanded:!1,first:"Tonya",last:"Elliott",email:"tonya.elliott@example.com",dob:new Date(1954,7,17)},{key:"999",expanded:!1,first:"Maxine",last:"Turner",email:"maxine.turner@example.com",dob:new Date(1961,8,19)},{key:"000",expanded:!1,first:"Max",last:"Headroom",email:"max.headroom@example.com",dob:new Date(1984,6,1)}];__webpack_exports__.default={title:"Table",component:_Table__WEBPACK_IMPORTED_MODULE_2__.default,parameters:{sourceLink:"Table/Table.tsx"}};const Default=args=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Table__WEBPACK_IMPORTED_MODULE_2__.default,args,react__WEBPACK_IMPORTED_MODULE_1__.createElement("thead",null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("th",null,"First"),react__WEBPACK_IMPORTED_MODULE_1__.createElement("th",null,"Last"),react__WEBPACK_IMPORTED_MODULE_1__.createElement("th",null,"DOB"),react__WEBPACK_IMPORTED_MODULE_1__.createElement("th",null,"Email"))),react__WEBPACK_IMPORTED_MODULE_1__.createElement("tbody",null,DATA.map((row=>react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr",{key:row.name},react__WEBPACK_IMPORTED_MODULE_1__.createElement("td",null,row.first),react__WEBPACK_IMPORTED_MODULE_1__.createElement("td",null,row.last),react__WEBPACK_IMPORTED_MODULE_1__.createElement("td",null,fecha__WEBPACK_IMPORTED_MODULE_0___default().format(row.dob,"MM/DD/YYYY")),react__WEBPACK_IMPORTED_MODULE_1__.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_1__.createElement("a",{href:`mailto:${row.email}`},row.email)))))));Default.displayName="Default",Default.args={bordered:!1,responsive:!0,striped:!0,hover:!0,size:"sm"},Default.argTypes={size:{options:["","lg","sm"],control:{type:"select"}}};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Table {...args}>\n    <thead>\n      <tr>\n        <th>First</th>\n        <th>Last</th>\n        <th>DOB</th>\n        <th>Email</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      {DATA.map(row => <tr key={row.name}>\n          <td>{row.first}</td>\n          <td>{row.last}</td>\n          <td>{fecha.format(row.dob, 'MM/DD/YYYY')}</td>\n          <td>\n            <a href={`mailto:${row.email}`}>{row.email}</a>\n          </td>\n        </tr>)}\n    </tbody>\n  </Table>",...Default.parameters?.docs?.source}}}}}]);
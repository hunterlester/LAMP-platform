"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[4908],{603905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||i;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},865207:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=r(487462),a=r(263366),i=(r(667294),r(603905)),c=["components"],o={},l="Acc_jerk",u={unversionedId:"data_science/cortex/features/Primary/acc_jerk",id:"data_science/cortex/features/Primary/acc_jerk",isDocsHomePage:!1,title:"Acc_jerk",description:"computed from raw feature: cortex.raw.accelerometer",source:"@site/docs/09-data_science/06-cortex/03-features/01-Primary/05-acc_jerk.md",sourceDirName:"09-data_science/06-cortex/03-features/01-Primary",slug:"/data_science/cortex/features/Primary/acc_jerk",permalink:"/data_science/cortex/features/Primary/acc_jerk",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/03-features/01-Primary/05-acc_jerk.md",tags:[],version:"current",lastUpdatedBy:"Ryan D'Mello",lastUpdatedAt:1646338444,formattedLastUpdatedAt:"3/3/2022",sidebarPosition:5,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Trips",permalink:"/data_science/cortex/features/Primary/trips"},next:{title:"Bluetooth Device Count",permalink:"/data_science/cortex/features/Secondary/bluetooth_device_count"}},p=[{value:"Description",id:"description",children:[],level:4},{value:"Optional or required kwargs",id:"optional-or-required-kwargs",children:[],level:4},{value:"Data",id:"data",children:[],level:4},{value:"Example",id:"example",children:[],level:4}],m={toc:p};function s(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"acc_jerk"},"Acc_jerk"),(0,i.kt)("p",null,"computed from raw feature: cortex.raw.accelerometer"),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"Computes jerk from accelerometer data. Jerk is the derivative of accelerometer."),(0,i.kt)("h4",{id:"optional-or-required-kwargs"},"Optional or required kwargs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start: number"),": (units: ms) the start time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"end: number"),": (units: ms) the end time.")),(0,i.kt)("h4",{id:"data"},"Data"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start: number"),": (units: ms) the start time of a given trip."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"end: number"),": (units: ms) the end time of a given trip."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"threshold: number"),": (units: ms) the maximum difference between timestamps to compute jerk.")),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},'cortex.primary.acc_jerk.acc_jerk(id="U1234567890", start=0, end=cortex.now())\n')),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"{\n  'timestamp': 0,\n  'duration': 1627067480000,\n  'data': [\n           {'timestamp': 1607094903526, 'acc_jerk': 0.008896610358911157},\n                 .\n                 .\n                 .\n           {'timestamp': 1607094950000, 'acc_jerk': 0.0028039384631051243}\n          ]\n}\n")))}s.isMDXComponent=!0}}]);
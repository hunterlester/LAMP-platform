"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[3872],{603905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},652797:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var n=r(487462),a=r(263366),o=(r(667294),r(603905)),l=["components"],i={},u="Call Number",c={unversionedId:"data_science/Cortex/Features/Secondary/call_number",id:"data_science/Cortex/Features/Secondary/call_number",isDocsHomePage:!1,title:"Call Number",description:"computed from raw feature: cortex.raw.calls",source:"@site/docs/09-data_science/06-Cortex/03-Features/02-Secondary/04-call_number.md",sourceDirName:"09-data_science/06-Cortex/03-Features/02-Secondary",slug:"/data_science/Cortex/Features/Secondary/call_number",permalink:"/data_science/Cortex/Features/Secondary/call_number",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-Cortex/03-Features/02-Secondary/04-call_number.md",tags:[],version:"current",lastUpdatedBy:"Ashley Meyer",lastUpdatedAt:1646412103,formattedLastUpdatedAt:"3/4/2022",sidebarPosition:4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Call Duration",permalink:"/data_science/Cortex/Features/Secondary/call_duration"},next:{title:"Data Quality",permalink:"/data_science/Cortex/Features/Secondary/data_quality"}},s=[{value:"Description",id:"description",children:[],level:4},{value:"Optional or required kwargs",id:"optional-or-required-kwargs",children:[],level:4},{value:"Data",id:"data",children:[],level:4},{value:"Example",id:"example",children:[],level:4}],m={toc:s};function p(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"call-number"},"Call Number"),(0,o.kt)("p",null,"computed from raw feature: cortex.raw.calls"),(0,o.kt)("h4",{id:"description"},"Description"),(0,o.kt)("p",null,"Call number sums the number of calls. "),(0,o.kt)("h4",{id:"optional-or-required-kwargs"},"Optional or required kwargs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"start: number"),": (units: ms) the start time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"end: number"),": (units: ms) the end time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resolution: number"),": (units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features.")),(0,o.kt)("h4",{id:"data"},"Data"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timestamp: number"),": (units: ms) the start time of each bin of size ",(0,o.kt)("inlineCode",{parentName:"li"},"kwargs['resolution']"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value: number"),": (units: None) the number of calls.")),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'cortex.secondary.call_number.call_number(id="U1234567890", start=0, end=cortex.now(), resolution=86400000)\n')),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"{\n  'timestamp': 1607072400000,\n  'duration': 5616000000,\n  'resolution': 86400000,\n  'data': [\n           {'timestamp': 1607072400000, 'value': 0},\n           {'timestamp': 1607331600000, 'value': 6},\n                 .\n                 .\n                 .\n           {'timestamp': 1609232400000, 'value': 3}\n          ]\n}\n")))}p.isMDXComponent=!0}}]);
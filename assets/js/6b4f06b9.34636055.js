"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[3952],{603905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},336785:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var n=r(487462),a=r(263366),o=(r(667294),r(603905)),i=["components"],c={},l="Hometime",u={unversionedId:"data_science/Cortex/Features/Secondary/hometime",id:"data_science/Cortex/Features/Secondary/hometime",isDocsHomePage:!1,title:"Hometime",description:"computed from primary feature: cortex.primary.significant_locations",source:"@site/docs/09-data_science/06-Cortex/03-Features/02-Secondary/07-hometime.md",sourceDirName:"09-data_science/06-Cortex/03-Features/02-Secondary",slug:"/data_science/Cortex/Features/Secondary/hometime",permalink:"/data_science/Cortex/Features/Secondary/hometime",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-Cortex/03-Features/02-Secondary/07-hometime.md",tags:[],version:"current",lastUpdatedBy:"dcurrey88",lastUpdatedAt:1646339818,formattedLastUpdatedAt:"3/3/2022",sidebarPosition:7,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Entropy",permalink:"/data_science/Cortex/Features/Secondary/entropy"},next:{title:"Screen Duration",permalink:"/data_science/Cortex/Features/Secondary/screen_duration"}},s=[{value:"Description",id:"description",children:[],level:4},{value:"Optional or required kwargs",id:"optional-or-required-kwargs",children:[],level:4},{value:"Data",id:"data",children:[],level:4},{value:"Example",id:"example",children:[],level:4}],m={toc:s};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hometime"},"Hometime"),(0,o.kt)("p",null,"computed from primary feature: cortex.primary.significant_locations\ncomputed from raw feature: cortex.raw.gps"),(0,o.kt)("h4",{id:"description"},"Description"),(0,o.kt)("p",null,"The time spent at the most visited location (assumed to be home). For this computation, significant locations defaults to 'mode' which means that the most common locations will be based on the mode for the time period of the resolution given. Therefore, it is possible that the true \"home\" location may not be preserved over days. "),(0,o.kt)("h4",{id:"optional-or-required-kwargs"},"Optional or required kwargs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"start: number"),": (units: ms) the start time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"end: number"),": (units: ms) the end time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resolution: number"),": (units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features.")),(0,o.kt)("h4",{id:"data"},"Data"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timestamp: number"),": (units: ms) the start time of each bin of size ",(0,o.kt)("inlineCode",{parentName:"li"},"kwargs['resolution']"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value: number"),": (units: ms) the time spent in the most visited location. If there is no gps data, hometime will be 'None'.")),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'cortex.secondary.hometime.hometime(id="U1234567890", start=0, end=cortex.now(), resolution=86400000)\n')),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"{\n  'timestamp': 0,\n  'duration': 5616000000,\n  'resolution': 86400000,\n  'data': [\n           {'timestamp': 1607072400000, 'value': 44145818},\n           {'timestamp': 1607331600000, 'value': None},\n                 .\n                 .\n                 .\n           {'timestamp': 1609232400000, 'value': 2188582}\n          ]\n}\n")))}p.isMDXComponent=!0}}]);
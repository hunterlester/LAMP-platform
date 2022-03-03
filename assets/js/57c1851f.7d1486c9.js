"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[7065],{603905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?a.createElement(f,o(o({ref:t},s),{},{components:r})):a.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},703665:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var a=r(487462),n=r(263366),i=(r(667294),r(603905)),o=["components"],l={},u="Data Quality",c={unversionedId:"data_science/cortex/features/Secondary/data_quality",id:"data_science/cortex/features/Secondary/data_quality",isDocsHomePage:!1,title:"Data Quality",description:"computed from raw feature: cortex.raw.gps; cortex.raw.accelerometer",source:"@site/docs/09-data_science/06-cortex/03-features/02-Secondary/05-data_quality.md",sourceDirName:"09-data_science/06-cortex/03-features/02-Secondary",slug:"/data_science/cortex/features/Secondary/data_quality",permalink:"/data_science/cortex/features/Secondary/data_quality",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/03-features/02-Secondary/05-data_quality.md",tags:[],version:"current",lastUpdatedBy:"Ryan D'Mello",lastUpdatedAt:1646338444,formattedLastUpdatedAt:"3/3/2022",sidebarPosition:5,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Call Number",permalink:"/data_science/cortex/features/Secondary/call_number"},next:{title:"Entropy",permalink:"/data_science/cortex/features/Secondary/entropy"}},s=[{value:"Description",id:"description",children:[],level:4},{value:"Optional or required kwargs",id:"optional-or-required-kwargs",children:[],level:4},{value:"Data",id:"data",children:[],level:4},{value:"Example",id:"example",children:[],level:4}],p={toc:s};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-quality"},"Data Quality"),(0,i.kt)("p",null,"computed from raw feature: cortex.raw.gps; cortex.raw.accelerometer"),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"Data quality computes the percent of the time that a feature achieved a certain data quality. This feature currently supports accelerometer and gps. "),(0,i.kt)("h4",{id:"optional-or-required-kwargs"},"Optional or required kwargs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start: number"),": (units: ms) the start time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"end: number"),": (units: ms) the end time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resolution: number"),": (units: ms) the resolution over which to compute features."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"feature: string"),': (units: None) the feature to compute data quality (must be either "gps" or "accelerometer").'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bin_size: number"),': (units: ms, default: -1) the width of each bin. If set to -1 then default parameters will be used which are 1000 ms, 1s for "accelerometer" and 1000 * 600 ms, 10min\nfor "gps".')),(0,i.kt)("h4",{id:"data"},"Data"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timestamp: number"),": (units: ms) the start time of each bin of size ",(0,i.kt)("inlineCode",{parentName:"li"},"kwargs['resolution']"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value: number"),": (units: None) the percent of the time that there was at least one datapoint in each bin of size ",(0,i.kt)("inlineCode",{parentName:"li"},"bin_size"),".")),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},'cortex.secondary.data_quality.data_quality(id="U1234567890", start=0, end=cortex.now(), resolution=86400000, feature="gps", bin_size=10000)\n')),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"{\n  'timestamp': 1607072400000,\n  'duration': 5616000000,\n  'resolution': 86400000,\n  'data': [\n           {'timestamp': 1607072400000, 'value': 1.0},\n           {'timestamp': 1607331600000, 'value': 0.789291823},\n                 .\n                 .\n                 .\n           {'timestamp': 1609232400000, 'value': 0.121212344}\n          ]\n}\n")))}d.isMDXComponent=!0}}]);
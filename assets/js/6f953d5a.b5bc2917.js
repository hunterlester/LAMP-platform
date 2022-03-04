"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[6595],{603905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},742494:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var r=n(487462),o=n(263366),a=(n(667294),n(603905)),i=["components"],u={},c="Bluetooth Device Count",l={unversionedId:"data_science/Cortex/Features/Secondary/bluetooth_device_count",id:"data_science/Cortex/Features/Secondary/bluetooth_device_count",isDocsHomePage:!1,title:"Bluetooth Device Count",description:"computed from raw feature: cortex.raw.bluetooth",source:"@site/docs/09-data_science/06-Cortex/03-Features/02-Secondary/01-bluetooth_device_count.md",sourceDirName:"09-data_science/06-Cortex/03-Features/02-Secondary",slug:"/data_science/Cortex/Features/Secondary/bluetooth_device_count",permalink:"/data_science/Cortex/Features/Secondary/bluetooth_device_count",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-Cortex/03-Features/02-Secondary/01-bluetooth_device_count.md",tags:[],version:"current",lastUpdatedBy:"Ashley Meyer",lastUpdatedAt:1646413103,formattedLastUpdatedAt:"3/4/2022",sidebarPosition:1,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Accelerometer Jerk",permalink:"/data_science/Cortex/Features/Primary/acc_jerk"},next:{title:"Call Degree",permalink:"/data_science/Cortex/Features/Secondary/call_degree"}},s=[{value:"Description",id:"description",children:[],level:4},{value:"Optional or required kwargs",id:"optional-or-required-kwargs",children:[],level:4},{value:"Data",id:"data",children:[],level:4},{value:"Example",id:"example",children:[],level:4}],d={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bluetooth-device-count"},"Bluetooth Device Count"),(0,a.kt)("p",null,"computed from raw feature: cortex.raw.bluetooth"),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Bluetooth device count sums the number of bluetooth device connections. "),(0,a.kt)("h4",{id:"optional-or-required-kwargs"},"Optional or required kwargs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"start: number"),": (units: ms) the start time."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"end: number"),": (units: ms) the end time."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resolution: number"),": (units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features.")),(0,a.kt)("h4",{id:"data"},"Data"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timestamp: number"),": (units: ms) the start time of each bin of size ",(0,a.kt)("inlineCode",{parentName:"li"},"kwargs['resolution']"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value: number"),": (units: None) the number of unique bluetooth devices.")),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'cortex.secondary.bluetooth_device_count.bluetooth_device_count(id="U1234567890", start=0, end=cortex.now(), resolution=86400000)\n')),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"{\n  'timestamp': 1607072400000,\n  'duration': 5616000000,\n  'resolution': 86400000,\n  'data': [\n           {'timestamp': 1607072400000, 'value': 0},\n           {'timestamp': 1607331600000, 'value': 6},\n                 .\n                 .\n                 .\n           {'timestamp': 1609232400000, 'value': 3}\n          ]\n}\n")))}p.isMDXComponent=!0}}]);
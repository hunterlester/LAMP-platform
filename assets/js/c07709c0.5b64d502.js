"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[8664],{603905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},615887:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(487462),a=r(263366),i=(r(667294),r(603905)),o=["components"],l={},s="Trips",u={unversionedId:"data_science/Cortex/Features/Primary/trips",id:"data_science/Cortex/Features/Primary/trips",isDocsHomePage:!1,title:"Trips",description:"computed from raw feature: cortex.raw.gps",source:"@site/docs/09-data_science/06-Cortex/03-Features/01-Primary/04-trips.md",sourceDirName:"09-data_science/06-Cortex/03-Features/01-Primary",slug:"/data_science/Cortex/Features/Primary/trips",permalink:"/data_science/Cortex/Features/Primary/trips",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-Cortex/03-Features/01-Primary/04-trips.md",tags:[],version:"current",lastUpdatedBy:"dcurrey88",lastUpdatedAt:1646412118,formattedLastUpdatedAt:"3/4/2022",sidebarPosition:4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Sleep Periods",permalink:"/data_science/Cortex/Features/Primary/sleep_periods"},next:{title:"Accelerometer Jerk",permalink:"/data_science/Cortex/Features/Primary/acc_jerk"}},p=[{value:"Description",id:"description",children:[],level:4},{value:"Optional or required kwargs",id:"optional-or-required-kwargs",children:[],level:4},{value:"Data",id:"data",children:[],level:4},{value:"Example",id:"example",children:[],level:4}],c={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"trips"},"Trips"),(0,i.kt)("p",null,"computed from raw feature: cortex.raw.gps"),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"Computes trips from gps data. Trips are when a participant is traveling more than 10 kph. Any change in gps less than 10 kph or for more than 600 ms is considered stationary."),(0,i.kt)("h4",{id:"optional-or-required-kwargs"},"Optional or required kwargs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start: number"),": (units: ms) the start time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"end: number"),": (units: ms) the end time.")),(0,i.kt)("h4",{id:"data"},"Data"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start: number"),": (units: ms) the start time of a given trip."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"end: number"),": (units: ms) the end time of a given trip."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"latitude: number"),": (units: degrees) the latitude of the starting point of the trip."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"longitude: number"),": (units: degrees) the longitude of the starting point of the trip."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"distance: number"),": (units: km) the distance traveled on the trip.")),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},'cortex.primary.trips.trips(id="U1234567890", start=0, end=cortex.now())\n')),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"{\n  'timestamp': 0,\n  'duration': 1627067480000,\n  'data': [\n           {'start': 1607094903526, 'end': 1607094905476, 'latitude': 42.33786999329302, 'longitude': -71.0842230494398, 'distance': 0.008896610358911157},\n           {'start': 1607094907376, 'end': 1607094933999, 'latitude': 42.33787296688118, 'longitude': -71.08414299583944, 'distance': 0.015118418131814458},\n                 .\n                 .\n                 .\n           {'start': 1607094950000, 'end': 1607094950000, 'latitude': 42.3379491204939, 'longitude': -71.08427063527692, 'distance': 0.0028039384631051243}\n          ]\n}\n")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[377],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},358693:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=n(487462),a=n(263366),i=(n(667294),n(603905)),r=["components"],s={},l="Low Power & Connectivity Support",c={unversionedId:"develop/low_power",id:"develop/low_power",isDocsHomePage:!1,title:"Low Power & Connectivity Support",description:"The LAMP Platform API Server encompasses two main purposes:",source:"@site/docs/08-develop/03-low_power.md",sourceDirName:"08-develop",slug:"/develop/low_power",permalink:"/develop/low_power",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/08-develop/03-low_power.md",tags:[],version:"current",lastUpdatedBy:"dcurrey88",lastUpdatedAt:1646339818,formattedLastUpdatedAt:"3/3/2022",sidebarPosition:3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"How the Platform Works",permalink:"/develop/how_works"},next:{title:"Continuous Monitoring & Intervention Delivery",permalink:"/develop/intervention_delivery"}},p=[{value:"Limitations &amp; Strategies",id:"limitations--strategies",children:[],level:2}],d={toc:p};function u(e){var t=e.components,s=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"low-power--connectivity-support"},"Low Power & Connectivity Support"),(0,i.kt)("p",null,"The LAMP Platform API Server encompasses two main purposes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Communicate via the LAMP protocol as an API to any participating clients, and"),(0,i.kt)("li",{parentName:"ol"},"store data in the LAMP protocol data format.")),(0,i.kt)("p",null,"As the client of the API Server need not worry about the data storage, the semantics of how the data is stored as well as where, or for how long, are transparent and are subject to change in real-time. As long as the client uses the API, all storage access is transparently cached, proxied, or retrieved from a pre-specified medium."),(0,i.kt)("p",null,"In proxy mode, an instance of the API Server can continue to vend the API without being attached to permanent/long-term storage. This process requires:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A data cache,")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"a connection to another instance of the LAMP server, and")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"periodic synchronization between (1) and (2) determined by an availability factor."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(915644).Z})))),(0,i.kt)("p",null,"The proxy mode use-case of the LAMP server enables chaining instances together for accumulative data transfer. This serves useful for several reasons:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Network availability no longer impacts the API client as long as sufficient storage space is available for caching."),(0,i.kt)("li",{parentName:"ol"},'ActivitySpec updates (that is, when the code underlying a cognitive test or intervention, for example, is updated) are automatically propogated to all instances downstream of the first non-proxy instance when synchronization occurs. Thus, an "application update" not involving the native code of the API client occurs transparently.'),(0,i.kt)("li",{parentName:"ol"},"Connectivity method is not specifically defined; though it becomes the concern of the specific instance, it allows for flexibility of transfer between WiFi, bluetooth, LTE, etc. as needed or as capable by the hardware.")),(0,i.kt)("p",null,"As battery and storage size are concerns that impact the overall cost of a smartphone as well as how often it must be charged, patients with lower economic ability, for example, may not be able to sustain high frequency sensor collection while simultaneously lacking consistent network connectivity."),(0,i.kt)("p",null,"By both lowering the collection frequency of sensors and running an app-local instance of the LAMP server configured in proxy mode, patients will be able to use the same app, automations, and interventions, at a lower but still acceptable fidelity while incurring less battery and storage penalty."),(0,i.kt)("p",null,'In contrast, even in capable devices and well-equipped environments, recording high frequency sensor data from multiple devices still require coordination. Patients would be able to configure the smartwatch instance in proxy mode to connect to the smartphone instance, which itself would be configured in proxy mode to connect to an instance of the LAMP server in the cloud. This daisy-chaining of instances allows the smartphone instance of the LAMP server to effectively "see" the data from the smartwatch instance and be able to perform actions in response to it.'),(0,i.kt)("h2",{id:"limitations--strategies"},"Limitations & Strategies"),(0,i.kt)("p",null,"While a server instance in proxy mode appears transparent to any clients, there are a few concerns followed by mitigations thereof:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"origination:")," data cached and transferred through several instances in proxy mode would lose meaningful tagging of origin (i.e. from a wearable with high accuracy sensors or a smartphone with low accuracy sensors).",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"the use of an API key carries origination information encoded as a JWT (JSON Web Token) for all clients irrespective of which server instance they choose to communicate with."),(0,i.kt)("li",{parentName:"ol"},"LAMP server instances must only brand their origination upon data if none exists already."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"timestamp invalidity:")," though the root instance of a LAMP server may be geolocated in the EST (U.S. East) time zone, it may be synchronizing with instances configured in proxy mode geolocated in the IST (Indian) time zone.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"LAMP server instances convert timestamps into the GMT (+0) time zone upon receipt from the client."),(0,i.kt)("li",{parentName:"ol"},"upon client data access, the LAMP server re-converts timestamps into the local time zone (as specified by an IP address, for example) or the time zone requested by the client."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"automation support:")," intensive automations such as those written in Python or R cannot be invoked without network availability at the root instance.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},'some automations, when marked as "lightweight" and written in a supported language, such as Javascript, may be locally cached and invoked on-schedule to facilitate critical and vital functions (i.e. intervention deployment dependent on reported suicidal ideation).'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"synchronization of non-timestamp-marked data:")," update or creation actions on non-event data cannot be synchronized or merged.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"such actions can be considered completed by the proxy mode instance but will be queued for synchronization with a timestamp; if the root instance rejects the action, the local proxy mode instance will be reconciled with the most recent data."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Activity deployment-notification and scheduling:")," a push notification to deploy an Activity to a patient at the current instance (that is, not a scheduled one) may not succeed if the root instance does not synchronize with the proxy mode instance, and specifically targeting one instance may not be possible (such as the proxy mode instance running on a smartphone instead of on a wearable device, which is unsuitable for interaction).",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"the API key (that is, the origination as explained above) of a suitable client can optionally be specified when pushing a notification; such notifications will remain queued at the root instance until downstream synchronization reaches the correct proxy mode instance."),(0,i.kt)("li",{parentName:"ol"},"if no origination is required, the first available proxy mode instance with the applicable ActivitySpec will consume the notification and dequeue it (preventing downstream instances from knowing it was ever present).")))))}u.isMDXComponent=!0},915644:function(e,t,n){t.Z=n.p+"assets/images/Proxy_Mode-fd17d8b33db60db5a3b9f8a5215f305d.png"}}]);
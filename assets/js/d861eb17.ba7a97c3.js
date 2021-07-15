(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{296:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),i=(a(0),a(353)),o=["components"],l={},c={unversionedId:"develop/intro",id:"develop/intro",isDocsHomePage:!1,title:"Components of the LAMP Platform",description:"The LAMP Platform API Server manages all internal components and inter-component message-passing. Its components are embedded within Docker containers and use Docker Swarm for orchestration. Docker Compose and Kubernetes may also be used to deploy the components. Please see Deployment Recommendations if you do not plan on using Docker.",source:"@site/docs/07-develop/01-intro.md",sourceDirName:"07-develop",slug:"/develop/intro",permalink:"/develop/intro",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/07-develop/01-intro.md",version:"current",lastUpdatedBy:"Rebecca Bilden",lastUpdatedAt:1626378172,formattedLastUpdatedAt:"7/15/2021",sidebarPosition:1,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Testing the LAMP Platform",permalink:"/deploy/testing"},next:{title:"How the Platform Works",permalink:"/develop/how_works"}},b=[{value:"<strong>API Server</strong>",id:"api-server",children:[]},{value:"<strong>Database</strong>",id:"database",children:[]},{value:"<strong>Message Queue</strong>",id:"message-queue",children:[]},{value:"<strong>Automations Worker</strong>",id:"automations-worker",children:[]},{value:"Repositories",id:"repositories",children:[]}],s={toc:b};function p(e){var t=e.components,l=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The LAMP Platform API Server manages all internal components and inter-component message-passing. Its components are embedded within Docker containers and use Docker Swarm for orchestration. Docker Compose and Kubernetes may also be used to deploy the components. Please see ",Object(i.b)("strong",{parentName:"p"},"Deployment Recommendations")," if you do not plan on using Docker."),Object(i.b)("p",null,Object(i.b)("img",{src:a(738).default})),Object(i.b)("h3",{id:"api-server"},Object(i.b)("strong",{parentName:"h3"},"API Server")),Object(i.b)("p",null,"The gatekeeper between the internal and external domains."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This component is implemented in ",Object(i.b)("strong",{parentName:"li"},"Node.js"),"."),Object(i.b)("li",{parentName:"ul"},"****All API requests are stateless (i.e. there is no session management) and map to a single response."),Object(i.b)("li",{parentName:"ul"},"All requests irrespective of authentication requirement must be accompanied by a client API key. This pre-registered API key is recorded in the audit log with each request and serves as origination reference for resources and events."),Object(i.b)("li",{parentName:"ul"},"Using the Credential API, requests that require authentication and authorization are validated."),Object(i.b)("li",{parentName:"ul"},"Data transport must be encrypted and decrypted as per security & privacy policy.")),Object(i.b)("h3",{id:"database"},Object(i.b)("strong",{parentName:"h3"},"Database")),Object(i.b)("p",null,"The persistent data storage device supporting transient caching and complex querying."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This component is implemented by ",Object(i.b)("strong",{parentName:"li"},"CouchDB"),", with an alternate implementation for low-power usage in ",Object(i.b)("strong",{parentName:"li"},"Node.js")," using the ",Object(i.b)("strong",{parentName:"li"},"PouchDB")," framework.",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"This component can instead by substituted using custom adapter code by ",Object(i.b)("strong",{parentName:"li"},"Redis"),", ",Object(i.b)("strong",{parentName:"li"},"Amazon S3"),", or for low-power usage, a na\xefve ",Object(i.b)("strong",{parentName:"li"},"Dictionary/Map")," object in ",Object(i.b)("strong",{parentName:"li"},"js"),"."))),Object(i.b)("li",{parentName:"ul"},"A key-value or document database (noSQL) is most ideal for storage needs of the ",Object(i.b)("strong",{parentName:"li"},"LAMP Protocol"),", due to its hierarchical object data and high throughput access and low latency manipulation requirements."),Object(i.b)("li",{parentName:"ul"},"To support real-time intervention deployment and management, an intermediate in-memory cache is used to ease the load on main long-term storage databases.")),Object(i.b)("h3",{id:"message-queue"},Object(i.b)("strong",{parentName:"h3"},"Message Queue")),Object(i.b)("p",null,"Handles the synchronization of communication between all the above actors in the server layer."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This component is implemented by the ",Object(i.b)("strong",{parentName:"li"},"Redis")," high performance key-value store, with an alternate implementation for low-power usage in ",Object(i.b)("strong",{parentName:"li"},"Node.js"),"."),Object(i.b)("li",{parentName:"ul"},"Each component upon startup must register itself with the message queue for service discovery."),Object(i.b)("li",{parentName:"ul"},"Any component may create any number of topics for which other components may publish messages to or subscribe to."),Object(i.b)("li",{parentName:"ul"},"Implementation of database manipulation operations, automation events, and the audit log relies solely on subscription to the global topic; the API Server publishes requests here with a unique identifier awaiting response.")),Object(i.b)("h3",{id:"automations-worker"},Object(i.b)("strong",{parentName:"h3"},"Automations Worker")),Object(i.b)("p",null,"This component handles scheduled push notification delivery as well as execution of triggered scripts to deliver interventions to patients."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A compute platform such as a Docker-enabled system or AWS Lambda is used to handle actual execution of code once bundled."),Object(i.b)("li",{parentName:"ul"},"A dependency bundler such as Webpack, PIP, or Packrat is used to bundle each automation\u2019s code to avoid dependency versioning conflicts that could crash or halt execution."),Object(i.b)("li",{parentName:"ul"},"This component encompasses: ",Object(i.b)("strong",{parentName:"li"},"Docker Environment, Attachment Container, Automation Scripts, Scheduler"),".")),Object(i.b)("h2",{id:"repositories"},"Repositories"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Frontend"),Object(i.b)("th",{parentName:"tr",align:null},"Backend"),Object(i.b)("th",{parentName:"tr",align:null},"Native Core"),Object(i.b)("th",{parentName:"tr",align:null},"Data Science"),Object(i.b)("th",{parentName:"tr",align:null},"Programming Libraries"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-dashboard"},"Dashboard")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-server"},"API Server")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-core-ios"},"iOS")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-cortex"},"Cortex")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-r"},"R"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-activities"},"Activities")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-app-gateway"},"App Gateway")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-core-android"},"Android")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-college-study"},"CollegeStudy")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-js"},"JS"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-py"},"Python"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-swift"},"Swift"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-kotlin"},"Kotlin"))))),Object(i.b)("p",null,"The LAMP Platform is designed, developed, and managed entirely as a series of GitHub repositories: "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Core:",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"LAMP-platform"),": ",Object(i.b)("strong",{parentName:"li"},"All issues and documentation across any component repository MUST be centralized here!")," Acts as the project tracker and documentation hub.",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"package.json"),": All configuration for the Docusaurus documentation generator is housed here; the ",Object(i.b)("inlineCode",{parentName:"li"},"docusaurus.config.js")," file is dynamically generated."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"openapi.json"),": This file is dynamically generated from the ",Object(i.b)("inlineCode",{parentName:"li"},"LAMP-protocol")," git submodule that contains the ",Object(i.b)("inlineCode",{parentName:"li"},"openapi.yaml")," file. "),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"blog"),': This directory contains the release notes/updates/"What\'s New" tab documents. '),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"docs"),": This directory contains all documentation in entirely markdown files. Each file and folder includes a numeric prefix that sorts its order in the documentation sidebar, as well as an ",Object(i.b)("inlineCode",{parentName:"li"},"assets")," folder for all relevant images and media. "))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"LAMP-protocol"),": The ",Object(i.b)("inlineCode",{parentName:"li"},"openapi.yml")," file houses the OpenAPI specification for the LAMP Protocol, upon which the entire LAMP Platform is built."))),Object(i.b)("li",{parentName:"ol"},"Backend:",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"LAMP-server"),": (See Backend section in the documentation for more details on the nature of the component and how the code is organized.)"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"LAMP-worker"),": (See Automations section in the documentation for more details on the nature of the component and how the code is organized.)"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"LAMP-app-gateway"),": (See App Gateway section in the documentation for more details on the nature of the component and how the code is organized.)"))),Object(i.b)("li",{parentName:"ol"},"Frontend:",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"LAMP-dashboard"),": (See Frontend section in the documentation for more details on the nature of the component and how the code is organized.)"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"LAMP-data-studio"),":"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"LAMP-activities"),": "))),Object(i.b)("li",{parentName:"ol"},"SDKs:",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"LAMP-js"),":"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"LAMP-py"),":"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"LAMP-r"),":"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"LAMP-swift"),":"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"LAMP-kotlin"),":"))),Object(i.b)("li",{parentName:"ol"},"Data Science:",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"LAMP-cortex"),": (See Cortex section in the documentation for more details on the nature of the component and how the code is organized.)"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"LAMP-ide"),": A JupyterLab and VSCode-based integrated development environment with extensive support for Cortex."))),Object(i.b)("li",{parentName:"ol"},"Native Apps:",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"LAMP-core-ios"),": A Swift-based scaffolding that incorporates support for TypeScript business logic and a WKWebView for the frontend UI. Designed to work well with the ",Object(i.b)("inlineCode",{parentName:"li"},"LAMP-swift")," SDK."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"LAMP-core-android"),": A Kotlin-based scaffolding that incorporates support for TypeScript business logic and a WebView for the frontend UI. Designed to work well with the ",Object(i.b)("inlineCode",{parentName:"li"},"LAMP-kotlin")," SDK."))),Object(i.b)("li",{parentName:"ol"},"Other:",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"LAMP-college-study"),": A proof of concept for the Automations framework that is a part of the LAMP Platform."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"clinical-scales-importer"),": Automated clinical scale importer that works for RedCap integration into the LAMP Platform."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"analysis-tools"),": Misc. analysis tools for working with research studies using the LAMP Platform."))),Object(i.b)("li",{parentName:"ol"},"Deprecated:",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"LAMP-app"),": The mindLAMP v1 native app for iOS and Android. ",Object(i.b)("strong",{parentName:"li"},"DO NOT USE.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"LAMP-portal"),": The mindLAMP v1 backend. ",Object(i.b)("strong",{parentName:"li"},"DO NOT USE."))))))}p.isMDXComponent=!0},353:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,u=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return a?r.a.createElement(u,l(l({ref:t},b),{},{components:a})):r.a.createElement(u,l({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var b=2;b<i;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},738:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/Platform_Overview-0c296dc1945d269d56d5b323bb31c142.png"}}]);
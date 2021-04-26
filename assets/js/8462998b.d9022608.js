(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{230:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(363)),i={},s={unversionedId:"deploy_prereqs",id:"deploy_prereqs",isDocsHomePage:!1,title:"Prerequisites for Deploying the LAMP Platform",description:"The mindLAMP app interfaces with the much broader LAMP Platform to provide all of the functionality and features you can interact with within the app. The LAMP Platform is open source and its components are detailed below; to see technical materials such as source code or compiling/testing routines, please visit the components' corresponding repository.",source:"@site/docs/deploy_prereqs.md",sourceDirName:".",slug:"/deploy_prereqs",permalink:"/deploy_prereqs",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/deploy_prereqs.md",version:"current",lastUpdatedBy:"Aditya Vaidyam",lastUpdatedAt:1619127166,formattedLastUpdatedAt:"4/22/2021",frontMatter:{},sidebar:"Main",previous:{title:"LAMP Updates Tutorial",permalink:"/updates_tutorial"},next:{title:"Deployment Recommendations",permalink:"/deployment_recs"}},c=[],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The mindLAMP app interfaces with the much broader LAMP Platform to provide all of the functionality and features you can interact with within the app. The ",Object(o.b)("a",{parentName:"p",href:"https://github.com/BIDMCDigitalPsychiatry/"},"LAMP Platform is open source")," and its components are detailed below; to see technical materials such as source code or compiling/testing routines, please visit the components' corresponding repository. "),Object(o.b)("p",null,"There are different ways for your organization to self-deploy the LAMP Platform, and because these components are interoperable, your organization has the choice between only self-deploying one, a combination, or all of these components together. "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u2192")," ",Object(o.b)("em",{parentName:"p"},"Be sure to open the toggles on the left-hand side to learn more about what each component does.")),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Backend")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Database"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The noSQL database used for modern sensor data collection is CouchDB, but currently for legacy data support, Microsoft SQL Server must also be configured as part of deployment."),Object(o.b)("li",{parentName:"ul"},"Data backup must be manually configured as different organizations will expect different sizes and frequency of data storage, along with variance in data policies."),Object(o.b)("li",{parentName:"ul"},"These database components are not built or maintained as part of the LAMP Platform but are required for its usage."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Server"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The server acts as an event bus that connects the different components of the Platform together on the data plane and provides a control plane."),Object(o.b)("li",{parentName:"ul"},"It vends the LAMP Application Programming Interface (API) by which clients connect to and use the LAMP Platform."),Object(o.b)("li",{parentName:"ul"},"The API enables data harmonization, synchronization, and integration with other platforms and databases through a standardized data format and set of actions with built-in credential management."),Object(o.b)("li",{parentName:"ul"},"The API is defined using OpenAPI and JSONSchema to markup extensible interfaces."),Object(o.b)("li",{parentName:"ul"},"The industry encryption standards AES-256 and TLSv1.3 facilitate secure storage and transmission of data in a HIPAA, COPPA, and GDPR-compliant manner."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Service Worker"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This component allows external apps and tools to be notified of changes to data from other users through sent notifications and events."),Object(o.b)("li",{parentName:"ul"},"This component schedules push notifications to be delivered to mobile devices, as well as manages email/SMS notification delivery."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Optionally"),", it also schedules and executes scripts written in Python, Javascript, or R, as part of intervention delivery and data analysis. ",Object(o.b)("strong",{parentName:"li"},"This feature can be disabled."))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"When:")," If your organization is required to ensure that all data is securely managed and complies with internal policies or regulations."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Prerequisites:")," Your organization will need to provision computing resources and encrypted snapshot storage and dedicate personnel to maintenance, updates, and security (i.e. data breach detection). "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Options:")," You can use a ",Object(o.b)("strong",{parentName:"p"},"Backend")," hosted by your institution with your customized ",Object(o.b)("strong",{parentName:"p"},"Native App")," or ",Object(o.b)("strong",{parentName:"p"},"Frontend")," or the current Division of Digital Psychiatry version. "),Object(o.b)("p",null,"At this time it is not possible to use the BIDMC server to host your data. "),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Frontend")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"App UI"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The user interface for the mindLAMP app, accessible from the Web, iOS, and Android. For creating and using cognitive tests or other activities, please see the ",Object(o.b)("inlineCode",{parentName:"li"},"LAMP-activities")," repository."),Object(o.b)("li",{parentName:"ul"},"This component allows administrators, researchers, clinicians, participants, and patients to access and manage their mindLAMP configuration and data."),Object(o.b)("li",{parentName:"ul"},"It displays visualizations and can configure clinics and studies to specified requirements, and makes available activities and interventions to patients or participants, with push notifications to schedule them per user."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Integrated Development Environment"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"This component is optional.")),Object(o.b)("li",{parentName:"ul"},"This component allows authorized developers and data scientists to build, test, and deploy algorithms that work with the LAMP Platform in a secure manner."),Object(o.b)("li",{parentName:"ul"},"This component may be deployed multiple times to support different development needs or users."),Object(o.b)("li",{parentName:"ul"},"We additionally recommend ",Object(o.b)("inlineCode",{parentName:"li"},"JupyterLab")," for Python data analysis, ",Object(o.b)("inlineCode",{parentName:"li"},"RStudio")," for R data analysis, and ",Object(o.b)("inlineCode",{parentName:"li"},"Visual Studio Code")," for TypeScript development."),Object(o.b)("li",{parentName:"ul"},"Integrating development and data analysis with the LAMP Platform deployment increases data throughput and security, but access to these instances should be guarded carefully to avoid data leaks.")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"When:")," If your organization would like to create customized user experiences for your clients or clinicians."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Prerequisites:")," Your organization will need to provision a content delivery system to serve the user interface."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Options:")," You can use the existing mindLAMP ",Object(o.b)("strong",{parentName:"p"},"App UI")," designed by the Division of Digital Psychiatry with your customized ",Object(o.b)("strong",{parentName:"p"},"Native App")," or ",Object(o.b)("strong",{parentName:"p"},"Backend"),".  "),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Native App")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Smartphone (iOS, Android)"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This component is used to collect high precision sensor measurements from the numerous sensors outlined in the LAMP API documentation."),Object(o.b)("li",{parentName:"ul"},"By embedding a miniature version of the LAMP server and database, it supports active bi-directional synchronization between two devices (i.e. watch and phone, or phone and cloud)."),Object(o.b)("li",{parentName:"ul"},"By embedding the ",Object(o.b)("strong",{parentName:"li"},"App UI"),", patients and participants can interact with clinic or study-scheduled survey instruments and cognitive assessments to record active data and metadata."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Wearable")," (Apple Watch, Google wearOS)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This component is used to collect high precision sensor measurements from the numerous sensors outlined in the LAMP API documentation."),Object(o.b)("li",{parentName:"ul"},"By embedding a miniature version of the LAMP server and database, it supports active bi-directional synchronization between two devices (i.e. watch and phone, or phone and cloud).")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"When:")," if your organization would like to include support for additional sensor instruments, such as third party medical devices."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Prerequisites:")," Your organization will need to purchase membership with Apple and/or Google's developer program, submit modifications to the app for App Store review, and dedicate personnel to maintenance and updates."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Options:")," You can use the existing mindLAMP ",Object(o.b)("strong",{parentName:"p"},"Native App")," submitted by the Division of Digital Psychiatry and vetted by Apple and Google with your customized ",Object(o.b)("strong",{parentName:"p"},"Frontend")," or ",Object(o.b)("strong",{parentName:"p"},"Backend"),"."),Object(o.b)("hr",null),Object(o.b)("p",null,"It is always possible to customize the activities and sensors your patients will see in the app using the standard frontend hosted by BIDMC. You do not need to self-host the frontend."),Object(o.b)("p",null,"Even if your organization chooses to make modifications to any of these components when self-deploying them, they remain compatible with one-another. For example, if one organization self-deploys a new ",Object(o.b)("strong",{parentName:"p"},"Frontend")," user experience or adds medical devices support to the ",Object(o.b)("strong",{parentName:"p"},"Native App"),", it remains compatible with another organization's self-deployed ",Object(o.b)("strong",{parentName:"p"},"Backend"),"."))}p.isMDXComponent=!0},363:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{173:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(8),o=(r(0),r(388)),i=["components"],p={},c={unversionedId:"deploy/testing",id:"deploy/testing",isDocsHomePage:!1,title:"Testing the LAMP Platform",description:"Once you've deployed the LAMP-server and LAMP-database, you'll be able to use the mindLAMP app (either on your mobile device or in a desktop browser) to connect to your instance.",source:"@site/docs/07-deploy/08-testing.md",sourceDirName:"07-deploy",slug:"/deploy/testing",permalink:"/deploy/testing",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/07-deploy/08-testing.md",version:"current",lastUpdatedBy:"Suraj Patel",lastUpdatedAt:1634226580,formattedLastUpdatedAt:"10/14/2021",sidebarPosition:8,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Deploying the LAMP Platform",permalink:"/deploy/deploying"},next:{title:"Troubleshooting Deployment",permalink:"/deploy/troubleshooting"}},l=[],s={toc:l};function b(e){var t=e.components,r=Object(n.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Once you've deployed the ",Object(o.b)("inlineCode",{parentName:"p"},"LAMP-server")," and ",Object(o.b)("inlineCode",{parentName:"p"},"LAMP-database"),", you'll be able to use the mindLAMP app (either on your mobile device or ",Object(o.b)("a",{parentName:"p",href:"https://dashboard.lamp.digital/"},"in a desktop browser"),") to connect to your instance. "),Object(o.b)("p",null,"All data is encrypted before communication between your browser or the app to and from your newly deployed server. No data will be communicated with any other server, including the default API server at ",Object(o.b)("a",{parentName:"p",href:"http://api.lamp.digital"},"api.lamp.digital")," or other third party services."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Verify the status of the CouchDB database."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl -k https://admin:DB_PASSSWORD_HERE@db.example.com/\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Verify the status of the LAMP Platform API Server."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl -k https://api.example.com/\n")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Generate your server administrator password."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl -k https://api.example.com/researcher -H 'Authorization: Basic admin:admin'\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Check the Docker service logs for ",Object(o.b)("inlineCode",{parentName:"p"},"LAMP_server")," to locate your generated server administrator password."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"docker service logs LAMP_server\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Verify that the newly generated password (",Object(o.b)("inlineCode",{parentName:"p"},"GENERATED_PASSWORD_HERE"),") works."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl -k https://api.example.com/researcher -H 'Authorization: Basic admin:GENERATED_PASSWORD_HERE'\n")))))),Object(o.b)("p",null,"Create a ",Object(o.b)("inlineCode",{parentName:"p"},"Researcher")," and a ",Object(o.b)("inlineCode",{parentName:"p"},"Participant")," using the browser management user interface to verify the setup works as expected. To jumpstart your instance of the LAMP Platform and test surveys or other activities, follow the instructions in ",Object(o.b)("strong",{parentName:"p"},"Create Surveys")," and import the file below into the ",Object(o.b)("inlineCode",{parentName:"p"},"Researcher")," you just created. "),Object(o.b)("p",null,"[lamp_example_survey_battery_export.json]","(Testing the LAMP Platform/export.json)"),Object(o.b)("p",null,"If any of the above steps fails to complete successfully you will not be able to reach this step."))}b.isMDXComponent=!0},388:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(r),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return r?n.a.createElement(m,p(p({ref:t},l),{},{components:r})):n.a.createElement(m,p({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
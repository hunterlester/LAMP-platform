"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[6534],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},871875:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(487462),o=n(263366),i=(n(667294),n(603905)),a=["components"],l={},s="Troubleshooting Deployment",u={unversionedId:"deploy/troubleshooting",id:"deploy/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting Deployment",description:"This page contains fixes for potential issues you may encounter when using LAMP. However, it is not comprehensive. If you encounter an issue you are unable to resolve with the help of this page, please help us improve by posting your issue at community.lamp.digital",source:"@site/docs/07-deploy/09-troubleshooting.md",sourceDirName:"07-deploy",slug:"/deploy/troubleshooting",permalink:"/deploy/troubleshooting",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/07-deploy/09-troubleshooting.md",tags:[],version:"current",lastUpdatedBy:"dcurrey88",lastUpdatedAt:1646339818,formattedLastUpdatedAt:"3/3/2022",sidebarPosition:9,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Testing the LAMP Platform",permalink:"/deploy/testing"},next:{title:"Components of the LAMP Platform",permalink:"/develop/intro"}},p=[{value:"Large Logs",id:"large-logs",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"troubleshooting-deployment"},"Troubleshooting Deployment"),(0,i.kt)("p",null,"This page contains fixes for potential issues you may encounter when using LAMP. However, it is not comprehensive. If you encounter an issue you are unable to resolve with the help of this page, please help us improve by posting your issue at ",(0,i.kt)("a",{parentName:"p",href:"https://community.lamp.digital"},"community.lamp.digital")," "),(0,i.kt)("h2",{id:"large-logs"},"Large Logs"),(0,i.kt)("p",null,"LAMP-server is designed for long uptimes and detailed logging. An unfortunate side-effect of this is that, especially over a long period of time, logging files can grow large and affect available disk space, negatively impacting docker performance."),(0,i.kt)("p",null,"Check your disk space usage in the terminal of your ",(0,i.kt)("inlineCode",{parentName:"p"},"lamp-server")," node with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```bash\ndf\n```\n")),(0,i.kt)("p",null,"If it is 100%, navigate to your docker directory (try ",(0,i.kt)("inlineCode",{parentName:"p"},"cd /var/lib/docker"),") and run "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"   du -h --max-depth=1 containers/\n")),(0,i.kt)("p",null,"This command will list your containers space usage. If LAMP-server is very large (in excess of 10gb), you can attempt to clean the logs by running "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    docker stop YOUR_SERVER_ONTAINER_ID_HERE && docker rm YOUR_CONTAINER_ID_HERE\n    \n")),(0,i.kt)("p",null,"This will stop and remove your container, at which point docker swarm should spin up a new one."),(0,i.kt)("p",null,"To prevent this issue from happening in the future, add the following to your docker compose file. The docs YAML file has this added as of September 2nd, so this bug should not occur if you began using LAMP after this date."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'    logging:\n      options:\n        max-size: "10m"\n        max-file: "3"\n')))}d.isMDXComponent=!0}}]);
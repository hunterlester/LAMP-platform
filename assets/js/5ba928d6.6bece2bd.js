(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{192:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var o=r(3),n=r(8),a=(r(0),r(388)),i=["components"],c={},s={unversionedId:"deploy/provisioning",id:"deploy/provisioning",isDocsHomePage:!1,title:"Provisioning the LAMP Platform",description:"BIDMC Digital Psychiatry's LAMP Platform",source:"@site/docs/07-deploy/04-provisioning.md",sourceDirName:"07-deploy",slug:"/deploy/provisioning",permalink:"/deploy/provisioning",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/07-deploy/04-provisioning.md",version:"current",lastUpdatedBy:"Suraj Patel",lastUpdatedAt:1634226580,formattedLastUpdatedAt:"10/14/2021",sidebarPosition:4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Costs of Deploying the LAMP Platform",permalink:"/deploy/costs"},next:{title:"Preparing Resources on AWS",permalink:"/deploy/aws"}},l=[{value:"Segmenting Compute Resources",id:"segmenting-compute-resources",children:[]}],d={toc:l};function u(e){var t=e.components,c=Object(n.a)(e,i);return Object(a.b)("wrapper",Object(o.a)({},d,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{src:r(6171).default})),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"BIDMC Digital Psychiatry's LAMP Platform")),Object(a.b)("p",null,"The LAMP Platform is cloud-agnostic and can be hosted on Amazon Web Services, Microsoft Azure, Google Cloud, any other cloud provider, or self-hosted on-prem. "),Object(a.b)("p",null,"The LAMP Platform requires computing and storage resources (i.e. AWS EC2 and EBS), along with external network access;  managed services from cloud providers tend to provide robust and maintenance-free bring-up for the LAMP Platform and are recommended over self-hosting on-prem. Furthermore, additional services such as Amazon CloudFront or CloudFlare allow less expensive and more effective caching and edge content delivery of the mindLAMP Dashboard and UI without the need for multi-region deployments. "),Object(a.b)("p",null,"A single Docker Stack file (",Object(a.b)("inlineCode",{parentName:"p"},"docker-compose.yml"),") is used to automate single-node or multi-node deployments, and requires Docker Swarm (multi-node for cloud testing, integration, and production usage, or single-node for local testing or smaller deployments). Though possible to use Kubernetes or Terraform to manage larger scale deployments, the LAMP Platform has only been tested with Docker Swarm. "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"We provide additional examples for (1) local development, and (2) Amazon Web Services.\nIf you or your organization have further questions about choosing a cloud provider or deploying on-prem, ",Object(a.b)("a",{parentName:"strong",href:"mailto:team@digitalpsych.org"},"please contact us."))),Object(a.b)("h3",{id:"segmenting-compute-resources"},"Segmenting Compute Resources"),Object(a.b)("p",null,Object(a.b)("img",{src:r(6172).default})),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"BIDMC Digital Psychiatry's LAMP Platform")),Object(a.b)("p",null,"When developing or testing the LAMP Platform, it is useful and effective to segment compute resources and develop natively in the cloud (or on-prem). Consider carefully how your organization expects to the use the LAMP Platform and segregate computing resources (nodes) to reduce cost and improve performance. "),Object(a.b)("p",null,"The LAMP Platform source code repositories are hosted on GitHub and use the GitHub Actions and GitHub Packages features to quickly perform continuous testing, integration, and deployment. As code is pull requested from a feature branch into the master branch, it should pass a round of code review and pass any/all unit tests. Once the code is merged, the automated CI/CD will prepare and upload Docker images. "),Object(a.b)("p",null,"We highly recommend the use of ",Object(a.b)("inlineCode",{parentName:"p"},"Portainer")," to remotely manage your Docker Swarm nodes and container health, as well as ",Object(a.b)("inlineCode",{parentName:"p"},"Traefik")," for managing service mesh routing and in-flight TLS encryption; additional Docker Stack files and instructions are provided for both. The ",Object(a.b)("inlineCode",{parentName:"p"},"Traefik")," router interfaces with Docker Swarm and your DNS provider to automatically manage internal and external access to services, according to the configuration in the Docker Stack files provided. To monitor node health and container resource metrics, we recommend ",Object(a.b)("inlineCode",{parentName:"p"},"Netdata")," and have included it in the stack file below."),Object(a.b)("p",null,"If you'd like to follow along but would like to test the deployment out first, or don't have provisioned resources yet, ",Object(a.b)("strong",{parentName:"p"},"consider using ",Object(a.b)("a",{parentName:"strong",href:"https://labs.play-with-docker.com/"},"Play With Docker"),", a free service")," from the Docker team where you can provision a temporary Swarm cluster."))}u.isMDXComponent=!0},388:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return r?n.a.createElement(f,c(c({ref:t},l),{},{components:r})):n.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6171:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/AWS_Mini_Map-62a6866f932dfcc514d1ab82ddf76dad.png"},6172:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/AWS_Map-79cec1b4cd8758040aa0139dff4fdd88.png"}}]);
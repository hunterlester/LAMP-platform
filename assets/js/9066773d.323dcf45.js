"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[5012],{603905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var i=a(667294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return a?i.createElement(h,o(o({ref:t},d),{},{components:a})):i.createElement(h,o({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},250732:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var i=a(487462),n=a(263366),r=(a(667294),a(603905)),o=["components"],l={},s="Just-In-Time Adaptive Interventions",p={unversionedId:"develop/adaptive_interventions",id:"develop/adaptive_interventions",isDocsHomePage:!1,title:"Just-In-Time Adaptive Interventions",description:"This is a proof-of-concept for the LAMP Automations system. The workflow is detailed below:",source:"@site/docs/08-develop/06-adaptive_interventions.md",sourceDirName:"08-develop",slug:"/develop/adaptive_interventions",permalink:"/develop/adaptive_interventions",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/08-develop/06-adaptive_interventions.md",tags:[],version:"current",lastUpdatedBy:"Luke Scheuer",lastUpdatedAt:1643036145,formattedLastUpdatedAt:"1/24/2022",sidebarPosition:6,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Building New Activities",permalink:"/develop/build_new_activities"},next:{title:"Working with the App Gateway",permalink:"/develop/app_gateway"}},d=[{value:"Private Sensors and Tags",id:"private-sensors-and-tags",children:[],level:3}],c={toc:d};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"just-in-time-adaptive-interventions"},"Just-In-Time Adaptive Interventions"),(0,r.kt)("p",null,"This is a proof-of-concept for the LAMP Automations system. The workflow is detailed below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Patient logs into mobile app (iOS/Android)"),(0,r.kt)("li",{parentName:"ol"},"Mobile app uses Study configuration to activate device sensor data collection (i.e. which sensors, frequency per sensor, misc. settings)"),(0,r.kt)("li",{parentName:"ol"},"Mobile app collects sensor data in background and caches it"),(0,r.kt)("li",{parentName:"ol"},"Conditions must be met: device charged/charging + active WiFi connection"),(0,r.kt)("li",{parentName:"ol"},"Mobile app bulk uploads cached sensor data to specified server (organization) "),(0,r.kt)("li",{parentName:"ol"},"Mobile app individually uploads activity data upon participant\u2019s completion of a session"),(0,r.kt)("li",{parentName:"ol"},"API Server processes and stores this data into database "),(0,r.kt)("li",{parentName:"ol"},"API Server signals all listeners that new data has arrived (per-study, per-activity, per-participant)"),(0,r.kt)("li",{parentName:"ol"},"Automations worker receives new data notification"),(0,r.kt)("li",{parentName:"ol"},"Worker searches its installed scripts catalog for scripts that specify a matching trigger condition",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-college-study/blob/master/main.py"},"For example, the BIDMC College Study has installed their own script (source code provided here).")))),(0,r.kt)("li",{parentName:"ol"},"Worker executes scripts, providing the new data notification information to the script"),(0,r.kt)("li",{parentName:"ol"},"Scripts (third-party user-specified code) are executed in isolated docker containers"),(0,r.kt)("li",{parentName:"ol"},"Script processes the data as it needs and may optionally execute actions",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Example: BIDMC college study script")),(0,r.kt)("li",{parentName:"ol"},"Script computes change in daily survey score today vs. yesterday += 3 points"),(0,r.kt)("li",{parentName:"ol"},"If condition is met, script selects a random activity (meditation, journaling, placebo) to send to participant "),(0,r.kt)("li",{parentName:"ol"},"Script sends message containing activity ID to API server for mobile app push notification"),(0,r.kt)("li",{parentName:"ol"},"Participant receives push notification on their mobile device ",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Participant opens push notification and starts activity session"),(0,r.kt)("li",{parentName:"ol"},"Upon completion of session (i.e. saved a journal entry), activity data is uploaded to server"),(0,r.kt)("li",{parentName:"ol"},"Repeat this feedback cycle from step #6")))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"private-sensors-and-tags"},"Private Sensors and Tags"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"lamp.gps.contextual")," Sensor: This was a mindLAMP 1 feature that collected street-level GPS (not lat/long coordinates) with a paired survey asking about social and environmental context (who you were with and where you were) between 5-30 min of taking a survey in the app. "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"lamp.demographics")," Tag: This holds processed clinical scale data from when a patient is onboarded onto a study (i.e. via paper-pencil surveys or RedCap, etc.)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"beiwe.*")," Sensors: The full list of these Sensors is below; these are migrated sensors from when the Beiwe app was used alongside mindLAMP 1.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"beiwe.identifiers")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"beiwe.accelerometer")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"beiwe.bluetooth")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"beiwe.calls")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"beiwe.gps")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"beiwe.power_state")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"beiwe.texts")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"beiwe.wifi")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"beiwe.audio_recordings")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"beiwe.survey_answers")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"beiwe.survey_timings")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"beiwe.app_log")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"beiwe.ios_log")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"lamp.dashboard.activity_details")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"lamp.dashboard.survey_description")," Tags: These were placeholder tags for the mindLAMP v1 to v2 migration; the Activity API was not fixed at the time and did not support activity icons, descriptions, etc. and so these Tags were required on each customized Activity."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"lamp.dashboard.credential_roles")," Tag: The Care Team feature allowed attaching a separate Tag with a dictionary, where each key matched a Credential set on the Participant; the values for each key (the Credential's email address) was a name, photo, and description of the individual's role in the care team. This is no longer supported as a feature."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"lamp.name")," Tag: This added backwards-compatible support for the ",(0,r.kt)("inlineCode",{parentName:"li"},"Participant.aliases")," feature."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"lamp.messaging")," Tag: This added backwards-compatible support for the Conversations feature of the dashboard."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"lamp.dashboard.welcome_dismissed")," Tag: Unknown; this Tag was never used. "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"lamp.selectedStudies"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"lamp.selectedActivities"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"lamp.selectedSensors")," Tags: Due to bugs in the earliest version of the mindLAMP v2 dashboard, these tags held an array of studies, activities, or sensors that were selected by the currently logged in Researcher. This is now defunct and should not be used (",(0,r.kt)("inlineCode",{parentName:"li"},"localStorage")," should be used instead).")))}m.isMDXComponent=!0}}]);
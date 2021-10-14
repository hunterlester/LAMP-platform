(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{211:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(8),i=(n(0),n(388)),o=["components"],c={},l={unversionedId:"using/sensors",id:"using/sensors",isDocsHomePage:!1,title:"Sensor Types",description:"Active sensor events are produced on a rolling basis via interactions by a Participant. They are transferred to the Platform Server automatically by using the Activity API written in JavaScript. By \u201cbeginning\u201d and \u201cending\u201d a recording of these interactions, as well as \u201cemitting\u201d temporal data during the interaction, an ActivityEvent can be captured and sent to the Platform Server. A list of existing Sensors is provided below with name and description; a live server instance must be consulted for data schema information (see GET /sensor_spec). Implementations for these hardware sensors are provided in the GitHub repository.",source:"@site/docs/05-using/07-sensors.md",sourceDirName:"05-using",slug:"/using/sensors",permalink:"/using/sensors",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/05-using/07-sensors.md",version:"current",lastUpdatedBy:"Suraj Patel",lastUpdatedAt:1634226580,formattedLastUpdatedAt:"10/14/2021",sidebarPosition:7,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Cognitive Games and Assessments",permalink:"/using/cog_games"},next:{title:"Clinical vs. Research Use",permalink:"/using/clin_vs_res"}},s=[{value:"Accelerometer",id:"accelerometer",children:[]},{value:"Blood Pressure",id:"blood-pressure",children:[]},{value:"Bluetooth",id:"bluetooth",children:[{value:"Description",id:"description-1",children:[]}]},{value:"Calls",id:"calls",children:[{value:"Description",id:"description-2",children:[]}]},{value:"Distance",id:"distance",children:[]},{value:"Gyroscope",id:"gyroscope",children:[{value:"Description",id:"description-3",children:[]}]},{value:"Motion",id:"motion",children:[{value:"Description",id:"description-4",children:[]}]},{value:"SMS",id:"sms",children:[{value:"Description",id:"description-5",children:[]}]},{value:"Screen",id:"screen",children:[{value:"Description",id:"description-6",children:[]}]},{value:"Weight",id:"weight",children:[]},{value:"WiFi",id:"wifi",children:[{value:"Description",id:"description-7",children:[]}]}],b={toc:s};function d(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Active sensor events are produced on a rolling basis via interactions by a Participant. They are transferred to the ",Object(i.b)("strong",{parentName:"p"},"Platform Server")," automatically by using the Activity API written in JavaScript. By \u201cbeginning\u201d and \u201cending\u201d a recording of these interactions, as well as \u201cemitting\u201d temporal data during the interaction, an ActivityEvent can be captured and sent to the ",Object(i.b)("strong",{parentName:"p"},"Platform Server"),". A list of existing Sensors is provided below with name and description; a live server instance must be consulted for data schema information (see GET /sensor_spec). Implementations for these hardware sensors are provided in the GitHub repository."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"SensorSpec"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Analytics"),Object(i.b)("td",{parentName:"tr",align:null},"lamp.analytics")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Location"),Object(i.b)("td",{parentName:"tr",align:null},"lamp.gps")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Device Motion"),Object(i.b)("td",{parentName:"tr",align:null},"lamp.device_motion")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Accelerometer"),Object(i.b)("td",{parentName:"tr",align:null},"lamp.accelerometer")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Pedometer"),Object(i.b)("td",{parentName:"tr",align:null},"lamp.steps")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Sleep"),Object(i.b)("td",{parentName:"tr",align:null},"lamp.sleep")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Nutrition"),Object(i.b)("td",{parentName:"tr",align:null},"lamp.nutrition")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Workouts"),Object(i.b)("td",{parentName:"tr",align:null},"lamp.segment")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Screen"),Object(i.b)("td",{parentName:"tr",align:null},"lamp.screen_state")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Bluetooth & WiFi"),Object(i.b)("td",{parentName:"tr",align:null},"lamp.nearby_device")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Calls & Texts"),Object(i.b)("td",{parentName:"tr",align:null},"lamp.telephony")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Blood Pressure"),Object(i.b)("td",{parentName:"tr",align:null},"lamp.blood_pressure")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Blood Glucose"),Object(i.b)("td",{parentName:"tr",align:null},"lamp.blood_glucose")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Oxygen Saturation"),Object(i.b)("td",{parentName:"tr",align:null},"lamp.oxygen_saturation")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Body Temperature"),Object(i.b)("td",{parentName:"tr",align:null},"lamp.body_temperature")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Heart Rate & HRV"),Object(i.b)("td",{parentName:"tr",align:null},"lamp.heart_rate")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Respiratory Rate"),Object(i.b)("td",{parentName:"tr",align:null},"lamp.respiratory_rate")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Activity Recognition"),Object(i.b)("td",{parentName:"tr",align:null},"lamp.activity_recognition")))),Object(i.b)("h4",{id:"details-on-the-most-commonly-analyzed-specs-are-below-for-greater-detail-of-specs-see-cortex--api-section"},"Details on the most commonly analyzed specs are below: For greater detail of specs, see ",Object(i.b)("strong",{parentName:"h4"},"Cortex & API")," section."),Object(i.b)("h2",{id:"accelerometer"},"Accelerometer"),Object(i.b)("p",null,"SensorSpec: lamp.accelerometer"),Object(i.b)("h4",{id:"description"},"Description"),Object(i.b)("p",null,"The triaxial accelerometer measures acceleration applied to the device. Each measurement is measured in Gs and is taken relative to the coordinate plane of the device, screen facing upwards. For example, a device resting face-up on a flat surface will report a measurement with the coordinate values ",Object(i.b)("inlineCode",{parentName:"p"},"<0, 0, 1>"),"."),Object(i.b)("h2",{id:"blood-pressure"},"Blood Pressure"),Object(i.b)("p",null,"SensorSpec: lamp.blood_pressure"),Object(i.b)("p",null,"Blood pressure is "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"lamp.blood_pressure:")," records blood pressure from an external connected monitor.",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"value"),": number"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"units"),": string")))),Object(i.b)("h2",{id:"bluetooth"},"Bluetooth"),Object(i.b)("p",null,"Cortex: cortex.raw.bluetooth"),Object(i.b)("h3",{id:"description-1"},"Description"),Object(i.b)("p",null,"The bluetooth sensor logs information about the device's Bluetooth sensor and about surrounding Bluetooth devices that are enabled and/or visible. The device scan for surrounding Bluetooth devices at a set frequency (default is 60 seconds). If multiple devices are detected in a single scan, they are all assigned the same timestamp."),Object(i.b)("h2",{id:"calls"},"Calls"),Object(i.b)("p",null,"SensorSpec: lamp.calls"),Object(i.b)("h3",{id:"description-2"},"Description"),Object(i.b)("p",null,"The calls sensor measures information on phone calls made and received by the user. Each event is a single phone call, with information on its type (incoming, outgoing, missed, etc), duration, and trace (the other device which the user connected with during the call).\nCall type options differ between Android and iOS devices."),Object(i.b)("h2",{id:"distance"},"Distance"),Object(i.b)("p",null,"SensorSpec: lamp.distance"),Object(i.b)("h2",{id:"gyroscope"},"Gyroscope"),Object(i.b)("p",null,"SensorSpec: lamp.gyroscope"),Object(i.b)("h3",{id:"description-3"},"Description"),Object(i.b)("p",null,"The gyroscope sensors measures the rate of rotation around each of a device's x, y and z axes. Rotation values are in radians/second. Positive values indicate counter-clockwise rotation; negative values indicate clockwise rotation. These are raw values\u2014i.e. they do not correct for nosie or drift."),Object(i.b)("h2",{id:"motion"},"Motion"),Object(i.b)("p",null,"SensorSpec: lamp.accelerometer.motion"),Object(i.b)("h3",{id:"description-4"},"Description"),Object(i.b)("p",null,"The motion sensor gathers information on the device's physical movement. It includes metrics on device tilt, rotation, experienced gravity, acceleration, and magnetic field. The acceleration measure here differs from ",Object(i.b)("inlineCode",{parentName:"p"},"lamp.accelerometer")," in that this measure does not correct for gravity."),Object(i.b)("h2",{id:"sms"},"SMS"),Object(i.b)("p",null,"SensorSpec: lamp.sms"),Object(i.b)("h3",{id:"description-5"},"Description"),Object(i.b)("p",null,"The sms sensor measures information on text messages sent and received by the user. Each event is a single message, with information on its type (incoming, outgoing) and trace (the other device involved in the messaging exchange). "),Object(i.b)("h2",{id:"screen"},"Screen"),Object(i.b)("p",null,"SensorSpec: lamp.screen_state"),Object(i.b)("h3",{id:"description-6"},"Description"),Object(i.b)("p",null,"The screen state sensor records when the screen was turned on or off, when the device was locked or unlocked, and changes in battery level from charging or discharging the device.\nThis sensor ",Object(i.b)("strong",{parentName:"p"},"DOES NOT")," record the amount of time spent within specific apps on the device or how many notifications were received."),Object(i.b)("h2",{id:"weight"},"Weight"),Object(i.b)("p",null,"SensorSpec: lamp.weight"),Object(i.b)("h2",{id:"wifi"},"WiFi"),Object(i.b)("p",null,"Cortex: cortex.raw.wifi"),Object(i.b)("h3",{id:"description-7"},"Description"),Object(i.b)("p",null,"The wifi sensor provides information about the devices to which the user's device connects via wifi."))}d.isMDXComponent=!0},388:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(n),u=r,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
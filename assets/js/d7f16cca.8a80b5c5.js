(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{266:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),o=(a(0),a(318)),l={},i={unversionedId:"data_science/python",id:"data_science/python",isDocsHomePage:!1,title:"Preparing to Analyze Your Data in Python",description:"If you'd like to follow along with this tutorial but don't have a Python development environment set up, consider using Google Collab, a free service from Google Research.",source:"@site/docs/08-data_science/04-python.md",sourceDirName:"08-data_science",slug:"/data_science/python",permalink:"/data_science/python",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/08-data_science/04-python.md",version:"current",lastUpdatedBy:"Aditya Vaidyam",lastUpdatedAt:1622041089,formattedLastUpdatedAt:"5/26/2021",sidebarPosition:4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Preparing to Analyze Your Data in R",permalink:"/data_science/r"},next:{title:"Cortex",permalink:"/data_science/cortex"}},c=[{value:"Protocol methods",id:"protocol-methods",children:[{value:"Querying sensor data",id:"querying-sensor-data",children:[]},{value:"Example: Query accelerometer data",id:"example-query-accelerometer-data",children:[]},{value:"Query sensor data",id:"query-sensor-data",children:[]}]}],s={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you'd like to follow along with this tutorial but don't have a Python development environment set up, ",Object(o.b)("strong",{parentName:"p"},"consider using ",Object(o.b)("a",{parentName:"strong",href:"https://colab.research.google.com/"},"Google Collab"),", a free service")," from Google Research. "),Object(o.b)("h1",{id:"installation-and-setup"},"Installation and Setup"),Object(o.b)("p",null,"First install the package. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"pip install LAMP-core\n")),Object(o.b)("p",null,"Then, import the library and connect to the server."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"import LAMP\nLAMP.connect('api.lamp.digital', 'my_email@address.com', 'my_password')\n")),Object(o.b)("h1",{id:"usage"},"Usage"),Object(o.b)("h2",{id:"protocol-methods"},"Protocol methods"),Object(o.b)("p",null,"Methods native to the LAMP API can now be called to pull data from the platform."),Object(o.b)("p",null,"For example, we can find all of the participants belonging to a Researcher:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"TEST_RESEARCHER = 'UmVzZWFyY2hlcjoxNjM~'\n\n[LAMP.Participant.all_by_study(study['id'])['data'] for study in LAMP.Study.all_by_researcher(TEST_RESEARCHER)['data']]\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"# OUTPUT\n\n#{'data': [{'id': 'U34260565',\n#    'language': 'en',\n#    'theme': '#359FFE',\n#    'emergency_contact': None,\n#    'helpline': None},\n#   {'id': 'U33327158',\n#    'language': 'en',\n#    'theme': '#359FFE',\n#    'emergency_contact': None,\n#    'helpline': None}]}\n")),Object(o.b)("p",null,"The code below will make CSV files of all the 'lamp.gps.contextual' sensor events for all participants under a given researcher id:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import LAMP\nimport pandas as pd \nLAMP.connect(\"MY_EMAIL_ADDRESS_HERE\", \"MY_PASSWORD_HERE\")\n\nfor participant in LAMP.Participant.all_by_researcher(\"me\")['data']:\n    data = []\n    events = LAMP.SensorEvent.all_by_participant(participant['id'], origin='lamp.gps.contextual')['data']\n    for event in events:\n        data.append({\n            'timestamp': event['timestamp'],\n            'UTC time': \"\",\n            'latitude': event['data']['latitude'],\n            'longitude': event['data']['longitude'],\n            'altitude': 1.0,\n            'accuracy': 1.0\n        })\n    # Don't make CSV files for participants without any `lamp.gps.contextual` events.\n    if len(data) > 0:\n        pd.DataFrame.from_dict(data, orient='columns').to_csv(f\"{participant['id']}.csv\", index=False)\n")),Object(o.b)("h3",{id:"querying-sensor-data"},"Querying sensor data"),Object(o.b)("p",null,'Query sensor data with "all_by_participant"'),Object(o.b)("p",null,'Specify a sensor with "origin". If no origin is passed, it will try to query all sensors'),Object(o.b)("p",null,"Note that due to device or user specification, some spensors may not have data"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'# Full sensor specs at https://docs.lamp.digital/Data-Types-99b045852c7b406f87c124b927fe95fa\n\n# Please note that no GPS data has been included with these dummy profiles\n\nparticipant_1 = "U5704591513"\nlamp_sensors = ["lamp.accelerometer", "lamp.accelerometer.motion", "lamp.analytics", \n           "lamp.blood_pressure", "lamp.bluetooth", "lamp.calls", "lamp.distance",\n           "lamp.flights", "lamp.gps", "lamp.gps.contextual", "lamp.gyroscope",\n           "lamp.heart_rate", "lamp.height", "lamp.magnetometer", "lamp.respiratory_rate"\n           "lamp.screen_state","lamp.segment", "lamp.sleep", "lamp.steps",\n           "lamp.weight", "lamp.wifi"]\n\nLAMP.SensorEvent.all_by_participant(participant_1, origin="lamp.bluetooth")[\'data\'][:5]#, origin="lamp.calls")\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"[{'timestamp': 1578863459719,\n  'sensor': 'lamp.bluetooth',\n  'data': {'hashed MAC': '1EKJ5ZTXj_h85oA6mP8kGq84oWSB5uaRJRlaepCb4vhPTPifquqjWJ237bsh7FEtbNrH9f45h2HSMdTffTmb_Q==',\n   'RSSI': -71}},\n {'timestamp': 1578863459533,\n  'sensor': 'lamp.bluetooth',\n  'data': {'hashed MAC': '1EKJ5ZTXj_h85oA6mP8kGq84oWSB5uaRJRlaepCb4vhPTPifquqjWJ237bsh7FEtbNrH9f45h2HSMdTffTmb_Q==',\n   'RSSI': -74}},\n {'timestamp': 1578863459196,\n  'sensor': 'lamp.bluetooth',\n  'data': {'hashed MAC': '1EKJ5ZTXj_h85oA6mP8kGq84oWSB5uaRJRlaepCb4vhPTPifquqjWJ237bsh7FEtbNrH9f45h2HSMdTffTmb_Q==',\n   'RSSI': -60}},\n {'timestamp': 1578863459167,\n  'sensor': 'lamp.bluetooth',\n  'data': {'hashed MAC': 'YyTeKHTPetzGdC0j2EPJ9-VJ9FxafDpHd34MA41BQDKSt1Q4B7vtuFJZpN7_JTOKnDycjRcA3ik8pYwcrfFGlQ==',\n   'RSSI': -98}},\n {'timestamp': 1578863458989,\n  'sensor': 'lamp.bluetooth',\n  'data': {'hashed MAC': 'lYcGRvQlyI9Gq8Yqu1wDX8mOQJDBzIMnnGS9UsVxsrsmKWb1nFOY0tLLAE8VTzJ83GeJaBhmnhpL8weRv7A96Q==',\n   'RSSI': -97}}]\n")),Object(o.b)("h3",{id:"example-query-accelerometer-data"},"Example: Query accelerometer data"),Object(o.b)("p",null,'Accelerometer data points are SensorEvents with the origin "lamp.accelerometer".'),Object(o.b)("p",null,"See LAMP-py documentation at\xa0",Object(o.b)("a",{parentName:"p",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-py"},"https://github.com/BIDMCDigitalPsychiatry/LAMP-py"),"\xa0for further API details."),Object(o.b)("p",null,'Query responses are limtied to 1000 entries. In the event that there are more than 1000 events for a given sensor, the most recent 1000 events are returned. To access more data\u2014or to query during a specific time range\u2014you must use the "_to" and "from" parameters'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"# '_from' and 'to' are UNIX timestamps\nparticipant_accel_tr = LAMP.SensorEvent.all_by_participant(participant_1, \n                                                           origin=\"lamp.accelerometer\",\n                                                           _from=1577735460618,\n                                                           to=1577735460737)\nparticipant_accel_tr['data']\n")),Object(o.b)("h3",{id:"query-sensor-data"},"Query sensor data"),Object(o.b)("p",null,"Surveys are ActivityEvents, with each survey type defined as an Activity"),Object(o.b)("p",null,"'duration' is the survey completion time, in ms"),Object(o.b)("p",null,"'activity' is the Activity id"),Object(o.b)("p",null,"'temporal_slices' contains responses for each survey question"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"LAMP.ActivityEvent.all_by_participant(participant_1)['data'][0]\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"# {'timestamp': 1600557560000,\n#  'duration': 15000,\n#  'activity': '16fnz109gs4sehyfc84n',\n#  'static_data': {},\n#  'temporal_slices': [{'item': 'How did you feel this week?',\n#    'value': 'Okay',\n#    'type': 'valid',\n#    'duration': 5000,\n#    'level': None},\n#   {'item': 'Have you been admitted to the hospital for psychiatric reasons in the past week?',\n#    'value': 'No',\n#    'type': 'valid',\n#    'duration': 7000,\n#    'level': None},\n#   {'item': 'Use this space to write down your thoughts and feelings about the week. ',\n#    'value': 'it was okay',\n#    'type': 'valid',\n#    'duration': 3000,\n#    'level': None}]}\n")),Object(o.b)("p",null,"Details of the 'activity can be be viewed the following method"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"LAMP.Activity.view('16fnz109gs4sehyfc84n')\n")))}p.isMDXComponent=!0},318:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?r.a.createElement(b,i(i({ref:t},s),{},{components:a})):r.a.createElement(b,i({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);
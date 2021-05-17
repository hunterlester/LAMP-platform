(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{114:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(364)),i={},l={unversionedId:"python",id:"python",isDocsHomePage:!1,title:"Preparing to Analyze Your Data in Python",description:"If you'd like to follow along with this tutorial but don't have a Python development environment set up, consider using Google Collab, a free service from Google Research.",source:"@site/docs/python.md",sourceDirName:".",slug:"/python",permalink:"/python",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/python.md",version:"current",lastUpdatedBy:"Aditya Vaidyam",lastUpdatedAt:1619127166,formattedLastUpdatedAt:"4/22/2021",frontMatter:{},sidebar:"Main",previous:{title:"Data Types",permalink:"/data_types"},next:{title:"Preparing to Analyze Your Data in R",permalink:"/r"}},c=[{value:"Protocol methods",id:"protocol-methods",children:[{value:"Querying sensor data",id:"querying-sensor-data",children:[]},{value:"Example: Query accelerometer data",id:"example-query-accelerometer-data",children:[]},{value:"Query sensor data",id:"query-sensor-data",children:[]}]},{value:"Dataframe methods",id:"dataframe-methods",children:[{value:"ParticipantExt objects",id:"participantext-objects",children:[]},{value:"StudyExt objects",id:"studyext-objects",children:[]}]}],s={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you'd like to follow along with this tutorial but don't have a Python development environment set up, ",Object(o.b)("strong",{parentName:"p"},"consider using ",Object(o.b)("a",{parentName:"strong",href:"https://colab.research.google.com/"},"Google Collab"),", a free service")," from Google Research. "),Object(o.b)("h1",{id:"installation-and-setup"},"Installation and Setup"),Object(o.b)("p",null,"First install the package. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"pip install LAMP-core\n")),Object(o.b)("p",null,"Then, import the library and connect to the server."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"import LAMP\nLAMP.connect('api.lamp.digital', 'my_email@address.com', 'my_password')\n")),Object(o.b)("h1",{id:"usage"},"Usage"),Object(o.b)("h2",{id:"protocol-methods"},"Protocol methods"),Object(o.b)("p",null,"Methods native to the LAMP API can now be called to pull data from the platform."),Object(o.b)("p",null,"For example, we can find all of the participants belonging to a Researcher:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"TEST_RESEARCHER = 'UmVzZWFyY2hlcjoxNjM~'\n\nLAMP.Participant.all_by_researcher(TEST_RESEARCHER)\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"# OUTPUT\n\n#{'data': [{'id': 'U34260565',\n#    'language': 'en',\n#    'theme': '#359FFE',\n#    'emergency_contact': None,\n#    'helpline': None},\n#   {'id': 'U33327158',\n#    'language': 'en',\n#    'theme': '#359FFE',\n#    'emergency_contact': None,\n#    'helpline': None}]}\n")),Object(o.b)("p",null,"The code below will make CSV files of all the 'lamp.gps.contextual' sensor events for all participants under a given researcher id:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import LAMP\nimport pandas as pd \nLAMP.connect(\"MY_EMAIL_ADDRESS_HERE\", \"MY_PASSWORD_HERE\")\n\nfor participant in LAMP.Participant.all_by_researcher(\"me\")['data']:\n    data = []\n    events = LAMP.SensorEvent.all_by_participant(participant['id'], origin='lamp.gps.contextual')['data']\n    for event in events:\n        data.append({\n            'timestamp': event['timestamp'],\n            'UTC time': \"\",\n            'latitude': event['data']['latitude'],\n            'longitude': event['data']['longitude'],\n            'altitude': 1.0,\n            'accuracy': 1.0\n        })\n    # Don't make CSV files for participants without any `lamp.gps.contextual` events.\n    if len(data) > 0:\n        pd.DataFrame.from_dict(data, orient='columns').to_csv(f\"{participant['id']}.csv\", index=False)\n")),Object(o.b)("h3",{id:"querying-sensor-data"},"Querying sensor data"),Object(o.b)("p",null,'Query sensor data with "all_by_participant"'),Object(o.b)("p",null,'Specify a sensor with "origin". If no origin is passed, it will try to query all sensors'),Object(o.b)("p",null,"Note that due to device or user specification, some spensors may not have data"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},'# Full sensor specs at https://docs.lamp.digital/Data-Types-99b045852c7b406f87c124b927fe95fa\n\n# Please note that no GPS data has been included with these dummy profiles\n\nparticipant_1 = "U5704591513"\nlamp_sensors = ["lamp.accelerometer", "lamp.accelerometer.motion", "lamp.analytics", \n           "lamp.blood_pressure", "lamp.bluetooth", "lamp.calls", "lamp.distance",\n           "lamp.flights", "lamp.gps", "lamp.gps.contextual", "lamp.gyroscope",\n           "lamp.heart_rate", "lamp.height", "lamp.magnetometer", "lamp.respiratory_rate"\n           "lamp.screen_state","lamp.segment", "lamp.sleep", "lamp.steps",\n           "lamp.weight", "lamp.wifi"]\n\nLAMP.SensorEvent.all_by_participant(participant_1, origin="lamp.bluetooth")[\'data\'][:5]#, origin="lamp.calls")\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"[{'timestamp': 1578863459719,\n  'sensor': 'lamp.bluetooth',\n  'data': {'hashed MAC': '1EKJ5ZTXj_h85oA6mP8kGq84oWSB5uaRJRlaepCb4vhPTPifquqjWJ237bsh7FEtbNrH9f45h2HSMdTffTmb_Q==',\n   'RSSI': -71}},\n {'timestamp': 1578863459533,\n  'sensor': 'lamp.bluetooth',\n  'data': {'hashed MAC': '1EKJ5ZTXj_h85oA6mP8kGq84oWSB5uaRJRlaepCb4vhPTPifquqjWJ237bsh7FEtbNrH9f45h2HSMdTffTmb_Q==',\n   'RSSI': -74}},\n {'timestamp': 1578863459196,\n  'sensor': 'lamp.bluetooth',\n  'data': {'hashed MAC': '1EKJ5ZTXj_h85oA6mP8kGq84oWSB5uaRJRlaepCb4vhPTPifquqjWJ237bsh7FEtbNrH9f45h2HSMdTffTmb_Q==',\n   'RSSI': -60}},\n {'timestamp': 1578863459167,\n  'sensor': 'lamp.bluetooth',\n  'data': {'hashed MAC': 'YyTeKHTPetzGdC0j2EPJ9-VJ9FxafDpHd34MA41BQDKSt1Q4B7vtuFJZpN7_JTOKnDycjRcA3ik8pYwcrfFGlQ==',\n   'RSSI': -98}},\n {'timestamp': 1578863458989,\n  'sensor': 'lamp.bluetooth',\n  'data': {'hashed MAC': 'lYcGRvQlyI9Gq8Yqu1wDX8mOQJDBzIMnnGS9UsVxsrsmKWb1nFOY0tLLAE8VTzJ83GeJaBhmnhpL8weRv7A96Q==',\n   'RSSI': -97}}]\n")),Object(o.b)("h3",{id:"example-query-accelerometer-data"},"Example: Query accelerometer data"),Object(o.b)("p",null,'Accelerometer data points are SensorEvents with the origin "lamp.accelerometer".'),Object(o.b)("p",null,"See LAMP-py documentation at\xa0",Object(o.b)("a",{parentName:"p",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-py"},"https://github.com/BIDMCDigitalPsychiatry/LAMP-py"),"\xa0for further API details."),Object(o.b)("p",null,'Query responses are limtied to 1000 entries. In the event that there are more than 1000 events for a given sensor, the most recent 1000 events are returned. To access more data\u2014or to query during a specific time range\u2014you must use the "_to" and "from" parameters'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"# '_from' and 'to' are UNIX timestamps\nparticipant_accel_tr = LAMP.SensorEvent.all_by_participant(participant_1, \n                                                           origin=\"lamp.accelerometer\",\n                                                           _from=1577735460618,\n                                                           to=1577735460737)\nparticipant_accel_tr['data']\n")),Object(o.b)("h3",{id:"query-sensor-data"},"Query sensor data"),Object(o.b)("p",null,"Surveys are ActivityEvents, with each survey type defined as an Activity"),Object(o.b)("p",null,"'duration' is the survey completion time, in ms"),Object(o.b)("p",null,"'activity' is the Activity id"),Object(o.b)("p",null,"'temporal_slices' contains responses for each survey question"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"LAMP.ActivityEvent.all_by_participant(participant_1)['data'][0]\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"# {'timestamp': 1600557560000,\n#  'duration': 15000,\n#  'activity': '16fnz109gs4sehyfc84n',\n#  'static_data': {},\n#  'temporal_slices': [{'item': 'How did you feel this week?',\n#    'value': 'Okay',\n#    'type': 'valid',\n#    'duration': 5000,\n#    'level': None},\n#   {'item': 'Have you been admitted to the hospital for psychiatric reasons in the past week?',\n#    'value': 'No',\n#    'type': 'valid',\n#    'duration': 7000,\n#    'level': None},\n#   {'item': 'Use this space to write down your thoughts and feelings about the week. ',\n#    'value': 'it was okay',\n#    'type': 'valid',\n#    'duration': 3000,\n#    'level': None}]}\n")),Object(o.b)("p",null,"Details of the 'activity can be be viewed the following method"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"LAMP.Activity.view('16fnz109gs4sehyfc84n')\n")),Object(o.b)("h2",{id:"dataframe-methods"},"Dataframe methods"),Object(o.b)("p",null,'Pandas dataframe-based functionality has been implemented on top of the protocol methods to allow users to more easily work with data. This functionality is in the form of "ParticipantExt" and "StudyExt" objects.'),Object(o.b)("h3",{id:"participantext-objects"},"ParticipantExt objects"),Object(o.b)("p",null,'"ParticipantExt" objects are designed to represent individual LAMP participants. They are separet from the "Participant" object defined in the protocol. The objects have various properties and methods that will discussed here and can be viewed in more detail in the "participant_ext.py" file.'),Object(o.b)("p",null,"Subjects are be initialized with their LAMP id, as well as various other (optional) fields:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"TEST_PARTICIPANT = 'U34260565'\nsubject_1 = lamp.ParticipantExt(id = TEST_PARTICIPANT)\n\nTEST_PARTICIPANT2 = 'U33327158'\nsubject_2 = lamp.ParticipantExt(id = TEST_PARTICIPANT2,  \n                                                 age = 42, \n                                                 sex = 'F')\n")),Object(o.b)("p",null,"Integrated data can now be viewed in the Subject's df:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"subject_1.df\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"#           Date         id   Anxiety      Mood\n# 0   2018-08-22  U34260565       NaN       NaN\n# 1   2018-08-23  U34260565  0.857143  1.000000\n# 2   2018-08-24  U34260565       NaN       NaN\n# 3   2018-08-25  U34260565       NaN  1.111111\n# 4   2018-08-26  U34260565       NaN       NaN\n# ..         ...        ...       ...       ...\n# 115 2018-12-15  U34260565       NaN       NaN\n# 116 2018-12-16  U34260565       NaN       NaN\n# 117 2018-12-17  U34260565       NaN       NaN\n# 118 2018-12-18  U34260565       NaN       NaN\n# 119 2018-12-19  U34260565       NaN       NaN\n\n# [120 rows x 4 columns]\n")),Object(o.b)("p",null,'To create this dataframe, "ParticipantExt.create_df()" is automatically called upon ParticipantExt initialization. A dataframe with customizable properties can also be generated after intialization: '),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"import datetime\n\nsubject_1.create_df(days_cap=10, day_first=datetime.datetime(year=2018, month=8, day=24).date())\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"#         Date           id   Anxiety      Mood\n# 0 2018-08-24  U1684566141       NaN       NaN\n# 1 2018-08-25  U1684566141       NaN  1.111111\n# 2 2018-08-26  U1684566141       NaN       NaN\n# 3 2018-08-27  U1684566141  1.714286       NaN\n# 4 2018-08-28  U1684566141       NaN       NaN\n# 5 2018-08-29  U1684566141  1.571429  1.111111\n# 6 2018-08-30  U1684566141       NaN       NaN\n# 7 2018-08-31  U1684566141       NaN       NaN\n# 8 2018-09-01  U1684566141       NaN       NaN\n# 9 2018-09-02  U1684566141       NaN       NaN\n")),Object(o.b)("h3",{id:"studyext-objects"},"StudyExt objects"),Object(o.b)("p",null,"If you have many participants that would like to group together as a cohort, you can do so with the StudyExt object. "),Object(o.b)("p",null,"A StudyExt consists of one or many ParticipantExt objects. They are initialized with a list of valid LAMP ids, along with other (optional) parameters:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"test_cohort = lamp.StudyExt(subjects = ['U1234567', 'U33327158'])\n\nfor subject in test_cohort:\n    print(subject.id)\n    print(subject.df)\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"# U1234567\n#         Date         id      Mood   Anxiety  beta_a  beta_b\n# 0 2020-02-27  U1234567  2.555556  2.428571     NaN     NaN\n\n# U33327158\n#         Date         id     Sleep  Psychosis   Anxiety  beta_a  beta_b\n# 0 2020-02-27  U33327158  2.333333        1.4  1.428571     NaN     NaN\n")),Object(o.b)("p",null,'Many methods are shared between ParticipantExt and StudyExt objects. More details on StudyExt objects can be viewed in the "study_ext.py" file.'))}p.isMDXComponent=!0},364:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return a?r.a.createElement(m,l(l({ref:t},s),{},{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);
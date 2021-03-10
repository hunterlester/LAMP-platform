(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{251:function(e){e.exports=JSON.parse('{"operationId":"Study.create_activity","summary":"Create an Activity for a Study.","description":"Create an Activity for a Study.","tags":["Study"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"An activity that may be performed by a participant in a study.","properties":{"id":{"type":"string","readOnly":true,"description":"The self-referencing identifier to this object.","example":"2wp97csc3g57ptznhhkg"},"spec":{"type":"string","description":"The specification, parameters, and type of the activity.","example":"lamp.survey"},"name":{"type":"string","description":"The name of the activity.","example":"Mood Survey"},"settings":{"type":"object","additionalProperties":true,"description":"The configuration settings for the activity.","example":{"questions":[{"text":"What day is it today?","description":"Please answer based on when you received the notification for this survey.","type":"slider","options":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}]}},"schedule":{"type":"array","description":"The notification schedule for the activity.","items":{"anyOf":[{"type":"object","description":"An advanced scheduling item.","properties":{"start":{"type":"integer","format":"int64","description":"The UNIX Epoch date-time representation: number of milliseconds since 1/1/1970 12:00 AM."},"interval":{"type":"array","items":{},"description":""},"repeat_count":{"type":"integer","format":"int64","description":""},"end":{"type":"integer","format":"int64","description":"The UNIX Epoch date-time representation: number of milliseconds since 1/1/1970 12:00 AM."}}},{"type":"object","description":"A simplified scheduling item.","properties":{"start_date":{"type":"string","format":"date-time","description":"The date after which this schedule should begin firing.","example":"2020-10-28T20:50:12.000Z"},"time":{"type":"string","format":"date-time","description":"For certain `repeat_interval` types, specify the hour and minute of the day to fire.","example":"2020-10-28T20:50:12.000Z"},"repeat_interval":{"type":"string","enum":["hourly","every3h","every6h","every12h","daily","biweekly","triweekly","weekly","bimonthly","monthly","custom","none"],"description":"If set to `hourly`, `every3h`, `every6h`, or `every12h`, only the `time` parameter\'s minute field is used. If set to anything other than `custom` or `none`, the `time` parameter\'s hour and minute field are both used. The `biweekly` option refers to Tue/Thurs and `triweekly` option refers to Mon/Wed/Fri. The `bimonthly` option refers to twice a month. The `custom` option refers to only using the `custom_times` array, and the `none` option means to only trigger the schedule once.","example":"every6h"},"custom_times":{"type":"array","items":{"type":"string","format":"date-time","description":"A specific date-time to fire at.","example":"2020-10-28T20:50:12.000Z"},"nullable":true,"description":"For `custom` schedules, specify a list of all specific date-times to fire at."}}}]},"example":[{"start_date":"2020-10-24T14:17:00.000Z","time":"2020-10-23T16:17:33.291Z","repeat_interval":"every3h","custom_time":["2020-10-23T14:18:20.973Z","2020-10-23T14:18:20.973Z","2020-10-23T14:18:20.973Z","2020-10-23T14:18:20.973Z"]}]}},"required":["id","spec","name","settings","schedule"]}}}},"responses":{"200":{"description":"Success","content":{"application/json":{"schema":{"type":"object","properties":{"data":{"type":"object"}}}}}},"default":{"description":"Error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"400.bad-request"}}}}}}},"security":[{"Authorization":[]}],"x-code-samples":[{"lang":"js","label":"JavaScript","source":"import LAMP from \'lamp-core\'\\nawait LAMP.connect({ serverAddress: \\"api.lamp.digital\\", accessKey: \\"email@address.com\\", secretKey: \\"password\\" })\\n// function-specific sample code here\\n"},{"lang":"python","label":"Python","source":"import LAMP\\nLAMP.connect(\\"api.lamp.digital\\", \\"email@address.com\\", \\"password\\")\\n# function-specific sample code here\\n"},{"lang":"go","label":"R Script","source":"library(LAMP)\\nLAMP.connect(\\"api.lamp.digital\\", \\"email@address.com\\", \\"password\\")\\n# function-specific sample code here\\n"}],"postman":{"name":"Create an Activity for a Study.","description":{"content":"Create an Activity for a Study.","type":"text/plain"},"url":{"path":["study",":id","activity"],"host":["{{baseUrl}}"],"query":[],"variable":[{"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"<string>","key":"id"}]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"{\\n    \\"spec\\": \\"<string>\\",\\n    \\"name\\": \\"<string>\\",\\n    \\"settings\\": \\"<object>\\",\\n    \\"schedule\\": [\\n        {\\n            \\"start\\": \\"<long>\\",\\n            \\"interval\\": [\\n                \\"schema type not provided\\",\\n                \\"schema type not provided\\"\\n            ],\\n            \\"repeat_count\\": \\"<long>\\",\\n            \\"end\\": \\"<long>\\"\\n        },\\n        {\\n            \\"start\\": \\"<long>\\",\\n            \\"interval\\": [\\n                \\"schema type not provided\\",\\n                \\"schema type not provided\\"\\n            ],\\n            \\"repeat_count\\": \\"<long>\\",\\n            \\"end\\": \\"<long>\\"\\n        }\\n    ],\\n    \\"ipsum9fc\\": \\"exercitatio\\"\\n}"},"auth":{"type":"basic","basic":[{"type":"any","value":"<Basic Auth Username>","key":"username"},{"type":"any","value":"<Basic Auth Password>","key":"password"}]}},"method":"post","path":"/study/{id}/activity","hashId":"create-an-activity-for-a-study","servers":[{"url":"https://{server_url}","description":"LAMP Platform API Server","variables":{"server_url":{"default":"api.lamp.digital","description":"A specific API server instance (HTTPS required)."}}}],"permalink":"/api/create-an-activity-for-a-study","previous":{"title":"List all Participants for a Study.","permalink":"/api/list-all-participants-for-a-study"},"next":{"title":"List all Activities for a Study.","permalink":"/api/list-all-activities-for-a-study"},"jsonRequestBodyExample":{"id":"2wp97csc3g57ptznhhkg","spec":"lamp.survey","name":"Mood Survey","settings":{"questions":[{"text":"What day is it today?","description":"Please answer based on when you received the notification for this survey.","type":"slider","options":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}]},"schedule":[{"start_date":"2020-10-24T14:17:00.000Z","time":"2020-10-23T16:17:33.291Z","repeat_interval":"every3h","custom_time":["2020-10-23T14:18:20.973Z","2020-10-23T14:18:20.973Z","2020-10-23T14:18:20.973Z","2020-10-23T14:18:20.973Z"]}]}}')}}]);
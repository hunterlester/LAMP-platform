(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{332:function(e){e.exports=JSON.parse('{"operationId":"Study.list","summary":"List all Studies for a Researcher.","description":"List all studies for a Researcher. The deprecated name for this operation is `Study.all_by_researcher`.","tags":["Study"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Success","content":{"application/json":{"schema":{"type":"object","properties":{"data":{"type":"array","items":{"type":"object","description":"","properties":{"id":{"type":"string","readOnly":true,"description":"The self-referencing identifier to this object.","example":"2wp97csc3g57ptznhhkg"},"name":{"type":"string","description":"The name of the study.","example":"Psychosis Study"}},"required":["id","name"]}}}}}}},"default":{"description":"Error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"400.bad-request"}}}}}}},"security":[{"Authorization":[]}],"x-code-samples":[{"lang":"js","label":"JavaScript","source":"import LAMP from \'lamp-core\'\\nawait LAMP.connect({ serverAddress: \\"api.lamp.digital\\", accessKey: \\"email@address.com\\", secretKey: \\"password\\" })\\n// function-specific sample code here\\n"},{"lang":"python","label":"Python","source":"import LAMP\\nLAMP.connect(\\"api.lamp.digital\\", \\"email@address.com\\", \\"password\\")\\n"},{"lang":"go","label":"R Script","source":"library(LAMP)\\nLAMP.connect(\\"api.lamp.digital\\", \\"email@address.com\\", \\"password\\")\\n"}],"postman":{"name":"List all Studies for a Researcher.","description":{"content":"List all studies for a Researcher. The deprecated name for this operation is `Study.all_by_researcher`.","type":"text/plain"},"url":{"path":["researcher",":id","study"],"host":["{{baseUrl}}"],"query":[],"variable":[{"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"<string>","key":"id"}]},"method":"GET","auth":{"type":"basic","basic":[{"type":"any","value":"<Basic Auth Username>","key":"username"},{"type":"any","value":"<Basic Auth Password>","key":"password"}]}},"method":"get","path":"/researcher/{id}/study","hashId":"list-all-studies-for-a-researcher","servers":[{"url":"https://{server_url}","description":"LAMP Platform API Server","variables":{"server_url":{"default":"api.lamp.digital","description":"A specific API server instance (HTTPS required)."}}}],"permalink":"/api/list-all-studies-for-a-researcher","previous":{"title":"Create a Study for a Researcher.","permalink":"/api/create-a-study-for-a-researcher"},"next":{"title":"Update a Study.","permalink":"/api/update-a-study"}}')}}]);
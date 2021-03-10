(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{97:function(e){e.exports=JSON.parse('{"operationId":"Study.create_participant","summary":"Create a Participant for a Study.","description":"Create a Participant for a Study.","tags":["Study"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"A participant within a study; a participant cannot be enrolled in more than one study at a time.","properties":{"id":{"type":"string","readOnly":true,"description":"The self-referencing identifier to this object.","example":"U1234567890"}},"required":["id"]}}}},"responses":{"200":{"description":"Success","content":{"application/json":{"schema":{"type":"object","properties":{"data":{"type":"object"}}}}}},"default":{"description":"Error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"400.bad-request"}}}}}}},"security":[{"Authorization":[]}],"x-code-samples":[{"lang":"js","label":"JavaScript","source":"import LAMP from \'lamp-core\'\\nawait LAMP.connect({ serverAddress: \\"api.lamp.digital\\", accessKey: \\"email@address.com\\", secretKey: \\"password\\" })\\n// function-specific sample code here\\n"},{"lang":"python","label":"Python","source":"import LAMP\\nLAMP.connect(\\"api.lamp.digital\\", \\"email@address.com\\", \\"password\\")\\n# function-specific sample code here\\n"},{"lang":"go","label":"R Script","source":"library(LAMP)\\nLAMP.connect(\\"api.lamp.digital\\", \\"email@address.com\\", \\"password\\")\\n# function-specific sample code here\\n"}],"postman":{"name":"Create a Participant for a Study.","description":{"content":"Create a Participant for a Study.","type":"text/plain"},"url":{"path":["study",":id","participant"],"host":["{{baseUrl}}"],"query":[],"variable":[{"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"<string>","key":"id"}]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"{\\n    \\"commodoa80\\": 8458073.67515041\\n}"},"auth":{"type":"basic","basic":[{"type":"any","value":"<Basic Auth Username>","key":"username"},{"type":"any","value":"<Basic Auth Password>","key":"password"}]}},"method":"post","path":"/study/{id}/participant","hashId":"create-a-participant-for-a-study","servers":[{"url":"https://{server_url}","description":"LAMP Platform API Server","variables":{"server_url":{"default":"api.lamp.digital","description":"A specific API server instance (HTTPS required)."}}}],"permalink":"/api/create-a-participant-for-a-study","previous":{"title":"View a Study.","permalink":"/api/view-a-study"},"next":{"title":"List all Participants for a Study.","permalink":"/api/list-all-participants-for-a-study"},"jsonRequestBodyExample":{"id":"U1234567890"}}')}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{286:function(e){e.exports=JSON.parse('{"operationId":"Study.list_tags","summary":"List all Tags set for or by a Study.","description":"List all Tags set for or by a Study.","tags":["Study"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Success","content":{"application/json":{"schema":{"type":"object","properties":{"data":{"type":"array","items":{"type":"string"}}}}}}},"default":{"description":"Error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"400.bad-request"}}}}}}},"security":[{"Authorization":[]}],"x-code-samples":[{"lang":"js","label":"JavaScript","source":"import LAMP from \'lamp-core\'\\nawait LAMP.connect({ serverAddress: \\"api.lamp.digital\\", accessKey: \\"email@address.com\\", secretKey: \\"password\\" })\\n// function-specific sample code here\\n"},{"lang":"python","label":"Python","source":"import LAMP\\nLAMP.connect(\\"api.lamp.digital\\", \\"email@address.com\\", \\"password\\")\\n"},{"lang":"go","label":"R Script","source":"library(LAMP)\\nLAMP.connect(\\"api.lamp.digital\\", \\"email@address.com\\", \\"password\\")\\n"}],"postman":{"name":"List all Tags set for or by a Study.","description":{"content":"","type":"text/plain"},"url":{"path":["study",":id","tag"],"host":["{{baseUrl}}"],"query":[],"variable":[{"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"<string>","key":"id"}]},"method":"GET","auth":{"type":"basic","basic":[{"type":"any","value":"<Basic Auth Username>","key":"username"},{"type":"any","value":"<Basic Auth Password>","key":"password"}]}},"method":"get","path":"/study/{id}/tag","hashId":"list-all-tags-set-for-or-by-a-study","servers":[{"url":"https://{server_url}","description":"LAMP Platform API Server","variables":{"server_url":{"default":"api.lamp.digital","description":"A specific API server instance (HTTPS required)."}}}],"permalink":"/api/list-all-tags-set-for-or-by-a-study","previous":{"title":"List all Sensors in a Study.","permalink":"/api/list-all-sensors-in-a-study"},"next":{"title":"Get a Tag set for or by a Study.","permalink":"/api/get-a-tag-set-for-or-by-a-study"}}')}}]);
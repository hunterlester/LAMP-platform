(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{222:function(e){e.exports=JSON.parse('{"operationId":"Sensor.get_tag","summary":"Get a Tag set for or by the Sensor.","description":"Get a Tag set for or by the Sensor.","tags":["Sensor"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"}},{"name":"key","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Success","content":{"application/json":{"schema":{"type":"object","properties":{"data":{"type":"object","additionalProperties":true}}}}}},"default":{"description":"Error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"400.bad-request"}}}}}}},"security":[{"Authorization":[]}],"x-code-samples":[{"lang":"js","label":"JavaScript","source":"import LAMP from \'lamp-core\'\\nawait LAMP.connect({ serverAddress: \\"api.lamp.digital\\", accessKey: \\"email@address.com\\", secretKey: \\"password\\" })\\n// function-specific sample code here\\n"},{"lang":"python","label":"Python","source":"import LAMP\\nLAMP.connect(\\"api.lamp.digital\\", \\"email@address.com\\", \\"password\\")\\n# function-specific sample code here\\n"},{"lang":"go","label":"R Script","source":"library(LAMP)\\nLAMP.connect(\\"api.lamp.digital\\", \\"email@address.com\\", \\"password\\")\\n# function-specific sample code here\\n"}],"postman":{"name":"Get a Tag set for or by the Sensor.","description":{"content":"","type":"text/plain"},"url":{"path":["sensor",":id","tag",":key"],"host":["{{baseUrl}}"],"query":[],"variable":[{"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"<string>","key":"id"},{"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"<string>","key":"key"}]},"method":"GET","auth":{"type":"basic","basic":[{"type":"any","value":"<Basic Auth Username>","key":"username"},{"type":"any","value":"<Basic Auth Password>","key":"password"}]}},"method":"get","path":"/sensor/{id}/tag/{key}","hashId":"get-a-tag-set-for-or-by-the-sensor","servers":[{"url":"https://{server_url}","description":"LAMP Platform API Server","variables":{"server_url":{"default":"api.lamp.digital","description":"A specific API server instance (HTTPS required)."}}}],"permalink":"/api/get-a-tag-set-for-or-by-the-sensor","previous":{"title":"List all Tags set for or by the Sensor.","permalink":"/api/list-all-tags-set-for-or-by-the-sensor"},"next":{"title":"Set a Tag for the Sensor or its childen.","permalink":"/api/set-a-tag-for-the-sensor-or-its-childen"}}')}}]);
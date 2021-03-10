(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{253:function(e){e.exports=JSON.parse('{"operationId":"Study.create_credential","summary":"Create a Credential for a Study.","description":"Create a Credential for a Study.","tags":["Study"],"parameters":[{"name":"type_id","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object"}}}},"responses":{"200":{"description":"Success","content":{"application/json":{"schema":{"type":"object","properties":{"data":{"type":"object"}}}}}},"default":{"description":"Error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"400.bad-request"}}}}}}},"security":[{"Authorization":[]}],"x-code-samples":[{"lang":"js","label":"JavaScript","source":"import LAMP from \'lamp-core\'\\nawait LAMP.connect({ serverAddress: \\"api.lamp.digital\\", accessKey: \\"email@address.com\\", secretKey: \\"password\\" })\\n// function-specific sample code here\\n"},{"lang":"python","label":"Python","source":"import LAMP\\nLAMP.connect(\\"api.lamp.digital\\", \\"email@address.com\\", \\"password\\")\\n# function-specific sample code here\\n"},{"lang":"go","label":"R Script","source":"library(LAMP)\\nLAMP.connect(\\"api.lamp.digital\\", \\"email@address.com\\", \\"password\\")\\n# function-specific sample code here\\n"}],"postman":{"name":"Create a Credential for a Study.","description":{"content":"","type":"text/plain"},"url":{"path":["study",":id","credential"],"host":["{{baseUrl}}"],"query":[],"variable":[{"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"<string>","key":"type_id"}]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"\\"<object>\\""},"auth":{"type":"basic","basic":[{"type":"any","value":"<Basic Auth Username>","key":"username"},{"type":"any","value":"<Basic Auth Password>","key":"password"}]}},"method":"post","path":"/study/{id}/credential","hashId":"create-a-credential-for-a-study","servers":[{"url":"https://{server_url}","description":"LAMP Platform API Server","variables":{"server_url":{"default":"api.lamp.digital","description":"A specific API server instance (HTTPS required)."}}}],"permalink":"/api/create-a-credential-for-a-study","previous":{"title":"List all Credentials for a Study.","permalink":"/api/list-all-credentials-for-a-study"},"next":{"title":"Update a Credential for a Study.","permalink":"/api/update-a-credential-for-a-study"},"jsonRequestBodyExample":{}}')}}]);
// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '6e0b24a6-2bef-4598-9bd3-f87e9700e24c',
    name: 'Windows Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .get('/pools?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"xplatCreatedPool\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatCreatedPool\",\"eTag\":\"0x8D38070A8B546C4\",\"lastModified\":\"2016-05-20T05:36:14.4516804Z\",\"creationTime\":\"2016-05-20T05:36:14.4516804Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-05-20T05:36:14.4516804Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-05-20T05:36:14.5626906Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"cloudServiceConfiguration\":{\r\n        \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n      }\r\n    },{\r\n      \"id\":\"xplatTestPool\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatTestPool\",\"eTag\":\"0x8D3806F60D446DB\",\"lastModified\":\"2016-05-20T05:27:04.3621595Z\",\"creationTime\":\"2016-05-20T05:27:04.3621595Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-05-20T05:27:04.3621595Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-05-20T05:28:24.7706737Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":3,\"targetDedicated\":3,\"enableAutoScale\":false,\"enableInterNodeCommunication\":true,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"cloudServiceConfiguration\":{\r\n        \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '11350a6a-3cf7-4d1f-aa9b-8a35355c6f72',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'd33dcfaa-c35f-4f3f-9b19-f033d800ae02',
  dataserviceversion: '3.0',
  date: 'Fri, 20 May 2016 05:36:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/pools?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"xplatCreatedPool\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatCreatedPool\",\"eTag\":\"0x8D38070A8B546C4\",\"lastModified\":\"2016-05-20T05:36:14.4516804Z\",\"creationTime\":\"2016-05-20T05:36:14.4516804Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-05-20T05:36:14.4516804Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-05-20T05:36:14.5626906Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"cloudServiceConfiguration\":{\r\n        \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n      }\r\n    },{\r\n      \"id\":\"xplatTestPool\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatTestPool\",\"eTag\":\"0x8D3806F60D446DB\",\"lastModified\":\"2016-05-20T05:27:04.3621595Z\",\"creationTime\":\"2016-05-20T05:27:04.3621595Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-05-20T05:27:04.3621595Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-05-20T05:28:24.7706737Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":3,\"targetDedicated\":3,\"enableAutoScale\":false,\"enableInterNodeCommunication\":true,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"cloudServiceConfiguration\":{\r\n        \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '11350a6a-3cf7-4d1f-aa9b-8a35355c6f72',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'd33dcfaa-c35f-4f3f-9b19-f033d800ae02',
  dataserviceversion: '3.0',
  date: 'Fri, 20 May 2016 05:36:15 GMT',
  connection: 'close' });
 return result; }]];
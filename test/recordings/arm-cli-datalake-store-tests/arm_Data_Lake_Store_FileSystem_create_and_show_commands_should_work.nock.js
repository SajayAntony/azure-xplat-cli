// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls7064.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlsclifolder01?op=MKDIRS&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f178e827-a8b1-487d-8df3-f3b958395766',
  'set-cookie': [ 'UserPrincipalSession=e5c2ba41-3588-4050-8a9b-956e78697609; path=/; secure; HttpOnly' ],
  'server-perf': '[f178e827-a8b1-487d-8df3-f3b958395766][ AuthTime::1336.97387127072::PostAuthTime::30922.7600341472 ][HdfsMkdirsV2 :: 00:00:236 ms]%0a[MKDIRS :: 00:00:237 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:29 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7064.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlsclifolder01?op=MKDIRS&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f178e827-a8b1-487d-8df3-f3b958395766',
  'set-cookie': [ 'UserPrincipalSession=e5c2ba41-3588-4050-8a9b-956e78697609; path=/; secure; HttpOnly' ],
  'server-perf': '[f178e827-a8b1-487d-8df3-f3b958395766][ AuthTime::1336.97387127072::PostAuthTime::30922.7600341472 ][HdfsMkdirsV2 :: 00:00:236 ms]%0a[MKDIRS :: 00:00:237 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:29 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":0,\"accessTime\":1461868170111,\"modificationTime\":1461868170111,\"replication\":0,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7b4a06e1-4d3f-427d-907f-fc849a89799b',
  'set-cookie': [ 'UserPrincipalSession=54c738a0-ba2a-4328-99bb-8ba715259e99; path=/; secure; HttpOnly' ],
  'server-perf': '[7b4a06e1-4d3f-427d-907f-fc849a89799b][ AuthTime::1388.72612712639::PostAuthTime::31337.2230780877 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:125 ms]%0a[GetFileStatus :: 00:00:125 ms]%0a[GETFILESTATUS :: 00:00:126 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:30 GMT',
  connection: 'close',
  'content-length': '265' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":0,\"accessTime\":1461868170111,\"modificationTime\":1461868170111,\"replication\":0,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7b4a06e1-4d3f-427d-907f-fc849a89799b',
  'set-cookie': [ 'UserPrincipalSession=54c738a0-ba2a-4328-99bb-8ba715259e99; path=/; secure; HttpOnly' ],
  'server-perf': '[7b4a06e1-4d3f-427d-907f-fc849a89799b][ AuthTime::1388.72612712639::PostAuthTime::31337.2230780877 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:125 ms]%0a[GetFileStatus :: 00:00:125 ms]%0a[GETFILESTATUS :: 00:00:126 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:30 GMT',
  connection: 'close',
  'content-length': '265' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7064.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlsclifolder01%2Femptyfile.txt?overwrite=false&op=CREATE&write=true&api-version=2015-10-01-preview')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls7064.azuredatalakestore.net/webhdfs/v1/adlsclifolder01/emptyfile.txt?overwrite=false&op=CREATE&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': '4d1a94f2-8c10-4f2a-83c3-88438b0f7c4d',
  'set-cookie': [ 'UserPrincipalSession=6ad202dc-b49e-4f6e-a768-33af51e1fc27; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[4d1a94f2-8c10-4f2a-83c3-88438b0f7c4d][ AuthTime::1392.57240542504::PostAuthTime::31062.1486759228 ][FsOpenStream :: 00:00:108 ms]%0a[Open :: 00:00:109 ms]%0a[Write :: 00:00:000 ms]%0a[CREATE :: 00:00:111 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:30 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7064.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlsclifolder01%2Femptyfile.txt?overwrite=false&op=CREATE&write=true&api-version=2015-10-01-preview')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls7064.azuredatalakestore.net/webhdfs/v1/adlsclifolder01/emptyfile.txt?overwrite=false&op=CREATE&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': '4d1a94f2-8c10-4f2a-83c3-88438b0f7c4d',
  'set-cookie': [ 'UserPrincipalSession=6ad202dc-b49e-4f6e-a768-33af51e1fc27; path=/; secure; HttpOnly' ],
  contentlength: '0',
  'server-perf': '[4d1a94f2-8c10-4f2a-83c3-88438b0f7c4d][ AuthTime::1392.57240542504::PostAuthTime::31062.1486759228 ][FsOpenStream :: 00:00:108 ms]%0a[Open :: 00:00:109 ms]%0a[Write :: 00:00:000 ms]%0a[CREATE :: 00:00:111 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:30 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Femptyfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1461868171453,\"modificationTime\":1461868171453,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5ecfd62c-9fa1-40bd-9077-dc77425c967f',
  'set-cookie': [ 'UserPrincipalSession=6f6c1a7d-38f1-407a-aba3-f35362fb96f6; path=/; secure; HttpOnly' ],
  'server-perf': '[5ecfd62c-9fa1-40bd-9077-dc77425c967f][ AuthTime::1323.28707246045::PostAuthTime::30581.8742175862 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:096 ms]%0a[GetFileStatus :: 00:00:097 ms]%0a[GETFILESTATUS :: 00:00:097 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:31 GMT',
  connection: 'close',
  'content-length': '268' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Femptyfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1461868171453,\"modificationTime\":1461868171453,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5ecfd62c-9fa1-40bd-9077-dc77425c967f',
  'set-cookie': [ 'UserPrincipalSession=6f6c1a7d-38f1-407a-aba3-f35362fb96f6; path=/; secure; HttpOnly' ],
  'server-perf': '[5ecfd62c-9fa1-40bd-9077-dc77425c967f][ AuthTime::1323.28707246045::PostAuthTime::30581.8742175862 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:096 ms]%0a[GetFileStatus :: 00:00:097 ms]%0a[GETFILESTATUS :: 00:00:097 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:31 GMT',
  connection: 'close',
  'content-length': '268' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7064.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlsclifolder01%2Fcontentfile.txt?overwrite=false&op=CREATE&write=true&api-version=2015-10-01-preview', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls7064.azuredatalakestore.net/webhdfs/v1/adlsclifolder01/contentfile.txt?overwrite=false&op=CREATE&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': 'cedfad7c-52a5-4486-a841-c8ee78abb1bf',
  contentlength: '0',
  'server-perf': '[cedfad7c-52a5-4486-a841-c8ee78abb1bf][ AuthTime::664.637682647054::PostAuthTime::141.994665790748 ][FsOpenStream :: 00:00:115 ms]%0a[Open :: 00:00:115 ms]%0a[FsAppendStream :: 00:00:295 ms]%0a[Write :: 00:00:296 ms]%0a[CREATE :: 00:00:413 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:32 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7064.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/webhdfs/v1/adlsclifolder01%2Fcontentfile.txt?overwrite=false&op=CREATE&write=true&api-version=2015-10-01-preview', '*')
  .reply(201, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://xplattestadls7064.azuredatalakestore.net/webhdfs/v1/adlsclifolder01/contentfile.txt?overwrite=false&op=CREATE&write=true&api-version=2015-10-01-preview',
  'x-ms-request-id': 'cedfad7c-52a5-4486-a841-c8ee78abb1bf',
  contentlength: '0',
  'server-perf': '[cedfad7c-52a5-4486-a841-c8ee78abb1bf][ AuthTime::664.637682647054::PostAuthTime::141.994665790748 ][FsOpenStream :: 00:00:115 ms]%0a[Open :: 00:00:115 ms]%0a[FsAppendStream :: 00:00:295 ms]%0a[Write :: 00:00:296 ms]%0a[CREATE :: 00:00:413 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:32 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fcontentfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1461868172690,\"modificationTime\":1461868173030,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ac78e5ed-d5bf-4bc3-b4ed-ac3f89a8ddac',
  'set-cookie': [ 'UserPrincipalSession=b025b06a-04ba-4e88-a50a-d35f883518cb; path=/; secure; HttpOnly' ],
  'server-perf': '[ac78e5ed-d5bf-4bc3-b4ed-ac3f89a8ddac][ AuthTime::1464.85586246009::PostAuthTime::31433.0267899683 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:138 ms]%0a[GetFileStatus :: 00:00:139 ms]%0a[GETFILESTATUS :: 00:00:139 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:33 GMT',
  connection: 'close',
  'content-length': '269' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fcontentfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":22,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1461868172690,\"modificationTime\":1461868173030,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ac78e5ed-d5bf-4bc3-b4ed-ac3f89a8ddac',
  'set-cookie': [ 'UserPrincipalSession=b025b06a-04ba-4e88-a50a-d35f883518cb; path=/; secure; HttpOnly' ],
  'server-perf': '[ac78e5ed-d5bf-4bc3-b4ed-ac3f89a8ddac][ AuthTime::1464.85586246009::PostAuthTime::31433.0267899683 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:138 ms]%0a[GetFileStatus :: 00:00:139 ms]%0a[GETFILESTATUS :: 00:00:139 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:33 GMT',
  connection: 'close',
  'content-length': '269' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01?op=MSLISTSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":22,\"pathSuffix\":\"contentfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1461868172690,\"modificationTime\":1461868173030,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"},{\"length\":0,\"pathSuffix\":\"emptyfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1461868171453,\"modificationTime\":1461868171453,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '18ec0d20-16f9-4577-9ffc-2c67194ee38f',
  'set-cookie': [ 'UserPrincipalSession=9b758128-dfb0-4f6e-a9e1-3972ed4c214f; path=/; secure; HttpOnly' ],
  'server-perf': '[18ec0d20-16f9-4577-9ffc-2c67194ee38f][ AuthTime::1397.7077251152::PostAuthTime::30759.8346359502 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:101 ms]%0a[GetFileStatus :: 00:00:101 ms]%0a[HdfsListStatus :: 00:00:068 ms]%0a[ListStatus :: 00:00:171 ms]%0a[MSLISTSTATUS :: 00:00:177 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:34 GMT',
  connection: 'close',
  'content-length': '570' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01?op=MSLISTSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":22,\"pathSuffix\":\"contentfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1461868172690,\"modificationTime\":1461868173030,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"},{\"length\":0,\"pathSuffix\":\"emptyfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1461868171453,\"modificationTime\":1461868171453,\"replication\":1,\"permission\":\"770\",\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '18ec0d20-16f9-4577-9ffc-2c67194ee38f',
  'set-cookie': [ 'UserPrincipalSession=9b758128-dfb0-4f6e-a9e1-3972ed4c214f; path=/; secure; HttpOnly' ],
  'server-perf': '[18ec0d20-16f9-4577-9ffc-2c67194ee38f][ AuthTime::1397.7077251152::PostAuthTime::30759.8346359502 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:101 ms]%0a[GetFileStatus :: 00:00:101 ms]%0a[HdfsListStatus :: 00:00:068 ms]%0a[ListStatus :: 00:00:171 ms]%0a[MSLISTSTATUS :: 00:00:177 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:34 GMT',
  connection: 'close',
  'content-length': '570' });
 return result; }]];
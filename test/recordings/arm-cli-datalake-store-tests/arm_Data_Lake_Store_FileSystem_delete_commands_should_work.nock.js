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
  .delete('/webhdfs/v1/adlsclifolder01%2Fmovefile.txt?recursive=false&op=DELETE&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":false}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f47d2ca1-5308-46a1-97d0-1427c02cc88e',
  'set-cookie': [ 'UserPrincipalSession=8e2c367d-34cb-4a55-95cf-0cad71f863ea; path=/; secure; HttpOnly' ],
  'server-perf': '[f47d2ca1-5308-46a1-97d0-1427c02cc88e][ AuthTime::1368.19383444555::PostAuthTime::31162.2291252071 ][FsDelete :: 00:00:072 ms]%0a[CleanCacheDelete :: 00:00:000 ms]%0a[Delete :: 00:00:073 ms]%0a[DELETE :: 00:00:073 ms]%0a',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:45 GMT',
  connection: 'close',
  'content-length': '17' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7064.azuredatalakestore.net:443')
  .delete('/webhdfs/v1/adlsclifolder01%2Fmovefile.txt?recursive=false&op=DELETE&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":false}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f47d2ca1-5308-46a1-97d0-1427c02cc88e',
  'set-cookie': [ 'UserPrincipalSession=8e2c367d-34cb-4a55-95cf-0cad71f863ea; path=/; secure; HttpOnly' ],
  'server-perf': '[f47d2ca1-5308-46a1-97d0-1427c02cc88e][ AuthTime::1368.19383444555::PostAuthTime::31162.2291252071 ][FsDelete :: 00:00:072 ms]%0a[CleanCacheDelete :: 00:00:000 ms]%0a[Delete :: 00:00:073 ms]%0a[DELETE :: 00:00:073 ms]%0a',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:45 GMT',
  connection: 'close',
  'content-length': '17' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fmovefile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: //adlsclifolder01/movefile.txt [65f8fbb0-bbe5-4af5-9d1d-b209b7cee151]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '65f8fbb0-bbe5-4af5-9d1d-b209b7cee151',
  'server-perf': '[65f8fbb0-bbe5-4af5-9d1d-b209b7cee151][ AuthTime::617.5907289538::PostAuthTime::130.446795243012 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:037 ms]%0a[GetFileStatus :: 00:00:038 ms]%0a[GETFILESTATUS :: 00:00:038 ms]%0a',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:46 GMT',
  connection: 'close',
  'content-length': '215' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fmovefile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: //adlsclifolder01/movefile.txt [65f8fbb0-bbe5-4af5-9d1d-b209b7cee151]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '65f8fbb0-bbe5-4af5-9d1d-b209b7cee151',
  'server-perf': '[65f8fbb0-bbe5-4af5-9d1d-b209b7cee151][ AuthTime::617.5907289538::PostAuthTime::130.446795243012 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:037 ms]%0a[GetFileStatus :: 00:00:038 ms]%0a[GETFILESTATUS :: 00:00:038 ms]%0a',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:46 GMT',
  connection: 'close',
  'content-length': '215' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7064.azuredatalakestore.net:443')
  .delete('/webhdfs/v1/adlsclifolder02?recursive=true&op=DELETE&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '999be9f2-c36d-49b3-ae98-c474aaea1ad2',
  'set-cookie': [ 'UserPrincipalSession=fd37b3c4-826a-4bc1-948f-710afcbe743e; path=/; secure; HttpOnly' ],
  'server-perf': '[999be9f2-c36d-49b3-ae98-c474aaea1ad2][ AuthTime::1395.56924940358::PostAuthTime::31709.3178519097 ][FsDelete :: 00:00:457 ms]%0a[CleanCacheDelete :: 00:00:000 ms]%0a[Delete : Recursive :: 00:00:458 ms]%0a[DELETE :: 00:00:458 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:47 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7064.azuredatalakestore.net:443')
  .delete('/webhdfs/v1/adlsclifolder02?recursive=true&op=DELETE&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '999be9f2-c36d-49b3-ae98-c474aaea1ad2',
  'set-cookie': [ 'UserPrincipalSession=fd37b3c4-826a-4bc1-948f-710afcbe743e; path=/; secure; HttpOnly' ],
  'server-perf': '[999be9f2-c36d-49b3-ae98-c474aaea1ad2][ AuthTime::1395.56924940358::PostAuthTime::31709.3178519097 ][FsDelete :: 00:00:457 ms]%0a[CleanCacheDelete :: 00:00:000 ms]%0a[Delete : Recursive :: 00:00:458 ms]%0a[DELETE :: 00:00:458 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:47 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder02?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: //adlsclifolder02 [7f6572a0-fe54-400d-812f-3576e2bf4a6a]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7f6572a0-fe54-400d-812f-3576e2bf4a6a',
  'server-perf': '[7f6572a0-fe54-400d-812f-3576e2bf4a6a][ AuthTime::634.699591208983::PostAuthTime::139.428616397661 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:034 ms]%0a[GetFileStatus :: 00:00:035 ms]%0a[GETFILESTATUS :: 00:00:035 ms]%0a',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:48 GMT',
  connection: 'close',
  'content-length': '202' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder02?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: //adlsclifolder02 [7f6572a0-fe54-400d-812f-3576e2bf4a6a]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7f6572a0-fe54-400d-812f-3576e2bf4a6a',
  'server-perf': '[7f6572a0-fe54-400d-812f-3576e2bf4a6a][ AuthTime::634.699591208983::PostAuthTime::139.428616397661 ][GetFileStatus :: 00:00:000 ms]%0a[HdfsGetFileStatusV2 :: 00:00:034 ms]%0a[GetFileStatus :: 00:00:035 ms]%0a[GETFILESTATUS :: 00:00:035 ms]%0a',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:48 GMT',
  connection: 'close',
  'content-length': '202' });
 return result; }]];
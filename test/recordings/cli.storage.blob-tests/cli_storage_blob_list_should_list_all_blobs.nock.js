// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
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
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .get('/storage-cli-blob-test?restype=container&comp=list&include=snapshots%2Cmetadata%2Ccopy')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://xplat.blob.core.windows.net/\" ContainerName=\"storage-cli-blob-test\"><Blobs><Blob><Name>appendblobname946</Name><Properties><Last-Modified>Wed, 20 Jul 2016 09:58:28 GMT</Last-Modified><Etag>0x8D3B084660C381C</Etag><Content-Length>10</Content-Length><Content-Type>text/plain</Content-Type><Content-Encoding /><Content-Language /><Content-MD5>aOEJ8PQMpyoV4FzCJ4b45g==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>AppendBlob</BlobType><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Blob><Blob><Name>blockblobname1733</Name><Properties><Last-Modified>Wed, 20 Jul 2016 09:58:19 GMT</Last-Modified><Etag>0x8D3B084607FFE53</Etag><Content-Length>10</Content-Length><Content-Type>text/plain</Content-Type><Content-Encoding /><Content-Language /><Content-MD5>aOEJ8PQMpyoV4FzCJ4b45g==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>BlockBlob</BlobType><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Blob><Blob><Name>blockblobname17332883</Name><Properties><Last-Modified>Wed, 20 Jul 2016 09:58:32 GMT</Last-Modified><Etag>0x8D3B08468AFC4E2</Etag><Content-Length>17</Content-Length><Content-Type>text/plain</Content-Type><Content-Encoding /><Content-Language /><Content-MD5>rG1yD4pD69MsOEPPGr72YA==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>BlockBlob</BlobType><LeaseStatus>locked</LeaseStatus><LeaseState>leased</LeaseState><LeaseDuration>infinite</LeaseDuration></Properties><Metadata /></Blob><Blob><Name>pageblobname7744</Name><Properties><Last-Modified>Wed, 20 Jul 2016 09:58:22 GMT</Last-Modified><Etag>0x8D3B084625B2EAD</Etag><Content-Length>512</Content-Length><Content-Type>text/plain</Content-Type><Content-Encoding /><Content-Language /><Content-MD5>OToPoPNI+wOHGrk3JgV93A==</Content-MD5><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Blob><Blob><Name>pageblobname77449713</Name><Properties><Last-Modified>Wed, 20 Jul 2016 09:58:25 GMT</Last-Modified><Etag>0x8D3B08464321928</Etag><Content-Length>512</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-MD5>OToPoPNI+wOHGrk3JgV93A==</Content-MD5><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Blob></Blobs><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a87560ae-0001-0033-3a6d-e2cf2a000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 09:58:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .get('/storage-cli-blob-test?restype=container&comp=list&include=snapshots%2Cmetadata%2Ccopy')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://xplat.blob.core.windows.net/\" ContainerName=\"storage-cli-blob-test\"><Blobs><Blob><Name>appendblobname946</Name><Properties><Last-Modified>Wed, 20 Jul 2016 09:58:28 GMT</Last-Modified><Etag>0x8D3B084660C381C</Etag><Content-Length>10</Content-Length><Content-Type>text/plain</Content-Type><Content-Encoding /><Content-Language /><Content-MD5>aOEJ8PQMpyoV4FzCJ4b45g==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>AppendBlob</BlobType><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Blob><Blob><Name>blockblobname1733</Name><Properties><Last-Modified>Wed, 20 Jul 2016 09:58:19 GMT</Last-Modified><Etag>0x8D3B084607FFE53</Etag><Content-Length>10</Content-Length><Content-Type>text/plain</Content-Type><Content-Encoding /><Content-Language /><Content-MD5>aOEJ8PQMpyoV4FzCJ4b45g==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>BlockBlob</BlobType><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Blob><Blob><Name>blockblobname17332883</Name><Properties><Last-Modified>Wed, 20 Jul 2016 09:58:32 GMT</Last-Modified><Etag>0x8D3B08468AFC4E2</Etag><Content-Length>17</Content-Length><Content-Type>text/plain</Content-Type><Content-Encoding /><Content-Language /><Content-MD5>rG1yD4pD69MsOEPPGr72YA==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>BlockBlob</BlobType><LeaseStatus>locked</LeaseStatus><LeaseState>leased</LeaseState><LeaseDuration>infinite</LeaseDuration></Properties><Metadata /></Blob><Blob><Name>pageblobname7744</Name><Properties><Last-Modified>Wed, 20 Jul 2016 09:58:22 GMT</Last-Modified><Etag>0x8D3B084625B2EAD</Etag><Content-Length>512</Content-Length><Content-Type>text/plain</Content-Type><Content-Encoding /><Content-Language /><Content-MD5>OToPoPNI+wOHGrk3JgV93A==</Content-MD5><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Blob><Blob><Name>pageblobname77449713</Name><Properties><Last-Modified>Wed, 20 Jul 2016 09:58:25 GMT</Last-Modified><Etag>0x8D3B08464321928</Etag><Content-Length>512</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-MD5>OToPoPNI+wOHGrk3JgV93A==</Content-MD5><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Blob></Blobs><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a87560ae-0001-0033-3a6d-e2cf2a000000',
  'x-ms-version': '2015-04-05',
  date: 'Wed, 20 Jul 2016 09:58:33 GMT',
  connection: 'close' });
 return result; }]];
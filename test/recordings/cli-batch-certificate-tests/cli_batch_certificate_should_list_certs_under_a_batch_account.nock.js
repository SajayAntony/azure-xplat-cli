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
  .get('/certificates?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#certificates\",\"value\":[\r\n    {\r\n      \"thumbprint\":\"371c3712d15913350b46c739fdfd7d7961fc77df\",\"thumbprintAlgorithm\":\"sha1\",\"url\":\"https://test1.westus.batch.azure.com/certificates(thumbprintAlgorithm=sha1,thumbprint=371c3712d15913350b46c739fdfd7d7961fc77df)\",\"state\":\"active\",\"stateTransitionTime\":\"2016-04-22T04:11:20.9404373Z\",\"publicData\":\"MIIDXzCCAsigAwIBAgIQLBxBeFZryZ1ExiKnmwW3czANBgkqhkiG9w0BAQsFADBnMSswKQYDVQQLDCJDcmVhdGVkIGJ5IGh0dHA6Ly93d3cuZmlkZGxlcjIuY29tMRUwEwYDVQQKDAxET19OT1RfVFJVU1QxITAfBgNVBAMMGERPX05PVF9UUlVTVF9GaWRkbGVyUm9vdDAeFw0xNDExMjIxMzU3MzRaFw0yMDExMjExMzU3MzRaMGQxKzApBgNVBAsMIkNyZWF0ZWQgYnkgaHR0cDovL3d3dy5maWRkbGVyMi5jb20xFTATBgNVBAoMDERPX05PVF9UUlVTVDEeMBwGA1UEAwwVKi5hZHNhZmVwcm90ZWN0ZWQuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwi6cJpM2t/Q4nTYDU75CZfA0xY/f6YriavZ7xh2qrpmPZQi8Lt8ovYhwMwtWP8cl37Knmfg2P4hSSmtAij+VNnJ5WOtaR+fe94ODpYS1ErNzEOIjIUIH30ObQHXpL+Y+oeoQGjsVtFHJgr3kvlCSPRLloKbhoCwjuVDTnmnytJd2UW7uoNjalq3H22sut9FmRmEq0vEgtDA10XueYi42SITefyeqtsgWy8m+qZsgPMl7VWuEenR6oyDCrwTbwrsK5yIMdtUihJQoHS0h5DctbVhRNcRk9simslpEmDcqyS0Wh8kv4gCK7nBmx5evZQM/HjP+FmSYtpBcqPZu7fjLZwIDAQABo4GKMIGHMA4GA1UdDwEB/wQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAgBgNVHREEGTAXghUqLmFkc2FmZXByb3RlY3RlZC5jb20wHwYDVR0jBBgwFoAUhHjax2+VcdGcTO/e7FI9U+wcfhUwHQYDVR0OBBYEFM+PTGJEiRaJoZK5fuvgVtADSn9gMA0GCSqGSIb3DQEBCwUAA4GBAIOfE1AnTVewzKgCzholS30g8V46htMHV/wfq8M6F/ejiTsrxi6YjifpH6NCOzQbXF3D6U7FML8jlOAskeNsX/zQYLiBNm1ykDcf+e61ns4D8aNe7zpNXRCeCObaI9kCr78JdU6liyr1ok6dHNZHc08DAQtw15Kqt/42IF4fPAqA\"\r\n    },{\r\n      \"thumbprint\":\"59833fd835f827e9ec693a4c82435a6360cc6271\",\"thumbprintAlgorithm\":\"sha1\",\"url\":\"https://test1.westus.batch.azure.com/certificates(thumbprintAlgorithm=sha1,thumbprint=59833fd835f827e9ec693a4c82435a6360cc6271)\",\"state\":\"active\",\"stateTransitionTime\":\"2016-04-22T05:32:36.3495395Z\",\"publicData\":\"MIIDSTCCArKgAwIBAgIQaleE9RaQtoVKrBwEt2q6RzANBgkqhkiG9w0BAQsFADBnMSswKQYDVQQLDCJDcmVhdGVkIGJ5IGh0dHA6Ly93d3cuZmlkZGxlcjIuY29tMRUwEwYDVQQKDAxET19OT1RfVFJVU1QxITAfBgNVBAMMGERPX05PVF9UUlVTVF9GaWRkbGVyUm9vdDAeFw0xNTAxMTAxNDAwNDVaFw0yMTAxMDkxNDAwNDVaMFoxKzApBgNVBAsMIkNyZWF0ZWQgYnkgaHR0cDovL3d3dy5maWRkbGVyMi5jb20xFTATBgNVBAoMDERPX05PVF9UUlVTVDEUMBIGA1UEAwwLKi5hYm91dC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDZEWc01Lku+PtDJXq9UMFRTpC9ITo/swlKcEODdOT/M+L7zv6OH8dEa9FOVquKoMjFCe6mv4s8c5/vVpaXseMDrWbU1v4OrZ6u3BtLVpcNg8SOUl5+s3gvWM7KTSjtEc4RQTKd5eZEj1vDKLbdyvbog9yCSoTrIfSpbN6S0G3utVBPD68evt8CQgQHPjy8DzElqemiPXVhKF5iJdaKn8JXSvjrcCiWG8A8y/+mFJHIW1jsbMevHSVat7ZPjyroR5PtImqtpXcgsZMiVuRVT0B/x7t3D3VlHp6Jb99d0rmci6DemF+ZyVtAgg+TBtqZEq24RS/nS+2/uVxTHDU3giApAgMBAAGjfzB9MA4GA1UdDwEB/wQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAWBgNVHREEDzANggsqLmFib3V0LmNvbTAfBgNVHSMEGDAWgBSEeNrHb5Vx0ZxM797sUj1T7Bx+FTAdBgNVHQ4EFgQUp7MhHnwP4+9nNjGy9cx4PlHH3AQwDQYJKoZIhvcNAQELBQADgYEAEMFcH3KmCNT8r5oRtKL+JiBN/HIRIjzYT1ILlSnn57rDSlx6yQgMxTjLqcpCvt5vR62QhwcdSSkOBTnpbO5qACrC70CBKJ4cPu9pb0Ncs3IO+l1aIGWpxbwESqiKoraAVNkSaJvU8R6sx20n74JHgxZCVZeC8Rg9UHFhfSeAAOo=\"\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '038d2250-535c-4bda-9b6f-e1bb6f40a335',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '1fa33fdc-45db-4800-911b-2877ea3f7423',
  dataserviceversion: '3.0',
  date: 'Fri, 22 Apr 2016 05:32:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/certificates?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#certificates\",\"value\":[\r\n    {\r\n      \"thumbprint\":\"371c3712d15913350b46c739fdfd7d7961fc77df\",\"thumbprintAlgorithm\":\"sha1\",\"url\":\"https://test1.westus.batch.azure.com/certificates(thumbprintAlgorithm=sha1,thumbprint=371c3712d15913350b46c739fdfd7d7961fc77df)\",\"state\":\"active\",\"stateTransitionTime\":\"2016-04-22T04:11:20.9404373Z\",\"publicData\":\"MIIDXzCCAsigAwIBAgIQLBxBeFZryZ1ExiKnmwW3czANBgkqhkiG9w0BAQsFADBnMSswKQYDVQQLDCJDcmVhdGVkIGJ5IGh0dHA6Ly93d3cuZmlkZGxlcjIuY29tMRUwEwYDVQQKDAxET19OT1RfVFJVU1QxITAfBgNVBAMMGERPX05PVF9UUlVTVF9GaWRkbGVyUm9vdDAeFw0xNDExMjIxMzU3MzRaFw0yMDExMjExMzU3MzRaMGQxKzApBgNVBAsMIkNyZWF0ZWQgYnkgaHR0cDovL3d3dy5maWRkbGVyMi5jb20xFTATBgNVBAoMDERPX05PVF9UUlVTVDEeMBwGA1UEAwwVKi5hZHNhZmVwcm90ZWN0ZWQuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwi6cJpM2t/Q4nTYDU75CZfA0xY/f6YriavZ7xh2qrpmPZQi8Lt8ovYhwMwtWP8cl37Knmfg2P4hSSmtAij+VNnJ5WOtaR+fe94ODpYS1ErNzEOIjIUIH30ObQHXpL+Y+oeoQGjsVtFHJgr3kvlCSPRLloKbhoCwjuVDTnmnytJd2UW7uoNjalq3H22sut9FmRmEq0vEgtDA10XueYi42SITefyeqtsgWy8m+qZsgPMl7VWuEenR6oyDCrwTbwrsK5yIMdtUihJQoHS0h5DctbVhRNcRk9simslpEmDcqyS0Wh8kv4gCK7nBmx5evZQM/HjP+FmSYtpBcqPZu7fjLZwIDAQABo4GKMIGHMA4GA1UdDwEB/wQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAgBgNVHREEGTAXghUqLmFkc2FmZXByb3RlY3RlZC5jb20wHwYDVR0jBBgwFoAUhHjax2+VcdGcTO/e7FI9U+wcfhUwHQYDVR0OBBYEFM+PTGJEiRaJoZK5fuvgVtADSn9gMA0GCSqGSIb3DQEBCwUAA4GBAIOfE1AnTVewzKgCzholS30g8V46htMHV/wfq8M6F/ejiTsrxi6YjifpH6NCOzQbXF3D6U7FML8jlOAskeNsX/zQYLiBNm1ykDcf+e61ns4D8aNe7zpNXRCeCObaI9kCr78JdU6liyr1ok6dHNZHc08DAQtw15Kqt/42IF4fPAqA\"\r\n    },{\r\n      \"thumbprint\":\"59833fd835f827e9ec693a4c82435a6360cc6271\",\"thumbprintAlgorithm\":\"sha1\",\"url\":\"https://test1.westus.batch.azure.com/certificates(thumbprintAlgorithm=sha1,thumbprint=59833fd835f827e9ec693a4c82435a6360cc6271)\",\"state\":\"active\",\"stateTransitionTime\":\"2016-04-22T05:32:36.3495395Z\",\"publicData\":\"MIIDSTCCArKgAwIBAgIQaleE9RaQtoVKrBwEt2q6RzANBgkqhkiG9w0BAQsFADBnMSswKQYDVQQLDCJDcmVhdGVkIGJ5IGh0dHA6Ly93d3cuZmlkZGxlcjIuY29tMRUwEwYDVQQKDAxET19OT1RfVFJVU1QxITAfBgNVBAMMGERPX05PVF9UUlVTVF9GaWRkbGVyUm9vdDAeFw0xNTAxMTAxNDAwNDVaFw0yMTAxMDkxNDAwNDVaMFoxKzApBgNVBAsMIkNyZWF0ZWQgYnkgaHR0cDovL3d3dy5maWRkbGVyMi5jb20xFTATBgNVBAoMDERPX05PVF9UUlVTVDEUMBIGA1UEAwwLKi5hYm91dC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDZEWc01Lku+PtDJXq9UMFRTpC9ITo/swlKcEODdOT/M+L7zv6OH8dEa9FOVquKoMjFCe6mv4s8c5/vVpaXseMDrWbU1v4OrZ6u3BtLVpcNg8SOUl5+s3gvWM7KTSjtEc4RQTKd5eZEj1vDKLbdyvbog9yCSoTrIfSpbN6S0G3utVBPD68evt8CQgQHPjy8DzElqemiPXVhKF5iJdaKn8JXSvjrcCiWG8A8y/+mFJHIW1jsbMevHSVat7ZPjyroR5PtImqtpXcgsZMiVuRVT0B/x7t3D3VlHp6Jb99d0rmci6DemF+ZyVtAgg+TBtqZEq24RS/nS+2/uVxTHDU3giApAgMBAAGjfzB9MA4GA1UdDwEB/wQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAWBgNVHREEDzANggsqLmFib3V0LmNvbTAfBgNVHSMEGDAWgBSEeNrHb5Vx0ZxM797sUj1T7Bx+FTAdBgNVHQ4EFgQUp7MhHnwP4+9nNjGy9cx4PlHH3AQwDQYJKoZIhvcNAQELBQADgYEAEMFcH3KmCNT8r5oRtKL+JiBN/HIRIjzYT1ILlSnn57rDSlx6yQgMxTjLqcpCvt5vR62QhwcdSSkOBTnpbO5qACrC70CBKJ4cPu9pb0Ncs3IO+l1aIGWpxbwESqiKoraAVNkSaJvU8R6sx20n74JHgxZCVZeC8Rg9UHFhfSeAAOo=\"\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '038d2250-535c-4bda-9b6f-e1bb6f40a335',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '1fa33fdc-45db-4800-911b-2877ea3f7423',
  dataserviceversion: '3.0',
  date: 'Fri, 22 Apr 2016 05:32:36 GMT',
  connection: 'close' });
 return result; }]];
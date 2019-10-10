should = require 'should'
status = require '..'
cloudflare = require '../src/cloudflare'
iis = require '../src/iis'
nginx = require '../src/nginx'
unofficial = require '../src/unofficial'

getDigit = (ntn, number) ->
  Math.floor number / Math.pow(10, ntn) % 10

describe 'HTTP Status Codes', ->

  it 'should return code number', ->
    status.CREATED.should.eql 201

  it 'should return code', ->
    status[201].should.eql 'Created'

  it 'should return code name', ->
    status['201_NAME'].should.eql 'CREATED'

  it 'should return code message', ->
    status['201_MESSAGE'].should.eql 'The request has been fulfilled, resulting in the creation of a new resource.'

  it 'should return code class', ->
    status['201_CLASS'].should.eql '2xx'

  it 'should return correct code class for all code numbers', ->
    isValidStatus = (statusKey, statusValue, objectToCheck) ->
      if typeof statusValue == 'object'
        isValidStatus k, v, statusValue for k, v of statusValue
      if typeof statusValue == 'number'
        firstDigit = getDigit 2, statusValue
        objectToCheck["#{statusValue}_CLASS"].should.eql "#{firstDigit}xx"
    isValidStatus k, v, status for k, v of status

describe 'HTTP Status Classes', ->

  it 'should return code range', ->
    status.classes.INFORMATIONAL.should.eql '1xx'

  it 'should return code', ->
    status.classes['1xx'].should.eql 'Informational'

  it 'should return code name', ->
    status.classes['1xx_NAME'].should.eql 'INFORMATIONAL'

  it 'should return code message', ->
    status.classes['1xx_MESSAGE'].should.eql 'Indicates an interim response for communicating connection status or request progress prior to completing the requested action and sending a final response.'

describe 'extra', ->

  it 'export classes', ->
    status.classes.should.be.an.Object()

  it 'export unofficial', ->
    status.extra.unofficial.should.be.an.Object()

  it 'merge with unofficial', ->
    unofficial.OK.should.eql 200
    unofficial.CHECKPOINT.should.eql 103

  it 'export iis', ->
    status.extra.iis.should.be.an.Object()

  it 'merge with iis', ->
    iis.OK.should.eql 200
    iis.LOGIN_TIME_OUT.should.eql 440

  it 'export nginx', ->
    status.extra.nginx.should.be.an.Object()

  it 'merge with nginx', ->
    nginx.OK.should.eql 200
    nginx.NO_RESPONSE.should.eql 444

  it 'export cloudflare', ->
    status.extra.cloudflare.should.be.an.Object()

  it 'merge with cloudflare', ->
    cloudflare.OK.should.eql 200
    cloudflare.UNKNOWN_ERROR.should.eql 520

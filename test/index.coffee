
should = require 'should'
status = require '..'
cloudflare = require '../src/cloudflare'
iis = require '../src/iis'
nginx = require '../src/nginx'
unofficial = require '../src/unofficial'

describe 'HTTP Status', ->

  it 'should return code and message', ->
    status.OK.should.eql 200
    status[200].should.eql 'OK'

describe 'extra', ->

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


should = require 'should'
status = require '..'

describe 'HTTP Status', ->

  it 'should return code and message', ->
    status.OK.should.eql 200
    status[200].should.eql 'OK'

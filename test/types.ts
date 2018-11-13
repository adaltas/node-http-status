
import 'should'
import * as status from '../lib/index'

import {HttpStatus, HttpStatusUnofficial, HttpStatusIis, HttpStatusNginx, HttpStatusCloudfare} from '../lib/index'

describe('Types', () => {

  describe('CommonJS', () => {

    it('first level properties', () => {
      const number: number = status.CONTINUE
      const code: string = status[number]
      code.should.eql('CONTINUE')
      const name: string = status[number + '_NAME']
      name.should.eql('CONTINUE')
      const message: string = status[number + '_MESSAGE']
      message.should.eql('CONTINUE')
    })

    it('sub level properties', () => {
      const number: number = status.extra.nginx.NO_RESPONSE
      const code: string = status[number]
      code.should.eql('No Response')
      const name: string = status[number + '_NAME']
      name.should.eql('NO_RESPONSE')
      const message: string = status[number + '_MESSAGE']
      message.should.eql('Used internally to instruct the server to return no information to the client and close the connection immediately.')
    })

  })

  describe('ES6 exports', () => {

    it('HttpStatus', () => {
      const unofficial: HttpStatus = status
      unofficial.CONTINUE.should.be.a.Number()
    })

    it('HttpStatusUnofficial', () => {
      const unofficial: HttpStatusUnofficial = status.extra.unofficial
      unofficial.CHECKPOINT.should.be.a.Number()
    })

    it('HttpStatusIis', () => {
      const iis: HttpStatusIis = status.extra.iis
      iis.LOGIN_TIME_OUT.should.be.a.Number()
    })

    it('HttpStatusNginx', () => {
      const nginx: HttpStatusNginx = status.extra.nginx
      nginx.NO_RESPONSE.should.be.a.Number()
    })

    it('HttpStatusCloudfare', () => {
      const cloudflare: HttpStatusCloudfare = status.extra.cloudflare
      cloudflare.UNKNOWN_ERROR.should.be.a.Number()
    })

  })

})

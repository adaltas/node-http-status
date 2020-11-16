
import 'should'
import * as status from '../lib/index'

import {
  HttpStatus,
  HttpStatusClasses,
  HttpStatusUnofficial,
  HttpStatusIis,
  HttpStatusNginx,
  HttpStatusCloudfare
} from '../lib/index'

describe('Types', () => {

  describe('CommonJS', () => {

    it('first level properties', () => {
      const number = status.CONTINUE
      const code: string = status[number] as string
      code.should.eql('Continue')
      const name: string = status[`${number}_NAME`] as string
      name.should.eql('CONTINUE')
      const message: string = status[`${number}_MESSAGE`] as string
      message.should.eql('The server has received the request headers and the client should proceed to send the request body.')
      const clazz: string = status[`${number}_CLASS`] as string
      clazz.should.eql('1xx')
    })
  
    it('sub level properties', () => {
      const number: number = status.extra.nginx.NO_RESPONSE
      const code: string = status.extra.nginx[number] as string
      code.should.eql('No Response')
      const name: string = status.extra.nginx[`${number}_NAME`] as string
      name.should.eql('NO_RESPONSE')
      const message: string = status.extra.nginx[`${number}_MESSAGE`] as string
      message.should.eql('Used internally to instruct the server to return no information to the client and close the connection immediately.')
      const clazz: string = status.extra.nginx[`${number}_CLASS`] as string
      clazz.should.eql('4xx')
    })
  
  })
  
  describe('ES6 exports', () => {
  
    it('HttpStatus', () => {
      const statuses: HttpStatus = status
      statuses.CONTINUE.should.be.a.Number()
    })
  
    it('HttpStatusClasses', () => {
      const classes: HttpStatusClasses = status.classes
      classes.INFORMATIONAL.should.be.a.String()
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

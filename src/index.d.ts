export = httpStatus;

declare const httpStatus: httpStatus.HttpStatus;

declare namespace httpStatus {
  interface HttpStatus {
    readonly [key: string]:
      | string
      | number
      | HttpStatusClasses
      | HttpStatusExtra;

    readonly 100: number;
    readonly '100_NAME': string;
    readonly '100_MESSAGE': string;
    readonly '100_CLASS': string;
    readonly CONTINUE: number;

    readonly 101: number;
    readonly '101_NAME': string;
    readonly '101_MESSAGE': string;
    readonly '101_CLASS': string;
    readonly SWITCHING_PROTOCOLS: number;

    readonly 200: number;
    readonly '200_NAME': string;
    readonly '200_MESSAGE': string;
    readonly '200_CLASS': string;
    readonly OK: number;

    readonly 201: number;
    readonly '201_NAME': string;
    readonly '201_MESSAGE': string;
    readonly '201_CLASS': string;
    readonly CREATED: number;

    readonly 202: number;
    readonly '202_NAME': string;
    readonly '202_MESSAGE': string;
    readonly '202_CLASS': string;
    readonly ACCEPTED: number;

    readonly 203: number;
    readonly '203_NAME': string;
    readonly '203_MESSAGE': string;
    readonly '203_CLASS': string;
    readonly NON_AUTHORITATIVE_INFORMATION: number;

    readonly 204: number;
    readonly '204_NAME': string;
    readonly '204_MESSAGE': string;
    readonly '204_CLASS': string;
    readonly NO_CONTENT: number;

    readonly 205: number;
    readonly '205_NAME': string;
    readonly '205_MESSAGE': string;
    readonly '205_CLASS': string;
    readonly RESET_CONTENT: number;

    readonly 206: number;
    readonly '206_NAME': string;
    readonly '206_MESSAGE': string;
    readonly '206_CLASS': string;
    readonly PARTIAL_CONTENT: number;

    readonly 207: number;
    readonly '207_NAME': string;
    readonly '207_MESSAGE': string;
    readonly '207_CLASS': string;
    readonly MULTI_STATUS: number;

    readonly 208: number;
    readonly '208_NAME': string;
    readonly '208_MESSAGE': string;
    readonly '208_CLASS': string;
    readonly ALREADY_REPORTED: number;

    readonly 226: number;
    readonly '226_NAME': string;
    readonly '226_MESSAGE': string;
    readonly '226_CLASS': string;
    readonly IM_USED: number;

    readonly 300: number;
    readonly '300_NAME': string;
    readonly '300_MESSAGE': string;
    readonly '300_CLASS': string;
    readonly MULTIPLE_CHOICES: number;

    readonly 301: number;
    readonly '301_NAME': string;
    readonly '301_MESSAGE': string;
    readonly '301_CLASS': string;
    readonly MOVED_PERMANENTLY: number;

    readonly 302: number;
    readonly '302_NAME': string;
    readonly '302_MESSAGE': string;
    readonly '302_CLASS': string;
    readonly FOUND: number;

    readonly 303: number;
    readonly '303_NAME': string;
    readonly '303_MESSAGE': string;
    readonly '303_CLASS': string;
    readonly SEE_OTHER: number;

    readonly 304: number;
    readonly '304_NAME': string;
    readonly '304_MESSAGE': string;
    readonly '304_CLASS': string;
    readonly NOT_MODIFIED: number;

    readonly 305: number;
    readonly '305_NAME': string;
    readonly '305_MESSAGE': string;
    readonly '305_CLASS': string;
    readonly USE_PROXY: number;

    readonly 306: number;
    readonly '306_NAME': string;
    readonly '306_MESSAGE': string;
    readonly '306_CLASS': string;
    readonly SWITCH_PROXY: number;

    readonly 307: number;
    readonly '307_NAME': string;
    readonly '307_MESSAGE': string;
    readonly '307_CLASS': string;
    readonly TEMPORARY_REDIRECT: number;

    readonly 308: number;
    readonly '308_NAME': string;
    readonly '308_MESSAGE': string;
    readonly '308_CLASS': string;
    readonly PERMANENT_REDIRECT: number;

    readonly 400: number;
    readonly '400_NAME': string;
    readonly '400_MESSAGE': string;
    readonly '400_CLASS': string;
    readonly BAD_REQUEST: number;

    readonly 401: number;
    readonly '401_NAME': string;
    readonly '401_MESSAGE': string;
    readonly '401_CLASS': string;
    readonly UNAUTHORIZED: number;

    readonly 402: number;
    readonly '402_NAME': string;
    readonly '402_MESSAGE': string;
    readonly '402_CLASS': string;
    readonly PAYMENT_REQUIRED: number;

    readonly 403: number;
    readonly '403_NAME': string;
    readonly '403_MESSAGE': string;
    readonly '403_CLASS': string;
    readonly FORBIDDEN: number;

    readonly 404: number;
    readonly '404_NAME': string;
    readonly '404_MESSAGE': string;
    readonly '404_CLASS': string;
    readonly NOT_FOUND: number;

    readonly 405: number;
    readonly '405_NAME': string;
    readonly '405_MESSAGE': string;
    readonly '405_CLASS': string;
    readonly METHOD_NOT_ALLOWED: number;

    readonly 406: number;
    readonly '406_NAME': string;
    readonly '406_MESSAGE': string;
    readonly '406_CLASS': string;
    readonly NOT_ACCEPTABLE: number;

    readonly 407: number;
    readonly '407_NAME': string;
    readonly '407_MESSAGE': string;
    readonly '407_CLASS': string;
    readonly PROXY_AUTHENTICATION_REQUIRED: number;

    readonly 408: number;
    readonly '408_NAME': string;
    readonly '408_MESSAGE': string;
    readonly '408_CLASS': string;
    readonly REQUEST_TIMEOUT: number;

    readonly 409: number;
    readonly '409_NAME': string;
    readonly '409_MESSAGE': string;
    readonly '409_CLASS': string;
    readonly CONFLICT: number;

    readonly 410: number;
    readonly '410_NAME': string;
    readonly '410_MESSAGE': string;
    readonly '410_CLASS': string;
    readonly GONE: number;

    readonly 411: number;
    readonly '411_NAME': string;
    readonly '411_MESSAGE': string;
    readonly '411_CLASS': string;
    readonly LENGTH_REQUIRED: number;

    readonly 412: number;
    readonly '412_NAME': string;
    readonly '412_MESSAGE': string;
    readonly '412_CLASS': string;
    readonly PRECONDITION_FAILED: number;

    readonly 413: number;
    readonly '413_NAME': string;
    readonly '413_MESSAGE': string;
    readonly '413_CLASS': string;
    readonly REQUEST_ENTITY_TOO_LARGE: number;

    readonly 414: number;
    readonly '414_NAME': string;
    readonly '414_MESSAGE': string;
    readonly '414_CLASS': string;
    readonly REQUEST_URI_TOO_LONG: number;

    readonly 415: number;
    readonly '415_NAME': string;
    readonly '415_MESSAGE': string;
    readonly '415_CLASS': string;
    readonly UNSUPPORTED_MEDIA_TYPE: number;

    readonly 416: number;
    readonly '416_NAME': string;
    readonly '416_MESSAGE': string;
    readonly '416_CLASS': string;
    readonly REQUESTED_RANGE_NOT_SATISFIABLE: number;

    readonly 417: number;
    readonly '417_NAME': string;
    readonly '417_MESSAGE': string;
    readonly '417_CLASS': string;
    readonly EXPECTATION_FAILED: number;

    readonly 418: number;
    readonly '418_NAME': string;
    readonly '418_MESSAGE': string;
    readonly '418_CLASS': string;
    readonly IM_A_TEAPOT: number;

    readonly 421: number;
    readonly '421_NAME': string;
    readonly '421_MESSAGE': string;
    readonly '421_CLASS': string;
    readonly MISDIRECTED_REQUEST: number;

    readonly 422: number;
    readonly '422_NAME': string;
    readonly '422_MESSAGE': string;
    readonly '422_CLASS': string;
    readonly UNPROCESSABLE_ENTITY: number;

    readonly 423: number;
    readonly '423_NAME': string;
    readonly '423_MESSAGE': string;
    readonly '423_CLASS': string;
    readonly LOCKED: number;

    readonly 424: number;
    readonly '424_NAME': string;
    readonly '424_MESSAGE': string;
    readonly '424_CLASS': string;
    readonly FAILED_DEPENDENCY: number;

    readonly 426: number;
    readonly '426_NAME': string;
    readonly '426_MESSAGE': string;
    readonly '426_CLASS': string;
    readonly UPGRADE_REQUIRED: number;

    readonly 428: number;
    readonly '428_NAME': string;
    readonly '428_MESSAGE': string;
    readonly '428_CLASS': string;
    readonly PRECONDITION_REQUIRED: number;

    readonly 429: number;
    readonly '429_NAME': string;
    readonly '429_MESSAGE': string;
    readonly '429_CLASS': string;
    readonly TOO_MANY_REQUESTS: number;

    readonly 431: number;
    readonly '431_NAME': string;
    readonly '431_MESSAGE': string;
    readonly '431_CLASS': string;
    readonly REQUEST_HEADER_FIELDS_TOO_LARGE: number;

    readonly 451: number;
    readonly '451_NAME': string;
    readonly '451_MESSAGE': string;
    readonly '451_CLASS': string;
    readonly UNAVAILABLE_FOR_LEGAL_REASONS: number;

    readonly 500: number;
    readonly '500_NAME': string;
    readonly '500_MESSAGE': string;
    readonly '500_CLASS': string;
    readonly INTERNAL_SERVER_ERROR: number;

    readonly 501: number;
    readonly '501_NAME': string;
    readonly '501_MESSAGE': string;
    readonly '501_CLASS': string;
    readonly NOT_IMPLEMENTED: number;

    readonly 502: number;
    readonly '502_NAME': string;
    readonly '502_MESSAGE': string;
    readonly '502_CLASS': string;
    readonly BAD_GATEWAY: number;

    readonly 503: number;
    readonly '503_NAME': string;
    readonly '503_MESSAGE': string;
    readonly '503_CLASS': string;
    readonly SERVICE_UNAVAILABLE: number;

    readonly 504: number;
    readonly '504_NAME': string;
    readonly '504_MESSAGE': string;
    readonly '504_CLASS': string;
    readonly GATEWAY_TIMEOUT: number;

    readonly 505: number;
    readonly '505_NAME': string;
    readonly '505_MESSAGE': string;
    readonly '505_CLASS': string;
    readonly HTTP_VERSION_NOT_SUPPORTED: number;

    readonly 506: number;
    readonly '506_NAME': string;
    readonly '506_MESSAGE': string;
    readonly '506_CLASS': string;
    readonly VARIANT_ALSO_NEGOTIATES: number;

    readonly 507: number;
    readonly '507_NAME': string;
    readonly '507_MESSAGE': string;
    readonly '507_CLASS': string;
    readonly INSUFFICIENT_STORAGE: number;

    readonly 508: number;
    readonly '508_NAME': string;
    readonly '508_MESSAGE': string;
    readonly '508_CLASS': string;
    readonly LOOP_DETECTED: number;

    readonly 510: number;
    readonly '510_NAME': string;
    readonly '510_MESSAGE': string;
    readonly '510_CLASS': string;
    readonly NOT_EXTENDED: number;

    readonly 511: number;
    readonly '511_NAME': string;
    readonly '511_MESSAGE': string;
    readonly '511_CLASS': string;
    readonly NETWORK_AUTHENTICATION_REQUIRED: number;

    classes: HttpStatusClasses;

    extra: HttpStatusExtra;
  }

  interface HttpStatusExtra {
    readonly unofficial: HttpStatusUnofficial;

    readonly iis: HttpStatusIis;

    readonly nginx: HttpStatusNginx;

    readonly cloudflare: HttpStatusCloudfare;
  }

  interface HttpStatusClasses {
    readonly [key: string]: string | number;

    readonly '1xx': string;
    readonly '1xx_NAME': string;
    readonly '1xx_MESSAGE': string;
    readonly INFORMATIONAL: string;

    readonly '2xx': string;
    readonly '2xx_NAME': string;
    readonly '2xx_MESSAGE': string;
    readonly SUCCESSFUL: string;

    readonly '3xx': string;
    readonly '3xx_NAME': string;
    readonly '3xx_MESSAGE': string;
    readonly REDIRECTION: string;

    readonly '4xx': string;
    readonly '4xx_NAME': string;
    readonly '4xx_MESSAGE': string;
    readonly CLIENT_ERROR: string;

    readonly '5xx': string;
    readonly '5xx_NAME': string;
    readonly '5xx_MESSAGE': string;
    readonly SERVER_ERROR: string;
  }

  interface HttpStatusUnofficial {
    readonly [key: string]: string | number;

    readonly '103': string;
    readonly '103_NAME': string;
    readonly '103_MESSAGE': string;
    readonly '103_CLASS': string;
    readonly CHECKPOINT: number;

    readonly '420': string;
    readonly '420_NAME': string;
    readonly '420_MESSAGE': string;
    readonly '420_CLASS': string;
    readonly ENHANCE_YOUR_CALM: number;

    readonly '450': string;
    readonly '450_NAME': string;
    readonly '450_MESSAGE': string;
    readonly '450_CLASS': string;
    readonly BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS: number;

    readonly '498': string;
    readonly '498_NAME': string;
    readonly '498_MESSAGE': string;
    readonly '498_CLASS': string;
    readonly INVALID_TOKEN: number;

    readonly '499': string;
    readonly '499_NAME': string;
    readonly '499_MESSAGE': string;
    readonly '499_CLASS': string;
    readonly TOKEN_REQUIRED: number;

    readonly '509': string;
    readonly '509_NAME': string;
    readonly '509_MESSAGE': string;
    readonly '509_CLASS': string;
    readonly BANDWIDTH_LIMIT_EXCEEDED: number;

    readonly '530': string;
    readonly '530_NAME': string;
    readonly '530_MESSAGE': string;
    readonly '530_CLASS': string;
    readonly SITE_IS_FROZEN: number;

    readonly '598': string;
    readonly '598_NAME': string;
    readonly '598_MESSAGE': string;
    readonly '598_CLASS': string;
    readonly NETWORK_READ_TIMEOUT_ERROR: number;
  }

  interface HttpStatusIis {
    readonly [key: string]: string | number;

    readonly '440': string;
    readonly '440_NAME': string;
    readonly '440_MESSAGE': string;
    readonly '440_CLASS': string;
    readonly LOGIN_TIME_OUT: number;

    readonly '449': string;
    readonly '449_NAME': string;
    readonly '449_MESSAGE': string;
    readonly '449_CLASS': string;
    readonly RETRY_WITH: number;

    readonly '451': string;
    readonly '451_NAME': string;
    readonly '451_MESSAGE': string;
    readonly '451_CLASS': string;
    readonly REDIRECT: number;
  }

  interface HttpStatusNginx {
    readonly [key: string]: string | number;

    readonly '444': string;
    readonly '444_NAME': string;
    readonly '444_MESSAGE': string;
    readonly '444_CLASS': string;
    readonly NO_RESPONSE: number;

    readonly '494': string;
    readonly '494_NAME': string;
    readonly '494_MESSAGE': string;
    readonly '494_CLASS': string;
    readonly REQUEST_HEADER_TOO_LARGE: number;

    readonly '495': string;
    readonly '495_NAME': string;
    readonly '495_MESSAGE': string;
    readonly '495_CLASS': string;
    readonly SSL_CERTIFICATE_ERROR: number;

    readonly '496': string;
    readonly '496_NAME': string;
    readonly '496_MESSAGE': string;
    readonly '496_CLASS': string;
    readonly SSL_CERTIFICATE_REQUIRED: number;

    readonly '497': string;
    readonly '497_NAME': string;
    readonly '497_MESSAGE': string;
    readonly '497_CLASS': string;
    readonly HTTP_REQUEST_SENT_TO_HTTPS_PORT: number;

    readonly '499': string;
    readonly '499_NAME': string;
    readonly '499_MESSAGE': string;
    readonly '499_CLASS': string;
    readonly CLIENT_CLOSED_REQUEST: number;
  }

  interface HttpStatusCloudfare {
    readonly '520': string;
    readonly '520_NAME': string;
    readonly '520_MESSAGE': string;
    readonly '520_CLASS': string;
    readonly UNKNOWN_ERROR: number;

    readonly '521': string;
    readonly '521_NAME': string;
    readonly '521_MESSAGE': string;
    readonly '521_CLASS': string;
    readonly WEB_SERVER_IS_DOWN: number;

    readonly '522': string;
    readonly '522_NAME': string;
    readonly '522_MESSAGE': string;
    readonly '522_CLASS': string;
    readonly CONNECTION_TIMED_OUT: number;

    readonly '523': string;
    readonly '523_NAME': string;
    readonly '523_MESSAGE': string;
    readonly '523_CLASS': string;
    readonly ORIGIN_IS_UNREACHABLE: number;

    readonly '524': string;
    readonly '524_NAME': string;
    readonly '524_MESSAGE': string;
    readonly '524_CLASS': string;
    readonly A_TIMEOUT_OCCURRED: number;

    readonly '525': string;
    readonly '525_NAME': string;
    readonly '525_MESSAGE': string;
    readonly '525_CLASS': string;
    readonly SSL_HANDSHAKE_FAILED: number;

    readonly '526': string;
    readonly '526_NAME': string;
    readonly '526_MESSAGE': string;
    readonly '526_CLASS': string;
    readonly INVALID_SSL_CERTIFICATE: number;

    readonly '527': string;
    readonly '527_NAME': string;
    readonly '527_MESSAGE': string;
    readonly '527_CLASS': string;
    readonly RAILGUN_ERROR: number;
  }
}

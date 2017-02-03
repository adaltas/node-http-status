# node-http-status

**Reference:**  
http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html  
http://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html#sec6.1.1

    module.exports =

## Informational 1xx
Request received, continuing process

    100: 'Continue'
    101: 'Switching Protocols'

## Successful 2xx
The action was successfully received, understood, and accepted

    200: 'OK'
    201: 'Created'
    202: 'Accepted'
    203: 'Non-Authoritative Information'
    204: 'No Content'
    205: 'Reset Content'
    206: 'Partial Content'
    207: 'Multi Status' # WebDAV; RFC 4918
    208: 'Already Reported' # WebDAV; RFC 5842
    226: 'IM Used' # RFC 3229

## Redirection 3xx
Further action must be taken in order to complete the request

    300: 'Multiple Choices'
    301: 'Moved Permanently'
    302: 'Found'
    303: 'See Other'
    304: 'Not Modified'
    305: 'Use Proxy' # since HTTP/1.1
    306: 'Switch Proxy'
    307: 'Temporary Redirect' # since HTTP/1.1
    308: 'Permanent Redirect' # RFC 7538

## Client Error 4xx
The request contains bad syntax or cannot be fulfilled

    400: 'Bad Request'
    401: 'Unauthorized'
    402: 'Payment Required'
    403: 'Forbidden'
    404: 'Not Found'
    405: 'Method Not Allowed'
    406: 'Not Acceptable'
    407: 'Proxy Authentication Required'
    408: 'Request Time-out'
    409: 'Conflict'
    410: 'Gone'
    411: 'Length Required'
    412: 'Precondition Failed'
    413: 'Request Entity Too Large'
    414: 'Request-URI Too Large'
    415: 'Unsupported Media Type'
    416: 'Requested Range not Satisfiable'
    417: 'Expectation Failed'

Any attempt to brew coffee with a teapot should result in the error
code "418 I'm a teapot". The resulting entity body MAY be short and
stout.

    418: 'I\'m a teapot' # RFC 2324
    421: 'Misdirected Request'
    422: 'Unprocessable Entity'
    423: 'Locked'
    424: 'Failed Dependency'
    426: 'Upgrade Required'
    429: 'Too Many Requests'
    451: 'Unavailable For Legal Reasons'

## Server Error 5xx
The server failed to fulfill an apparently valid request

    500: 'Internal Server Error'
    501: 'Not Implemented'
    502: 'Bad Gateway'
    503: 'Service Unavailable'
    504: 'Gateway Time-out'
    505: 'HTTP Version not Supported'
    507: 'Insufficient Storage'

## Informational 1xx
Request received, continuing process

    CONTINUE: 100
    SWITCHING_PROTOCOLS: 101

## Successful 2xx
The action was successfully received, understood, and accepted

    OK: 200
    CREATED: 201
    ACCEPTED: 202
    NON_AUTHORITATIVE_INFORMATION: 203
    NO_CONTENT: 204
    RESET_CONTENT: 205
    PARTIAL_CONTENT: 206
    MULTI_STATUS: 207
    ALREADY_REPORTED: 208
    IM_USED: 226

## Redirection 3xx
Further action must be taken in order to complete the request

    MULTIPLE_CHOICES: 300
    MOVED_PERMANENTLY: 301
    FOUND: 302
    SEE_OTHER: 303
    NOT_MODIFIED: 304
    USE_PROXY: 305
    SWITCH_PROXY: 306
    TEMPORARY_REDIRECT: 307
    PERMANENT_REDIRECT: 308

## Client Error 4xx
The request contains bad syntax or cannot be fulfilled

    BAD_REQUEST: 400
    UNAUTHORIZED: 401
    PAYMENT_REQUIRED: 402
    FORBIDDEN: 403
    NOT_FOUND: 404
    METHOD_NOT_ALLOWED: 405
    NOT_ACCEPTABLE: 406
    PROXY_AUTHENTICATION_REQUIRED: 407
    REQUEST_TIMEOUT: 408
    CONFLICT: 409
    GONE: 410
    LENGTH_REQUIRED: 411
    PRECONDITION_FAILED: 412
    REQUEST_ENTITY_TOO_LARGE: 413
    REQUEST_URI_TOO_LONG: 414
    UNSUPPORTED_MEDIA_TYPE: 415
    REQUESTED_RANGE_NOT_SATISFIABLE: 416
    EXPECTATION_FAILED: 417
    IM_A_TEAPOT: 418
    MISDIRECTED_REQUEST: 421
    UNPROCESSABLE_ENTITY: 422
    UPGRADE_REQUIRED: 426
    LOCKED: 423
    FAILED_DEPENDENCY: 424
    TOO_MANY_REQUESTS: 429
    UNAVAILABLE_FOR_LEGAL_REASONS: 451

## Server Error 5xx
The server failed to fulfill an apparently valid request

    INTERNAL_SERVER_ERROR: 500
    NOT_IMPLEMENTED: 501
    BAD_GATEWAY: 502
    SERVICE_UNAVAILABLE: 503
    GATEWAY_TIMEOUT: 504
    HTTP_VERSION_NOT_SUPPORTED: 505
    INSUFFICIENT_STORAGE: 507

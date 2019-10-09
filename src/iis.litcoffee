# IIS extra status codes

Microsoft's Internet Information Services (IIS) web server expands the 4xx error class to signal errors with the client's request.

    status = require '.'

Import default status codes.

    for k, v of status
      continue if k is 'extra'
      module.exports[k] = v

Merge default status codes with IIS status codes.

    for k, v of status.extra.iis
      module.exports[k] = v

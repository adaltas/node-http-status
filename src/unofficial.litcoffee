# Unofficial extra status codes

This represent a list of codes which are not specified by any standard.

    status = require '.'

Import default status codes.

    for k, v of status
      continue if k is 'extra'
      module.exports[k] = v

Merge default status codes with unofficial status codes.

    for k, v of status.extra.unofficial
      module.exports[k] = v

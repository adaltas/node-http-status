
# Cloudfare extra status code

Cloudflare's reverse proxy service expands the 5xx series of errors space to signal issues with the origin server.

    status = require '.'

Import default status codes.

    for k, v of status
      continue if k is 'extra'
      module.exports[k] = v

Merge default status codes with Cloudflare status codes.

    for k, v of status.extra.cloudflare
      module.exports[k] = v

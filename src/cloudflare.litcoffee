# Cloudfare extra status codes

Cloudflare's reverse proxy service expands the 5xx error class to signal issues with the origin server.

    status = require '.'

Import default status codes.

    for k, v of status
      continue if k is 'extra'
      module.exports[k] = v

Merge default status codes with Cloudflare status codes.

    for k, v of status.extra.cloudflare
      module.exports[k] = v

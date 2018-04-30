
# NGINX extra status code

The NGINX web server software expands the 4xx error space to signal issues with the client's request.

    status = require '.'

Import default status codes.

    for k, v of status
      continue if k is 'extra'
      module.exports[k] = v

Merge default status codes with NGINX status codes.

    for k, v of status.extra.nginx
      module.exports[k] = v

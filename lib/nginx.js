// NGINX extra status codes

// The NGINX web server software expands the 4xx error class to signal issues with the client's request.

const status = require(".");

// Import default status codes.
for (const [k, v] of Object.entries(status)) {
  if (k === "extra") continue;
  module.exports[k] = v;
}

// Merge default status codes with NGINX status codes.
for (const [k, v] of Object.entries(status.extra.nginx)) {
  module.exports[k] = v;
}

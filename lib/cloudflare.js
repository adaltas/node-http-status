// Cloudflare extra status codes

// Cloudflare's reverse proxy service expands the 5xx error class to signal issues with the origin server.

const status = require(".");

// Import default status codes.

// Import default status codes.
for (const [k, v] of Object.entries(status)) {
  if (k !== "extra") {
    module.exports[k] = v;
  }
}

// Merge default status codes with Cloudflare status codes.

for (const [k, v] of Object.entries(status.extra.cloudflare)) {
  module.exports[k] = v;
}

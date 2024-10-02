// IIS extra status codes

// Microsoft's Internet Information Services (IIS) web server expands the 4xx error class to signal errors with the client's request.

const status = require('.');

// Import default status codes.
for (const [k, v] of Object.entries(status)) {
  if (k === 'extra') continue;
  module.exports[k] = v;
}

// Merge default status codes with IIS status codes.
for (const [k, v] of Object.entries(status.extra.iis)) {
  module.exports[k] = v;
}

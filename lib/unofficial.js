// Unofficial extra status codes

// This represent a list of codes which are not specified by any standard.

const status = require(".");

// Import default status codes.
for (const [k, v] of Object.entries(status)) {
  if (k === "extra") continue;
  module.exports[k] = v;
}

// Merge default status codes with unofficial status codes.
for (const [k, v] of Object.entries(status.extra.unofficial)) {
  module.exports[k] = v;
}

// Cloudflare extra status codes

// Cloudflare's reverse proxy service expands the 5xx error class to signal issues with the origin server.

import status from "./index.js";

export default {
  // Import default status codes.
  ...Object.fromEntries(Object.entries(status).filter(([k]) => k !== "extra")),
  // Merge default status codes with Cloudflare status codes.
  ...status.extra.cloudflare,
};

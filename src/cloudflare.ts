// Cloudflare extra status codes

// Cloudflare's reverse proxy service expands the 5xx error class to signal issues with the origin server.

import { status as original } from "./index.js";

const status = {
  // Import default status codes.
  ...(Object.fromEntries(
    Object.entries(original).filter(([k]) => k !== "extra"),
  ) as typeof original),
  // Merge default status codes with Cloudflare status codes.
  ...original.extra.cloudflare,
};

export default status;
export { status };

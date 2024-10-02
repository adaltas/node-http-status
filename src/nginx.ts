// NGINX extra status codes

// The NGINX web server software expands the 4xx error class to signal issues with the client's request.

import status from "./index.js";

export default {
  // Import default status codes.
  ...(Object.fromEntries(
    Object.entries(status).filter(([k]) => k !== "extra"),
  ) as typeof status),
  // Merge default status codes with NGINX status codes.
  ...status.extra.nginx,
};

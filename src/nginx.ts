// NGINX extra status codes

// The NGINX web server software expands the 4xx error class to signal issues with the client's request.

import { status as original } from "./index.js";

const status = {
  // Import default status codes.
  ...(Object.fromEntries(
    Object.entries(original).filter(([k]) => k !== "extra"),
  ) as typeof original),
  // Merge default status codes with NGINX status codes.
  ...original.extra.nginx,
};

export default status;
export { status };

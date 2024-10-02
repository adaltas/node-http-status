// IIS extra status codes

// Microsoft's Internet Information Services (IIS) web server expands the 4xx error class to signal errors with the client's request.

import status from "./index.js";

export default {
  // Import default status codes.
  ...(Object.fromEntries(
    Object.entries(status).filter(([k]) => k !== "extra"),
  ) as typeof status),
  // Merge default status codes with IIS status codes.
  ...status.extra.iis,
};

// IIS extra status codes

// Microsoft's Internet Information Services (IIS) web server expands the 4xx error class to signal errors with the client's request.

import { status as original } from "./index.js";

const status = {
  // Import default status codes.
  ...(Object.fromEntries(
    Object.entries(original).filter(([k]) => k !== "extra"),
  ) as typeof original),
  // Merge default status codes with IIS status codes.
  ...original.extra.iis,
};

export default status;
export { status };

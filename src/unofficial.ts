// Unofficial extra status codes

// This represent a list of codes which are not specified by any standard.

import { status as original } from "./index.js";

const status = {
  // Import default status codes.
  ...(Object.fromEntries(
    Object.entries(original).filter(([k]) => k !== "extra"),
  ) as typeof original),
  // Merge default status codes with unofficial status codes.
  ...original.extra.unofficial,
};

export default status;
export { status };

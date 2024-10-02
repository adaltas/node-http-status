// Unofficial extra status codes

// This represent a list of codes which are not specified by any standard.

import status from "./index.js";

export default {
  // Import default status codes.
  ...Object.fromEntries(Object.entries(status).filter(([k]) => k !== "extra")),
  // Merge default status codes with unofficial status codes.
  ...status.extra.unofficial,
};

export const BASE_URL = "https://www.trypadelup.com";

// Set to real App Store ID once app is live.
// While null, downstream code falls back to the waitlist page.
export const APP_STORE_ID: string | null = null;

export const APP_STORE_URL = APP_STORE_ID
  ? `https://apps.apple.com/app/padelup/id${APP_STORE_ID}`
  : `${BASE_URL}/invite`;

export const APP_IS_LIVE = APP_STORE_ID !== null;

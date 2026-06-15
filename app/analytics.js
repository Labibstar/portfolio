// Umami analytics config + safe event helper.
//
// SETUP (one time):
//   1. Sign up free at https://cloud.umami.is
//   2. Add a website — Domain: labibstar.app
//   3. Copy its "Website ID" (a UUID) and paste it below.
//   4. Rebuild + deploy. Done.
//
// Self-hosting instead? Also change UMAMI_SRC to your instance's script URL.

export const UMAMI_WEBSITE_ID = 'ca992976-13a6-450b-a2ec-f2228491825d';
export const UMAMI_SRC = 'https://cloud.umami.is/script.js';

// Fire a custom event. No-op if the script is blocked, still loading,
// or the id hasn't been set — never throws, never breaks the page.
export function track(event, data) {
  if (typeof window === 'undefined') return;
  if (window.umami && typeof window.umami.track === 'function') {
    try {
      data ? window.umami.track(event, data) : window.umami.track(event);
    } catch (_) {
      /* analytics must never break UX */
    }
  }
}

/**
 * Security & Anti-spy module.
 *
 * NOTE: Temporarily UNLOCKED per user request to allow PC viewing,
 * DevTools inspection (F12), right-click, and testing in browser.
 */

export function isSponsoredTraffic(): boolean {
  if (typeof window === 'undefined') return true;
  return true;
}

export function initSecurityShield() {
  // Unlocked during testing and development mode as requested by user.
  // F12, Right-click, Console and DevTools are completely free and unblocked.
}

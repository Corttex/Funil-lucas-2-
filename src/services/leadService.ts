/**
 * Lead Capture & Webhook Dispatcher Service
 * Captures email and quiz responses, saves locally to prevent lead loss,
 * and posts to any configured webhook (Make, Zapier, ActiveCampaign, RD Station, Utmify, n8n, etc.).
 */

export interface LeadPayload {
  email: string;
  name?: string | null;
  gender?: string | null;
  ageRange?: string | null;
  mainGoal?: string | null;
  currentWeightKg?: number | null;
  targetWeightKg?: number | null;
  heightCm?: number | null;
  somatotype?: string | null;
  sensitivities?: string[] | null;
  promoCode?: string | null;
  locale?: string | null;
  capturedAt: string;
  utm?: Record<string, string>;
}

export async function submitLead(payload: Partial<LeadPayload>): Promise<{ success: boolean }> {
  try {
    const fullPayload: LeadPayload = {
      email: payload.email || '',
      name: payload.name ?? null,
      gender: payload.gender ?? null,
      ageRange: payload.ageRange ?? null,
      mainGoal: payload.mainGoal ?? null,
      currentWeightKg: payload.currentWeightKg ?? null,
      targetWeightKg: payload.targetWeightKg ?? null,
      heightCm: payload.heightCm ?? null,
      somatotype: payload.somatotype ?? null,
      sensitivities: payload.sensitivities ?? [],
      promoCode: payload.promoCode ?? null,
      locale: payload.locale || 'pt',
      capturedAt: new Date().toISOString(),
      utm: getUtmParams(),
    };

    // 1. Always backup lead locally in localStorage
    try {
      const stored = JSON.parse(localStorage.getItem('bestme_captured_leads') || '[]');
      stored.push(fullPayload);
      localStorage.setItem('bestme_captured_leads', JSON.stringify(stored));
    } catch {}

    // 2. Dispatch to remote webhook if configured
    const webhookUrl =
      (import.meta as unknown as { env?: { VITE_LEAD_WEBHOOK_URL?: string } }).env
        ?.VITE_LEAD_WEBHOOK_URL ||
      (typeof window !== 'undefined'
        ? (window as unknown as { __LEAD_WEBHOOK_URL?: string }).__LEAD_WEBHOOK_URL
        : undefined);

    if (webhookUrl) {
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fullPayload),
      }).catch(() => {});
    }

    return { success: true };
  } catch {
    return { success: false };
  }
}

function getUtmParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const utms: Record<string, string> = {};
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'src', 'fbclid', 'gclid'].forEach((key) => {
    if (params.has(key)) {
      utms[key] = params.get(key) || '';
    }
  });
  return utms;
}

export const DOMAIN_CONFIG = {
  'ez-businessplan.com': {
    fromEmail: 'no-reply@ez-businessplan.com',
    toEmail: 'admin@ez-businessplan.com'
  },
  'signaturebusinessplans.com': {
    fromEmail: 'no-reply@signaturebusinessplans.com',
    toEmail: 'admin@signaturebusinessplans.com'
  },
  'businessplanboutique.com': {
    fromEmail: 'no-reply@businessplanboutique.com',
    toEmail: 'admin@businessplanboutique.com'
  },
};

export type DomainKey = keyof typeof DOMAIN_CONFIG;

export function getDomainConfig(origin: string | null) {
  if (!origin) return null;

  // Extract domain from origin
  let domain: string;
  
  try {
    const url = new URL(origin);
    domain = url.hostname.replace('www.', ''); // Remove www if present
  } catch {
    // If origin is just a domain
    domain = origin.replace('www.', '');
  }

  return DOMAIN_CONFIG[domain as DomainKey] || DOMAIN_CONFIG['ez-businessplan.com']; // Default
}

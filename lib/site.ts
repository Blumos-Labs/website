export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.blumoslabs.com').replace(/\/$/, '');
export const SITE_NAME = 'Blumos Labs';
export const LEGAL_NAME = 'Blumos Labs Private Limited';
export const CONTACT_EMAIL = 'info@blumoslabs.com';
export const CONTACT_PHONE = '+91 87961 01069';

export const abs = (path: string) => `${SITE_URL}${path === '/' ? '' : path}`;

// BMS brands the platform works with, used only for copy and chips (no page per brand).
export const supportedBms = ['JBD', 'JK', 'Daly'];

// Social profiles and app store pages. Fill these in; anything left empty is simply not shown.
export const social: Record<'instagram' | 'linkedin' | 'playStore' | 'appStore', string> = {
  instagram: 'https://www.instagram.com/blumos_labs',
  linkedin: 'https://www.linkedin.com/company/blumoslabs',
  playStore: 'https://play.google.com/store/apps/developer?id=Blumos+Labs+Private+Limited',   // Google Play developer page listing all Blumos apps
  appStore: 'https://apps.apple.com/sg/developer/blumos-labs-private-limited/id6788266263',    // App Store developer page listing all Blumos apps
};

export const sameAs = () => [social.instagram, social.linkedin, social.playStore, social.appStore].filter(Boolean);

import { social } from '@/lib/site';
import { IconInstagram, IconLinkedin, IconPlay, IconApple } from './Icons';

// Both components render nothing until the matching URL is set in lib/site.ts.
export function SocialLinks({ className = '' }: { className?: string }) {
  const items = [
    { href: social.instagram, label: 'Blumos on Instagram', Icon: IconInstagram },
    { href: social.linkedin, label: 'Blumos Labs on LinkedIn', Icon: IconLinkedin },
  ].filter((i) => i.href);
  if (!items.length) return null;
  return (
    <ul className={`flex gap-3 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noopener me" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:border-[#1a68ee] hover:text-[#1a68ee]">
            <Icon className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function StoreLinks({ className = '' }: { className?: string }) {
  const items = [
    { href: social.playStore, label: 'Blumos apps on Google Play', Icon: IconPlay },
    { href: social.appStore, label: 'Blumos apps on the App Store', Icon: IconApple },
  ].filter((i) => i.href);
  if (!items.length) return null;
  return (
    <ul className={`flex gap-3 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noopener" aria-label={label} title={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-colors hover:border-[#1a68ee] hover:text-[#1a68ee]">
            <Icon className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}

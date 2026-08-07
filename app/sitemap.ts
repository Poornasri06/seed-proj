import type { MetadataRoute } from 'next';

const routes = [
  '', 'about', 'contact', 'careers', 'privacy', 'inquiry', 'why-seed', 'blog',
  'mep', 'mep/commercial', 'mep/residential', 'mep/hvac',
  'mep/electrical-plumbing', 'mep/maintenance', 'mep/projects',
  'pool', 'pool/construction', 'pool/renovation', 'pool/maintenance', 'pool/projects',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://seedengineering.ae';
  return routes.map((r) => ({
    url: `${base}/${r}`.replace(/\/$/, '') || base,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: r === '' ? 1 : 0.7,
  }));
}

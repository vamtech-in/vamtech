import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VAMTech — Custom Software & AI Development Company',
    short_name: 'VAMTech',
    description:
      'VAMTech builds scalable digital products, custom enterprise software, web & mobile applications, AI automation, and cloud platforms.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F5F4EF',
    theme_color: '#F5F4EF',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}

import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VAMTech — Custom Software & AI Development Company',
    short_name: 'VAMTech',
    description:
      'VAMTech builds scalable digital products, custom enterprise software, web & mobile applications, AI automation, and cloud platforms.',
    start_url: '/',
    display: 'standalone',
    background_color: '#07090d',
    theme_color: '#ff5722',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}

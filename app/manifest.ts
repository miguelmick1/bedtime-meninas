import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bedtime Meninas — Fernanda e Alice',
    short_name: 'Bedtime',
    description: 'Diário de sono da Fernanda e da Alice',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#f6f5fb',
    theme_color: '#5446ad',
    lang: 'pt-BR',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}

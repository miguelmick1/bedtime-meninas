import type { Metadata, Viewport } from 'next';
import './style.css';

export const metadata: Metadata = {
  title: 'Bedtime Meninas | Fernanda & Alice',
  description: 'Diário de sono da Fernanda e da Alice',
  applicationName: 'Bedtime Meninas',
  appleWebApp: { capable: true, title: 'Bedtime', statusBarStyle: 'default' },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#5446ad',
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

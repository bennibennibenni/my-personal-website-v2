import { GoogleAnalytics } from '@next/third-parties/google';
import { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import * as React from 'react';
import '@/lib/env';

import '@/styles/globals.css';

import { siteConfig } from '@/constant/config';

const sourceSans3 = localFont({
  src: [
    {
      path: './fonts/source-sans-3-latin-wght-normal.woff2',
      weight: '200 900',
      style: 'normal',
    },
    {
      path: './fonts/source-sans-3-latin-wght-italic.woff2',
      weight: '200 900',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-source-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `${siteConfig.title} | %s`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
  },
  authors: [
    {
      name: 'Benni',
      url: 'https://benni.my.id',
    },
  ],
};

export const viewport: Viewport = {
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={sourceSans3.variable}>
      <body>{children}</body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}

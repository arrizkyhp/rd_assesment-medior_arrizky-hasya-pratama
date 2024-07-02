import type { Metadata } from 'next';

import { archivo, archivoBlack, inter } from '@/assets/fonts';
import Layout from '@/components/layout/Layout';
import { TrackProvider } from '@/contexts/TrackContext';

import './globals.css';

export const metadata: Metadata = {
  title: 'Radiohead Page',
  description: 'Artist Page',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body
      className={`${inter.className} ${archivo.variable} ${archivoBlack.variable} relative`}
    >
      <TrackProvider>
        <Layout>{children}</Layout>
      </TrackProvider>
    </body>
  </html>
);

export default RootLayout;

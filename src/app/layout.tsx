import type { Metadata } from 'next';

import { archivo, archivoBlack, inter } from '@/assets/fonts';
import Layout from '@/components/layout/Layout';

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
      <Layout>{children}</Layout>
    </body>
  </html>
);

export default RootLayout;

import { Archivo, Archivo_Black, Inter } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const archivo = Archivo({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
});

export const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo-black',
});

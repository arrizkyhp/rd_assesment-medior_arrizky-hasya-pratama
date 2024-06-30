import type { ReactNode } from 'react';

import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Navigation />
    <main className=" pt-[96px]">{children}</main>
    <Footer />
  </>
);

export default Layout;

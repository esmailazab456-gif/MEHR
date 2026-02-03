import type { ReactNode } from 'react';

import Footer from './Footer';
import Navbar from './Navbar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div>
    <Navbar />
    <main>
      <div className="container">{children}</div>
    </main>
    <Footer />
  </div>
);

export default Layout;

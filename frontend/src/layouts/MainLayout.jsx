import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { MobileBottomNav } from '../components/layout/MobileBottomNav';
import { Toast } from '../components/common/Toast';
import { ScrollToTop } from '../components/common/ScrollToTop';
import { ScrollToTopButton } from '../components/common/ScrollToTopButton';
import { Preloader } from '../components/common/Preloader';

export const MainLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#ffffff' }}>
      <Preloader />
      <ScrollToTop />
      <Navbar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
      <MobileBottomNav />
      <Toast />
    </div>
  );
};

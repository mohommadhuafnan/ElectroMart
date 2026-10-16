import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/home/HomePage';

// Placeholder view component for future feature pages
const FeaturePlaceholder = ({ title, description }) => (
  <div className="container" style={{ paddingTop: '3rem', textAlign: 'center' }}>
    <div className="glass-panel" style={{ padding: '3.5rem 2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>{title}</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
        {description || 'This module is scheduled for implementation in upcoming sprints.'}
      </p>
      <a href="/" style={{
        display: 'inline-block',
        backgroundColor: '#2563eb',
        color: '#ffffff',
        padding: '0.6rem 1.25rem',
        borderRadius: '6px',
        fontWeight: 600,
        fontSize: '0.9rem'
      }}>
        Return to Home
      </a>
    </div>
  </div>
);

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<FeaturePlaceholder title="Product Catalog" description="Browse all electronic components, filters, and specifications." />} />
        <Route path="auth/login" element={<FeaturePlaceholder title="Account Authentication" description="Login and customer onboarding portal." />} />
        <Route path="auth/register" element={<FeaturePlaceholder title="Create Account" description="Join the ElectroMart engineering network." />} />
        <Route path="cart" element={<FeaturePlaceholder title="Shopping Cart" description="Review selected items, compute shipping, and apply promo vouchers." />} />
        <Route path="checkout" element={<FeaturePlaceholder title="Secure Checkout" description="Payment gateway integration for Sri Lanka (Card / Bank Transfer / Cash on Delivery)." />} />
        <Route path="orders" element={<FeaturePlaceholder title="Order History & Tracking" description="Track delivery across Sri Lanka postal and courier routes." />} />
        <Route path="wishlist" element={<FeaturePlaceholder title="Wishlist" description="Save hardware and kits for later purchase." />} />
        <Route path="admin" element={<FeaturePlaceholder title="Admin Management Portal" description="Manage inventory, orders, customer accounts, and analytics." />} />
        <Route path="*" element={<FeaturePlaceholder title="404 - Page Not Found" description="The requested page could not be located." />} />
      </Route>
    </Routes>
  );
};

import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/home/HomePage';
import { ShopPage } from '../pages/products/ShopPage';
import { ProductDetailPage } from '../pages/products/ProductDetailPage';
import { CartPage } from '../pages/cart/CartPage';
import { CheckoutPage } from '../pages/checkout/CheckoutPage';
import { TrackOrderPage } from '../pages/orders/TrackOrderPage';
import { OrdersPage } from '../pages/orders/OrdersPage';
import { WishlistPage } from '../pages/wishlist/WishlistPage';
import { AuthPage } from '../pages/auth/AuthPage';
import { AboutPage } from '../pages/about/AboutPage';
import { ContactPage } from '../pages/contact/ContactPage';
import { AdminDashboardPage } from '../pages/admin/AdminDashboardPage';

const NotFoundPage = () => (
  <div style={{ padding: '80px 0', textAlign: 'center' }}>
    <div className="container-fluid px-header">
      <div style={{ maxWidth: '500px', margin: '0 auto', background: '#ffffff', padding: '48px 30px', borderRadius: '20px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'var(--primary-orange)', lineHeight: 1, marginBottom: '12px' }}>404</h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--dark-heading)', marginBottom: '10px' }}>Page Not Found</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn-primary-orange">
          Return to Home
        </Link>
      </div>
    </div>
  </div>
);

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="product/:id" element={<ProductDetailPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="track-order" element={<TrackOrderPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="account" element={<OrdersPage />} />
        <Route path="wishlist" element={<WishlistPage />} />
        <Route path="login" element={<AuthPage initialTab="login" />} />
        <Route path="register" element={<AuthPage initialTab="register" />} />
        <Route path="auth/login" element={<Navigate to="/login" replace />} />
        <Route path="auth/register" element={<Navigate to="/register" replace />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="admin" element={<AdminDashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

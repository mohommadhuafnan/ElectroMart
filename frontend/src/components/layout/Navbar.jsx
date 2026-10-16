import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ShoppingCart, Heart, User, Search } from 'lucide-react';

export const Navbar = () => {
  return (
    <header style={{
      backgroundColor: 'rgba(15, 23, 42, 0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-color)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px',
        gap: '2rem'
      }}>
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <div style={{
            background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
            borderRadius: '10px',
            padding: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(37,99,235,0.4)'
          }}>
            <Zap size={22} color="#ffffff" />
          </div>
          <span style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Electro<span style={{ color: '#3b82f6' }}>Mart</span>
          </span>
        </Link>

        {/* Search Bar */}
        <div style={{
          flex: 1,
          maxWidth: '500px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(30, 41, 59, 0.8)',
          border: '1px solid var(--border-color)',
          borderRadius: '9999px',
          padding: '0.5rem 1rem',
          gap: '0.6rem'
        }}>
          <Search size={18} color="var(--text-muted)" />
          <input
            type="text"
            placeholder="Search electronics, circuits, Arduino, sensors in Sri Lanka..."
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text-main)',
              width: '100%',
              fontSize: '0.9rem'
            }}
          />
        </div>

        {/* Action Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <Link to="/products" style={{ color: 'var(--text-muted)', fontSize: '0.92rem', fontWeight: 500 }}>
            Products
          </Link>
          <Link to="/wishlist" title="Wishlist" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}>
            <Heart size={20} />
          </Link>
          <Link to="/cart" title="Shopping Cart" style={{
            position: 'relative',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center'
          }}>
            <ShoppingCart size={20} />
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-10px',
              background: '#2563eb',
              color: '#ffffff',
              fontSize: '0.7rem',
              fontWeight: 700,
              borderRadius: '9999px',
              width: '18px',
              height: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>0</span>
          </Link>
          <Link to="/auth/login" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.45rem 1rem',
            backgroundColor: 'rgba(37, 99, 235, 0.15)',
            border: '1px solid rgba(37, 99, 235, 0.4)',
            color: '#60a5fa',
            borderRadius: '8px',
            fontSize: '0.88rem',
            fontWeight: 600
          }}>
            <User size={16} />
            <span>Sign In</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

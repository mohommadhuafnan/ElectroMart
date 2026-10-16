import React from 'react';
import { Zap, MapPin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#090d16',
      borderTop: '1px solid var(--border-color)',
      paddingTop: '3.5rem',
      paddingBottom: '2rem',
      marginTop: 'auto'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '2.5rem',
        marginBottom: '2.5rem'
      }}>
        {/* Brand Summary */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <div style={{
              background: '#2563eb',
              borderRadius: '8px',
              padding: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Zap size={18} color="#ffffff" />
            </div>
            <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>
              Electro<span style={{ color: '#3b82f6' }}>Mart</span>
            </span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1rem' }}>
            Sri Lanka's dedicated hub for authentic electrical components, embedded electronics, IoT hardware, and lab instruments.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', color: 'var(--text-dim)', fontSize: '0.82rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={14} /> Colombo & Kandy, Sri Lanka
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={14} /> support@electromart.lk
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={14} /> +94 11 234 5678
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', color: '#f8fafc' }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            <li><a href="/products">All Products</a></li>
            <li><a href="/categories">Microcontrollers & Kits</a></li>
            <li><a href="/categories">Sensors & Modules</a></li>
            <li><a href="/orders">Track Order</a></li>
          </ul>
        </div>

        {/* Project Info */}
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1rem', color: '#f8fafc' }}>
            Academic Project
          </h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>
            Developed as an academic MERN Stack project showcasing modern web engineering, modular architecture, and collaborative Git practices.
          </p>
        </div>
      </div>

      <div className="container" style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        paddingTop: '1.5rem',
        textAlign: 'center',
        color: 'var(--text-dim)',
        fontSize: '0.82rem'
      }}>
        © {new Date().getFullYear()} ElectroMart Sri Lanka. All Rights Reserved. Group Academic Project.
      </div>
    </footer>
  );
};

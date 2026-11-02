import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Logo } from '../../components/common/Logo';

export const AboutPage = () => {
  return (
    <div style={{ padding: '40px 0 80px 0' }}>
      <div className="container-fluid px-header">
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px' }}>
            <Link to="/" style={{ color: 'var(--text-main)', fontWeight: 600 }}>Home</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: 'var(--primary-orange)', fontWeight: 600 }}>About Us</span>
          </div>

          {/* Hero Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ display: 'inline-flex', marginBottom: '16px' }}>
              <Logo variant="header" size="large" />
            </div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--dark-heading)', letterSpacing: '-0.02em', marginBottom: '14px' }}>
              Elevating Everyday Living in Sri Lanka
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
              ElectroMart is your one-stop destination for verified electrical appliances, smart TVs, solar lighting systems, and kitchen gadgets with islandwide delivery and authentic warranty.
            </p>
          </div>

        {/* Story Section */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '24px',
            padding: '40px',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '36px'
          }}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--dark-heading)', marginBottom: '14px' }}>
            Our Mission &amp; Background
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '16px' }}>
            Established to bridge the gap between high-end electronics availability and transparent online shopping in Sri Lanka, 
            ElectroMart brings top brands including <strong>Orange Electric, OREL, Konka, Wicks, Akra, Delmege, and Kelani Cables</strong> under a unified digital storefront.
          </p>
          <p style={{ fontSize: '15px', color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '24px' }}>
            Whether you are furnishing a new house, upgrading to an energy-saving 4K Smart TV, installing solar emergency lighting, or sourcing industrial electrical components, ElectroMart guarantees factory-sealed products delivered right to your home with convenient Cash on Delivery.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', borderTop: '1px solid var(--border-light)', paddingTop: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--orange-subtle)', color: 'var(--primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={22} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '14px', color: 'var(--dark-heading)' }}>100% Genuine</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Direct Agent Sourced</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--orange-subtle)', color: 'var(--primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Truck size={22} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '14px', color: 'var(--dark-heading)' }}>All 25 Districts</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Fast Islandwide Delivery</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--orange-subtle)', color: 'var(--primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Award size={22} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '14px', color: 'var(--dark-heading)' }}>Official Warranty</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>1 to 3 Years Coverage</div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Project Accreditation Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, #11141e 0%, #1e293b 100%)',
            borderRadius: '24px',
            padding: '36px',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '40px'
          }}
        >
          <div style={{ display: 'inline-block', background: 'var(--primary-orange)', color: '#fff', fontSize: '11px', fontWeight: 800, padding: '3px 10px', borderRadius: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>
            Academic Coursework Project
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff', marginBottom: '10px' }}>
            South Eastern University of Sri Lanka (SEUSL)
          </h2>
          <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '20px' }}>
            Faculty of Technology &bull; Department of Information and Communication Technology (ICT)<br />
            <strong>Course:</strong> E-Commerce (CIS 22032) &bull; <strong>Project:</strong> ElectroMart Online Store
          </p>

          <div style={{ background: 'rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '18px 24px', border: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '13px', color: '#e2e8f0', lineHeight: 1.6 }}>
            Developed by Student Group 01 led by Abdul Basith (SEU/IS/22/ICT/024) and Mohommadhu Afnan (SEU/IS/22/ICT/085) following modern MERN stack architecture standards.
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/shop" className="btn-primary-orange" style={{ padding: '14px 32px', fontSize: '15px' }}>
            <span>Explore ElectroMart Products</span>
            <ArrowRight size={17} />
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};


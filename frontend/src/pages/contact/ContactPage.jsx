import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const ContactPage = () => {
  const { showToast } = useCart();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Your message has been sent to ElectroMart team!');
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div style={{ padding: '40px 0 80px 0' }}>
      <div className="container-fluid px-header">
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px' }}>
            <Link to="/" style={{ color: 'var(--text-main)', fontWeight: 600 }}>Home</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: 'var(--primary-orange)', fontWeight: 600 }}>Contact Us</span>
          </div>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h1 style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--dark-heading)' }}>
              Get in Touch with ElectroMart
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginTop: '6px' }}>
              Have questions regarding products, warranties, or delivery in Sri Lanka? We are here to help.
            </p>
          </div>

        {/* 2-Column: Contact cards + Form */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.35fr', gap: '36px', alignItems: 'start' }}>
          {/* Left Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Store Location */}
            <div style={{ background: '#ffffff', borderRadius: '18px', padding: '24px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--orange-subtle)', color: 'var(--primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MapPin size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--dark-heading)', marginBottom: '4px' }}>Store Location</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  57, 1st Cross Street,<br />Vavuniya, Northern Province, Sri Lanka, 43000
                </p>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div style={{ background: '#ffffff', borderRadius: '18px', padding: '24px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--orange-subtle)', color: 'var(--primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Phone size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--dark-heading)', marginBottom: '4px' }}>Phone / WhatsApp Hotline</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Direct voice &amp; WhatsApp inquiries:
                </p>
                <a href="https://wa.me/+94777666961" target="_blank" rel="noopener noreferrer" style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary-orange)' }}>
                  +94 77 766 6961
                </a>
              </div>
            </div>

            {/* Email */}
            <div style={{ background: '#ffffff', borderRadius: '18px', padding: '24px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--orange-subtle)', color: 'var(--primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mail size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--dark-heading)', marginBottom: '4px' }}>Email Support</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Customer care &amp; sales inquiries:
                </p>
                <a href="mailto:support@electromart.lk" style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--primary-orange)' }}>
                  support@electromart.lk
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div style={{ background: '#ffffff', borderRadius: '18px', padding: '24px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--orange-subtle)', color: 'var(--primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Clock size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--dark-heading)', marginBottom: '4px' }}>Customer Service Hours</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Monday &ndash; Saturday: 8:30 AM &ndash; 7:30 PM<br />
                  Sunday: 9:00 AM &ndash; 2:00 PM (WhatsApp Open 24/7)
                </p>
              </div>
            </div>
          </div>

          {/* Right Message Form */}
          <div style={{ background: '#ffffff', borderRadius: '24px', padding: '36px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--dark-heading)', marginBottom: '8px' }}>
              Send Us a Message
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>
              Fill in your details and our team will get back to you within 2 business hours.
            </p>

            {submitted && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#ecfdf5', color: '#059669', padding: '12px 18px', borderRadius: '10px', marginBottom: '20px', fontSize: '13.5px', fontWeight: 600 }}>
                <CheckCircle2 size={18} />
                <span>Thank you! Your message has been received.</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '6px' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Abdul Basith"
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '14px', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '6px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '14px', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '6px' }}>
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+94 77 xxx xxxx"
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '14px', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '6px' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Product inquiry, warranty, etc."
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '14px', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '6px' }}>
                  Your Message *
                </label>
                <textarea
                  required
                  rows="4"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can we assist you with our products or orders?"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '14px', outline: 'none', resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary-orange"
                style={{ padding: '12px 28px', fontSize: '15px' }}
              >
                <Send size={16} />
                <span>Submit Message</span>
              </button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};


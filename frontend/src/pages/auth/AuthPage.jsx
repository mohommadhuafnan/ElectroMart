import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Lock, Mail, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Logo } from '../../components/common/Logo';

export const AuthPage = ({ initialTab = 'login' }) => {
  const navigate = useNavigate();
  const { login, register, user } = useAuth();

  const [activeTab, setActiveTab] = useState(initialTab);
  const [loginEmail, setLoginEmail] = useState('abdul.basith@example.lk');
  const [loginPassword, setLoginPassword] = useState('password123');

  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regPassword, setRegPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login(loginEmail, loginPassword);
    navigate('/');
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    register({
      name: regName,
      email: regEmail,
      phone: regPhone,
      password: regPassword
    });
    navigate('/');
  };

  const fillDemoCustomer = () => {
    setLoginEmail('abdul.basith@example.lk');
    setLoginPassword('demo12345');
  };

  const fillDemoAdmin = () => {
    setLoginEmail('admin@electromart.lk');
    setLoginPassword('admin2026');
  };

  return (
    <div style={{ padding: '60px 0 80px 0' }}>
      <div className="container-fluid px-header">
        <div style={{ maxWidth: '480px', margin: '0 auto' }}>
        <div
          style={{
            background: '#ffffff',
            borderRadius: '24px',
            padding: '40px 36px',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          {/* Logo center */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <Logo variant="header" size="large" />
          </div>

          {/* Tab buttons */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              background: '#f8f9fa',
              borderRadius: '12px',
              padding: '4px',
              marginBottom: '28px',
              border: '1px solid var(--border-light)'
            }}
          >
            <button
              onClick={() => setActiveTab('login')}
              style={{
                padding: '10px 0',
                borderRadius: '9px',
                fontSize: '14px',
                fontWeight: 700,
                background: activeTab === 'login' ? '#ffffff' : 'transparent',
                color: activeTab === 'login' ? 'var(--primary-orange)' : 'var(--text-muted)',
                boxShadow: activeTab === 'login' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none'
              }}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab('register')}
              style={{
                padding: '10px 0',
                borderRadius: '9px',
                fontSize: '14px',
                fontWeight: 700,
                background: activeTab === 'register' ? '#ffffff' : 'transparent',
                color: activeTab === 'register' ? 'var(--primary-orange)' : 'var(--text-muted)',
                boxShadow: activeTab === 'register' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none'
              }}
            >
              Create Account
            </button>
          </div>

          {activeTab === 'login' ? (
            <form onSubmit={handleLoginSubmit}>
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '6px' }}>
                  Email Address
                </label>
                <div style={{ display: 'flex', alignItems: 'center', background: '#f8f9fa', border: '1px solid var(--border-light)', borderRadius: '10px', padding: '0 12px' }}>
                  <Mail size={17} color="var(--primary-orange)" />
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="you@example.com"
                    style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', padding: '12px 10px', fontSize: '14px' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 700, color: 'var(--dark-slate)' }}>
                    Password
                  </label>
                  <a href="#" onClick={(e) => { e.preventDefault(); alert('Password reset link sent to registered email.'); }} style={{ fontSize: '12px', color: 'var(--primary-orange)', fontWeight: 600 }}>
                    Forgot Password?
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', background: '#f8f9fa', border: '1px solid var(--border-light)', borderRadius: '10px', padding: '0 12px' }}>
                  <Lock size={17} color="var(--primary-orange)" />
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Enter password"
                    style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', padding: '12px 10px', fontSize: '14px' }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary-orange"
                style={{ width: '100%', padding: '13px', fontSize: '15px', marginBottom: '16px' }}
              >
                <span>Sign In to ElectroMart</span>
                <ArrowRight size={17} />
              </button>

              {/* Demo Fill Shortcuts */}
              <div style={{ background: '#f8f9fa', borderRadius: '10px', padding: '12px', textAlign: 'center', border: '1px solid #eef2f6' }}>
                <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 600 }}>
                  DEMO SHORTCUTS
                </div>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                  <button
                    type="button"
                    onClick={fillDemoCustomer}
                    style={{ fontSize: '12px', background: '#ffffff', border: '1px solid var(--border-light)', padding: '5px 12px', borderRadius: '6px', fontWeight: 600, color: 'var(--dark-slate)' }}
                  >
                    Customer Demo
                  </button>
                  <button
                    type="button"
                    onClick={fillDemoAdmin}
                    style={{ fontSize: '12px', background: 'var(--orange-subtle)', border: '1px solid rgba(251, 124, 0, 0.3)', padding: '5px 12px', borderRadius: '6px', fontWeight: 700, color: 'var(--primary-orange)' }}
                  >
                    Admin Demo
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <form onSubmit={handleRegisterSubmit}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '6px' }}>
                  Full Name *
                </label>
                <div style={{ display: 'flex', alignItems: 'center', background: '#f8f9fa', border: '1px solid var(--border-light)', borderRadius: '10px', padding: '0 12px' }}>
                  <User size={17} color="var(--primary-orange)" />
                  <input
                    type="text"
                    required
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    placeholder="e.g. Mohommadhu Afnan"
                    style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', padding: '12px 10px', fontSize: '14px' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '6px' }}>
                  Email Address *
                </label>
                <div style={{ display: 'flex', alignItems: 'center', background: '#f8f9fa', border: '1px solid var(--border-light)', borderRadius: '10px', padding: '0 12px' }}>
                  <Mail size={17} color="var(--primary-orange)" />
                  <input
                    type="email"
                    required
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder="you@example.com"
                    style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', padding: '12px 10px', fontSize: '14px' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '6px' }}>
                  Phone Number
                </label>
                <div style={{ display: 'flex', alignItems: 'center', background: '#f8f9fa', border: '1px solid var(--border-light)', borderRadius: '10px', padding: '0 12px' }}>
                  <Phone size={17} color="var(--primary-orange)" />
                  <input
                    type="tel"
                    value={regPhone}
                    onChange={(e) => setRegPhone(e.target.value)}
                    placeholder="+94 77 xxx xxxx"
                    style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', padding: '12px 10px', fontSize: '14px' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '22px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '6px' }}>
                  Create Password *
                </label>
                <div style={{ display: 'flex', alignItems: 'center', background: '#f8f9fa', border: '1px solid var(--border-light)', borderRadius: '10px', padding: '0 12px' }}>
                  <Lock size={17} color="var(--primary-orange)" />
                  <input
                    type="password"
                    required
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    placeholder="At least 6 characters"
                    style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', padding: '12px 10px', fontSize: '14px' }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary-orange"
                style={{ width: '100%', padding: '13px', fontSize: '15px' }}
              >
                <span>Complete Registration</span>
                <ArrowRight size={17} />
              </button>
            </form>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};


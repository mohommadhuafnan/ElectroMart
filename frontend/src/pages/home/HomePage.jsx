import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Cpu, BatteryCharging, Wifi, Activity, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

export const HomePage = () => {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const response = await api.get('/health');
        setHealth(response.data);
      } catch (err) {
        console.error('Failed to connect to backend API:', err);
        setError('Backend server not reachable yet or offline');
      } finally {
        setLoading(false);
      }
    };

    fetchHealth();
  }, []);

  return (
    <div className="container" style={{ paddingTop: '2.5rem' }}>
      {/* Hero Banner */}
      <section className="glass-panel" style={{
        padding: '3rem 2.5rem',
        marginBottom: '2.5rem',
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(59, 130, 246, 0.2)'
      }}>
        <div style={{ maxWidth: '680px', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span className="badge badge-info">MERN Stack Architecture</span>
            <span className="badge badge-success">Sri Lanka E-Commerce</span>
          </div>

          <h1 style={{
            fontSize: '2.6rem',
            lineHeight: 1.2,
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginBottom: '1rem',
            background: 'linear-gradient(to right, #ffffff, #94a3b8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Sri Lanka's Premier Electrical & Electronics Hub
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.6 }}>
            ElectroMart connects universities, engineers, hobbyists, and industrial builders with verified electrical parts, microcontrollers, IoT sensors, and lab equipment.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="/products" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#2563eb',
              color: '#ffffff',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.95rem',
              boxShadow: '0 4px 14px rgba(37,99,235,0.4)'
            }}>
              Explore Catalog <ArrowRight size={18} />
            </a>

            <a href="/docs" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.95rem'
            }}>
              Project Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Backend API Health Status Indicator */}
      <section className="glass-panel" style={{ padding: '1.75rem', marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Activity size={22} color="#3b82f6" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>Backend API Integration Status</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                Testing live communication with <code>/api/health</code> endpoint
              </p>
            </div>
          </div>

          <div>
            {loading ? (
              <span className="badge badge-info">Checking API status...</span>
            ) : health ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span className="badge badge-success" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <CheckCircle2 size={14} /> Backend Online ({health.uptime})
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                  DB Status: <strong>{health.database?.status || 'Ready'}</strong>
                </span>
              </div>
            ) : (
              <span className="badge" style={{ backgroundColor: 'rgba(244,63,94,0.15)', color: '#fb7185', border: '1px solid rgba(244,63,94,0.3)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <AlertCircle size={14} /> {error}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Category Highlights */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
          Featured Categories
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem'
        }}>
          <div className="glass-panel" style={{ padding: '1.5rem', transition: 'var(--transition)' }}>
            <Cpu size={32} color="#3b82f6" style={{ marginBottom: '0.75rem' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>Microcontrollers & Dev Boards</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem' }}>
              Arduino, ESP32, Raspberry Pi, STM32 and breakout boards.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem', transition: 'var(--transition)' }}>
            <Wifi size={32} color="#10b981" style={{ marginBottom: '0.75rem' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>Sensors & Wireless Modules</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem' }}>
              Ultrasonic, temperature, GSM/GPS, LoRa, RF transceivers.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem', transition: 'var(--transition)' }}>
            <BatteryCharging size={32} color="#f59e0b" style={{ marginBottom: '0.75rem' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>Power & Energy Supplies</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem' }}>
              Li-ion packs, BMS modules, SMPS transformers, solar converters.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Package,
  Search,
  CheckCircle2,
  Clock,
  Truck,
  MapPin,
  Phone,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const TrackOrderPage = () => {
  const [searchParams] = useSearchParams();
  const { orders } = useAuth();

  const urlId = searchParams.get('id');

  const [orderIdInput, setOrderIdInput] = useState(urlId || 'EM-2026-8941');
  const [phoneInput, setPhoneInput] = useState('');
  const [searchedOrder, setSearchedOrder] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    // If ID in URL or initial, load matched order
    const match = orders.find(o => o.orderId.toLowerCase() === (urlId || 'EM-2026-8941').toLowerCase());
    if (match) {
      setSearchedOrder(match);
      setHasSearched(true);
    }
  }, [urlId, orders]);

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    const cleanId = orderIdInput.trim().toUpperCase();
    const found = orders.find(o => o.orderId.toUpperCase() === cleanId);

    if (found) {
      setSearchedOrder(found);
    } else {
      // Create a mock tracking response for any entered ID
      setSearchedOrder({
        orderId: cleanId,
        date: new Date().toISOString().split('T')[0],
        customerName: 'Customer',
        total: 15450,
        paymentMethod: 'Cash on Delivery',
        status: 'In Transit',
        statusStep: 3,
        courier: 'PromptX Courier (#PRX-883192)',
        deliveryAddress: 'Sri Lanka Delivery Route',
        items: [
          { title: 'Electronic Item Order', quantity: 1, price: 15000 }
        ]
      });
    }
    setHasSearched(true);
  };

  const steps = [
    { step: 1, label: 'Order Placed', desc: 'Received & verified' },
    { step: 2, label: 'Packed & Verified', desc: 'Quality checked' },
    { step: 3, label: 'Dispatched', desc: 'In transit with courier' },
    { step: 4, label: 'Out for Delivery', desc: 'Arriving today' },
    { step: 5, label: 'Delivered', desc: 'Handed to customer' },
  ];

  const currentStep = searchedOrder ? (searchedOrder.statusStep || 3) : 3;

  return (
    <div style={{ padding: '36px 0 70px 0' }}>
      <div className="container-fluid px-header">
        <div style={{ maxWidth: '940px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
            <Link to="/" style={{ color: 'var(--text-main)', fontWeight: 600 }}>Home</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: 'var(--primary-orange)', fontWeight: 600 }}>Track Order</span>
          </div>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--dark-heading)' }}>
            Track Your Order
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', marginTop: '6px' }}>
            Check the real-time courier and delivery status of your ElectroMart parcel across Sri Lanka.
          </p>
        </div>

        {/* Search Bar Form */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '18px',
            padding: '28px',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '32px'
          }}
        >
          <form onSubmit={handleTrackSubmit} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr auto', gap: '14px', alignItems: 'end' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '6px' }}>
                Order Reference Number *
              </label>
              <div style={{ display: 'flex', alignItems: 'center', background: '#f8f9fa', border: '1px solid var(--border-light)', borderRadius: '10px', padding: '0 12px' }}>
                <Package size={17} color="var(--primary-orange)" />
                <input
                  type="text"
                  required
                  placeholder="e.g. EM-2026-8941"
                  value={orderIdInput}
                  onChange={(e) => setOrderIdInput(e.target.value)}
                  style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', padding: '12px 10px', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '6px' }}>
                Phone Number (Optional)
              </label>
              <div style={{ display: 'flex', alignItems: 'center', background: '#f8f9fa', border: '1px solid var(--border-light)', borderRadius: '10px', padding: '0 12px' }}>
                <Phone size={17} color="var(--text-muted)" />
                <input
                  type="text"
                  placeholder="+94 77 xxx xxxx"
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
                  style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', padding: '12px 10px', fontSize: '14px' }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary-orange"
              style={{ height: '46px', padding: '0 24px', fontSize: '14.5px' }}
            >
              <Search size={16} />
              <span>Track</span>
            </button>
          </form>

          <div style={{ marginTop: '12px', fontSize: '12.5px', color: 'var(--text-muted)' }}>
            Tip: Try sample order ID <strong style={{ color: 'var(--primary-orange)', cursor: 'pointer' }} onClick={() => setOrderIdInput('EM-2026-8941')}>EM-2026-8941</strong> to preview instant live tracking.
          </div>
        </div>

        {/* Tracking Result Card */}
        {hasSearched && searchedOrder && (
          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              border: '1px solid var(--border-light)',
              padding: '36px',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            {/* Top Status Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '20px', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Order Reference
                </span>
                <div style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--dark-heading)', fontFamily: 'monospace' }}>
                  {searchedOrder.orderId}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--orange-subtle)', padding: '8px 16px', borderRadius: '10px', border: '1px solid rgba(251, 124, 0, 0.25)' }}>
                <Truck size={20} color="var(--primary-orange)" />
                <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--primary-orange)' }}>
                  Status: {searchedOrder.status || 'In Transit'}
                </span>
              </div>
            </div>

            {/* Visual Step Timeline */}
            <div style={{ marginBottom: '36px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', position: 'relative', gap: '8px' }}>
                {steps.map((st) => {
                  const isDone = st.step <= currentStep;
                  const isCurrent = st.step === currentStep;

                  return (
                    <div key={st.step} style={{ textAlign: 'center', position: 'relative' }}>
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '50%',
                          background: isDone ? 'var(--primary-orange)' : '#f1f5f9',
                          color: isDone ? '#ffffff' : '#94a3b8',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 10px auto',
                          fontWeight: 800,
                          fontSize: '15px',
                          boxShadow: isCurrent ? '0 0 0 4px rgba(251, 124, 0, 0.25)' : 'none',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {isDone ? <CheckCircle2 size={20} /> : st.step}
                      </div>
                      <div style={{ fontSize: '12.5px', fontWeight: 700, color: isDone ? 'var(--dark-heading)' : '#94a3b8', lineHeight: 1.25 }}>
                        {st.label}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {st.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Order Details Grid */}
            <div style={{ background: '#f8f9fa', borderRadius: '16px', padding: '24px', border: '1px solid #eef2f6', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Courier Information
                </span>
                <p style={{ fontSize: '14px', fontWeight: 700, color: 'var(--dark-heading)', marginTop: '4px' }}>
                  {searchedOrder.courier || 'PromptX Express Logistics Sri Lanka'}
                </p>
                <div style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginTop: '4px' }}>
                  Expected Delivery: Within 24-48 Hours
                </div>
              </div>

              <div>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Delivery Destination
                </span>
                <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--dark-heading)', marginTop: '4px' }}>
                  {searchedOrder.deliveryAddress}
                </p>
              </div>

              <div>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Payment Method
                </span>
                <p style={{ fontSize: '14px', fontWeight: 700, color: 'var(--dark-heading)', marginTop: '4px' }}>
                  {searchedOrder.paymentMethod}
                </p>
              </div>

              <div>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Total Amount Due
                </span>
                <p style={{ fontSize: '16px', fontWeight: 900, color: 'var(--primary-orange)', marginTop: '4px' }}>
                  LKR {searchedOrder.total.toLocaleString()}.00
                </p>
              </div>
            </div>

            {/* Support hotline */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px', fontSize: '13px', color: 'var(--text-muted)' }}>
              <span>Need help with your delivery?</span>
              <a href="https://wa.me/+94777666961" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-orange)', fontWeight: 700 }}>
                WhatsApp Delivery Helpline (+94 77 766 6961)
              </a>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};


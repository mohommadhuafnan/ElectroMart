import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Truck, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const OrdersPage = () => {
  const { orders } = useAuth();

  return (
    <div style={{ padding: '36px 0 70px 0' }}>
      <div className="container-fluid px-header">
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
            <Link to="/" style={{ color: 'var(--text-main)', fontWeight: 600 }}>Home</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: 'var(--primary-orange)', fontWeight: 600 }}>My Orders</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--dark-heading)' }}>
                My Orders &bull; History
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', marginTop: '4px' }}>
                View past and active orders placed on ElectroMart Sri Lanka.
              </p>
            </div>

            <Link to="/track-order" className="btn-primary-orange" style={{ fontSize: '13.5px', padding: '10px 20px' }}>
              <Truck size={16} />
              <span>Track by Order ID</span>
            </Link>
          </div>

          {orders.length === 0 ? (
            <div style={{ background: '#ffffff', borderRadius: '18px', padding: '48px', textAlign: 'center', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <Package size={48} color="var(--primary-orange)" style={{ margin: '0 auto 16px auto' }} />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--dark-heading)', marginBottom: '8px' }}>
                No orders placed yet
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px' }}>
                When you purchase electronics on ElectroMart, your orders and tracking status will appear here.
              </p>
              <Link to="/shop" className="btn-primary-orange">
                Explore Store
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {orders.map((ord) => (
                <div
                  key={ord.orderId}
                  style={{
                    background: '#ffffff',
                    borderRadius: '18px',
                    border: '1px solid var(--border-light)',
                    padding: '24px 28px',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Order Placed on {ord.date}</span>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-heading)', fontFamily: 'monospace' }}>
                        {ord.orderId}
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <span style={{ background: 'var(--orange-subtle)', color: 'var(--primary-orange)', padding: '5px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: 800 }}>
                        {ord.status}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                    {ord.items && ord.items.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                        <span style={{ color: 'var(--dark-heading)', fontWeight: 600 }}>
                          {item.title} &times; {item.quantity}
                        </span>
                        <span style={{ fontWeight: 700, color: 'var(--dark-slate)' }}>
                          LKR {(item.price * item.quantity).toLocaleString()}.00
                        </span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '16px', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                      <span style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>Total Amount:</span>
                      <strong style={{ fontSize: '16px', color: 'var(--primary-orange)', marginLeft: '8px' }}>
                        LKR {ord.total.toLocaleString()}.00
                      </strong>
                      <span style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginLeft: '8px' }}>
                        ({ord.paymentMethod})
                      </span>
                    </div>

                    <Link
                      to={`/track-order?id=${ord.orderId}`}
                      style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13.5px', fontWeight: 700, color: 'var(--primary-orange)' }}
                    >
                      <span>Track Live Status</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


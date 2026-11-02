import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, ArrowLeft } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const CartPage = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    deliveryFee,
    discountAmount,
    grandTotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon
  } = useCart();

  const [inputCode, setInputCode] = useState('');

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    applyCoupon(inputCode);
    setInputCode('');
  };

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container-fluid px-header">
          <div style={{ maxWidth: '500px', margin: '0 auto', background: '#ffffff', padding: '50px 30px', borderRadius: '20px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--orange-subtle)', color: 'var(--primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
              <ShoppingBag size={40} />
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--dark-heading)', marginBottom: '10px' }}>
              Your Cart is Empty
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', marginBottom: '28px' }}>
              Explore our wide selection of Smart TVs, solar lighting, fans, and electrical accessories in Sri Lanka.
            </p>
            <Link to="/shop" className="btn-primary-orange">
              <span>Start Shopping</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '36px 0 70px 0' }}>
      <div className="container-fluid px-header">
        {/* Breadcrumb */}
        <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
          <Link to="/" style={{ color: 'var(--text-main)', fontWeight: 600 }}>Home</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: 'var(--primary-orange)', fontWeight: 600 }}>Shopping Cart</span>
        </div>

        {/* Title */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '14px' }}>
          <div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--dark-heading)' }}>
              Shopping Cart
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', marginTop: '4px' }}>
              Review your items before proceeding to secure Sri Lanka checkout.
            </p>
          </div>
          <button
            onClick={clearCart}
            style={{ fontSize: '13px', color: '#ef4444', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Trash2 size={14} />
            <span>Clear Cart</span>
          </button>
        </div>

        {/* 2-Column Cart Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.75fr 1fr', gap: '32px', alignItems: 'start' }}>
          {/* Left Table / List */}
          <div style={{ background: '#ffffff', borderRadius: '18px', border: '1px solid var(--border-light)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ padding: '16px 24px', background: '#f8f9fa', borderBottom: '1px solid var(--border-light)', display: 'grid', gridTemplateColumns: '2.5fr 1fr 1fr 1fr auto', fontSize: '13px', fontWeight: 700, color: 'var(--dark-slate)' }}>
              <span>Product</span>
              <span>Unit Price</span>
              <span style={{ textAlign: 'center' }}>Quantity</span>
              <span style={{ textAlign: 'right' }}>Subtotal</span>
              <span></span>
            </div>

            <div style={{ padding: '0 24px' }}>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2.5fr 1fr 1fr 1fr auto',
                    alignItems: 'center',
                    padding: '20px 0',
                    borderBottom: '1px solid #f1f5f9',
                    gap: '12px'
                  }}
                >
                  {/* Thumbnail + Title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '70px', height: '70px', background: '#f8f9fa', borderRadius: '10px', padding: '6px', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <img src={item.image} alt={item.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </div>
                    <div>
                      <Link to={`/product/${item.id}`} style={{ fontSize: '14px', fontWeight: 700, color: 'var(--dark-heading)', display: 'block', lineHeight: 1.35 }}>
                        {item.title}
                      </Link>
                      <span style={{ fontSize: '11.5px', color: 'var(--primary-orange)', fontWeight: 600 }}>
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Unit price */}
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--dark-slate)' }}>
                    LKR {item.price.toLocaleString()}.00
                  </div>

                  {/* Quantity selector */}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-light)', borderRadius: '8px', overflow: 'hidden' }}>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{ width: '28px', height: '32px', background: '#f8f9fa', fontWeight: 700, fontSize: '14px' }}
                      >
                        -
                      </button>
                      <span style={{ width: '32px', textAlign: 'center', fontSize: '13px', fontWeight: 700 }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{ width: '28px', height: '32px', background: '#f8f9fa', fontWeight: 700, fontSize: '14px' }}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Line Total */}
                  <div style={{ textAlign: 'right', fontSize: '14.5px', fontWeight: 800, color: 'var(--dark-heading)' }}>
                    LKR {(item.price * item.quantity).toLocaleString()}.00
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{ color: '#94a3b8', padding: '6px' }}
                    title="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div style={{ padding: '16px 24px', background: '#fafafa', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Link to="/shop" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13.5px', fontWeight: 700, color: 'var(--primary-orange)' }}>
                <ArrowLeft size={16} />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>

          {/* Right Summary Card */}
          <div style={{ background: '#ffffff', borderRadius: '18px', border: '1px solid var(--border-light)', padding: '28px', boxShadow: 'var(--shadow-sm)' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--dark-heading)', marginBottom: '20px' }}>
              Order Summary
            </h2>

            {/* Voucher input form */}
            <form onSubmit={handleApplyCoupon} style={{ marginBottom: '22px' }}>
              <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '8px' }}>
                Coupon / Promo Code
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '0 10px', flex: 1, background: '#f8f9fa' }}>
                  <Tag size={15} color="var(--primary-orange)" />
                  <input
                    type="text"
                    placeholder="e.g. ELECTRO10"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '13px', textTransform: 'uppercase' }}
                  />
                </div>
                <button
                  type="submit"
                  style={{ background: 'var(--dark-slate)', color: '#ffffff', fontWeight: 700, fontSize: '13px', padding: '0 16px', borderRadius: '8px' }}
                >
                  Apply
                </button>
              </div>
              {appliedCoupon && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--orange-subtle)', padding: '6px 10px', borderRadius: '6px', marginTop: '8px', fontSize: '12px', color: 'var(--primary-orange)', fontWeight: 600 }}>
                  <span>Applied: {appliedCoupon.code}</span>
                  <button onClick={removeCoupon} style={{ color: '#ef4444', fontWeight: 700 }}>Remove</button>
                </div>
              )}
            </form>

            {/* Calculations breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', borderBottom: '1px solid var(--border-light)', paddingBottom: '18px', marginBottom: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                <span>Subtotal</span>
                <span style={{ fontWeight: 600, color: 'var(--dark-heading)' }}>LKR {subtotal.toLocaleString()}.00</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                <span>Delivery (Sri Lanka)</span>
                <span style={{ fontWeight: 600, color: deliveryFee === 0 ? '#10b981' : 'var(--dark-heading)' }}>
                  {deliveryFee === 0 ? 'FREE' : `LKR ${deliveryFee.toLocaleString()}.00`}
                </span>
              </div>

              {discountAmount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10b981', fontWeight: 600 }}>
                  <span>Discount ({appliedCoupon?.code})</span>
                  <span>-LKR {discountAmount.toLocaleString()}.00</span>
                </div>
              )}
            </div>

            {/* Grand Total */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '24px' }}>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--dark-heading)' }}>Total</span>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 900, color: 'var(--primary-orange)' }}>
                  LKR {grandTotal.toLocaleString()}.00
                </span>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Includes all taxes &amp; warranty</div>
              </div>
            </div>

            {/* Checkout CTA */}
            <button
              onClick={() => navigate('/checkout')}
              className="btn-primary-orange"
              style={{ width: '100%', padding: '14px', fontSize: '15px' }}
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={17} />
            </button>

            {/* Guarantee */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '16px', fontSize: '12px', color: 'var(--text-muted)' }}>
              <ShieldCheck size={16} color="var(--primary-orange)" />
              <span>Safe Cash on Delivery Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


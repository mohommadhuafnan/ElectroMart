import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  CheckCircle2,
  ShieldCheck,
  Truck,
  CreditCard,
  Building,
  ArrowRight,
  PackageCheck
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { SRI_LANKA_DISTRICTS } from '../../data/products';

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, subtotal, deliveryFee, discountAmount, grandTotal, clearCart } = useCart();
  const { user, addOrder } = useAuth();

  const [formData, setFormData] = useState({
    firstName: user ? user.name.split(' ')[0] : 'Abdul',
    lastName: user ? user.name.split(' ')[1] || 'Basith' : 'Basith',
    phone: user ? user.phone : '+94 77 766 6961',
    email: user ? user.email : 'abdul.basith@example.lk',
    address: '57, 1st Cross Street',
    district: 'Vavuniya',
    city: 'Vavuniya',
    postalCode: '43000',
    orderNotes: 'Please call before delivery'
  });

  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdOrder, setCreatedOrder] = useState(null);

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const order = addOrder({
        customerName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        deliveryAddress: `${formData.address}, ${formData.city}, ${formData.district} District`,
        items: cartItems.map(item => ({
          title: item.title,
          quantity: item.quantity,
          price: item.price
        })),
        total: grandTotal,
        paymentMethod: paymentMethod === 'cod' ? 'Cash on Delivery' : (paymentMethod === 'card' ? 'Online Card Payment' : 'Bank Transfer')
      });

      setCreatedOrder(order);
      clearCart();
      setIsSubmitting(false);
    }, 1200);
  };

  if (createdOrder) {
    return (
      <div style={{ padding: '60px 0 80px 0' }}>
        <div className="container-fluid px-header">
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                padding: '48px 36px',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-float)',
                textAlign: 'center'
              }}
            >
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#ecfdf5', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
              <CheckCircle2 size={46} />
            </div>

            <h1 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--dark-heading)', marginBottom: '8px' }}>
              Order Confirmed!
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', marginBottom: '24px' }}>
              Thank you for ordering with ElectroMart Sri Lanka. Your order has been placed successfully.
            </p>

            {/* Order Details Card */}
            <div
              style={{
                background: '#f8f9fa',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'left',
                border: '1px solid #eef2f6',
                marginBottom: '28px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Order Reference ID:</span>
                <strong style={{ fontSize: '15px', color: 'var(--primary-orange)', fontFamily: 'monospace' }}>
                  {createdOrder.orderId}
                </strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Payment Method:</span>
                <span style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--dark-slate)' }}>
                  {createdOrder.paymentMethod}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Total Amount:</span>
                <span style={{ fontSize: '15px', fontWeight: 800, color: 'var(--dark-heading)' }}>
                  LKR {createdOrder.total.toLocaleString()}.00
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Delivery Destination:</span>
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--dark-slate)', textAlign: 'right', maxWidth: '240px' }}>
                  {createdOrder.deliveryAddress}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <Link
                to={`/track-order?id=${createdOrder.orderId}`}
                className="btn-primary-orange"
                style={{ fontSize: '14px', padding: '12px 24px' }}
              >
                <PackageCheck size={17} />
                <span>Track My Order Now</span>
              </Link>
              <Link
                to="/shop"
                className="btn-outline-dark"
                style={{ fontSize: '14px', padding: '12px 20px' }}
              >
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container-fluid px-header">
          <div style={{ maxWidth: '500px', margin: '0 auto', background: '#ffffff', padding: '48px 30px', borderRadius: '20px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <h2>No items in checkout</h2>
            <Link to="/shop" className="btn-primary-orange" style={{ marginTop: '16px' }}>
              Browse Store
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
          <Link to="/cart" style={{ color: 'var(--text-main)', fontWeight: 600 }}>Cart</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: 'var(--primary-orange)', fontWeight: 600 }}>Checkout</span>
        </div>

        <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--dark-heading)', marginBottom: '8px' }}>
          Secure Checkout
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', marginBottom: '32px' }}>
          Enter your delivery details in Sri Lanka to complete your order.
        </p>

        <form onSubmit={handleSubmitOrder}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.75fr 1fr', gap: '32px', alignItems: 'start' }}>
            {/* Left Column: Delivery Info & Payment */}
            <div>
              {/* 1. Customer Details */}
              <div style={{ background: '#ffffff', borderRadius: '18px', border: '1px solid var(--border-light)', padding: '28px', marginBottom: '24px', boxShadow: 'var(--shadow-sm)' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-heading)', marginBottom: '20px' }}>
                  1. Customer &amp; Delivery Information
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '6px' }}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '6px' }}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '6px' }}>
                      Mobile / WhatsApp Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+94 77 xxx xxxx"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '6px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '6px' }}>
                    Street Address &bull; House / Building No *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    placeholder="e.g. 57, 1st Cross Street"
                    value={formData.address}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '14px', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '6px' }}>
                      District *
                    </label>
                    <select
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '13.5px', outline: 'none', background: '#fff' }}
                    >
                      {SRI_LANKA_DISTRICTS.map(d => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '6px' }}>
                      City / Town *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '6px' }}>
                      Postal Code
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '14px', outline: 'none' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '6px' }}>
                    Delivery Notes / Instructions
                  </label>
                  <textarea
                    name="orderNotes"
                    rows="2"
                    value={formData.orderNotes}
                    onChange={handleInputChange}
                    placeholder="e.g. Landmark near post office or specific delivery time"
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--border-light)', fontSize: '13.5px', outline: 'none', resize: 'vertical' }}
                  />
                </div>
              </div>

              {/* 2. Payment Method */}
              <div style={{ background: '#ffffff', borderRadius: '18px', border: '1px solid var(--border-light)', padding: '28px', boxShadow: 'var(--shadow-sm)' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-heading)', marginBottom: '18px' }}>
                  2. Select Payment Method
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {/* COD */}
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '16px 20px',
                      borderRadius: '12px',
                      border: paymentMethod === 'cod' ? '2px solid var(--primary-orange)' : '1px solid var(--border-light)',
                      background: paymentMethod === 'cod' ? 'var(--orange-subtle)' : '#ffffff',
                      cursor: 'pointer'
                    }}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      style={{ accentColor: 'var(--primary-orange)', width: '18px', height: '18px' }}
                    />
                    <Truck size={22} color="var(--primary-orange)" />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: '14.5px', color: 'var(--dark-heading)' }}>
                        Cash on Delivery (Recommended)
                      </div>
                      <div style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>
                        Pay safely in cash to the delivery agent when your parcel arrives.
                      </div>
                    </div>
                    <span style={{ fontSize: '11px', background: '#ecfdf5', color: '#059669', padding: '3px 8px', borderRadius: '4px', fontWeight: 700 }}>
                      POPULAR
                    </span>
                  </label>

                  {/* Card Payment */}
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '16px 20px',
                      borderRadius: '12px',
                      border: paymentMethod === 'card' ? '2px solid var(--primary-orange)' : '1px solid var(--border-light)',
                      background: paymentMethod === 'card' ? 'var(--orange-subtle)' : '#ffffff',
                      cursor: 'pointer'
                    }}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      style={{ accentColor: 'var(--primary-orange)', width: '18px', height: '18px' }}
                    />
                    <CreditCard size={22} color="var(--primary-orange)" />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: '14.5px', color: 'var(--dark-heading)' }}>
                        Visa / MasterCard (Online Payment)
                      </div>
                      <div style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>
                        Simulated secure 256-bit encrypted card checkout for Sri Lanka.
                      </div>
                    </div>
                  </label>

                  {/* Bank Transfer */}
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '16px 20px',
                      borderRadius: '12px',
                      border: paymentMethod === 'bank' ? '2px solid var(--primary-orange)' : '1px solid var(--border-light)',
                      background: paymentMethod === 'bank' ? 'var(--orange-subtle)' : '#ffffff',
                      cursor: 'pointer'
                    }}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={paymentMethod === 'bank'}
                      onChange={() => setPaymentMethod('bank')}
                      style={{ accentColor: 'var(--primary-orange)', width: '18px', height: '18px' }}
                    />
                    <Building size={22} color="var(--primary-orange)" />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: '14.5px', color: 'var(--dark-heading)' }}>
                        Direct Bank Transfer
                      </div>
                      <div style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>
                        Transfer directly to ElectroMart Commercial Bank or BOC account.
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column: Order Review */}
            <div style={{ background: '#ffffff', borderRadius: '18px', border: '1px solid var(--border-light)', padding: '28px', boxShadow: 'var(--shadow-sm)' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-heading)', marginBottom: '16px' }}>
                Your Order ({cartItems.length} items)
              </h2>

              {/* Items summary */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px', marginBottom: '16px' }}>
                {cartItems.map(item => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', fontSize: '13.5px' }}>
                    <div style={{ maxWidth: '200px' }}>
                      <span style={{ fontWeight: 600, color: 'var(--dark-heading)' }}>{item.title}</span>
                      <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>Qty: {item.quantity}</div>
                    </div>
                    <span style={{ fontWeight: 700, color: 'var(--dark-slate)', whiteSpace: 'nowrap' }}>
                      LKR {(item.price * item.quantity).toLocaleString()}.00
                    </span>
                  </div>
                ))}
              </div>

              {/* Pricing breakdown */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                  <span>Subtotal</span>
                  <span>LKR {subtotal.toLocaleString()}.00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                  <span>Delivery (Sri Lanka)</span>
                  <span style={{ color: deliveryFee === 0 ? '#10b981' : 'inherit', fontWeight: 600 }}>
                    {deliveryFee === 0 ? 'FREE' : `LKR ${deliveryFee.toLocaleString()}.00`}
                  </span>
                </div>
                {discountAmount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10b981', fontWeight: 600 }}>
                    <span>Discount</span>
                    <span>-LKR {discountAmount.toLocaleString()}.00</span>
                  </div>
                )}
              </div>

              {/* Grand Total */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '24px' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--dark-heading)' }}>Total Payable</span>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 900, color: 'var(--primary-orange)' }}>
                  LKR {grandTotal.toLocaleString()}.00
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary-orange"
                style={{ width: '100%', padding: '14px', fontSize: '15px' }}
              >
                {isSubmitting ? (
                  <span>Processing Order...</span>
                ) : (
                  <>
                    <span>Place Order Now</span>
                    <ArrowRight size={17} />
                  </>
                )}
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '16px', fontSize: '12px', color: 'var(--text-muted)' }}>
                <ShieldCheck size={16} color="var(--primary-orange)" />
                <span>100% Guaranteed Official Agent Warranty</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};


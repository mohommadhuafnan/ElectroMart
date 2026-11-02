import React, { useState } from 'react';
import {
  Package,
  ShoppingCart,
  Users,
  DollarSign,
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  Truck,
  AlertCircle
} from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../../data/products';
import { useAuth } from '../../context/AuthContext';

export const AdminDashboardPage = () => {
  const { orders } = useAuth();
  const [activeTab, setActiveTab] = useState('inventory');
  const [productsList, setProductsList] = useState(PRODUCTS);

  // Delete product simulation
  const handleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product from the catalogue?')) {
      setProductsList(prev => prev.filter(p => p.id !== id));
    }
  };

  const totalRevenue = orders.reduce((acc, o) => acc + (o.total || 0), 0) + 482000;

  return (
    <div style={{ padding: '36px 0 80px 0' }}>
      <div className="container-fluid px-header">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
          <div>
            <div style={{ display: 'inline-block', background: 'var(--orange-subtle)', color: 'var(--primary-orange)', padding: '3px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '6px' }}>
              CIS 22032 Admin Portal
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--dark-heading)' }}>
              ElectroMart Administration Dashboard
            </h1>
          </div>

          <button
            onClick={() => alert('New product creation form modal')}
            className="btn-primary-orange"
            style={{ fontSize: '14px', padding: '10px 20px' }}
          >
            <Plus size={16} />
            <span>Add New Product</span>
          </button>
        </div>

        {/* 4 Stat Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '32px' }}>
          <div style={{ background: '#ffffff', borderRadius: '16px', padding: '22px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '12.5px', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Total Revenue</span>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'var(--orange-subtle)', color: 'var(--primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <DollarSign size={20} />
              </div>
            </div>
            <div style={{ fontSize: '1.65rem', fontWeight: 900, color: 'var(--dark-heading)' }}>
              LKR {totalRevenue.toLocaleString()}.00
            </div>
            <div style={{ fontSize: '12px', color: '#10b981', fontWeight: 600, marginTop: '4px' }}>
              +18.4% from last month
            </div>
          </div>

          <div style={{ background: '#ffffff', borderRadius: '16px', padding: '22px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '12.5px', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Total Orders</span>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#ecfdf5', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShoppingCart size={20} />
              </div>
            </div>
            <div style={{ fontSize: '1.65rem', fontWeight: 900, color: 'var(--dark-heading)' }}>
              {orders.length + 42} Orders
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
              Across Sri Lanka districts
            </div>
          </div>

          <div style={{ background: '#ffffff', borderRadius: '16px', padding: '22px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '12.5px', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Active Products</span>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#eff6ff', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Package size={20} />
              </div>
            </div>
            <div style={{ fontSize: '1.65rem', fontWeight: 900, color: 'var(--dark-heading)' }}>
              {productsList.length} SKUs
            </div>
            <div style={{ fontSize: '12px', color: '#3b82f6', fontWeight: 600, marginTop: '4px' }}>
              {CATEGORIES.length} Core Categories
            </div>
          </div>

          <div style={{ background: '#ffffff', borderRadius: '16px', padding: '22px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '12.5px', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Customers</span>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#fdf4ff', color: '#a855f7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users size={20} />
              </div>
            </div>
            <div style={{ fontSize: '1.65rem', fontWeight: 900, color: 'var(--dark-heading)' }}>
              156 Users
            </div>
            <div style={{ fontSize: '12px', color: '#a855f7', fontWeight: 600, marginTop: '4px' }}>
              Registered in portal
            </div>
          </div>
        </div>

        {/* Tab switch */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
          <button
            onClick={() => setActiveTab('inventory')}
            style={{
              padding: '10px 20px',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '14px',
              background: activeTab === 'inventory' ? 'var(--primary-orange)' : '#ffffff',
              color: activeTab === 'inventory' ? '#ffffff' : 'var(--text-main)',
              border: '1px solid var(--border-light)'
            }}
          >
            Product &amp; Inventory Management ({productsList.length})
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            style={{
              padding: '10px 20px',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '14px',
              background: activeTab === 'orders' ? 'var(--primary-orange)' : '#ffffff',
              color: activeTab === 'orders' ? '#ffffff' : 'var(--text-main)',
              border: '1px solid var(--border-light)'
            }}
          >
            Customer Orders Management ({orders.length})
          </button>
        </div>

        {/* Inventory Table */}
        {activeTab === 'inventory' && (
          <div style={{ background: '#ffffff', borderRadius: '18px', border: '1px solid var(--border-light)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13.5px' }}>
              <thead>
                <tr style={{ background: '#f8f9fa', borderBottom: '1px solid var(--border-light)', color: 'var(--dark-slate)', fontWeight: 700 }}>
                  <th style={{ padding: '14px 20px' }}>Product</th>
                  <th style={{ padding: '14px 16px' }}>Category</th>
                  <th style={{ padding: '14px 16px' }}>Brand</th>
                  <th style={{ padding: '14px 16px' }}>Price (LKR)</th>
                  <th style={{ padding: '14px 16px' }}>Stock</th>
                  <th style={{ padding: '14px 16px' }}>Warranty</th>
                  <th style={{ padding: '14px 20px', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {productsList.map((p) => (
                  <tr key={p.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <img src={p.image} alt="" style={{ width: '38px', height: '38px', objectFit: 'contain', background: '#f8f9fa', borderRadius: '6px', padding: '2px' }} />
                      <span style={{ fontWeight: 600, color: 'var(--dark-heading)', maxWidth: '280px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {p.title}
                      </span>
                    </td>
                    <td style={{ padding: '12px 16px' }}>{p.category}</td>
                    <td style={{ padding: '12px 16px', fontWeight: 600 }}>{p.brand}</td>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--primary-orange)' }}>
                      LKR {p.price.toLocaleString()}.00
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{ background: '#ecfdf5', color: '#059669', padding: '3px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: 700 }}>
                        {p.stock} units
                      </span>
                    </td>
                    <td style={{ padding: '12px 16px', fontSize: '12px', color: 'var(--text-muted)' }}>
                      {p.warranty}
                    </td>
                    <td style={{ padding: '12px 20px', textAlign: 'right' }}>
                      <button
                        onClick={() => alert(`Edit ${p.title}`)}
                        style={{ color: '#3b82f6', marginRight: '10px' }}
                        title="Edit"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(p.id)}
                        style={{ color: '#ef4444' }}
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Orders Table */}
        {activeTab === 'orders' && (
          <div style={{ background: '#ffffff', borderRadius: '18px', border: '1px solid var(--border-light)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13.5px' }}>
              <thead>
                <tr style={{ background: '#f8f9fa', borderBottom: '1px solid var(--border-light)', color: 'var(--dark-slate)', fontWeight: 700 }}>
                  <th style={{ padding: '14px 20px' }}>Order ID</th>
                  <th style={{ padding: '14px 16px' }}>Date</th>
                  <th style={{ padding: '14px 16px' }}>Customer / Address</th>
                  <th style={{ padding: '14px 16px' }}>Payment Method</th>
                  <th style={{ padding: '14px 16px' }}>Amount (LKR)</th>
                  <th style={{ padding: '14px 16px' }}>Status</th>
                  <th style={{ padding: '14px 20px', textAlign: 'right' }}>Update</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((ord) => (
                  <tr key={ord.orderId} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '14px 20px', fontFamily: 'monospace', fontWeight: 800, color: 'var(--primary-orange)' }}>
                      {ord.orderId}
                    </td>
                    <td style={{ padding: '14px 16px', color: 'var(--text-muted)' }}>{ord.date}</td>
                    <td style={{ padding: '14px 16px' }}>
                      <div style={{ fontWeight: 600, color: 'var(--dark-heading)' }}>{ord.customerName || 'Customer'}</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{ord.deliveryAddress}</div>
                    </td>
                    <td style={{ padding: '14px 16px', fontWeight: 600 }}>{ord.paymentMethod}</td>
                    <td style={{ padding: '14px 16px', fontWeight: 800 }}>
                      LKR {ord.total.toLocaleString()}.00
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      <span style={{ background: 'var(--orange-subtle)', color: 'var(--primary-orange)', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: 700 }}>
                        {ord.status}
                      </span>
                    </td>
                    <td style={{ padding: '14px 20px', textAlign: 'right' }}>
                      <select
                        defaultValue={ord.status}
                        onChange={(e) => alert(`Updated ${ord.orderId} status to: ${e.target.value}`)}
                        style={{ border: '1px solid var(--border-light)', borderRadius: '6px', padding: '4px 8px', fontSize: '12px', outline: 'none' }}
                      >
                        <option value="Order Placed">Order Placed</option>
                        <option value="Packed & Verified">Packed &amp; Verified</option>
                        <option value="In Transit">In Transit</option>
                        <option value="Out for Delivery">Out for Delivery</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};


import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

export const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (item) => {
    addToCart(item, 1);
    removeFromWishlist(item.id);
  };

  const handleAddAllToCart = () => {
    wishlistItems.forEach(item => addToCart(item, 1));
    clearWishlist();
  };

  if (wishlistItems.length === 0) {
    return (
      <div style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container-fluid px-header">
          <div style={{ maxWidth: '500px', margin: '0 auto', background: '#ffffff', padding: '50px 30px', borderRadius: '20px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#ffe4e6', color: '#e11d48', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
              <Heart size={40} />
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--dark-heading)', marginBottom: '10px' }}>
              Your Wishlist is Empty
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', marginBottom: '28px' }}>
              Found something you love? Tap the heart icon on any product to save it for later.
            </p>
            <Link to="/shop" className="btn-primary-orange">
              <span>Explore Products</span>
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
          <span style={{ color: 'var(--primary-orange)', fontWeight: 600 }}>My Wishlist</span>
        </div>

        {/* Title */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '14px' }}>
          <div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--dark-heading)' }}>
              My Wishlist ({wishlistItems.length})
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '14.5px', marginTop: '4px' }}>
              Items you have saved to purchase later on ElectroMart.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={handleAddAllToCart}
              className="btn-primary-orange"
              style={{ fontSize: '13.5px', padding: '10px 20px' }}
            >
              <ShoppingBag size={16} />
              <span>Add All to Cart</span>
            </button>
            <button
              onClick={clearWishlist}
              style={{ fontSize: '13px', color: '#ef4444', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <Trash2 size={14} />
              <span>Clear All</span>
            </button>
          </div>
        </div>

        {/* Wishlist Items Table / Cards */}
        <div style={{ background: '#ffffff', borderRadius: '18px', border: '1px solid var(--border-light)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ padding: '16px 24px', background: '#f8f9fa', borderBottom: '1px solid var(--border-light)', display: 'grid', gridTemplateColumns: '3fr 1.2fr 1fr auto', fontSize: '13px', fontWeight: 700, color: 'var(--dark-slate)' }}>
            <span>Product</span>
            <span>Price</span>
            <span>Stock Status</span>
            <span>Actions</span>
          </div>

          <div style={{ padding: '0 24px' }}>
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '3fr 1.2fr 1fr auto',
                  alignItems: 'center',
                  padding: '20px 0',
                  borderBottom: '1px solid #f1f5f9',
                  gap: '16px'
                }}
              >
                {/* Thumbnail + Details */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '70px', height: '70px', background: '#f8f9fa', borderRadius: '10px', padding: '6px', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <img src={item.image} alt={item.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <Link to={`/product/${item.id}`} style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--dark-heading)', display: 'block', lineHeight: 1.35 }}>
                      {item.title}
                    </Link>
                    <span style={{ fontSize: '12px', color: 'var(--primary-orange)', fontWeight: 600 }}>
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div>
                  {item.regularPrice && (
                    <span style={{ fontSize: '12px', color: '#94a3b8', textDecoration: 'line-through', display: 'block' }}>
                      LKR {item.regularPrice.toLocaleString()}.00
                    </span>
                  )}
                  <span style={{ fontSize: '15px', fontWeight: 800, color: 'var(--dark-heading)' }}>
                    LKR {item.price.toLocaleString()}.00
                  </span>
                </div>

                {/* Stock */}
                <div>
                  <span style={{ background: '#ecfdf5', color: '#059669', fontSize: '11.5px', fontWeight: 700, padding: '4px 10px', borderRadius: '6px' }}>
                    In Stock
                  </span>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button
                    onClick={() => handleMoveToCart(item)}
                    className="btn-add-to-cart"
                    style={{ padding: '8px 16px', fontSize: '13px', width: 'auto' }}
                  >
                    <ShoppingBag size={15} />
                    <span>Move to Cart</span>
                  </button>

                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    style={{ color: '#94a3b8', padding: '6px' }}
                    title="Remove from Wishlist"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


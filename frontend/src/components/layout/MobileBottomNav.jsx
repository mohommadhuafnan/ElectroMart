import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, LayoutGrid, ShoppingBag, Heart, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';

export const MobileBottomNav = () => {
  const location = useLocation();
  const { totalItemsCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, logout } = useAuth();
  const [accountSubmenuOpen, setAccountSubmenuOpen] = useState(false);
  const accountRef = useRef(null);

  // Close account submenu when route changes
  useEffect(() => {
    setAccountSubmenuOpen(false);
  }, [location.pathname]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setAccountSubmenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <nav className="nwm-mobile-bottom-nav" aria-label="Mobile Navigation">
      {/* Home */}
      <div className={`nwm-nav-item ${location.pathname === '/' ? 'active' : ''}`}>
        <Link to="/">
          <Home size={20} strokeWidth={location.pathname === '/' ? 2.2 : 1.8} />
          <span>HOME</span>
        </Link>
      </div>

      {/* Shop */}
      <div className={`nwm-nav-item ${location.pathname.startsWith('/shop') ? 'active' : ''}`}>
        <Link to="/shop">
          <LayoutGrid size={20} strokeWidth={location.pathname.startsWith('/shop') ? 2.2 : 1.8} />
          <span>SHOP</span>
        </Link>
      </div>

      {/* Cart with count bubble (Always shows badge '0' matching MetaBuy screenshot) */}
      <div className={`nwm-nav-item nwm-cart-nav ${location.pathname === '/cart' ? 'active' : ''}`}>
        <Link to="/cart">
          <div className="cart-icon-wrap">
            <ShoppingBag size={20} strokeWidth={location.pathname === '/cart' ? 2.2 : 1.8} />
            <span className="nwm-cart-count-mb">{totalItemsCount}</span>
          </div>
          <span>CART</span>
        </Link>
      </div>

      {/* Wishlist */}
      <div className={`nwm-nav-item ${location.pathname === '/wishlist' ? 'active' : ''}`}>
        <Link to="/wishlist">
          <div className="cart-icon-wrap">
            <Heart size={20} strokeWidth={location.pathname === '/wishlist' ? 2.2 : 1.8} />
            {wishlistCount > 0 && (
              <span className="nwm-cart-count-mb">{wishlistCount}</span>
            )}
          </div>
          <span>WISHLIST</span>
        </Link>
      </div>

      {/* Account with Popover */}
      <div
        ref={accountRef}
        className={`nwm-nav-item nwm-mobile-account-toggle ${accountSubmenuOpen ? 'active-menu' : ''}`}
      >
        <button
          type="button"
          className="nwm-mobile-trigger"
          onClick={() => setAccountSubmenuOpen(!accountSubmenuOpen)}
          aria-label="Account Menu"
        >
          <User size={20} strokeWidth={1.8} />
          <span>ACCOUNT</span>
        </button>

        {accountSubmenuOpen && (
          <div className="nwm-mobile-account-submenu">
            {user ? (
              <>
                <div style={{ padding: '8px 16px', borderBottom: '1px solid #f0f0f0', fontSize: '12px' }}>
                  <div style={{ color: '#888' }}>Signed in as</div>
                  <strong style={{ color: '#111', fontSize: '13px' }}>{user.name}</strong>
                </div>
                <Link to="/orders">My Orders</Link>
                <Link to="/track-order">Track Order</Link>
                <Link to="/admin">Admin Dashboard</Link>
                <button
                  onClick={() => {
                    logout();
                    setAccountSubmenuOpen(false);
                  }}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '10px 16px',
                    border: 'none',
                    background: 'none',
                    color: '#ef4444',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer'
                  }}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login">Login / Register</Link>
                <Link to="/track-order">Track Order</Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};


import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Truck,
  RotateCcw,
  Lock,
  Star,
  Headphones,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { Logo } from '../common/Logo';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';
import { CATEGORIES } from '../../data/products';

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalItemsCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, logout } = useAuth();

  const [selectedCat, setSelectedCat] = useState('0');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileSearchQuery, setMobileSearchQuery] = useState('');
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Measure header height and track scroll for sticky behavior
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    const handleScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop;
      if (scrollPos > 240) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update header height on resize
  useEffect(() => {
    const handleResize = () => {
      if (headerRef.current && !isSticky) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSticky]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set('q', searchQuery.trim());
    if (selectedCat !== '0') params.set('cat', selectedCat);
    navigate(`/shop?${params.toString()}`);
  };

  const handleMobileSearchSubmit = (e) => {
    e.preventDefault();
    if (mobileSearchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(mobileSearchQuery.trim())}`);
      setMobileSearchQuery('');
    }
  };

  return (
    <>
      {/* Spacer to prevent page jump when header becomes fixed/sticky */}
      {isSticky && (
        <div
          className="nwm-header-spacer"
          style={{ height: `${headerHeight}px`, width: '100%' }}
        />
      )}

      <header
        ref={headerRef}
        className={`nwm-header nwm-premium-header-two ${isSticky ? 'nwm-sticky-active' : ''}`}
      >
        {/* 1. Main Header Bar (Desktop & Mobile) */}
        <div className="nwm-main-header">
          <div className="container-fluid px-header">
            <div className="metabuy-header-row">
              {/* Logo */}
              <div className="metabuy-logo-column">
                <Logo variant="header" />
              </div>

              {/* Mobile Inline Search Bar (Between Logo and Hamburger, visible on mobile only) */}
              <div className="mobile-search-bar-inline d-lg-none">
                <form onSubmit={handleMobileSearchSubmit} className="nwm-mobile-inline-form">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={mobileSearchQuery}
                    onChange={(e) => setMobileSearchQuery(e.target.value)}
                    className="nwm-mobile-search-input"
                  />
                  <button type="submit" className="nwm-mobile-search-btn" aria-label="Search">
                    <Search size={14} />
                  </button>
                </form>
              </div>

              {/* Desktop Search Bar (Hidden on Mobile) */}
              <div className="metabuy-search-column d-none d-lg-block">
                <form onSubmit={handleSearchSubmit} className="metabuy-search-form">
                  <div className="metabuy-search-pill">
                    {/* Category Dropdown */}
                    <div className="metabuy-cat-dropdown">
                      <select
                        value={selectedCat}
                        onChange={(e) => setSelectedCat(e.target.value)}
                        aria-label="Category"
                      >
                        <option value="0">Category</option>
                        {CATEGORIES.map((cat) => (
                          <option key={cat.slug} value={cat.slug}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={14} className="cat-chevron" />
                    </div>

                    {/* Input Field */}
                    <input
                      type="text"
                      className="metabuy-search-field"
                      placeholder="Looking for something..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />

                    {/* Circular Orange Submit Button */}
                    <button type="submit" className="metabuy-search-circle-btn" aria-label="Search">
                      <Search size={16} />
                    </button>
                  </div>
                </form>
              </div>

              {/* Right: Desktop Actions & Mobile Hamburger */}
              <div className="metabuy-header-right-side">
                {/* Desktop Action Icons (Account, Wishlist, Cart) */}
                <div className="metabuy-actions-column d-none d-lg-flex">
                  {/* Account */}
                  <div
                    className="metabuy-action-item"
                    onMouseEnter={() => setAccountMenuOpen(true)}
                    onMouseLeave={() => setAccountMenuOpen(false)}
                  >
                    <Link to={user ? "/orders" : "/login"} className="metabuy-action-link">
                      <div className="metabuy-action-icon">
                        <User size={22} strokeWidth={1.5} />
                      </div>
                      <span className="metabuy-action-label">Account</span>
                    </Link>

                    {accountMenuOpen && (
                      <div className="metabuy-dropdown-menu">
                        {user ? (
                          <>
                            <div className="metabuy-user-info">
                              <span className="user-greeting">Signed in as</span>
                              <strong className="user-name">{user.name}</strong>
                            </div>
                            <Link to="/orders" className="metabuy-menu-item">My Orders</Link>
                            <Link to="/track-order" className="metabuy-menu-item">Track Order</Link>
                            <Link to="/admin" className="metabuy-menu-item">Admin Dashboard</Link>
                            <button onClick={logout} className="metabuy-menu-item text-danger">Sign Out</button>
                          </>
                        ) : (
                          <>
                            <Link to="/login" className="metabuy-menu-item">Login / Register</Link>
                            <Link to="/track-order" className="metabuy-menu-item">Track Order</Link>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Wishlist */}
                  <div className="metabuy-action-item">
                    <Link to="/wishlist" className="metabuy-action-link">
                      <div className="metabuy-action-icon">
                        <Heart size={22} strokeWidth={1.5} />
                        {wishlistCount > 0 && (
                          <span className="metabuy-badge-count">{wishlistCount}</span>
                        )}
                      </div>
                      <span className="metabuy-action-label">Wishlist</span>
                    </Link>
                  </div>

                  {/* Cart */}
                  <div className="metabuy-action-item">
                    <Link to="/cart" className="metabuy-action-link">
                      <div className="metabuy-action-icon">
                        <ShoppingCart size={22} strokeWidth={1.5} />
                        <span className="metabuy-badge-count">{totalItemsCount}</span>
                      </div>
                      <span className="metabuy-action-label">Cart</span>
                    </Link>
                  </div>
                </div>

                {/* Mobile Hamburger Toggle Button */}
                <div className="nwm-mobile-controls d-lg-none">
                  <button
                    className="nwm-mobile-btn menu-toggle"
                    onClick={() => setMobileMenuOpen(true)}
                    aria-label="Open Navigation Menu"
                  >
                    <Menu size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Dynamic Desktop Navigation Bar (Home, Shop, About, Contact | Track My Order...) */}
        <div className="nwm-bottom-header d-none d-lg-block">
          <div className="container-fluid px-header">
            <nav className="metabuy-nav-centered">
              {/* Main Menu Links */}
              <ul className="metabuy-menu-left">
                <li>
                  <Link to="/" className={`metabuy-nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className={`metabuy-nav-link ${location.pathname === '/shop' ? 'active' : ''}`}>
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={`metabuy-nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={`metabuy-nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
                    Contact
                  </Link>
                </li>
              </ul>

              {/* Thin Divider Line */}
              <span className="metabuy-menu-divider"></span>

              {/* Secondary Menu Links */}
              <ul className="metabuy-menu-right">
                <li>
                  <Link to="/track-order" className="metabuy-nav-link">
                    Track My Order
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="metabuy-nav-link">
                    Cart
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="metabuy-nav-link">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="metabuy-nav-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="metabuy-nav-link">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" className="metabuy-nav-link">
                    Wishlist
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* 3. Signature Orange Feature Bar (Exact Metabuy Style - Hidden when Sticky or Mobile) */}
        <div className="nwm-feature-bar d-none d-lg-block">
          <div className="container-fluid px-header">
            <div className="metabuy-feature-items">
              <div className="metabuy-feat-item">
                <Truck size={17} />
                <span>Cash on Delivery</span>
              </div>
              <div className="metabuy-feat-item">
                <RotateCcw size={17} />
                <span>Easy 14 Day Returns</span>
              </div>
              <div className="metabuy-feat-item">
                <Lock size={16} />
                <span>Secure Payment</span>
              </div>
              <div className="metabuy-feat-item">
                <Star size={16} />
                <span>Top Rated Service</span>
              </div>
              <div className="metabuy-feat-item">
                <Headphones size={17} />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 4. Mobile Slide-in Drawer Menu (Exact Match to MetaBuy Overlay) */}
      <div className={`nwm-mobile-overlay ${mobileMenuOpen ? 'active' : ''}`}>
        {/* Backdrop click to close */}
        <div
          className="nwm-overlay-backdrop"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div className="nwm-overlay-inner">
          {/* Header */}
          <div className="nwm-overlay-header">
            <h3>Main Menu</h3>
            <button
              className="close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="nwm-overlay-content">
            <ul className="nwm-mobile-menu-list">
              <li>
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              </li>
              <li>
                <Link to="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              </li>
              <li>
                <Link to="/track-order" onClick={() => setMobileMenuOpen(false)}>Track My Order</Link>
              </li>
              <li>
                <Link to="/wishlist" onClick={() => setMobileMenuOpen(false)}>My Wishlist</Link>
              </li>
              <li>
                <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>Shopping Cart</Link>
              </li>
            </ul>

            {/* Quick Categories in Drawer */}
            <div style={{ marginTop: '24px' }}>
              <div className="section-title">Shop by Category</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/shop?cat=${cat.slug}`}
                    className="cat-tag"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{cat.name}</span>
                    <span style={{ color: 'var(--primary-orange)', fontWeight: 700 }}>&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

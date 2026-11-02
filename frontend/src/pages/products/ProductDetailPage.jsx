import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Check,
  Heart,
  ShoppingBag,
  Zap
} from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { ProductCard } from '../../components/products/ProductCard';

export const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const product = PRODUCTS.find(p => p.id === Number(id)) || PRODUCTS[0];
  const [selectedImage, setSelectedImage] = useState(
    product.images ? product.images[0] : product.image
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specs');
  const [isAdded, setIsAdded] = useState(false);

  // Sync state whenever the product id changes (e.g. clicking a related product)
  useEffect(() => {
    setSelectedImage(product.images ? product.images[0] : product.image);
    setQuantity(1);
    setIsAdded(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product.id]);

  // Related products from same category, plus fallbacks to guarantee 5 cards in grid
  let related = PRODUCTS.filter(
    p => p.categorySlug === product.categorySlug && p.id !== product.id
  );
  if (related.length < 5) {
    const others = PRODUCTS.filter(
      p => p.id !== product.id && p.categorySlug !== product.categorySlug
    );
    related = [...related, ...others];
  }
  const relatedProducts = related.slice(0, 5);

  const isFavorited = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1800);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/checkout');
  };

  return (
    <div className="nwm-single-product-container">
      <div className="container-fluid px-header">
        {/* Breadcrumb Navigation */}
        <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px' }}>
          <Link to="/" style={{ color: 'var(--text-main)', fontWeight: 600 }}>Home</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <Link to="/shop" style={{ color: 'var(--text-main)', fontWeight: 600 }}>Shop</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <Link to={`/shop?cat=${product.categorySlug}`} style={{ color: 'var(--text-main)', fontWeight: 600 }}>
            {product.category}
          </Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: 'var(--primary-orange)', fontWeight: 600 }}>{product.title}</span>
        </div>

        {/* Single Product Showcase (Exact MetaBuy 2-Column Grid) */}
        <div className="nwm-single-product-layout">
          {/* Left Column: Gallery */}
          <div>
            <div className="nwm-gallery-box">
              {product.regularPrice && (
                <span className="nwm-gallery-badge">ON SALE</span>
              )}
              <img
                src={selectedImage}
                alt={product.title}
                className="nwm-gallery-main-img"
              />
            </div>

            {/* Thumbnails */}
            {product.images && product.images.length > 1 && (
              <div className="nwm-gallery-thumbs">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`nwm-thumb-btn ${selectedImage === img ? 'active' : ''}`}
                    title="Select view"
                  >
                    <img src={img} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Details & Actions */}
          <div className="nwm-details-col">
            {/* Category Breadcrumb */}
            <div className="nwm-cat-breadcrumb">
              <Link to={`/shop?cat=${product.categorySlug}`}>
                {product.category}
              </Link>
            </div>

            {/* Product Title */}
            <h1 className="nwm-main-title">{product.title}</h1>

            {/* Ratings & Stock Availability */}
            <div className="nwm-rating-row">
              <div className="nwm-stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    fill={i < Math.floor(product.rating || 5) ? '#f59e0b' : 'none'}
                  />
                ))}
                <span className="nwm-rating-count">
                  {product.rating} ({product.reviewsCount || 18} Customer Reviews)
                </span>
              </div>

              <div className="nwm-in-stock-badge">
                ● In Stock ({product.stock || 15} Available in Sri Lanka)
              </div>
            </div>

            {/* Price Area (Regular price strikethrough + Large orange sale price) */}
            <div className="nwm-price-area">
              {product.regularPrice && (
                <del>
                  LKR {product.regularPrice.toLocaleString()}.00
                </del>
              )}
              <ins>
                <span className="nwm-current-price">
                  LKR {product.price.toLocaleString()}.00
                </span>
              </ins>
            </div>

            {/* Official Warranty Callout Banner */}
            <div className="nwm-warranty-banner">
              <ShieldCheck size={20} color="var(--primary-orange)" />
              <span>{product.warranty || '1 Year Official Agent Warranty'}</span>
            </div>

            {/* Product Short Description */}
            <p className="nwm-product-short-desc">
              {product.description}
            </p>

            {/* Quantity + Add to Cart + Buy Now + Wishlist Row (Exact MetaBuy Style) */}
            <div className="nwm-cart-action-row">
              {/* Touchspin Quantity Selector */}
              <div className="nwm-qty-box">
                <button
                  className="nwm-qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <div className="nwm-qty-val">{quantity}</div>
                <button
                  className="nwm-qty-btn"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button (Solid Orange, 56px height) */}
              <button
                className={`nwm-single-add-cart-btn ${isAdded ? 'added' : ''}`}
                onClick={handleAddToCart}
              >
                <ShoppingBag size={18} />
                <span>{isAdded ? 'ADDED TO CART ✓' : 'ADD TO CART'}</span>
              </button>

              {/* Buy Now Button (Black -> Orange on Hover, 56px height) */}
              <button
                className="nwm-buy-now-btn"
                onClick={handleBuyNow}
              >
                <Zap size={18} fill="currentColor" />
                <span>BUY NOW</span>
              </button>

              {/* Wishlist Button */}
              <button
                className={`nwm-single-wishlist-btn ${isFavorited ? 'active' : ''}`}
                onClick={() => toggleWishlist(product)}
                title={isFavorited ? 'Remove from Wishlist' : 'Add to Wishlist'}
                aria-label="Wishlist"
              >
                <Heart
                  size={20}
                  fill={isFavorited ? '#FB7C00' : 'none'}
                  color={isFavorited ? '#FB7C00' : '#888888'}
                />
              </button>
            </div>

            {/* Brand and SKU Meta */}
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
              <span style={{ marginRight: '16px' }}>
                Brand: <strong style={{ color: '#111' }}>{product.brand}</strong>
              </span>
              <span>
                SKU: <strong style={{ color: '#111' }}>EM-{1000 + product.id}</strong>
              </span>
            </div>

            {/* Value Guarantees / Service Highlights */}
            <div className="nwm-meta-info-list">
              <div className="nwm-meta-info-item">
                <Truck size={16} color="var(--primary-orange)" />
                <span>Islandwide Delivery within 2-4 working days across Sri Lanka</span>
              </div>
              <div className="nwm-meta-info-item">
                <Check size={16} color="#10b981" />
                <span>Cash on Delivery (COD) available for this item</span>
              </div>
              <div className="nwm-meta-info-item">
                <RotateCcw size={16} color="var(--primary-orange)" />
                <span>14-day replacement guarantee for manufacturer defects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section: Specifications, Overview, Reviews */}
        <div className="nwm-tabs-over">
          <ul className="nwm-tabs-nav">
            <li>
              <button
                className={`nwm-tab-nav-btn ${activeTab === 'specs' ? 'active' : ''}`}
                onClick={() => setActiveTab('specs')}
              >
                Technical Specifications
              </button>
            </li>
            <li>
              <button
                className={`nwm-tab-nav-btn ${activeTab === 'desc' ? 'active' : ''}`}
                onClick={() => setActiveTab('desc')}
              >
                Description &amp; Overview
              </button>
            </li>
            <li>
              <button
                className={`nwm-tab-nav-btn ${activeTab === 'reviews' ? 'active' : ''}`}
                onClick={() => setActiveTab('reviews')}
              >
                Customer Reviews ({product.reviewsCount || 18})
              </button>
            </li>
          </ul>

          <div className="nwm-tab-content">
            {activeTab === 'specs' && product.specs && (
              <table className="nwm-spec-table">
                <tbody>
                  {Object.entries(product.specs).map(([key, val]) => (
                    <tr key={key}>
                      <td className="spec-name">{key}</td>
                      <td className="spec-val">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeTab === 'desc' && (
              <div style={{ fontSize: '14.5px', color: 'var(--text-main)', lineHeight: 1.7, maxWidth: '800px' }}>
                <p style={{ marginBottom: '16px' }}>{product.description}</p>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginTop: '20px', marginBottom: '8px', color: '#111' }}>
                  Warranty &amp; Service Policy
                </h4>
                <p style={{ color: 'var(--text-muted)' }}>
                  This item comes with <strong>{product.warranty}</strong>. All repairs, servicing, and component replacements are handled through authorized Sri Lankan agent service centers. Keep your invoice and order confirmation reference handy when claiming service.
                </p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div style={{ maxWidth: '750px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', paddingBottom: '20px', borderBottom: '1px solid #f0f0f0' }}>
                  <div style={{ fontSize: '40px', fontWeight: 900, color: '#111' }}>{product.rating}</div>
                  <div>
                    <div style={{ display: 'flex', gap: '3px', color: '#f59e0b', marginBottom: '4px' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="#f59e0b" />
                      ))}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600 }}>
                      Based on {product.reviewsCount || 18} verified buyer ratings across Sri Lanka
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ background: '#fbfbfb', padding: '16px 20px', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <strong style={{ fontSize: '14px', color: '#111' }}>Kavindu P. (Colombo 07)</strong>
                      <span style={{ fontSize: '12px', color: '#888' }}>Verified Purchase</span>
                    </div>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: 0 }}>
                      Very good quality product, original company warranty received with fast 2-day delivery. Highly recommended!
                    </p>
                  </div>
                  <div style={{ background: '#fbfbfb', padding: '16px 20px', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <strong style={{ fontSize: '14px', color: '#111' }}>Sameera R. (Kandy)</strong>
                      <span style={{ fontSize: '12px', color: '#888' }}>Verified Purchase</span>
                    </div>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: 0 }}>
                      Accurate descriptions, solid packaging, and courteous delivery personnel. Cash on delivery was seamless.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products: Exact MetaBuy 5-Column Grid */}
        <section className="metabuy-related-section">
          <div className="metabuy-sec-head" style={{ marginBottom: '24px' }}>
            <h2 className="metabuy-sec-title">Related Products</h2>
            <div className="metabuy-sec-underline"></div>
          </div>
          <ul className="metabuy-products-5col">
            {relatedProducts.map(rel => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

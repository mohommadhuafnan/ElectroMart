import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [btnText, setBtnText] = useState('ADD TO CART');

  const isFavorited = isInWishlist(product.id);

  const handleAdd = () => {
    addToCart(product, 1);
    setBtnText('ADDED ✓');
    setTimeout(() => {
      setBtnText('ADD TO CART');
    }, 1400);
  };

  return (
    <li className="nwm-exact-card">
      <div className="nwm-exact-card-inner">
        {/* Top Image Box */}
        <div className="nwm-exact-img-wrap">
          {/* On Sale Pill Badge */}
          <span className="nwm-exact-badge">ON SALE</span>

          {/* Wishlist Heart Icon */}
          <button
            className={`nwm-exact-wishlist-btn ${isFavorited ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product);
            }}
            title={isFavorited ? 'Remove from Wishlist' : 'Add to Wishlist'}
            aria-label="Wishlist"
          >
            <Heart
              size={15}
              fill={isFavorited ? '#FB7C00' : 'none'}
              color={isFavorited ? '#FB7C00' : '#888888'}
            />
          </button>

          <Link to={`/product/${product.id}`} className="nwm-img-link">
            <img
              src={product.image}
              alt={product.title}
              loading="lazy"
            />
          </Link>
        </div>

        {/* Content Box */}
        <div className="nwm-exact-content">
          {/* Category Tag */}
          <div className="nwm-exact-category">
            <Link to={`/shop?cat=${product.categorySlug}`}>
              {product.category}
            </Link>
          </div>

          {/* Product Title */}
          <h3 className="nwm-exact-title">
            <Link to={`/product/${product.id}`} title={product.title}>
              {product.title}
            </Link>
          </h3>

          {/* Price Line (Strikethrough grey + Vibrant Orange) */}
          <div className="nwm-exact-price">
            {product.regularPrice && (
              <span className="nwm-del-price">
                LKR {product.regularPrice.toLocaleString()}.00
              </span>
            )}
            <span className="nwm-sale-price">
              LKR {product.price.toLocaleString()}.00
            </span>
          </div>

          {/* Solid Full-Width Orange Button */}
          <div className="nwm-exact-action">
            <button
              className={`nwm-exact-add-btn ${btnText === 'ADDED ✓' ? 'added' : ''}`}
              onClick={handleAdd}
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { CATEGORIES, PRODUCTS, PROMO_BANNERS } from '../../data/products';
import { ProductCard } from '../../components/products/ProductCard';

export const HomePage = () => {
  const [activeCatDot, setActiveCatDot] = useState(0);
  const catSliderRef = useRef(null);

  const handleCatScroll = () => {
    if (catSliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = catSliderRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        const ratio = scrollLeft / maxScroll;
        const dotIndex = Math.min(4, Math.round(ratio * 4));
        setActiveCatDot(dotIndex);
      }
    }
  };

  const scrollToCatDot = (index) => {
    if (catSliderRef.current) {
      const { scrollWidth, clientWidth } = catSliderRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const targetScroll = (index / 4) * maxScroll;
      catSliderRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      setActiveCatDot(index);
    }
  };

  return (
    <div className="metabuy-page-wrap">
      {/* 1. Hero Section (Exact Match to Screenshot 1) */}
      <section className="metabuy-hero-section">
        <div className="container-fluid px-header">
          <div className="metabuy-hero-grid">
            {/* Left Column: Heading & Description (On mobile appears below image) */}
            <div className="metabuy-hero-left">
              <h4 className="metabuy-hero-sub">ELEVATE YOUR LIFESTYLE WITH</h4>
              <h1 className="metabuy-hero-main-title">
                WORLD-CLASS TECH &amp; HOME<br />
                INNOVATION
              </h1>
              <div className="metabuy-hero-divider"></div>
              <p className="metabuy-hero-desc">
                Welcome to ElectroMart, Sri Lanka's home for the latest global tech. From cutting-edge smartphones and smartwatches to essential home appliances, we deliver high-quality innovation straight to your doorstep.
              </p>
            </div>

            {/* Right Column: Appliance Collage Image (On mobile appears on top) */}
            <div className="metabuy-hero-right">
              <img
                src="https://metabuy.lk/wp-content/uploads/2026/04/WIJAYA_MOBILE_HEADER_SECTION_IMAGE-1024x572.png"
                alt="World-Class Tech & Home Innovation"
                className="metabuy-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Category Slider / Cards (Exact Match to Screenshot 1 & 2) */}
      <section className="metabuy-categories-section">
        <div className="container-fluid px-header">
          <div
            className="metabuy-cat-cards-grid"
            ref={catSliderRef}
            onScroll={handleCatScroll}
          >
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?cat=${cat.slug}`}
                className="wm-cat-card"
              >
                <div className="wm-cat-icon-wrapper">
                  <img
                    src={cat.icon}
                    alt={cat.name}
                    loading="lazy"
                  />
                </div>
                <span className="wm-cat-title">{cat.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Category Pagination Dots (Exact Match to Screenshot 2) */}
          <div className="wm-cat-pagination d-lg-none">
            {[0, 1, 2, 3, 4].map((dotIdx) => (
              <span
                key={dotIdx}
                className={`swiper-pagination-bullet ${activeCatDot === dotIdx ? 'swiper-pagination-bullet-active' : ''}`}
                onClick={() => scrollToCatDot(dotIdx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. 4 Promotional Banners (Exact Match to Screenshot 2) */}
      <section className="metabuy-promo-section">
        <div className="container-fluid px-header">
          <div className="metabuy-banners-grid">
            {PROMO_BANNERS.map((b) => (
              <div key={b.id} className="metabuy-banner-card">
                <div className="metabuy-banner-img">
                  <img src={b.image} alt={b.title} />
                </div>
                <div className="metabuy-banner-text">
                  <h3>{b.title}</h3>
                  <div className="metabuy-upto-box">
                    <span className="upto-txt">Up <br />To</span>
                    <span className="upto-num">{b.discount}<sup>%</sup></span>
                  </div>
                  <Link to={b.link} className="metabuy-shopnow-link">
                    <span>Shop Now</span>
                    <span className="shopnow-arrow">&gt;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Products Heading & 5-Column Grid (Exact Match to Screenshot 2 & 3) */}
      <section className="metabuy-featured-section">
        <div className="container-fluid px-header">
          {/* Section Heading with Orange Underline */}
          <div className="metabuy-sec-head">
            <h2 className="metabuy-sec-title">Featured Products</h2>
            <div className="metabuy-sec-underline"></div>
          </div>

          {/* 5-Column Product Grid */}
          <ul className="metabuy-products-5col">
            {PRODUCTS.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

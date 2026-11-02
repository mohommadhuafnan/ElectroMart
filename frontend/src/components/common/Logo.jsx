import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = ({ variant = 'header' }) => {
  const isFooter = variant === 'footer';

  return (
    <Link to="/" className="metabuy-style-logo" aria-label="ElectroMart Home">
      <div className="metabuy-logo-wrap">
        {/* Dynamic faceted geometric emblem matching MetaBuy symbol */}
        <svg
          width="44"
          height="42"
          viewBox="0 0 52 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="metabuy-symbol"
        >
          {/* Left orange facet */}
          <path
            d="M22 4L4 44H16L28 16L22 4Z"
            fill="#FB7C00"
          />
          {/* Inner dark navy facet */}
          <path
            d="M28 16L16 44H26L34 26L28 16Z"
            fill={isFooter ? '#38BDF8' : '#19385C'}
          />
          {/* Right vibrant orange bolt facet */}
          <path
            d="M34 26L26 44H48L38 20L34 26Z"
            fill="#FF8A00"
          />
          {/* Center electric spark highlight */}
          <path
            d="M27 8L19 28H27L25 40L35 22H27L29 8H27Z"
            fill="#FFFFFF"
            opacity="0.95"
          />
        </svg>

        {/* Slanted high-impact typography */}
        <div className="metabuy-text-group">
          <div className="metabuy-brand-title">
            <span className={isFooter ? 'metabuy-part-white' : 'metabuy-part-navy'}>
              ELECTRO
            </span>
            <span className="metabuy-part-orange">
              MART
            </span>
          </div>
          <div className="metabuy-sub-bar">
            <span>Trading Palace</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

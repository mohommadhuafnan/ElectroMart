import React, { useState, useEffect } from 'react';

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Exact smooth loader duration matching metabuy.lk
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setVisible(false), 500); // Wait for fade-out transition
    }, 750);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloder_part ${!loading ? 'fade-out' : ''}`}>
      <div className="spinner">
        <div className="dot1"></div>
        <div className="dot2"></div>
      </div>
    </div>
  );
};


import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('electromart_cart');
      return saved ? JSON.parse(saved) : [
        // Pre-populate with a couple items for immediate realistic testing
        {
          id: 1,
          title: 'Konka 43 Inch Full HD Google Smart LED TV – KG43XR683N',
          category: 'TV',
          price: 95000,
          regularPrice: 122500,
          image: 'https://metabuy.lk/wp-content/uploads/2026/05/bdlppo437-a008-1-300x300.webp',
          quantity: 1,
          warranty: '3 Years Company Warranty'
        },
        {
          id: 11,
          title: '8W Akra Wall Lamp Warm White (Modern Geometric Architecture)',
          category: 'LED',
          price: 1495,
          regularPrice: 2100,
          image: 'https://metabuy.lk/wp-content/uploads/2026/05/8-1.png',
          quantity: 2,
          warranty: '1 Year Warranty'
        }
      ];
    } catch {
      return [];
    }
  });

  const [toastMessage, setToastMessage] = useState(null);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('electromart_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type, id: Date.now() });
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        showToast(`Updated quantity for "${product.title.substring(0, 32)}..." in cart!`);
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        showToast(`Added "${product.title.substring(0, 32)}..." to your cart!`);
        return [...prev, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
    showToast('Item removed from cart', 'info');
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setAppliedCoupon(null);
  };

  const applyCoupon = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'ELECTRO10' || clean === 'METABUY10' || clean === 'WELCOME10') {
      setAppliedCoupon({ code: clean, percent: 10 });
      showToast('10% Promo Discount applied successfully!');
      return { success: true, message: '10% Discount applied!' };
    } else if (clean === 'FREESHIP') {
      setAppliedCoupon({ code: clean, percent: 0, freeShipping: true });
      showToast('Free delivery coupon applied!');
      return { success: true, message: 'Free shipping voucher applied!' };
    } else {
      showToast('Invalid coupon code. Try ELECTRO10 or WELCOME10', 'error');
      return { success: false, message: 'Invalid coupon code' };
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Coupon removed', 'info');
  };

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = subtotal === 0 ? 0 : (appliedCoupon?.freeShipping || subtotal > 15000 ? 0 : 450);
  const discountAmount = appliedCoupon?.percent ? Math.round((subtotal * appliedCoupon.percent) / 100) : 0;
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItemsCount,
        subtotal,
        deliveryFee,
        discountAmount,
        grandTotal,
        couponCode,
        setCouponCode,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};


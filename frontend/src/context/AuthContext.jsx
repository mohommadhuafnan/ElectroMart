import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('electromart_user');
      return saved ? JSON.parse(saved) : {
        id: 'usr_001',
        name: 'Abdul Basith',
        email: 'abdul.basith@example.lk',
        phone: '+94 77 766 6961',
        address: '57, 1st Cross Street, Vavuniya, Sri Lanka',
        role: 'customer'
      };
    } catch {
      return null;
    }
  });

  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('electromart_orders');
      return saved ? JSON.parse(saved) : [
        {
          orderId: 'EM-2026-8941',
          date: '2026-10-28',
          items: [
            {
              title: 'Wicks 16″ Stand Fan WT-776 (1 Year Company Warranty)',
              quantity: 1,
              price: 9750
            }
          ],
          total: 10200,
          paymentMethod: 'Cash on Delivery',
          status: 'In Transit',
          statusStep: 3, // 1: Placed, 2: Packed, 3: In Transit, 4: Out for Delivery, 5: Delivered
          courier: 'PromptX Courier (Tracking #PRX-901428)',
          deliveryAddress: '57, 1st Cross Street, Vavuniya, Sri Lanka'
        }
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('electromart_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('electromart_user');
      }
    } catch (e) {
      console.error(e);
    }
  }, [user]);

  useEffect(() => {
    try {
      localStorage.setItem('electromart_orders', JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }
  }, [orders]);

  const login = (email, password) => {
    // Simulated instant login
    const newUser = {
      id: 'usr_' + Date.now().toString(36),
      name: email.split('@')[0].replace('.', ' ').replace(/^./, str => str.toUpperCase()),
      email,
      phone: '+94 77 123 4567',
      address: 'Colombo, Sri Lanka',
      role: email.includes('admin') ? 'admin' : 'customer'
    };
    setUser(newUser);
    return newUser;
  };

  const register = ({ name, email, phone, password }) => {
    const newUser = {
      id: 'usr_' + Date.now().toString(36),
      name,
      email,
      phone: phone || '+94 77 000 0000',
      address: 'Sri Lanka',
      role: 'customer'
    };
    setUser(newUser);
    return newUser;
  };

  const logout = () => {
    setUser(null);
  };

  const addOrder = (orderData) => {
    const newOrder = {
      orderId: 'EM-2026-' + Math.floor(1000 + Math.random() * 9000),
      date: new Date().toISOString().split('T')[0],
      status: 'Order Placed',
      statusStep: 1,
      courier: 'Domex Express (Tracking Pending)',
      ...orderData
    };
    setOrders(prev => [newOrder, ...prev]);
    return newOrder;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        orders,
        addOrder,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};


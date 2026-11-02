import React from 'react';
import { useCart } from '../../context/CartContext';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

export const Toast = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  const { message, type } = toastMessage;

  return (
    <div className="toast-container">
      <div className={`toast-pill ${type || 'success'}`}>
        {type === 'error' ? (
          <AlertCircle size={18} color="#ef4444" />
        ) : type === 'info' ? (
          <Info size={18} color="#3b82f6" />
        ) : (
          <CheckCircle2 size={18} color="#fb7c00" />
        )}
        <span>{message}</span>
      </div>
    </div>
  );
};


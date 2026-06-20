import React from 'react';
import { CartIcon } from './Icons';

export default function Header({ cartItemCount, onToggleCart }) {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--primary-color)">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
          N1shop
        </div>
        <button className="cart-button" id="cart-toggle-btn" onClick={() => onToggleCart(true)}>
          <CartIcon className="cart-icon" />
          {cartItemCount > 0 && (
            <span className="cart-badge" id="cart-badge">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

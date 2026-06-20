import React from 'react';
import { CloseIcon, TrashIcon, EmptyCartIcon } from './Icons';

export default function CartDrawer({
  isOpen,
  cartItems,
  onClose,
  onUpdateQuantity,
  onRemoveItem
}) {
  const total = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handleCheckout = () => {
    alert('Checkout complete! (Demo)');
  };

  return (
    <>
      {/* Overlay Background */}
      <div 
        className={`cart-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close cart">
            <CloseIcon />
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <EmptyCartIcon />
              <p>Your cart is empty.</p>
              <button 
                className="btn btn-primary" 
                style={{ marginTop: '24px' }} 
                onClick={onClose}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map(item => (
              <div className="cart-item" key={item.product.id}>
                <div 
                  className="cart-item-img" 
                  style={{ 
                    backgroundColor: item.product.color, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  <img 
                    src={item.product.image} 
                    alt={item.product.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <span style={{ position: 'absolute', color: 'white', opacity: 0.3, fontSize: '0.7rem', fontWeight: 'bold', zIndex: -1 }}>
                    {item.product.category}
                  </span>
                </div>
                <div className="cart-item-details">
                  <h4 className="cart-item-title">{item.product.name}</h4>
                  <div className="cart-item-price">₹{item.product.price.toLocaleString('en-IN')}</div>
                  <div className="cart-item-actions">
                    <button 
                      className="qty-btn qty-minus" 
                      onClick={() => onUpdateQuantity(item.product.id, -1)}
                    >
                      -
                    </button>
                    <span className="qty-display">{item.quantity}</span>
                    <button 
                      className="qty-btn qty-plus" 
                      onClick={() => onUpdateQuantity(item.product.id, 1)}
                    >
                      +
                    </button>
                    <button 
                      className="remove-btn" 
                      onClick={() => onRemoveItem(item.product.id)}
                      aria-label="Remove item"
                    >
                      <TrashIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span>₹{total.toLocaleString('en-IN')}</span>
            </div>
            <button className="btn btn-primary checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

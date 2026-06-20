import React, { useState, useEffect } from 'react';
import { CloseIcon } from './Icons';

export default function ProductModal({ product, onClose, onAddToCart }) {
  const [imageError, setImageError] = useState(false);
  const isOpen = !!product;

  // Reset image error when product changes
  useEffect(() => {
    setImageError(false);
  }, [product]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.className && typeof e.target.className === 'string' && e.target.className.includes('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className={`modal-overlay open`} onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <CloseIcon />
        </button>
        <div className="modal-image-container" style={{ backgroundColor: product.color }}>
          {!imageError && (
            <img 
              src={product.image} 
              alt={product.name} 
              className="modal-image"
              onError={() => setImageError(true)}
            />
          )}
          <div className="product-color-placeholder" style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
            <span style={{ color: 'white', opacity: 0.5, fontSize: '3rem', fontWeight: 'bold' }}>
              {product.category}
            </span>
          </div>
        </div>
        <div className="modal-details">
          <div className="modal-category">{product.category}</div>
          <h2 className="modal-title">{product.name}</h2>
          <div className="modal-price">₹{product.price.toLocaleString('en-IN')}</div>
          <p 
            className="modal-desc"
            dangerouslySetInnerHTML={{ __html: product.detailedDescription }}
          />
          <div className="modal-actions">
            <button 
              className="btn btn-primary" 
              onClick={() => {
                onAddToCart(product.id);
                onClose();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

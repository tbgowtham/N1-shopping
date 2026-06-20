import React, { useState } from 'react';

export default function ProductCard({ product, onViewDetails, onAddToCart }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="product-card">
      <div 
        className="product-image-container" 
        style={{ backgroundColor: product.color, cursor: 'pointer' }}
        onClick={() => onViewDetails(product.id)}
      >
        {!imageError && (
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-image"
            onError={() => setImageError(true)}
          />
        )}
        <div className="product-color-placeholder" style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <span style={{ color: 'white', opacity: 0.5, fontSize: '2rem', fontWeight: 'bold' }}>
            {product.category}
          </span>
        </div>
      </div>
      <div className="product-details">
        <div className="product-category">{product.category}</div>
        <h3 
          className="product-title" 
          style={{ cursor: 'pointer' }}
          onClick={() => onViewDetails(product.id)}
        >
          {product.name}
        </h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              className="btn view-details-btn" 
              onClick={() => onViewDetails(product.id)}
            >
              Details
            </button>
            <button 
              className="btn btn-primary add-to-cart-btn" 
              onClick={() => onAddToCart(product.id)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

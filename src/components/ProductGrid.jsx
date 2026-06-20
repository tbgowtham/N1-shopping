import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, onViewDetails, onAddToCart }) {
  if (products.length === 0) {
    return (
      <section className="container" style={{ margin: '60px auto', textAlign: 'center' }}>
        <div style={{ padding: '40px', backgroundColor: 'var(--bg-color)', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}>
          <svg 
            style={{ width: '64px', height: '64px', color: '#d1d5db', marginBottom: '16px' }}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
            No products found
          </h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            We couldn't find any products matching your current search or category filter.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="container">
      <div className="product-grid" id="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={onViewDetails}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

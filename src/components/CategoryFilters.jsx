import React from 'react';

export default function CategoryFilters({
  categories,
  activeCategory,
  onCategorySelect,
  searchQuery,
  onSearchChange,
  sortOrder,
  onSortSelect
}) {
  return (
    <section className="filters-section container">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', marginBottom: '12px' }}>
        
        {/* Search Bar */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 20px',
              paddingLeft: '44px',
              borderRadius: '9999px',
              border: '1px solid var(--border-color)',
              fontSize: '0.95rem',
              outline: 'none',
              fontFamily: 'var(--font-family)',
              boxShadow: 'var(--shadow-sm)',
              transition: 'var(--transition)'
            }}
            className="search-input"
          />
          <svg
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-secondary)',
              width: '20px',
              height: '20px'
            }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Filters & Sorting container */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '16px', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          width: '100%',
          marginTop: '8px'
        }}>
          {/* Category Filter Pills */}
          <div className="filters-container" style={{ margin: '0 auto' }}>
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-pill ${activeCategory === category ? 'active' : ''}`}
                onClick={() => onCategorySelect(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort Selection Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 auto' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Sort By</span>
            <select
              value={sortOrder}
              onChange={(e) => onSortSelect(e.target.value)}
              style={{
                padding: '10px 20px',
                borderRadius: '9999px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-color)',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                outline: 'none',
                fontFamily: 'var(--font-family)',
                transition: 'var(--transition)'
              }}
            >
              <option value="default">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

      </div>
    </section>
  );
}

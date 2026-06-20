import React, { useState, useEffect } from 'react';
import { PRODUCTS, CATEGORIES } from './data/products';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilters from './components/CategoryFilters';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

export default function App() {
  // App States
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('n1_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('default');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sync Cart State to LocalStorage
  useEffect(() => {
    localStorage.setItem('n1_cart', JSON.stringify(cart));
  }, [cart]);

  // Lock Body Scroll when Drawer or Modal is open
  useEffect(() => {
    if (isCartOpen || selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen, selectedProduct]);

  // Global Keyboard Event (Escape key close)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsCartOpen(false);
        setSelectedProduct(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Cart Actions
  const handleAddToCart = (productId) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === productId);
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const nextQty = item.quantity + delta;
            return { ...item, quantity: nextQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  // Modal Actions
  const handleViewDetails = (productId) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (product) {
      setSelectedProduct(product);
    }
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  // Filter & Sort Logic
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'price-low') {
      return a.price - b.price;
    } else if (sortOrder === 'price-high') {
      return b.price - a.price;
    }
    return 0; // Featured/Default order
  });

  const totalCartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <Header 
        cartItemCount={totalCartItemCount} 
        onToggleCart={setIsCartOpen} 
      />

      <main>
        <Hero />

        <CategoryFilters
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onCategorySelect={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortOrder={sortOrder}
          onSortSelect={setSortOrder}
        />

        <ProductGrid
          products={sortedProducts}
          onViewDetails={handleViewDetails}
          onAddToCart={handleAddToCart}
        />
      </main>

      <Footer />

      {/* Cart Drawer Overlay & Panel */}
      <CartDrawer
        isOpen={isCartOpen}
        cartItems={cart}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Product Details Specs Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={handleCloseModal}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

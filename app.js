// Static Product Data
const PRODUCTS = [
  { id: 1, name: "Apple Watch Ultra 2", category: "Wearables", description: "The most rugged and capable Apple Watch.", detailedDescription: "The most rugged and capable Apple Watch pushes the limits again. <br><br><strong>Key Specs:</strong><br>• 49mm aerospace-grade titanium case<br>• Always-On Retina LTPO OLED display (3000 nits)<br>• S9 SiP with 64-bit dual-core processor<br>• Up to 36 hours battery life<br>• Water resistant 100m, IP6X dust resistant", price: 89900, color: "#1e3a8a", image: "images/Apple Watch Ultra 2.webp" },
  { id: 2, name: "iPhone 15 Pro", category: "Mobile", description: "Titanium design. A17 Pro chip.", detailedDescription: "Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and a more versatile Pro camera system. <br><br><strong>Key Specs:</strong><br>• 6.1-inch Super Retina XDR display with ProMotion<br>• A17 Pro chip (6-core CPU, 6-core GPU)<br>• Pro camera system: 48MP Main, 12MP Ultra Wide, 12MP Telephoto<br>• USB-C connector with USB 3 speeds<br>• Aerospace-grade titanium design", price: 134900, color: "#4c1d95", image: "images/iphone15pro.webp" },
  { id: 3, name: "ASUS TUF Gaming F15", category: "Gaming", description: "Durability and power for hardcore gamers.", detailedDescription: "Geared for serious gaming and rocking a slick new style, the TUF Gaming F15 is a feature-packed gaming laptop. <br><br><strong>Key Specs:</strong><br>• Intel Core i7-12700H Processor<br>• NVIDIA GeForce RTX 4050 Laptop GPU (6GB GDDR6)<br>• 15.6-inch FHD (1920 x 1080) 144Hz IPS display<br>• 16GB DDR4 RAM, 512GB PCIe NVMe SSD<br>• MIL-STD-810H military standard durability", price: 74990, color: "#9a3412", image: "images/ASUS TUF Gaming F15.webp" },
  { id: 4, name: "Canon EOS R100", category: "Photography", description: "Compact and lightweight mirrorless camera.", detailedDescription: "Step up your content creation with the EOS R100. <br><br><strong>Key Specs:</strong><br>• 24.1 Megapixel APS-C CMOS sensor<br>• DIGIC 8 image processor<br>• 4K uncropped video at up to 24fps<br>• Dual Pixel CMOS AF with Eye Detection<br>• Includes RF-S 18-45mm F4.5-6.3 IS STM Lens", price: 45990, color: "#065f46", image: "images/Canon R100 Mirrorless Camera RF-S .webp" },
  { id: 5, name: "Samsung Galaxy S25 FE", category: "Mobile", description: "Epic performance meets everyday value.", detailedDescription: "The Galaxy S25 FE brings flagship features to everyone. <br><br><strong>Key Specs:</strong><br>• 6.7-inch Dynamic AMOLED 2X, 120Hz<br>• Exynos 2400e 4nm processor<br>• 50MP Wide, 12MP Ultra Wide, 8MP Telephoto cameras<br>• 4700mAh battery with 25W fast charging<br>• Galaxy AI features integrated seamlessly", price: 54999, color: "#1e3a8a", image: "images/Samsung Galaxy S25 FE 5G.webp" },
  { id: 6, name: "ZEBRONICS Zeb-Duke 2", category: "Audio", description: "Wireless headphones with deep bass.", detailedDescription: "Immerse yourself in music with the Zeb-Duke 2 wireless headphones. <br><br><strong>Key Specs:</strong><br>• 40mm dynamic sound drivers<br>• Bluetooth v5.0 connectivity<br>• Up to 32 hours playback time<br>• Voice assistant support (Siri/Google)<br>• Dual pairing and AUX input support", price: 1499, color: "#166534", image: "images/ZEBRONICS Zeb-Duke 2,.webp" },
  { id: 7, name: "Lenovo IdeaPad Slim 3", category: "Computers", description: "Thin, light, and reliable daily laptop.", detailedDescription: "Tackle your daily tasks effortlessly with the IdeaPad Slim 3. <br><br><strong>Key Specs:</strong><br>• Intel Core i3 12th Gen processor<br>• 15.6-inch FHD (1920x1080) Anti-glare display<br>• 8GB DDR4 RAM, 512GB NVMe SSD storage<br>• Windows 11 Home & MS Office 2021 included<br>• 1.63 kg ultra-lightweight design", price: 35990, color: "#4c1d95", image: "images/Lenovo IdeaPad Slim 3.webp" },
  { id: 8, name: "Insta360 Action Cam X3", category: "Photography", description: "The ultimate 360-degree action camera.", detailedDescription: "Capture everything around you with 5.7K 360-degree video. <br><br><strong>Key Specs:</strong><br>• Dual 1/2-inch 48MP sensors<br>• 5.7K 360° Active HDR video<br>• 72MP 360° photo resolution<br>• 2.29-inch tempered glass touchscreen<br>• FlowState stabilization & 360 Horizon Lock", price: 41990, color: "#86198f", image: "images/Insta360 Action Camera X3 Sports.webp" },
  { id: 9, name: "Samsung Galaxy Watch7", category: "Wearables", description: "Advanced health tracking on your wrist.", detailedDescription: "The Galaxy Watch7 offers advanced sleep coaching, heart rate monitoring, and a sleek design. <br><br><strong>Key Specs:</strong><br>• Exynos W1000 (3nm) powerhouse processor<br>• BioActive Sensor (Optical HR, Electrical Heart Signal, BIA)<br>• Sapphire Crystal glass display<br>• Sleep apnea detection and personalized HR zones<br>• 5ATM + IP68 + MIL-STD-810H durability", price: 29999, color: "#1e3a8a", image: "images/Samsung Galaxy Watch7.webp" },
  { id: 10, name: "HP 15 Intel Core i5", category: "Computers", description: "Reliable performance for everyday tasks.", detailedDescription: "Power through your day with the HP 15, featuring reliable performance and design. <br><br><strong>Key Specs:</strong><br>• Intel Core i5-1335U (13th Gen) processor<br>• 15.6-inch FHD micro-edge Anti-glare display<br>• 16GB DDR4 RAM, 512GB PCIe NVMe M.2 SSD<br>• Intel Iris Xe Graphics<br>• HP True Vision 720p HD camera with noise reduction", price: 52990, color: "#065f46", image: "images/HP 15 Intel Core i5 13th Gen.webp" },
  { id: 11, name: "realme Buds Wireless 5", category: "Audio", description: "Neckband earphones with deep bass.", detailedDescription: "Experience immersive sound with the realme Buds Wireless 5. <br><br><strong>Key Specs:</strong><br>• 13.6mm dynamic bass drivers<br>• 30dB Active Noise Cancellation (ANC)<br>• Up to 40 hours of total playback<br>• 360° Spatial Audio Effect<br>• IP55 dust and water resistance", price: 1499, color: "#4c1d95", image: "images/realme Buds Wireless 5 .webp" },
  { id: 12, name: "POCO M8", category: "Mobile", description: "Incredible value and performance.", detailedDescription: "The POCO M8 delivers an amazing smartphone experience at an unbeatable price. <br><br><strong>Key Specs:</strong><br>• 6.74-inch 90Hz IPS LCD display<br>• MediaTek Helio G85 octa-core processor<br>• 50MP AI dual camera system<br>• 5000mAh battery with 18W fast charging<br>• Up to 8GB RAM + 8GB Extended Virtual RAM", price: 12999, color: "#9a3412", image: "images/POCO M8 .webp" },
  { id: 13, name: "MSI Katana A15 Gaming", category: "Gaming", description: "Sharpen your gaming edge.", detailedDescription: "The MSI Katana A15 is forged for gamers. <br><br><strong>Key Specs:</strong><br>• AMD Ryzen 7 8845HS processor<br>• NVIDIA GeForce RTX 4060 Laptop GPU (8GB GDDR6)<br>• 15.6-inch FHD (1920x1080) 144Hz IPS-level panel<br>• 16GB DDR5 RAM, 1TB NVMe PCIe Gen4 SSD<br>• 4-Zone RGB custom Gaming Keyboard", price: 89990, color: "#166534", image: "images/MSI Katana A15 AI AMD Ryzen 7.webp" },
  { id: 14, name: "IZI ONE LITE 5K", category: "Photography", description: "Affordable 5K action recording.", detailedDescription: "Record your adventures in stunning 5K resolution with the IZI ONE LITE. <br><br><strong>Key Specs:</strong><br>• 5K/30fps & 4K/60fps video resolution<br>• 48MP photo resolution with Sony IMX sensor<br>• Dual Screens (2.0\" Touch Rear + 1.3\" Front)<br>• 6-Axis Electronic Image Stabilization (EIS)<br>• Waterproof up to 30m with included diving case", price: 5999, color: "#1e3a8a", image: "images/IZI ONE LITE Action Camera One Lite 5K.webp" },
  { id: 15, name: "AMAZFIT Bip 6", category: "Wearables", description: "Lightweight smartwatch with long battery.", detailedDescription: "The AMAZFIT Bip 6 is your affordable fitness companion. <br><br><strong>Key Specs:</strong><br>• 1.91-inch ultra-large TFT color display<br>• Up to 14 days of battery life<br>• 120+ Sports modes with smart recognition<br>• 24/7 Heart Rate, SpO2 & Stress monitoring<br>• Built-in GPS & 4 satellite positioning systems", price: 3999, color: "#86198f", image: "images/AMAZFIT Bip 6 .webp" },
  { id: 16, name: "ASUS Vivobook 15", category: "Computers", description: "Stylish and portable everyday laptop.", detailedDescription: "Express yourself with the sleek ASUS Vivobook 15. <br><br><strong>Key Specs:</strong><br>• Intel Core i5-1235U processor<br>• 15.6-inch FHD (1920x1080) OLED display (100% DCI-P3)<br>• 8GB DDR4 RAM, 512GB M.2 NVMe PCIe 3.0 SSD<br>• ErgoSense keyboard with physical webcam shield<br>• 180° lay-flat hinge design", price: 42990, color: "#4c1d95", image: "images/ASUS Vivobook 15.webp" },
  { id: 17, name: "realme Buds T200 Lite", category: "Audio", description: "True wireless earbuds with rich sound.", detailedDescription: "Enjoy the freedom of true wireless audio with the realme Buds T200 Lite. <br><br><strong>Key Specs:</strong><br>• 10mm dynamic bass drivers<br>• AI Environmental Noise Cancellation (ENC) for calls<br>• Up to 28 hours total playback time<br>• 88ms super low latency mode for gaming<br>• IPX5 water resistance rating", price: 1299, color: "#065f46", image: "images/realme Buds T200 Lite.webp" },
  { id: 18, name: "Tecno Spark Go", category: "Mobile", description: "The perfect entry-level smartphone.", detailedDescription: "The Tecno Spark Go provides all the essential smartphone features in a stylish package. <br><br><strong>Key Specs:</strong><br>• 6.56-inch HD+ 90Hz Dot-in display<br>• Unisoc T606 Octa-core processor<br>• 13MP AI dual rear camera with dual flash<br>• 5000mAh battery with Type-C charging<br>• Dynamic Port feature for seamless notifications", price: 6999, color: "#1e3a8a", image: "images/technosparkgo.webp" },
  { id: 19, name: "ZEBRONICS BRO", category: "Audio", description: "Compact and powerful portable speaker.", detailedDescription: "Take the party anywhere with the ZEBRONICS BRO speaker. <br><br><strong>Key Specs:</strong><br>• Output Power: 5W RMS<br>• Driver size: 52mm<br>• Connectivity: Bluetooth v5.0, USB, Micro SD, FM<br>• Playback time: Up to 10 hours<br>• TWS (True Wireless Stereo) pairing supported", price: 999, color: "#9a3412", image: "images/ZEBRONICS BRO.webp" },
  { id: 20, name: "Lenovo LOQ Essential", category: "Gaming", description: "Essential gaming performance.", detailedDescription: "Step into the world of gaming with the Lenovo LOQ Essential. <br><br><strong>Key Specs:</strong><br>• AMD Ryzen 7 7840HS processor<br>• NVIDIA GeForce RTX 4050 6GB GDDR6<br>• 15.6-inch FHD (1920x1080) 144Hz G-SYNC display<br>• 16GB DDR5 5600MHz RAM, 512GB PCIe SSD<br>• Lenovo AI Engine+ with LA1 AI chip", price: 69990, color: "#166534", image: "images/Lenovo LQQ Essential AMD Ryzen 7.webp" }
];

const CATEGORIES = ["All", "Audio", "Wearables", "Computers", "Photography", "Mobile", "Gaming"];

// App State
let cart = [];
let isCartOpen = false;
let activeCategory = "All";

// Icons
const Icons = {
  Cart: `<svg class="cart-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`,
  Close: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>`,
  Trash: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>`,
  EmptyCart: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>`
};

// Render Functions
function renderApp() {
  const root = document.getElementById('root');
  
  root.innerHTML = `
    <div>
      <header class="header">
        <div class="container header-content">
          <div class="logo">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--primary-color)">
               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" stroke-width="2" stroke-linejoin="round"/>
            </svg>
            N1shop
          </div>
          <button class="cart-button" id="cart-toggle-btn">
            ${Icons.Cart}
            <span class="cart-badge" id="cart-badge" style="display: none;"></span>
          </button>
        </div>
      </header>

      <main>
        <section class="hero">
          <h1>Shop Our Products</h1>
          <p>Discover the latest tech products at amazing prices. Premium quality electronics for your everyday needs.</p>
        </section>

        <section class="filters-section container">
          <div class="filters-container" id="filters-container"></div>
        </section>

        <section class="container">
          <div class="product-grid" id="product-grid"></div>
        </section>
      </main>

      <footer class="footer">
        <p>&copy; 2026 N1shop. All rights reserved.</p>
      </footer>

      <!-- Cart Drawer UI -->
      <div class="cart-overlay" id="cart-overlay"></div>

      <div class="cart-drawer" id="cart-drawer">
        <div class="cart-header">
          <h2>Your Cart</h2>
          <button class="close-btn" id="cart-close-btn">
            ${Icons.Close}
          </button>
        </div>
        <div class="cart-items" id="cart-items-container"></div>
        <div class="cart-footer" id="cart-footer" style="display: none;">
          <div class="cart-total">
            <span>Total</span>
            <span id="cart-total-price">$0.00</span>
          </div>
          <button class="btn btn-primary checkout-btn" onclick="alert('Checkout complete! (Demo)')">
            Checkout
          </button>
        </div>
      </div>

      <!-- Product Modal UI -->
      <div class="modal-overlay" id="modal-overlay">
        <div class="modal-content" id="modal-content">
          <!-- Content populated via openModal() -->
        </div>
      </div>

    </div>
  `;

  // Attach static event listeners
  document.getElementById('cart-toggle-btn').addEventListener('click', () => toggleCart(true));
  document.getElementById('cart-close-btn').addEventListener('click', () => toggleCart(false));
  document.getElementById('cart-overlay').addEventListener('click', () => toggleCart(false));
  
  // Close modal when clicking on the modal overlay background
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'modal-overlay') closeModal();
  });

  // Render dynamic parts
  renderFilters();
  renderProducts();
  updateCartUI();
}

function renderFilters() {
  const container = document.getElementById('filters-container');
  container.innerHTML = CATEGORIES.map(category => `
    <button class="filter-pill ${activeCategory === category ? 'active' : ''}" data-category="${category}">
      ${category}
    </button>
  `).join('');

  // Attach event listeners
  container.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      activeCategory = e.target.getAttribute('data-category');
      renderFilters();
      renderProducts();
    });
  });
}

function renderProducts() {
  const container = document.getElementById('product-grid');
  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  container.innerHTML = filteredProducts.map(product => `
    <div class="product-card">
      <div class="product-image-container" style="background-color: ${product.color}; cursor: pointer;" onclick="openModal(${product.id})">
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="product-image"
          onerror="this.style.display='none'"
        />
        <div class="product-color-placeholder" style="position: absolute; inset: 0; z-index: -1;">
           <span style="color: white; opacity: 0.5; font-size: 2rem; font-weight: bold;">${product.category}</span>
        </div>
      </div>
      <div class="product-details">
        <div class="product-category">${product.category}</div>
        <h3 class="product-title" style="cursor: pointer;" onclick="openModal(${product.id})">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-footer">
          <span class="product-price">₹${product.price.toLocaleString('en-IN')}</span>
          <div style="display:flex; gap:8px;">
            <button class="btn view-details-btn" data-id="${product.id}">Details</button>
            <button class="btn btn-primary add-to-cart-btn" data-id="${product.id}">Add</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Attach event listeners
  container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productId = parseInt(e.target.getAttribute('data-id'));
      addToCart(productId);
    });
  });

  container.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productId = parseInt(e.target.getAttribute('data-id'));
      openModal(productId);
    });
  });
}

function updateCartUI() {
  const cartBadge = document.getElementById('cart-badge');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartFooter = document.getElementById('cart-footer');
  const cartTotalPrice = document.getElementById('cart-total-price');

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);

  // Update badge
  if (cartItemCount > 0) {
    cartBadge.textContent = cartItemCount;
    cartBadge.style.display = 'flex';
  } else {
    cartBadge.style.display = 'none';
  }

  // Update items
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart">
        ${Icons.EmptyCart}
        <p>Your cart is empty.</p>
        <button class="btn btn-primary" style="margin-top: 24px" onclick="toggleCart(false)">Continue Shopping</button>
      </div>
    `;
    cartFooter.style.display = 'none';
  } else {
    cartItemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-img" style="background-color: ${item.product.color}; display: flex; align-items: center; justify-content: center; overflow: hidden;">
          <img 
            src="${item.product.image}" 
            alt="${item.product.name}" 
            style="width: 100%; height: 100%; object-fit: cover;"
            onerror="this.style.display='none'"
          />
        </div>
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.product.name}</h4>
          <div class="cart-item-price">₹${item.product.price.toLocaleString('en-IN')}</div>
          <div class="cart-item-actions">
            <button class="qty-btn qty-minus" data-id="${item.product.id}">-</button>
            <span class="qty-display">${item.quantity}</span>
            <button class="qty-btn qty-plus" data-id="${item.product.id}">+</button>
            <button class="remove-btn" data-id="${item.product.id}">
              ${Icons.Trash}
            </button>
          </div>
        </div>
      </div>
    `).join('');
    
    cartFooter.style.display = 'block';
    cartTotalPrice.textContent = `₹${cartTotal.toLocaleString('en-IN')}`;

    // Attach cart item event listeners
    cartItemsContainer.querySelectorAll('.qty-minus').forEach(btn => {
      btn.addEventListener('click', (e) => updateQuantity(parseInt(e.currentTarget.getAttribute('data-id')), -1));
    });
    cartItemsContainer.querySelectorAll('.qty-plus').forEach(btn => {
      btn.addEventListener('click', (e) => updateQuantity(parseInt(e.currentTarget.getAttribute('data-id')), 1));
    });
    cartItemsContainer.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', (e) => removeFromCart(parseInt(e.currentTarget.getAttribute('data-id'))));
    });
  }
}

// Modal Actions
function openModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modalOverlay = document.getElementById('modal-overlay');
  const modalContent = document.getElementById('modal-content');

  modalContent.innerHTML = `
    <button class="modal-close" onclick="closeModal()">
      ${Icons.Close}
    </button>
    <div class="modal-image-container" style="background-color: ${product.color}">
      <img 
        src="${product.image}" 
        alt="${product.name}" 
        class="modal-image"
        onerror="this.style.display='none'"
      />
      <div class="product-color-placeholder" style="position: absolute; inset: 0; z-index: -1;">
         <span style="color: white; opacity: 0.5; font-size: 3rem; font-weight: bold;">${product.category}</span>
      </div>
    </div>
    <div class="modal-details">
      <div class="modal-category">${product.category}</div>
      <h2 class="modal-title">${product.name}</h2>
      <div class="modal-price">₹${product.price.toLocaleString('en-IN')}</div>
      <p class="modal-desc">${product.detailedDescription}</p>
      
      <div class="modal-actions">
        <button class="btn btn-primary" onclick="addToCart(${product.id}); closeModal();">Add to Cart</button>
      </div>
    </div>
  `;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modalOverlay = document.getElementById('modal-overlay');
  modalOverlay.classList.remove('open');
  
  // Only unset overflow if cart is not open
  if (!isCartOpen) {
    document.body.style.overflow = 'unset';
  }
}

// Actions
function toggleCart(isOpen) {
  isCartOpen = isOpen;
  const overlay = document.getElementById('cart-overlay');
  const drawer = document.getElementById('cart-drawer');
  
  if (isCartOpen) {
    overlay.classList.add('open');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  } else {
    overlay.classList.remove('open');
    drawer.classList.remove('open');
    
    // Only unset overflow if modal is not open
    const modalOverlay = document.getElementById('modal-overlay');
    if (!modalOverlay.classList.contains('open')) {
      document.body.style.overflow = 'unset';
    }
  }
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.product.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ product, quantity: 1 });
  }
  
  updateCartUI();
  toggleCart(true);
}

function updateQuantity(productId, delta) {
  const item = cart.find(item => item.product.id === productId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      updateCartUI();
    }
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.product.id !== productId);
  updateCartUI();
}

// Initialize App
document.addEventListener('DOMContentLoaded', renderApp);

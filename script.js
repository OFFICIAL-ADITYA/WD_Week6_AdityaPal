/**
 * ============================================================
 * APKART — MODERN E-COMMERCE JAVASCRIPT APPLICATION
 * Author: Aditya Pal
 * Concepts: Functions, Arrays, Objects, DOM Manipulation,
 *           Event Handling, Form Validation, Full CRUD, LocalStorage
 * ============================================================
 */

(function () {
  'use strict';

  // ----------------------------------------------------------
  // 1. INITIAL SAMPLE DATA (APKART HOMEPAGE CATALOG)
  // ----------------------------------------------------------
  const DEFAULT_PRODUCTS = [
    {
      id: 'prod-1',
      title: 'Wireless Headphones',
      category: 'Electronics',
      price: 2999,
      oldPrice: 4999,
      rating: 4.8,
      reviewsCount: 120,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
      description: 'Over-ear wireless Bluetooth headphones with deep acoustic sound, active noise isolation, and 30-hour battery life.',
      inStock: true
    },
    {
      id: 'prod-2',
      title: 'Running Shoes',
      category: 'Sports',
      price: 1899,
      oldPrice: 2999,
      rating: 4.5,
      reviewsCount: 98,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80',
      description: 'Ultra-lightweight breathable mesh athletic trainers with responsive shock cushioning and durable anti-slip rubber outsole.',
      inStock: true
    },
    {
      id: 'prod-3',
      title: 'Smart Watch',
      category: 'Electronics',
      price: 3499,
      oldPrice: 5999,
      rating: 4.7,
      reviewsCount: 210,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
      description: 'Full-touch AMOLED display fitness tracker with continuous 24/7 heart rate, SpO2 sensor, sleep analysis, and IP68 water resistance.',
      inStock: true
    },
    {
      id: 'prod-4',
      title: 'Travel Backpack',
      category: 'Fashion',
      price: 1299,
      oldPrice: 2499,
      rating: 4.6,
      reviewsCount: 86,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
      description: 'Water-resistant multi-compartment travel daypack with dedicated 15.6-inch padded laptop sleeve and integrated USB charging pass-through.',
      inStock: true
    },
    {
      id: 'prod-5',
      title: 'UltraSlim 4K OLED Laptop',
      category: 'Electronics',
      price: 48999,
      oldPrice: 62000,
      rating: 4.9,
      reviewsCount: 340,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=80',
      description: 'Aerospace-grade magnesium alloy chassis, ultra-fast octacore processor, 16GB LPDDR5 RAM, and 1TB NVMe PCIe 4.0 SSD.',
      inStock: true
    },
    {
      id: 'prod-6',
      title: 'Classic Cotton Polo T-Shirt',
      category: 'Fashion',
      price: 799,
      oldPrice: 1499,
      rating: 4.4,
      reviewsCount: 180,
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80',
      description: '100% premium combed organic cotton pique knit with reinforced collar, ribbed armbands, and tailored athletic fit.',
      inStock: true
    },
    {
      id: 'prod-7',
      title: 'Modern Ergonomic Sofa Chair',
      category: 'Home & Living',
      price: 12499,
      oldPrice: 18999,
      rating: 4.8,
      reviewsCount: 74,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80',
      description: 'Scandinavian minimalist accent armchair with high-density foam padding, solid oak wood tapered legs, and stain-resistant fabric.',
      inStock: true
    },
    {
      id: 'prod-8',
      title: 'Velvet Matte Luxury Lipstick Kit',
      category: 'Beauty',
      price: 999,
      oldPrice: 1799,
      rating: 4.7,
      reviewsCount: 245,
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80',
      description: 'Set of 4 rich, hydrating long-lasting matte lip colors enriched with Vitamin E and Jojoba oil for 12-hour weightless comfort.',
      inStock: true
    },
    {
      id: 'prod-9',
      title: 'Resistance Workout Training Bands',
      category: 'Sports',
      price: 599,
      oldPrice: 1199,
      rating: 4.6,
      reviewsCount: 310,
      image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800&auto=format&fit=crop&q=80',
      description: 'Set of 5 heavy-duty natural latex loop resistance bands with varying tension levels from 5 lbs up to 40 lbs plus carrying pouch.',
      inStock: true
    },
    {
      id: 'prod-10',
      title: 'Vintage Huggable Teddy Bear',
      category: 'Toys',
      price: 849,
      oldPrice: 1399,
      rating: 4.9,
      reviewsCount: 152,
      image: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=800&auto=format&fit=crop&q=80',
      description: 'Ultra-soft hypoallergenic plush stuffed bear with embroidered paw pads, stitched button eyes, and silk bow collar.',
      inStock: true
    }
  ];

  // Coupon promo codes table
  const PROMO_CODES = {
    'NOVAPRO20': { type: 'percent', value: 0.20, label: '20% OFF Flash Sale' },
    'WELCOME10': { type: 'fixed', value: 500.00, label: '₹500 OFF Welcome Gift' },
    'FREESHIP': { type: 'shipping', value: 0, label: 'Free Express Shipping' }
  };

  // ----------------------------------------------------------
  // 2. STATE MANAGEMENT & LOCAL STORAGE
  // ----------------------------------------------------------
  const STORAGE_KEYS = {
    PRODUCTS: 'apkart_products_v4',
    CART: 'apkart_cart_v4',
    WISHLIST: 'apkart_wishlist_v4',
    THEME: 'apkart_theme_v2',
    COUPON: 'apkart_coupon_v4'
  };

  let state = {
    products: loadFromStorage(STORAGE_KEYS.PRODUCTS, DEFAULT_PRODUCTS),
    cart: loadFromStorage(STORAGE_KEYS.CART, []),
    wishlist: loadFromStorage(STORAGE_KEYS.WISHLIST, []),
    appliedCoupon: loadFromStorage(STORAGE_KEYS.COUPON, null),
    theme: loadFromStorage(STORAGE_KEYS.THEME, 'light'),
    filters: {
      category: 'all',
      search: '',
      maxPrice: 50000,
      minRating: 0,
      sortBy: 'featured'
    }
  };

  function loadFromStorage(key, fallback) {
    try {
      let stored = localStorage.getItem(key);
      if (!stored && key.startsWith('apkart_')) {
        stored = localStorage.getItem(key.replace('apkart_', 'shopkart_'));
      }
      return stored ? JSON.parse(stored) : fallback;
    } catch (e) {
      console.warn(`Failed reading ${key} from storage:`, e);
      return fallback;
    }
  }

  function saveToStorage(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.warn(`Failed writing ${key} to storage:`, e);
    }
  }

  // ----------------------------------------------------------
  // 3. DOM ELEMENT SELECTORS
  // ----------------------------------------------------------
  const elements = {
    // Theme
    themeToggleBtn: document.getElementById('themeToggleBtn'),

    // Announcement
    announcementBar: document.getElementById('announcementBar'),
    closeAnnouncement: document.getElementById('closeAnnouncement'),

    // Navigation & Badges
    accountTriggerBtn: document.getElementById('accountTriggerBtn'),
    cartTriggerBtn: document.getElementById('cartTriggerBtn'),
    cartBadge: document.getElementById('cartBadge'),
    wishlistTriggerBtn: document.getElementById('wishlistTriggerBtn'),
    wishlistBadge: document.getElementById('wishlistBadge'),

    // Search & Filters
    headerSearchInput: document.getElementById('headerSearchInput'),
    headerSearchBtn: document.getElementById('headerSearchBtn'),
    clearHeaderSearch: document.getElementById('clearHeaderSearch'),
    catalogSearchInput: document.getElementById('catalogSearchInput'),
    priceRangeSlider: document.getElementById('priceRangeSlider'),
    priceValueDisplay: document.getElementById('priceValueDisplay'),
    sortBySelect: document.getElementById('sortBySelect'),
    ratingSelect: document.getElementById('ratingSelect'),
    resultsCount: document.getElementById('resultsCount'),
    clearAllFiltersBtn: document.getElementById('clearAllFiltersBtn'),
    viewAllBtn: document.getElementById('viewAllBtn'),

    // Product Grid & Empty State
    productsGrid: document.getElementById('productsGrid'),
    emptyState: document.getElementById('emptyState'),
    emptyResetFiltersBtn: document.getElementById('emptyResetFiltersBtn'),
    resetCatalogBtn: document.getElementById('resetCatalogBtn'),
    openAddProductModalBtn: document.getElementById('openAddProductModalBtn'),

    // Newsletter
    newsletterForm: document.getElementById('newsletterForm'),
    newsletterEmail: document.getElementById('newsletterEmail'),
    newsletterFeedback: document.getElementById('newsletterFeedback'),

    // Drawers
    cartOverlay: document.getElementById('cartOverlay'),
    cartDrawer: document.getElementById('cartDrawer'),
    closeCartBtn: document.getElementById('closeCartBtn'),
    cartItemsList: document.getElementById('cartItemsList'),
    emptyCartState: document.getElementById('emptyCartState'),
    cartDrawerFooter: document.getElementById('cartDrawerFooter'),
    cartDrawerCount: document.getElementById('cartDrawerCount'),
    startShoppingBtn: document.getElementById('startShoppingBtn'),
    clearCartBtn: document.getElementById('clearCartBtn'),
    proceedToCheckoutBtn: document.getElementById('proceedToCheckoutBtn'),

    // Coupon
    couponInput: document.getElementById('couponInput'),
    applyCouponBtn: document.getElementById('applyCouponBtn'),
    couponFeedback: document.getElementById('couponFeedback'),
    discountLine: document.getElementById('discountLine'),
    appliedCouponCode: document.getElementById('appliedCouponCode'),
    cartSubtotalDisplay: document.getElementById('cartSubtotalDisplay'),
    cartDiscountDisplay: document.getElementById('cartDiscountDisplay'),
    cartShippingDisplay: document.getElementById('cartShippingDisplay'),
    cartTaxDisplay: document.getElementById('cartTaxDisplay'),
    cartTotalDisplay: document.getElementById('cartTotalDisplay'),

    // Wishlist Drawer
    wishlistOverlay: document.getElementById('wishlistOverlay'),
    wishlistDrawer: document.getElementById('wishlistDrawer'),
    closeWishlistBtn: document.getElementById('closeWishlistBtn'),
    wishlistItemsList: document.getElementById('wishlistItemsList'),
    emptyWishlistState: document.getElementById('emptyWishlistState'),
    wishlistDrawerCount: document.getElementById('wishlistDrawerCount'),

    // Add / Edit Product Modal
    productModalBackdrop: document.getElementById('productModalBackdrop'),
    closeProductModalBtn: document.getElementById('closeProductModalBtn'),
    cancelProductBtn: document.getElementById('cancelProductBtn'),
    productCrudForm: document.getElementById('productCrudForm'),
    productModalTitle: document.getElementById('productModalTitle'),
    editProductId: document.getElementById('editProductId'),
    prodTitleInput: document.getElementById('prodTitleInput'),
    prodCategoryInput: document.getElementById('prodCategoryInput'),
    prodPriceInput: document.getElementById('prodPriceInput'),
    prodOldPriceInput: document.getElementById('prodOldPriceInput'),
    prodRatingInput: document.getElementById('prodRatingInput'),
    prodImageInput: document.getElementById('prodImageInput'),
    prodDescInput: document.getElementById('prodDescInput'),

    // Quick View Modal
    quickViewBackdrop: document.getElementById('quickViewBackdrop'),
    closeQuickViewBtn: document.getElementById('closeQuickViewBtn'),
    quickViewContent: document.getElementById('quickViewContent'),

    // Checkout Modal
    checkoutBackdrop: document.getElementById('checkoutBackdrop'),
    closeCheckoutBtn: document.getElementById('closeCheckoutBtn'),
    cancelCheckoutBtn: document.getElementById('cancelCheckoutBtn'),
    checkoutForm: document.getElementById('checkoutForm'),
    checkoutItemsPreview: document.getElementById('checkoutItemsPreview'),
    coSubtotal: document.getElementById('coSubtotal'),
    coDiscountRow: document.getElementById('coDiscountRow'),
    coDiscount: document.getElementById('coDiscount'),
    coShipping: document.getElementById('coShipping'),
    coTax: document.getElementById('coTax'),
    coTotal: document.getElementById('coTotal'),
    checkoutSubmitTotal: document.getElementById('checkoutSubmitTotal'),
    cardFieldsWrapper: document.getElementById('cardFieldsWrapper'),

    // Order Success Modal
    orderSuccessBackdrop: document.getElementById('orderSuccessBackdrop'),
    confirmedOrderId: document.getElementById('confirmedOrderId'),
    confirmedOrderSummary: document.getElementById('confirmedOrderSummary'),
    continueShoppingBtn: document.getElementById('continueShoppingBtn'),

    // Toast & Scroll Top
    toastContainer: document.getElementById('toastContainer'),
    scrollToTopBtn: document.getElementById('scrollToTopBtn')
  };

  // ----------------------------------------------------------
  // 4. HELPER & FORMATTER FUNCTIONS
  // ----------------------------------------------------------
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
      minimumFractionDigits: 0
    }).format(amount);
  };

  const generateStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    let starsHtml = '★'.repeat(fullStars);
    if (hasHalf) starsHtml += '½';
    return starsHtml;
  };

  // ----------------------------------------------------------
  // 5. TOAST NOTIFICATION SYSTEM
  // ----------------------------------------------------------
  function showToast(message, type = 'info', duration = 3000) {
    if (!elements.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconSvg = '';
    if (type === 'success') {
      iconSvg = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;
    } else if (type === 'error') {
      iconSvg = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;
    } else {
      iconSvg = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
    }

    toast.innerHTML = `
      <span class="toast-icon">${iconSvg}</span>
      <span class="toast-msg">${message}</span>
      <button class="toast-close" aria-label="Close notification">&times;</button>
    `;

    elements.toastContainer.appendChild(toast);

    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
      toast.remove();
    });

    setTimeout(() => {
      if (toast.parentElement) {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 250);
      }
    }, duration);
  }

  // ----------------------------------------------------------
  // 6. THEME SWITCHER (DARK / LIGHT)
  // ----------------------------------------------------------
  function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    state.theme = theme;
    saveToStorage(STORAGE_KEYS.THEME, theme);
  }

  function initTheme() {
    applyTheme(state.theme);
    if (elements.themeToggleBtn) {
      elements.themeToggleBtn.addEventListener('click', () => {
        const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
        showToast(`Switched to ${nextTheme === 'dark' ? 'Dark' : 'Light'} theme`, 'info', 2000);
      });
    }
  }

  // ----------------------------------------------------------
  // 7. CATALOG FILTERING, SORTING & RENDERING
  // ----------------------------------------------------------
  function getFilteredProducts() {
    return state.products
      .filter((p) => {
        // Category Filter
        if (state.filters.category !== 'all' && p.category.toLowerCase() !== state.filters.category.toLowerCase()) {
          return false;
        }
        // Search Filter
        if (state.filters.search.trim() !== '') {
          const query = state.filters.search.toLowerCase().trim();
          const matchTitle = p.title.toLowerCase().includes(query);
          const matchDesc = p.description.toLowerCase().includes(query);
          const matchCategory = p.category.toLowerCase().includes(query);
          if (!matchTitle && !matchDesc && !matchCategory) {
            return false;
          }
        }
        // Price Filter
        if (p.price > state.filters.maxPrice) {
          return false;
        }
        // Rating Filter
        if (state.filters.minRating > 0 && p.rating < state.filters.minRating) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        switch (state.filters.sortBy) {
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          case 'rating-desc':
            return b.rating - a.rating;
          case 'title-asc':
            return a.title.localeCompare(b.title);
          case 'featured':
          default:
            return 0;
        }
      });
  }

  function renderCatalog() {
    const filtered = getFilteredProducts();
    if (!elements.productsGrid) return;

    // Update Results count
    if (elements.resultsCount) {
      elements.resultsCount.innerHTML = `Showing <strong>${filtered.length}</strong> of ${state.products.length} products`;
    }

    // Toggle clear filters link
    const hasActiveFilters =
      state.filters.category !== 'all' ||
      state.filters.search.trim() !== '' ||
      state.filters.maxPrice < 50000 ||
      state.filters.minRating > 0 ||
      state.filters.sortBy !== 'featured';

    if (elements.clearAllFiltersBtn) {
      elements.clearAllFiltersBtn.style.display = hasActiveFilters ? 'inline-block' : 'none';
    }

    // Handle Empty State
    if (filtered.length === 0) {
      elements.productsGrid.innerHTML = '';
      if (elements.emptyState) elements.emptyState.style.display = 'block';
      return;
    }

    if (elements.emptyState) elements.emptyState.style.display = 'none';

    // Build Product Cards (Matching Section 5 layout in reference diagram)
    const cardsHtml = filtered.map((prod) => {
      const isWishlisted = state.wishlist.includes(prod.id);

      return `
        <article class="featured-product-card" data-product-id="${prod.id}">
          <button class="card-wishlist-toggle ${isWishlisted ? 'active' : ''}" data-action="toggle-wishlist" data-id="${prod.id}" title="${isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}" aria-label="Wishlist toggle">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="${isWishlisted ? '#ef4444' : 'none'}" stroke="${isWishlisted ? '#ef4444' : 'currentColor'}" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>

          <div class="card-img-container">
            <img src="${prod.image}" alt="${prod.title}" class="featured-card-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80'">
          </div>

          <div class="featured-card-body">
            <h3 class="featured-card-title" title="${prod.title}">${prod.title}</h3>
            
            <div class="featured-card-price-row">
              <span class="featured-card-price">${formatCurrency(prod.price)}</span>
              ${prod.oldPrice ? `<span class="featured-card-old-price">${formatCurrency(prod.oldPrice)}</span>` : ''}
            </div>

            <div class="featured-card-rating">
              <span class="stars-gold">${generateStars(prod.rating)}</span>
              <span class="reviews-count">(${prod.reviewsCount || 100})</span>
            </div>

            <button class="btn btn-add-cart-solid btn-block" data-action="add-to-cart" data-id="${prod.id}">
              Add to Cart
            </button>

            <div class="card-admin-row">
              <button class="card-quick-link" data-action="quick-view" data-id="${prod.id}">Quick View</button>
              <button class="card-quick-link text-primary" data-action="edit-product" data-id="${prod.id}">Edit</button>
              <button class="card-quick-link text-danger" data-action="delete-product" data-id="${prod.id}">Delete</button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    elements.productsGrid.innerHTML = cardsHtml;
  }

  function setCategoryFilter(category) {
    state.filters.category = category;
    
    // Update sub nav links active state
    document.querySelectorAll('.sub-nav-link').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.category?.toLowerCase() === category.toLowerCase());
    });

    // Update category circle items active state
    document.querySelectorAll('.category-circle-item').forEach((item) => {
      item.classList.toggle('active', item.dataset.category?.toLowerCase() === category.toLowerCase());
    });

    renderCatalog();

    // Scroll smoothly to products section
    const productsSec = document.getElementById('featured-products');
    if (productsSec) {
      productsSec.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function resetAllFilters() {
    state.filters = {
      category: 'all',
      search: '',
      maxPrice: 50000,
      minRating: 0,
      sortBy: 'featured'
    };

    if (elements.headerSearchInput) elements.headerSearchInput.value = '';
    if (elements.catalogSearchInput) elements.catalogSearchInput.value = '';
    if (elements.clearHeaderSearch) elements.clearHeaderSearch.style.display = 'none';
    if (elements.priceRangeSlider) {
      elements.priceRangeSlider.value = 50000;
      elements.priceValueDisplay.textContent = '₹50,000';
    }
    if (elements.sortBySelect) elements.sortBySelect.value = 'featured';
    if (elements.ratingSelect) elements.ratingSelect.value = '0';

    document.querySelectorAll('.sub-nav-link').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.category === 'all');
    });
    document.querySelectorAll('.category-circle-item').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.category === 'all');
    });

    renderCatalog();
    showToast('Filters have been reset', 'info', 1800);
  }

  // ----------------------------------------------------------
  // 8. SHOPPING CART FUNCTIONALITY
  // ----------------------------------------------------------
  function addToCart(productId, quantity = 1) {
    const product = state.products.find((p) => p.id === productId);
    if (!product) return;

    const existingIndex = state.cart.findIndex((item) => item.id === productId);

    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += quantity;
    } else {
      state.cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        category: product.category,
        quantity: quantity
      });
    }

    saveToStorage(STORAGE_KEYS.CART, state.cart);
    updateBadges();
    renderCartDrawer();
    showToast(`Added "${product.title.substring(0, 24)}..." to bag!`, 'success');
  }

  function updateCartQuantity(productId, delta) {
    const index = state.cart.findIndex((item) => item.id === productId);
    if (index === -1) return;

    state.cart[index].quantity += delta;
    if (state.cart[index].quantity <= 0) {
      state.cart.splice(index, 1);
      showToast('Item removed from bag', 'info');
    }

    saveToStorage(STORAGE_KEYS.CART, state.cart);
    updateBadges();
    renderCartDrawer();
  }

  function removeFromCart(productId) {
    state.cart = state.cart.filter((item) => item.id !== productId);
    saveToStorage(STORAGE_KEYS.CART, state.cart);
    updateBadges();
    renderCartDrawer();
    showToast('Item removed from cart', 'info');
  }

  function clearCart() {
    if (state.cart.length === 0) return;
    if (confirm('Are you sure you want to clear all items from your bag?')) {
      state.cart = [];
      saveToStorage(STORAGE_KEYS.CART, state.cart);
      updateBadges();
      renderCartDrawer();
      showToast('Your bag has been cleared', 'info');
    }
  }

  function calculateCartTotals() {
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discount = 0;

    if (state.appliedCoupon && PROMO_CODES[state.appliedCoupon]) {
      const promo = PROMO_CODES[state.appliedCoupon];
      if (promo.type === 'percent') {
        discount = subtotal * promo.value;
      } else if (promo.type === 'fixed') {
        discount = Math.min(subtotal, promo.value);
      }
    }

    const discountedSubtotal = Math.max(0, subtotal - discount);
    const shipping = subtotal > 999 || subtotal === 0 || (state.appliedCoupon === 'FREESHIP') ? 0 : 99;
    const tax = discountedSubtotal * 0.18;
    const total = discountedSubtotal + shipping + tax;

    return {
      subtotal,
      discount,
      shipping,
      tax,
      total,
      itemCount: state.cart.reduce((count, item) => count + item.quantity, 0)
    };
  }

  function renderCartDrawer() {
    const { subtotal, discount, shipping, tax, total, itemCount } = calculateCartTotals();

    // Drawer header count
    if (elements.cartDrawerCount) {
      elements.cartDrawerCount.textContent = `(${itemCount} ${itemCount === 1 ? 'item' : 'items'})`;
    }

    // Toggle Empty State vs Items List
    if (state.cart.length === 0) {
      if (elements.cartItemsList) elements.cartItemsList.innerHTML = '';
      if (elements.emptyCartState) elements.emptyCartState.style.display = 'block';
      if (elements.cartDrawerFooter) elements.cartDrawerFooter.style.display = 'none';
      return;
    }

    if (elements.emptyCartState) elements.emptyCartState.style.display = 'none';
    if (elements.cartDrawerFooter) elements.cartDrawerFooter.style.display = 'block';

    // Render Cart Items
    if (elements.cartItemsList) {
      elements.cartItemsList.innerHTML = state.cart.map((item) => `
        <div class="cart-item-card" data-id="${item.id}">
          <img src="${item.image}" alt="${item.title}" class="cart-item-thumb" onerror="this.src='https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80'">
          <div class="cart-item-details">
            <h4 class="cart-item-title" title="${item.title}">${item.title}</h4>
            <div class="cart-item-price">${formatCurrency(item.price)}</div>
            <div class="cart-qty-control">
              <button class="qty-btn" data-action="decrease-qty" data-id="${item.id}" aria-label="Decrease quantity">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" data-action="increase-qty" data-id="${item.id}" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <button class="cart-item-remove-btn" data-action="remove-item" data-id="${item.id}" title="Remove item" aria-label="Remove item">&times;</button>
        </div>
      `).join('');
    }

    // Update Totals Display
    if (elements.cartSubtotalDisplay) elements.cartSubtotalDisplay.textContent = formatCurrency(subtotal);
    if (elements.cartShippingDisplay) elements.cartShippingDisplay.textContent = shipping === 0 ? 'FREE' : formatCurrency(shipping);
    if (elements.cartTaxDisplay) elements.cartTaxDisplay.textContent = formatCurrency(tax);
    if (elements.cartTotalDisplay) elements.cartTotalDisplay.textContent = formatCurrency(total);

    // Discount line
    if (discount > 0 && state.appliedCoupon) {
      if (elements.discountLine) elements.discountLine.style.display = 'flex';
      if (elements.appliedCouponCode) elements.appliedCouponCode.textContent = state.appliedCoupon;
      if (elements.cartDiscountDisplay) elements.cartDiscountDisplay.textContent = `-${formatCurrency(discount)}`;
    } else {
      if (elements.discountLine) elements.discountLine.style.display = 'none';
    }
  }

  // ----------------------------------------------------------
  // 9. WISHLIST FUNCTIONALITY
  // ----------------------------------------------------------
  function toggleWishlist(productId) {
    const product = state.products.find((p) => p.id === productId);
    if (!product) return;

    const index = state.wishlist.indexOf(productId);
    if (index > -1) {
      state.wishlist.splice(index, 1);
      showToast(`Removed from wishlist`, 'info');
    } else {
      state.wishlist.push(productId);
      showToast(`Saved to wishlist!`, 'success');
    }

    saveToStorage(STORAGE_KEYS.WISHLIST, state.wishlist);
    updateBadges();
    renderCatalog();
    renderWishlistDrawer();
  }

  function renderWishlistDrawer() {
    if (!elements.wishlistDrawerCount) return;
    elements.wishlistDrawerCount.textContent = `(${state.wishlist.length} saved)`;

    if (state.wishlist.length === 0) {
      if (elements.wishlistItemsList) elements.wishlistItemsList.innerHTML = '';
      if (elements.emptyWishlistState) elements.emptyWishlistState.style.display = 'block';
      return;
    }

    if (elements.emptyWishlistState) elements.emptyWishlistState.style.display = 'none';

    const wishlistedProducts = state.products.filter((p) => state.wishlist.includes(p.id));

    if (elements.wishlistItemsList) {
      elements.wishlistItemsList.innerHTML = wishlistedProducts.map((p) => `
        <div class="cart-item-card" data-id="${p.id}">
          <img src="${p.image}" alt="${p.title}" class="cart-item-thumb">
          <div class="cart-item-details">
            <h4 class="cart-item-title" title="${p.title}">${p.title}</h4>
            <div class="cart-item-price">${formatCurrency(p.price)}</div>
            <button class="btn btn-add-cart-solid btn-sm" data-action="wishlist-move-to-cart" data-id="${p.id}">
              <span>Move to Bag</span>
            </button>
          </div>
          <button class="cart-item-remove-btn" data-action="wishlist-remove" data-id="${p.id}" title="Remove from wishlist">&times;</button>
        </div>
      `).join('');
    }
  }

  function updateBadges() {
    const totalCartCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    if (elements.cartBadge) {
      elements.cartBadge.textContent = totalCartCount;
      elements.cartBadge.style.display = totalCartCount > 0 ? 'flex' : 'none';
    }

    if (elements.wishlistBadge) {
      elements.wishlistBadge.textContent = state.wishlist.length;
      elements.wishlistBadge.style.display = state.wishlist.length > 0 ? 'flex' : 'none';
    }
  }

  // ----------------------------------------------------------
  // 10. PRODUCT CRUD OPERATIONS (ADD, EDIT, DELETE)
  // ----------------------------------------------------------
  function openProductModal(mode = 'add', productId = null) {
    if (!elements.productCrudForm) return;
    elements.productCrudForm.reset();
    clearInputErrors();

    if (mode === 'edit' && productId) {
      const prod = state.products.find((p) => p.id === productId);
      if (!prod) return;

      elements.productModalTitle.textContent = 'Edit Product Details';
      elements.editProductId.value = prod.id;
      elements.prodTitleInput.value = prod.title;
      elements.prodCategoryInput.value = prod.category;
      elements.prodPriceInput.value = prod.price;
      elements.prodOldPriceInput.value = prod.oldPrice || '';
      elements.prodRatingInput.value = prod.rating || 4.5;
      elements.prodImageInput.value = prod.image;
      elements.prodDescInput.value = prod.description;
    } else {
      elements.productModalTitle.textContent = 'Add New Store Product';
      elements.editProductId.value = '';
      elements.prodRatingInput.value = '4.8';
    }

    if (elements.productModalBackdrop) {
      elements.productModalBackdrop.classList.add('open');
    }
  }

  function closeProductModal() {
    if (elements.productModalBackdrop) {
      elements.productModalBackdrop.classList.remove('open');
    }
    clearInputErrors();
  }

  function clearInputErrors() {
    document.querySelectorAll('.input-error-msg').forEach((span) => span.textContent = '');
    document.querySelectorAll('.invalid').forEach((input) => input.classList.remove('invalid'));
  }

  function handleProductFormSubmit(e) {
    e.preventDefault();
    clearInputErrors();

    const title = elements.prodTitleInput.value.trim();
    const category = elements.prodCategoryInput.value.trim();
    const price = parseFloat(elements.prodPriceInput.value);
    const oldPrice = elements.prodOldPriceInput.value ? parseFloat(elements.prodOldPriceInput.value) : null;
    const rating = elements.prodRatingInput.value ? parseFloat(elements.prodRatingInput.value) : 4.8;
    const image = elements.prodImageInput.value.trim();
    const description = elements.prodDescInput.value.trim();
    const editId = elements.editProductId.value;

    let hasError = false;

    if (title.length < 3) {
      setInputError(elements.prodTitleInput, 'prodTitleError', 'Title must be at least 3 characters long.');
      hasError = true;
    }

    if (!category) {
      setInputError(elements.prodCategoryInput, 'prodCategoryError', 'Please select a valid product category.');
      hasError = true;
    }

    if (isNaN(price) || price <= 0) {
      setInputError(elements.prodPriceInput, 'prodPriceError', 'Price must be a valid positive number.');
      hasError = true;
    }

    if (!image || !isValidUrl(image)) {
      setInputError(elements.prodImageInput, 'prodImageError', 'Please enter a valid HTTP/HTTPS image URL.');
      hasError = true;
    }

    if (description.length < 10) {
      setInputError(elements.prodDescInput, 'prodDescError', 'Description must be at least 10 characters.');
      hasError = true;
    }

    if (hasError) return;

    if (editId) {
      // Update existing
      const index = state.products.findIndex((p) => p.id === editId);
      if (index > -1) {
        state.products[index] = {
          ...state.products[index],
          title,
          category,
          price,
          oldPrice,
          rating,
          image,
          description
        };
        showToast(`Product "${title.substring(0, 20)}..." updated successfully!`, 'success');
      }
    } else {
      // Create new
      const newProduct = {
        id: 'prod-' + Date.now(),
        title,
        category,
        price,
        oldPrice,
        rating,
        reviewsCount: Math.floor(Math.random() * 80) + 12,
        image,
        description,
        inStock: true
      };
      state.products.unshift(newProduct);
      showToast(`New product "${title.substring(0, 20)}..." created!`, 'success');
    }

    saveToStorage(STORAGE_KEYS.PRODUCTS, state.products);
    renderCatalog();
    closeProductModal();
  }

  function deleteProduct(productId) {
    const prod = state.products.find((p) => p.id === productId);
    if (!prod) return;

    if (confirm(`Are you sure you want to permanently delete "${prod.title}"?`)) {
      state.products = state.products.filter((p) => p.id !== productId);
      state.cart = state.cart.filter((item) => item.id !== productId);
      state.wishlist = state.wishlist.filter((id) => id !== productId);

      saveToStorage(STORAGE_KEYS.PRODUCTS, state.products);
      saveToStorage(STORAGE_KEYS.CART, state.cart);
      saveToStorage(STORAGE_KEYS.WISHLIST, state.wishlist);

      updateBadges();
      renderCatalog();
      renderCartDrawer();
      renderWishlistDrawer();
      showToast(`Product removed from catalog`, 'info');
    }
  }

  function setInputError(inputElement, errorElementId, message) {
    inputElement.classList.add('invalid');
    const errEl = document.getElementById(errorElementId);
    if (errEl) errEl.textContent = message;
  }

  function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  }

  // ----------------------------------------------------------
  // 11. QUICK VIEW MODAL
  // ----------------------------------------------------------
  function openQuickView(productId) {
    const product = state.products.find((p) => p.id === productId);
    if (!product || !elements.quickViewContent) return;

    elements.quickViewContent.innerHTML = `
      <div class="qv-gallery">
        <img src="${product.image}" alt="${product.title}" onerror="this.src='https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80'">
      </div>
      <div class="qv-details">
        <span class="qv-category">${product.category}</span>
        <h2 class="qv-title">${product.title}</h2>
        <div class="card-rating" style="margin-bottom: 0.85rem;">
          <span>${generateStars(product.rating)}</span>
          <span class="card-rating-count">(${product.reviewsCount || 120} verified customer reviews)</span>
        </div>
        <div class="qv-price-row">
          <span class="qv-price">${formatCurrency(product.price)}</span>
          ${product.oldPrice ? `<span class="qv-old-price">${formatCurrency(product.oldPrice)}</span>` : ''}
        </div>
        <p class="qv-desc">${product.description}</p>
        <div class="qv-actions">
          <button class="btn btn-add-cart-solid btn-large" id="qvAddToCartBtn" data-id="${product.id}">
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    `;

    const addBtn = elements.quickViewContent.querySelector('#qvAddToCartBtn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        addToCart(product.id, 1);
        closeQuickView();
      });
    }

    if (elements.quickViewBackdrop) {
      elements.quickViewBackdrop.classList.add('open');
    }
  }

  function closeQuickView() {
    if (elements.quickViewBackdrop) {
      elements.quickViewBackdrop.classList.remove('open');
    }
  }

  // ----------------------------------------------------------
  // 12. CHECKOUT & FORM VALIDATION
  // ----------------------------------------------------------
  function openCheckout() {
    if (state.cart.length === 0) {
      showToast('Your bag is empty! Add products first.', 'error');
      return;
    }

    closeCartDrawer();
    const { subtotal, discount, shipping, tax, total } = calculateCartTotals();

    if (elements.checkoutItemsPreview) {
      elements.checkoutItemsPreview.innerHTML = state.cart.map((item) => `
        <div class="checkout-item-row">
          <span class="checkout-item-title">${item.quantity}x ${item.title}</span>
          <strong>${formatCurrency(item.price * item.quantity)}</strong>
        </div>
      `).join('');
    }

    if (elements.coSubtotal) elements.coSubtotal.textContent = formatCurrency(subtotal);
    if (elements.coShipping) elements.coShipping.textContent = shipping === 0 ? 'FREE' : formatCurrency(shipping);
    if (elements.coTax) elements.coTax.textContent = formatCurrency(tax);
    if (elements.coTotal) elements.coTotal.textContent = formatCurrency(total);
    if (elements.checkoutSubmitTotal) elements.checkoutSubmitTotal.textContent = `(${formatCurrency(total)})`;

    if (discount > 0 && elements.coDiscountRow) {
      elements.coDiscountRow.style.display = 'flex';
      elements.coDiscount.textContent = `-${formatCurrency(discount)}`;
    } else if (elements.coDiscountRow) {
      elements.coDiscountRow.style.display = 'none';
    }

    if (elements.checkoutBackdrop) {
      elements.checkoutBackdrop.classList.add('open');
    }
  }

  function closeCheckout() {
    if (elements.checkoutBackdrop) {
      elements.checkoutBackdrop.classList.remove('open');
    }
  }

  function handleCheckoutSubmit(e) {
    e.preventDefault();
    clearInputErrors();

    const nameInput = document.getElementById('checkoutFullName');
    const emailInput = document.getElementById('checkoutEmail');
    const phoneInput = document.getElementById('checkoutPhone');
    const addressInput = document.getElementById('checkoutAddress');
    const cityInput = document.getElementById('checkoutCity');
    const zipInput = document.getElementById('checkoutZip');
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    const cardNum = document.getElementById('cardNum');
    const cardExpiry = document.getElementById('cardExpiry');
    const cardCvv = document.getElementById('cardCvv');

    let isValid = true;

    if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
      setInputError(nameInput, 'checkoutFullNameError', 'Enter your full name (minimum 3 characters).');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      setInputError(emailInput, 'checkoutEmailError', 'Please enter a valid email address.');
      isValid = false;
    }

    const phoneClean = phoneInput.value.replace(/\D/g, '');
    if (phoneClean.length < 10) {
      setInputError(phoneInput, 'checkoutPhoneError', 'Please enter a valid 10-digit contact number.');
      isValid = false;
    }

    if (!addressInput.value.trim() || addressInput.value.trim().length < 6) {
      setInputError(addressInput, 'checkoutAddressError', 'Please provide a complete street address.');
      isValid = false;
    }

    if (!cityInput.value.trim() || cityInput.value.trim().length < 2) {
      setInputError(cityInput, 'checkoutCityError', 'Please enter your delivery city.');
      isValid = false;
    }

    if (!zipInput.value.trim() || zipInput.value.trim().length < 4) {
      setInputError(zipInput, 'checkoutZipError', 'Please enter a valid postal / ZIP code.');
      isValid = false;
    }

    if (paymentMethod === 'card') {
      const cardClean = cardNum.value.replace(/\s+/g, '');
      if (cardClean.length < 15 || !/^\d+$/.test(cardClean)) {
        setInputError(cardNum, 'cardNumError', 'Card number must be 15-16 numeric digits.');
        isValid = false;
      }

      if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(cardExpiry.value.trim())) {
        setInputError(cardExpiry, 'cardExpiryError', 'Expiry must be in MM/YY format.');
        isValid = false;
      }

      if (!/^\d{3,4}$/.test(cardCvv.value.trim())) {
        setInputError(cardCvv, 'cardCvvError', 'CVV must be 3 or 4 digits.');
        isValid = false;
      }
    }

    if (!isValid) {
      showToast('Please fix the errors indicated in the checkout form.', 'error');
      return;
    }

    const orderRef = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    const { total } = calculateCartTotals();

    if (elements.confirmedOrderId) elements.confirmedOrderId.textContent = orderRef;
    if (elements.confirmedOrderSummary) {
      elements.confirmedOrderSummary.innerHTML = `
        <p><strong>Customer:</strong> ${nameInput.value.trim()}</p>
        <p><strong>Delivery To:</strong> ${addressInput.value.trim()}, ${cityInput.value.trim()} (${zipInput.value.trim()})</p>
        <p><strong>Payment Method:</strong> ${paymentMethod === 'card' ? 'Credit / Debit Card' : 'Cash on Delivery'}</p>
        <p><strong>Total Paid:</strong> ${formatCurrency(total)}</p>
        <p><strong>Estimated Delivery:</strong> 3-5 Business Days</p>
      `;
    }

    closeCheckout();
    state.cart = [];
    state.appliedCoupon = null;
    saveToStorage(STORAGE_KEYS.CART, state.cart);
    saveToStorage(STORAGE_KEYS.COUPON, null);
    updateBadges();
    renderCartDrawer();

    if (elements.orderSuccessBackdrop) {
      elements.orderSuccessBackdrop.classList.add('open');
    }
  }

  // ----------------------------------------------------------
  // 13. DRAWER TOGGLES & CONTROLS
  // ----------------------------------------------------------
  function openCartDrawer() {
    renderCartDrawer();
    if (elements.cartOverlay) elements.cartOverlay.classList.add('active');
    if (elements.cartDrawer) elements.cartDrawer.classList.add('open');
  }

  function closeCartDrawer() {
    if (elements.cartOverlay) elements.cartOverlay.classList.remove('active');
    if (elements.cartDrawer) elements.cartDrawer.classList.remove('open');
  }

  function openWishlistDrawer() {
    renderWishlistDrawer();
    if (elements.wishlistOverlay) elements.wishlistOverlay.classList.add('active');
    if (elements.wishlistDrawer) elements.wishlistDrawer.classList.add('open');
  }

  function closeWishlistDrawer() {
    if (elements.wishlistOverlay) elements.wishlistOverlay.classList.remove('active');
    if (elements.wishlistDrawer) elements.wishlistDrawer.classList.remove('open');
  }

  // ----------------------------------------------------------
  // 14. COUPON CODE APPLICATION
  // ----------------------------------------------------------
  function applyCoupon() {
    if (!elements.couponInput) return;
    const code = elements.couponInput.value.trim().toUpperCase();

    if (!code) {
      showCouponFeedback('Please enter a coupon code.', 'error');
      return;
    }

    if (PROMO_CODES[code]) {
      state.appliedCoupon = code;
      saveToStorage(STORAGE_KEYS.COUPON, code);
      showCouponFeedback(`Code applied! ${PROMO_CODES[code].label}`, 'success');
      showToast(`Coupon "${code}" applied!`, 'success');
      renderCartDrawer();
    } else {
      showCouponFeedback('Invalid or expired promotional code.', 'error');
    }
  }

  function showCouponFeedback(msg, type) {
    if (!elements.couponFeedback) return;
    elements.couponFeedback.textContent = msg;
    elements.couponFeedback.className = `coupon-feedback ${type}`;
  }

  // ----------------------------------------------------------
  // 15. EVENT LISTENERS INITIALIZATION
  // ----------------------------------------------------------
  function setupEventListeners() {
    // Announcement Bar close
    if (elements.closeAnnouncement && elements.announcementBar) {
      elements.closeAnnouncement.addEventListener('click', () => {
        elements.announcementBar.classList.add('hidden');
      });
    }

    // Account Button Click
    if (elements.accountTriggerBtn) {
      elements.accountTriggerBtn.addEventListener('click', () => {
        showToast('Welcome to ApKart, Aditya Pal!', 'info', 2500);
      });
    }

    // Header Search Inputs & Blue Search Button
    function executeSearch() {
      const val = elements.headerSearchInput ? elements.headerSearchInput.value : '';
      state.filters.search = val;
      if (elements.catalogSearchInput) elements.catalogSearchInput.value = val;
      if (elements.clearHeaderSearch) {
        elements.clearHeaderSearch.style.display = val.length > 0 ? 'block' : 'none';
      }
      renderCatalog();
      const featuredSec = document.getElementById('featured-products');
      if (featuredSec && val.trim().length > 0) {
        featuredSec.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (elements.headerSearchInput) {
      elements.headerSearchInput.addEventListener('input', executeSearch);
      elements.headerSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          executeSearch();
        }
      });
    }

    if (elements.headerSearchBtn) {
      elements.headerSearchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        executeSearch();
      });
    }

    if (elements.clearHeaderSearch) {
      elements.clearHeaderSearch.addEventListener('click', () => {
        elements.headerSearchInput.value = '';
        state.filters.search = '';
        elements.clearHeaderSearch.style.display = 'none';
        if (elements.catalogSearchInput) elements.catalogSearchInput.value = '';
        renderCatalog();
      });
    }

    // Inline Catalog Search
    if (elements.catalogSearchInput) {
      elements.catalogSearchInput.addEventListener('input', (e) => {
        state.filters.search = e.target.value;
        if (elements.headerSearchInput) elements.headerSearchInput.value = e.target.value;
        renderCatalog();
      });
    }

    // Category Navigation (Section 2 sub-nav links)
    document.querySelectorAll('.sub-nav-link').forEach((link) => {
      link.addEventListener('click', (e) => {
        const cat = e.currentTarget.dataset.category || 'all';
        setCategoryFilter(cat);
      });
    });

    // Category Circle Items (Section 4 popular categories)
    document.querySelectorAll('.category-circle-item').forEach((circle) => {
      circle.addEventListener('click', (e) => {
        const cat = e.currentTarget.dataset.category || 'all';
        setCategoryFilter(cat);
      });
    });

    // Footer Category & Filter Links
    document.querySelectorAll('[data-filter-link]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const cat = e.currentTarget.dataset.filterLink || 'all';
        setCategoryFilter(cat);
      });
    });

    // View All Products Button
    if (elements.viewAllBtn) {
      elements.viewAllBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setCategoryFilter('all');
      });
    }

    // Deals Nav Link
    const dealsNav = document.getElementById('dealsNavLink');
    if (dealsNav) {
      dealsNav.addEventListener('click', (e) => {
        e.preventDefault();
        const promoSec = document.getElementById('promotions-section');
        if (promoSec) promoSec.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Promo Buttons that apply coupons
    document.querySelectorAll('[data-coupon]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const coupon = e.currentTarget.dataset.coupon;
        if (coupon && PROMO_CODES[coupon]) {
          state.appliedCoupon = coupon;
          saveToStorage(STORAGE_KEYS.COUPON, coupon);
          showToast(`Applied ${PROMO_CODES[coupon].label}!`, 'success');
          renderCartDrawer();
        }
      });
    });

    // Price Range Slider
    if (elements.priceRangeSlider) {
      elements.priceRangeSlider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10);
        state.filters.maxPrice = val;
        if (elements.priceValueDisplay) {
          elements.priceValueDisplay.textContent = `₹${val.toLocaleString('en-IN')}`;
        }
        renderCatalog();
      });
    }

    // Sort By Dropdown
    if (elements.sortBySelect) {
      elements.sortBySelect.addEventListener('change', (e) => {
        state.filters.sortBy = e.target.value;
        renderCatalog();
      });
    }

    // Rating Filter
    if (elements.ratingSelect) {
      elements.ratingSelect.addEventListener('change', (e) => {
        state.filters.minRating = parseFloat(e.target.value);
        renderCatalog();
      });
    }

    // Clear filters buttons
    if (elements.clearAllFiltersBtn) elements.clearAllFiltersBtn.addEventListener('click', resetAllFilters);
    if (elements.emptyResetFiltersBtn) elements.emptyResetFiltersBtn.addEventListener('click', resetAllFilters);

    // Reset Catalog to Sample Data
    if (elements.resetCatalogBtn) {
      elements.resetCatalogBtn.addEventListener('click', () => {
        if (confirm('Reset store catalog back to default ApKart sample items?')) {
          state.products = [...DEFAULT_PRODUCTS];
          saveToStorage(STORAGE_KEYS.PRODUCTS, state.products);
          renderCatalog();
          showToast('Sample catalog restored!', 'success');
        }
      });
    }

    // Add Product Modal button
    if (elements.openAddProductModalBtn) {
      elements.openAddProductModalBtn.addEventListener('click', () => openProductModal('add'));
    }

    // Newsletter Subscription Form
    if (elements.newsletterForm) {
      elements.newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = elements.newsletterEmail.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
          elements.newsletterFeedback.textContent = 'Please enter a valid email address.';
          elements.newsletterFeedback.className = 'form-feedback error';
          return;
        }

        elements.newsletterFeedback.textContent = 'Awesome! You are now subscribed to ApKart exclusive deals.';
        elements.newsletterFeedback.className = 'form-feedback success';
        showToast('Subscribed successfully! Welcome to ApKart.', 'success');
        elements.newsletterEmail.value = '';
      });
    }

    // Products Grid Event Delegation (Wishlist, Quick View, Add to Cart, Edit, Delete)
    if (elements.productsGrid) {
      elements.productsGrid.addEventListener('click', (e) => {
        const actionBtn = e.target.closest('[data-action]');
        if (!actionBtn) return;

        const action = actionBtn.dataset.action;
        const productId = actionBtn.dataset.id;

        if (action === 'toggle-wishlist') {
          toggleWishlist(productId);
        } else if (action === 'add-to-cart') {
          actionBtn.classList.add('loading');
          addToCart(productId, 1);
        } else if (action === 'quick-view') {
          openQuickView(productId);
        } else if (action === 'edit-product') {
          openProductModal('edit', productId);
        } else if (action === 'delete-product') {
          deleteProduct(productId);
        }
      });
    }

    // Cart Drawer Open / Close
    if (elements.cartTriggerBtn) elements.cartTriggerBtn.addEventListener('click', openCartDrawer);
    if (elements.closeCartBtn) elements.closeCartBtn.addEventListener('click', closeCartDrawer);
    if (elements.cartOverlay) elements.cartOverlay.addEventListener('click', closeCartDrawer);
    if (elements.startShoppingBtn) elements.startShoppingBtn.addEventListener('click', closeCartDrawer);
    if (elements.clearCartBtn) elements.clearCartBtn.addEventListener('click', clearCart);

    // Cart Drawer Items Event Delegation
    if (elements.cartItemsList) {
      elements.cartItemsList.addEventListener('click', (e) => {
        const actionBtn = e.target.closest('[data-action]');
        if (!actionBtn) return;

        const action = actionBtn.dataset.action;
        const productId = actionBtn.dataset.id;

        if (action === 'increase-qty') {
          updateCartQuantity(productId, 1);
        } else if (action === 'decrease-qty') {
          updateCartQuantity(productId, -1);
        } else if (action === 'remove-item') {
          removeFromCart(productId);
        }
      });
    }

    // Wishlist Drawer Open / Close
    if (elements.wishlistTriggerBtn) elements.wishlistTriggerBtn.addEventListener('click', openWishlistDrawer);
    if (elements.closeWishlistBtn) elements.closeWishlistBtn.addEventListener('click', closeWishlistDrawer);
    if (elements.wishlistOverlay) elements.wishlistOverlay.addEventListener('click', closeWishlistDrawer);

    // Wishlist Drawer Items Delegation
    if (elements.wishlistItemsList) {
      elements.wishlistItemsList.addEventListener('click', (e) => {
        const actionBtn = e.target.closest('[data-action]');
        if (!actionBtn) return;

        const action = actionBtn.dataset.action;
        const productId = actionBtn.dataset.id;

        if (action === 'wishlist-move-to-cart') {
          addToCart(productId, 1);
          toggleWishlist(productId);
        } else if (action === 'wishlist-remove') {
          toggleWishlist(productId);
        }
      });
    }

    // Coupon Apply Button
    if (elements.applyCouponBtn) elements.applyCouponBtn.addEventListener('click', applyCoupon);

    // Product Modal CRUD Form
    if (elements.productCrudForm) elements.productCrudForm.addEventListener('submit', handleProductFormSubmit);
    if (elements.closeProductModalBtn) elements.closeProductModalBtn.addEventListener('click', closeProductModal);
    if (elements.cancelProductBtn) elements.cancelProductBtn.addEventListener('click', closeProductModal);
    if (elements.productModalBackdrop) {
      elements.productModalBackdrop.addEventListener('click', (e) => {
        if (e.target === elements.productModalBackdrop) closeProductModal();
      });
    }

    // Quick View Modal Close
    if (elements.closeQuickViewBtn) elements.closeQuickViewBtn.addEventListener('click', closeQuickView);
    if (elements.quickViewBackdrop) {
      elements.quickViewBackdrop.addEventListener('click', (e) => {
        if (e.target === elements.quickViewBackdrop) closeQuickView();
      });
    }

    // Checkout Flow
    if (elements.proceedToCheckoutBtn) elements.proceedToCheckoutBtn.addEventListener('click', openCheckout);
    if (elements.closeCheckoutBtn) elements.closeCheckoutBtn.addEventListener('click', closeCheckout);
    if (elements.cancelCheckoutBtn) {
      elements.cancelCheckoutBtn.addEventListener('click', () => {
        closeCheckout();
        openCartDrawer();
      });
    }
    if (elements.checkoutForm) elements.checkoutForm.addEventListener('submit', handleCheckoutSubmit);
    if (elements.checkoutBackdrop) {
      elements.checkoutBackdrop.addEventListener('click', (e) => {
        if (e.target === elements.checkoutBackdrop) closeCheckout();
      });
    }

    // Payment Radio Switcher
    const paymentRadios = document.querySelectorAll('input[name="paymentMethod"]');
    paymentRadios.forEach((radio) => {
      radio.addEventListener('change', (e) => {
        document.querySelectorAll('.payment-option').forEach((opt) => opt.classList.remove('selected'));
        e.target.closest('.payment-option').classList.add('selected');

        if (elements.cardFieldsWrapper) {
          elements.cardFieldsWrapper.style.display = e.target.value === 'card' ? 'block' : 'none';
        }
      });
    });

    // Credit Card Number Auto-Formatter
    const cardNum = document.getElementById('cardNum');
    if (cardNum) {
      cardNum.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '').substring(0, 16);
        let formatted = val.match(/.{1,4}/g)?.join(' ') || val;
        e.target.value = formatted;
      });
    }

    // Expiry Date Auto-Formatter (MM/YY)
    const cardExpiry = document.getElementById('cardExpiry');
    if (cardExpiry) {
      cardExpiry.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '').substring(0, 4);
        if (val.length >= 3) {
          e.target.value = val.substring(0, 2) + '/' + val.substring(2);
        } else {
          e.target.value = val;
        }
      });
    }

    // Order Success Continue Shopping
    if (elements.continueShoppingBtn) {
      elements.continueShoppingBtn.addEventListener('click', () => {
        if (elements.orderSuccessBackdrop) {
          elements.orderSuccessBackdrop.classList.remove('open');
        }
      });
    }

    // Scroll to Top Button
    window.addEventListener('scroll', () => {
      if (elements.scrollToTopBtn) {
        if (window.scrollY > 400) {
          elements.scrollToTopBtn.classList.add('visible');
        } else {
          elements.scrollToTopBtn.classList.remove('visible');
        }
      }
    });

    if (elements.scrollToTopBtn) {
      elements.scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Keyboard ESC to close any open modal/drawer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCartDrawer();
        closeWishlistDrawer();
        closeProductModal();
        closeQuickView();
        closeCheckout();
      }
    });
  }

  // ----------------------------------------------------------
  // 16. INITIALIZATION
  // ----------------------------------------------------------
  function init() {
    initTheme();
    updateBadges();
    renderCatalog();
    renderCartDrawer();
    setupEventListeners();

    console.log('%c🛒 ApKart Homepage Loaded Successfully!', 'color: #2563eb; font-weight: bold; font-size: 1.1rem;');
    console.log('Web Development Internship Final Project by Aditya Pal — 8 Layout Sections Active.');
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

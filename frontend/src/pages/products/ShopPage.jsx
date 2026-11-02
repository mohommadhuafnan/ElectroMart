import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, SlidersHorizontal, Search, RotateCcw, Check } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../../data/products';
import { ProductCard } from '../../components/products/ProductCard';

export const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryCat = searchParams.get('cat') || 'all';
  const querySearch = searchParams.get('q') || '';
  const querySale = searchParams.get('sale') === 'true';

  const [selectedCategory, setSelectedCategory] = useState(queryCat);
  const [searchTerm, setSearchTerm] = useState(querySearch);
  const [onlySale, setOnlySale] = useState(querySale);
  const [sortBy, setSortBy] = useState('featured');
  const [maxPrice, setMaxPrice] = useState(200000);

  // Sync with URL params if they change
  React.useEffect(() => {
    if (queryCat !== selectedCategory) setSelectedCategory(queryCat);
    if (querySearch !== searchTerm) setSearchTerm(querySearch);
    if (querySale !== onlySale) setOnlySale(querySale);
  }, [queryCat, querySearch, querySale]);

  const handleCategorySelect = (slug) => {
    setSelectedCategory(slug);
    const newParams = new URLSearchParams(searchParams);
    if (slug === 'all') {
      newParams.delete('cat');
    } else {
      newParams.set('cat', slug);
    }
    setSearchParams(newParams);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      // Category filter
      if (selectedCategory !== 'all' && p.categorySlug !== selectedCategory) {
        return false;
      }
      // Search term
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(q);
        const matchBrand = p.brand.toLowerCase().includes(q);
        const matchDesc = p.description.toLowerCase().includes(q);
        if (!matchTitle && !matchBrand && !matchDesc) return false;
      }
      // Sale only
      if (onlySale && !p.isSale) return false;
      // Price
      if (p.price > maxPrice) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      if (sortBy === 'newest') return b.id - a.id;
      return 0; // featured default
    });
  }, [selectedCategory, searchTerm, onlySale, maxPrice, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchTerm('');
    setOnlySale(false);
    setMaxPrice(200000);
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <div style={{ padding: '30px 0 60px 0' }}>
      <div className="container-fluid px-header">
        {/* Breadcrumb */}
        <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
          <Link to="/" style={{ color: 'var(--text-main)', fontWeight: 600 }}>Home</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: 'var(--primary-orange)', fontWeight: 600 }}>Shop</span>
          {selectedCategory !== 'all' && (
            <>
              <span style={{ margin: '0 8px' }}>/</span>
              <span style={{ textTransform: 'capitalize', color: 'var(--dark-heading)' }}>
                {CATEGORIES.find(c => c.slug === selectedCategory)?.name || selectedCategory}
              </span>
            </>
          )}
        </div>

        {/* Shop Layout: Sidebar + Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '30px', alignItems: 'start' }}>
          {/* Sidebar Filters */}
          <aside
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, fontSize: '1.1rem', color: 'var(--dark-heading)' }}>
                <Filter size={18} color="var(--primary-orange)" />
                <span>Filters</span>
              </div>
              <button
                onClick={resetFilters}
                style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}
                title="Reset all filters"
              >
                <RotateCcw size={12} />
                <span>Reset</span>
              </button>
            </div>

            {/* Keyword Search */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '8px' }}>
                Search Keyword
              </label>
              <div style={{ display: 'flex', alignItems: 'center', background: '#f8f9fa', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '0 10px' }}>
                <Search size={16} color="var(--text-muted)" />
                <input
                  type="text"
                  placeholder="e.g. Orel, Konka, Solar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ border: 'none', background: 'transparent', padding: '8px', outline: 'none', width: '100%', fontSize: '13px' }}
                />
              </div>
            </div>

            {/* Categories List */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--dark-slate)', marginBottom: '10px' }}>
                Product Categories
              </label>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <li>
                  <button
                    onClick={() => handleCategorySelect('all')}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      fontSize: '13.5px',
                      fontWeight: selectedCategory === 'all' ? 700 : 500,
                      background: selectedCategory === 'all' ? 'var(--orange-subtle)' : 'transparent',
                      color: selectedCategory === 'all' ? 'var(--primary-orange)' : 'var(--text-main)',
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>All Products</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>({PRODUCTS.length})</span>
                  </button>
                </li>
                {CATEGORIES.map(cat => {
                  const count = PRODUCTS.filter(p => p.categorySlug === cat.slug).length;
                  const isSelected = selectedCategory === cat.slug;
                  return (
                    <li key={cat.id}>
                      <button
                        onClick={() => handleCategorySelect(cat.slug)}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          fontSize: '13.5px',
                          fontWeight: isSelected ? 700 : 500,
                          background: isSelected ? 'var(--orange-subtle)' : 'transparent',
                          color: isSelected ? 'var(--primary-orange)' : 'var(--text-main)',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <img src={cat.icon} alt="" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
                          {cat.name}
                        </span>
                        <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>({count})</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Price Filter Slider */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 700, marginBottom: '8px' }}>
                <span>Max Price</span>
                <span style={{ color: 'var(--primary-orange)' }}>LKR {maxPrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="200000"
                step="2000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--primary-orange)', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>
                <span>LKR 1,000</span>
                <span>LKR 200,000</span>
              </div>
            </div>

            {/* Sale / Deals Checkbox */}
            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '16px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13.5px', fontWeight: 600, color: 'var(--dark-slate)' }}>
                <input
                  type="checkbox"
                  checked={onlySale}
                  onChange={(e) => setOnlySale(e.target.checked)}
                  style={{ width: '16px', height: '16px', accentColor: 'var(--primary-orange)' }}
                />
                <span>Only On-Sale Items</span>
              </label>
            </div>
          </aside>

          {/* Main Content: Header bar + Product grid */}
          <main>
            {/* Top Toolbar */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '16px 24px',
                border: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '24px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ fontSize: '14.5px', color: 'var(--text-muted)' }}>
                Showing <strong style={{ color: 'var(--dark-heading)' }}>{filteredProducts.length}</strong> items
              </div>

              {/* Sort selector */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--dark-slate)' }}>Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    background: '#f8f9fa',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    padding: '6px 12px',
                    fontSize: '13px',
                    fontWeight: 600,
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="featured">Featured / Best Match</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Customer Rating</option>
                  <option value="newest">New Arrivals</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <ul className="products-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))' }}>
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </ul>
            ) : (
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '60px 20px',
                  textAlign: 'center',
                  border: '1px solid var(--border-light)'
                }}
              >
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--orange-subtle)', color: 'var(--primary-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                  <Search size={32} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', color: 'var(--dark-heading)' }}>
                  No Products Found
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', maxWidth: '400px', margin: '0 auto 20px auto' }}>
                  We could not find any products matching your current search or filter criteria.
                </p>
                <button
                  onClick={resetFilters}
                  className="btn-primary-orange"
                  style={{ fontSize: '14px', padding: '10px 22px' }}
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};


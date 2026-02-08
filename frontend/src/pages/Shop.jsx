import React, { useState } from 'react';
import { shopPageStyles } from '../assets/dummyStyles';
import ShopHero from '../components/ShopHero'; // Import ShopHero
import { Search, ChevronDown, Filter, Grid3x3, List } from 'lucide-react';
import { PRODUCTS } from '../assets/dummywdata';
import { Link } from 'react-router-dom';

const categories = ["All Products", "Electronics", "Fashion", "Home & Living"];

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Products");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("newest");

    // Filter products
    const filteredProducts = PRODUCTS.filter(product => {
        const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    }).sort((a, b) => {
        if (sortBy === "low-high") return parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, ''));
        if (sortBy === "high-low") return parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, ''));
        return 0; // Default (newest / id based)
    });

    return (
        <div>
            <ShopHero />
            <div className={shopPageStyles.container}>
                {/* <h1 className={shopPageStyles.title}>All Products</h1> Removed title */}

                <div className={shopPageStyles.layout}>
                    {/* Sidebar */}
                    <aside className={shopPageStyles.sidebar}>
                        <div className={shopPageStyles.filterGroup}>
                            <h3 className={shopPageStyles.filterTitle}>Filter by Category</h3>
                            <ul className={shopPageStyles.categoryList}>
                                {categories.map(category => (
                                    <li
                                        key={category}
                                        className={`${shopPageStyles.categoryItem} ${selectedCategory === category ? shopPageStyles.categoryItemActive : ''}`}
                                        onClick={() => setSelectedCategory(category)}
                                    >
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className={shopPageStyles.mainContent}>
                        {/* Toolbar */}
                        <div className={shopPageStyles.toolbar}>
                            <div className={shopPageStyles.searchContainer}>
                                <Search className={shopPageStyles.searchIcon} />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className={shopPageStyles.searchInput}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            <select
                                className={shopPageStyles.sortSelect}
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="newest">Newest</option>
                                <option value="low-high">Price: Low to High</option>
                                <option value="high-low">Price: High to Low</option>
                            </select>
                        </div>

                        {/* Product Grid */}
                        <div className={shopPageStyles.grid}>
                            {filteredProducts.map(product => (
                                <Link to={`/product/${product.id}`} key={product.id} className={shopPageStyles.card}>
                                    <div className={shopPageStyles.imageContainer}>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className={shopPageStyles.productImage}
                                        />
                                    </div>
                                    <div className={shopPageStyles.cardContent}>
                                        <p className={shopPageStyles.productCategory}>{product.category}</p>
                                        <h3 className={shopPageStyles.productName}>{product.name}</h3>
                                        <p className={shopPageStyles.productPrice}>{product.price}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-12 text-gray-500">
                                No products found using your current filters.
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Shop;

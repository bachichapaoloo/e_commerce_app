import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { featuredSectionStyles } from '../../assets/dummyStyles';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../assets/dummywdata';
import ProductCard from '../common/ProductCard';

const FeaturedProducts = () => {
    // Show only first 4 products
    const products = PRODUCTS.slice(0, 4);

    return (
        <section className={featuredSectionStyles.section}>
            <div className={featuredSectionStyles.container}>
                {/* Header */}
                <div className={featuredSectionStyles.header}>
                    <h2 className={featuredSectionStyles.title}>Featured Products</h2>
                    <Link to="/products" className={featuredSectionStyles.viewAll}>
                        View all <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Grid */}
                <div className={featuredSectionStyles.grid}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;

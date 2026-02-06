import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { featuredSectionStyles } from '../assets/dummyStyles';
import { Link } from 'react-router-dom';
import { WATCHES } from '../assets/dummywdata'; // Reusing existing data for now

const FeaturedProducts = () => {
    // Show only first 4 products
    const products = WATCHES.slice(0, 4);

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
                        <div key={product.id} className={featuredSectionStyles.card}>
                            <div className={featuredSectionStyles.imageContainer}>
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className={featuredSectionStyles.image}
                                />
                                <button className={featuredSectionStyles.addButton}>
                                    <Plus size={20} />
                                </button>
                            </div>

                            <div className={featuredSectionStyles.info}>
                                <h3 className={featuredSectionStyles.productName}>{product.name}</h3>
                                <p className={featuredSectionStyles.price}>{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;

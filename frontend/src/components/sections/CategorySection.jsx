import React from 'react';
import { ArrowRight } from 'lucide-react';
import { categorySectionStyles } from '../../assets/dummyStyles';
import { Link } from 'react-router-dom';

// Placeholder data since we don't have bag images yet
const categories = [
    {
        id: 1,
        name: "Handbags",
        count: "120+ Products",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "Backpacks",
        count: "85+ Products",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Travel Bags",
        count: "50+ Products",
        image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=800&auto=format&fit=crop"
    }
];

const CategorySection = () => {
    return (
        <section className={categorySectionStyles.section}>
            <div className={categorySectionStyles.container}>
                {/* Header */}
                <div className={categorySectionStyles.header}>
                    <h2 className={categorySectionStyles.title}>Shop by Category</h2>
                    <Link to="/categories" className={categorySectionStyles.viewAll}>
                        View all <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Grid */}
                <div className={categorySectionStyles.grid}>
                    {categories.map((category) => (
                        <div key={category.id} className={categorySectionStyles.card}>
                            <img
                                src={category.image}
                                alt={category.name}
                                className={categorySectionStyles.image}
                            />
                            <div className={categorySectionStyles.overlay}></div>

                            <div className={categorySectionStyles.content}>
                                <h3 className={categorySectionStyles.categoryName}>{category.name}</h3>
                                <p className={categorySectionStyles.itemCount}>{category.count}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;

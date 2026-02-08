import React from 'react';
import { shopHeroStyles } from '../../assets/dummyStyles';

const ShopHero = () => {
    return (
        <div className={shopHeroStyles.section}>
            <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=2000"
                alt="Shop Background"
                className={shopHeroStyles.backgroundImage}
            />
            <div className={shopHeroStyles.overlay}></div>

            <div className={shopHeroStyles.container}>
                <div className={shopHeroStyles.breadcrumbs}>
                    <span>Home</span> / <span>Shop</span>
                </div>
                <h1 className={shopHeroStyles.title}>The Collection</h1>
                <p className={shopHeroStyles.subtitle}>
                    Thoughtfully designed pieces for the modern individual. Quality, functionality, and timeless aesthetics.
                </p>
            </div>
        </div>
    );
};

export default ShopHero;

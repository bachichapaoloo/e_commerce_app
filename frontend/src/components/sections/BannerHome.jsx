import React from 'react';
import { bannerHomeStyles } from '../../assets/dummyStyles';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BannerHome = () => {
    return (
        <div className={bannerHomeStyles.minimalContainer}>
            <div className={bannerHomeStyles.minimalContentContainer}>
                <h1 className={bannerHomeStyles.minimalH1Text}>
                    Discover Quality & <br />
                    Elegant Bags
                </h1>

                <p className={bannerHomeStyles.minimalSubtext}>
                    Browse our curated collection of premium bags. Simple ordering, pay when approved.
                </p>

                <Link className={bannerHomeStyles.button} to="/products">
                    Shop Now
                    <ArrowRight className={bannerHomeStyles.buttonArrow} />
                </Link>
            </div>
        </div>
    );
};

export default BannerHome;

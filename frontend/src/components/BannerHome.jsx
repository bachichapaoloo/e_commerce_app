import React from 'react';
import { bannerHomeStyles } from '../assets/dummyStyles';
import Navbar from './Navbar';
import { ArrowRight } from 'lucide-react';

export const BannerHome = () => {
    return (
        <div className={bannerHomeStyles.minimalContainer}>
            <div className={bannerHomeStyles.minimalNavbarWrapper}>
                <Navbar />
            </div>

            <div className={bannerHomeStyles.minimalContentContainer}>
                <h1 className={bannerHomeStyles.minimalH1Text}>
                    Discover Quality & <br />
                    Elegant Bags
                </h1>

                <p className={bannerHomeStyles.minimalSubtext}>
                    Browse our curated collection of premium bags. Simple ordering, pay when approved.
                </p>

                <button className={bannerHomeStyles.button}>
                    Shop Now
                    <ArrowRight className={bannerHomeStyles.buttonArrow} />
                </button>
            </div>
        </div>
    );
};

export default BannerHome;

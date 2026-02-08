import React from 'react';
import { aboutPageStyles } from '../assets/dummyStyles';
import { STATS, OUR_VALUES } from '../assets/dummywdata';
import { Leaf, ShieldCheck, Zap, Users } from 'lucide-react';

const iconMap = {
    Leaf, ShieldCheck, Zap, Users
};

const About = () => {
    return (
        <div className={aboutPageStyles.container}>
            {/* Header / Hero */}
            <div className={aboutPageStyles.headerSection}>
                <h1 className={aboutPageStyles.title}>Curating the Exceptional</h1>
                <p className={aboutPageStyles.subtitle}>
                    We believe in quality, craftsmanship, and the beauty of simplicity.
                    Our mission is to bring you products that elevate your everyday life.
                </p>
            </div>

            {/* Mission Section */}
            <section className={aboutPageStyles.section}>
                <div className={aboutPageStyles.imageContainer}>
                    <img
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
                        alt="Our Mission"
                        className={aboutPageStyles.image}
                    />
                </div>
                <div className={aboutPageStyles.contentBlock}>
                    <h2 className={aboutPageStyles.sectionTitle}>Designed for Modern Living</h2>
                    <p className={aboutPageStyles.paragraph}>
                        Founded in 2015, E-Commerce started with a simple idea: that good design should be accessible to everyone.
                        We scour the globe to find artisans and creators who share our passion for quality materials and sustainable practices.
                    </p>
                    <p className={aboutPageStyles.paragraph}>
                        Every product in our collection is hand-picked and tested by our team. We don't just sell things;
                        we curate experiences that bring joy and functionality to your home and wardrobe.
                    </p>
                </div>
            </section>

            {/* Stats Grid */}
            <div className={aboutPageStyles.statsGrid}>
                {STATS.map((stat, index) => (
                    <div key={index} className={aboutPageStyles.statItem}>
                        <div className={aboutPageStyles.statValue}>{stat.value}</div>
                        <div className={aboutPageStyles.statLabel}>{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Values Section */}
            <section className="mb-20">
                <div className="text-center mb-12">
                    <h2 className={aboutPageStyles.sectionTitle}>Our Core Values</h2>
                </div>
                <div className={aboutPageStyles.valuesGrid}>
                    {OUR_VALUES.map((value) => {
                        const Icon = iconMap[value.iconName];
                        return (
                            <div key={value.id} className={aboutPageStyles.valueCard}>
                                <div className={aboutPageStyles.valueIconWrapper}>
                                    {Icon && <Icon size={28} />}
                                </div>
                                <h3 className={aboutPageStyles.valueTitle}>{value.title}</h3>
                                <p className={aboutPageStyles.valueDescription}>{value.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className={aboutPageStyles.newsletterSection}>
                <div className={aboutPageStyles.newsletterContent}>
                    <h2 className={aboutPageStyles.newsletterTitle}>Join Our Community</h2>
                    <p className={aboutPageStyles.newsletterText}>
                        Subscribe to receive updates, access to exclusive deals, and more.
                    </p>
                    <form className={aboutPageStyles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={aboutPageStyles.newsletterInput}
                        />
                        <button type="submit" className={aboutPageStyles.newsletterButton}>
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default About;

import React from 'react';
import { minimalFooterStyles } from "../../assets/dummyStyles";
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const FooterSection = () => {
    return (
        <footer className={minimalFooterStyles.section}>
            <div className={minimalFooterStyles.container}>
                <div className={minimalFooterStyles.grid}>
                    {/* Brand Column */}
                    <div className={minimalFooterStyles.brandCol}>
                        <h2 className={minimalFooterStyles.brandTitle}>E-Commerce</h2>
                        <p className={minimalFooterStyles.brandText}>
                            Elevating your lifestyle with premium quality products.
                            Designed for modern living.
                        </p>
                        <div className={minimalFooterStyles.socialFlex}>
                            <Facebook size={20} className={minimalFooterStyles.socialIcon} />
                            <Instagram size={20} className={minimalFooterStyles.socialIcon} />
                            <Twitter size={20} className={minimalFooterStyles.socialIcon} />
                        </div>
                    </div>

                    {/* Shop Links */}
                    <div>
                        <h3 className={minimalFooterStyles.columnHeading}>Shop</h3>
                        <nav className={minimalFooterStyles.linkList}>
                            <Link to="/products" className={minimalFooterStyles.link}>All Products</Link>
                            <Link to="/new-arrivals" className={minimalFooterStyles.link}>New Arrivals</Link>
                            <Link to="/featured" className={minimalFooterStyles.link}>Featured</Link>
                            <Link to="/sale" className={minimalFooterStyles.link}>Sale</Link>
                        </nav>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className={minimalFooterStyles.columnHeading}>Support</h3>
                        <nav className={minimalFooterStyles.linkList}>
                            <Link to="/contact" className={minimalFooterStyles.link}>Contact Us</Link>
                            <Link to="/shipping" className={minimalFooterStyles.link}>Shipping & Returns</Link>
                            <Link to="/faq" className={minimalFooterStyles.link}>FAQ</Link>
                            <Link to="/privacy" className={minimalFooterStyles.link}>Privacy Policy</Link>
                        </nav>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className={minimalFooterStyles.columnHeading}>Stay Updated</h3>
                        <p className={minimalFooterStyles.newsletterText}>
                            Subscribe to our newsletter for exclusive offers and updates.
                        </p>
                        <form className={minimalFooterStyles.inputContainer} onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={minimalFooterStyles.input}
                            />
                            <button type="submit" className={minimalFooterStyles.button}>
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={minimalFooterStyles.bottomBar}>
                    <p className={minimalFooterStyles.copyright}>
                        © {new Date().getFullYear()} E-Commerce. All rights reserved.
                    </p>
                    <div className={minimalFooterStyles.socialFlex}>
                        {/* Additional bottom links can go here or payment icons */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
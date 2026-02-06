import React, { useState, useEffect } from "react";
import { minimalNavbarStyles } from "../assets/dummyStyles";
import { Clock, ShoppingBag, User, Menu, X, Search } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/products" }, // Changed from Watches since user is pivoting to bags/general
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const active = location.pathname || "/";

    const { totalItems } = useCart();

    // Check login status
    const [loggedIn, setLoggedIn] = useState(() => {
        try {
            return (
                localStorage.getItem("isLoggedIn") === "true" || !!localStorage.getItem("authToken")
            )
        } catch (error) {
            console.log(error);
            return false;
        }
    });

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]); // Fixed lint: only depend on pathname change

    // specific effect for auth listener to keep it sync
    useEffect(() => {
        const onStorage = (e) => {
            if (e.key === "isLoggedIn" || e.key === "authToken") {
                try {
                    const isNowLoggedIn =
                        localStorage.getItem("isLoggedIn") === "true" ||
                        !!localStorage.getItem("authToken");
                    setLoggedIn(isNowLoggedIn);
                } catch {
                    setLoggedIn(false);
                }
            }
        };
        window.addEventListener("storage", onStorage);
        return () => window.removeEventListener("storage", onStorage);
    }, []);

    const handleLogout = () => {
        try {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("authToken");
            setLoggedIn(false);
            setOpen(false);
            navigate("/");
        } catch (e) {
            console.error("Logout failed", e);
        }
    };

    return (
        <>
            <header className={minimalNavbarStyles.header}>
                <nav className={minimalNavbarStyles.nav}>
                    <div className={minimalNavbarStyles.container}>

                        {/* LEFT: BRAND */}
                        <div className={minimalNavbarStyles.brandContainer}>
                            <Link to="/" className="flex items-center gap-2">
                                {/* Replaced Icon with simple text as requested for minimal look, kept icon optional if needed */}
                                <span className={minimalNavbarStyles.logoText}>
                                    E-Commerce
                                </span>
                            </Link>
                        </div>

                        {/* CENTER: DESKTOP NAV */}
                        <div className={minimalNavbarStyles.desktopNav}>
                            {navItems.map((item) => {
                                const isActive = active === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={minimalNavbarStyles.navItem}
                                    >
                                        {item.name}
                                        <span
                                            className={`${minimalNavbarStyles.activeIndicator} ${isActive ? minimalNavbarStyles.activeIndicatorVisible : ''}`}
                                        />
                                    </Link>
                                );
                            })}
                        </div>

                        {/* RIGHT: ACTIONS */}
                        <div className={minimalNavbarStyles.rightActions}>
                            <button className={minimalNavbarStyles.iconButton}>
                                <Search size={20} />
                            </button>

                            <Link to="/cart" className={minimalNavbarStyles.iconButton}>
                                <ShoppingBag size={20} />
                                {totalItems > 0 && (
                                    <span className={minimalNavbarStyles.badge}>{totalItems}</span>
                                )}
                            </Link>

                            {!loggedIn ? (
                                <Link to="/login" className={`${minimalNavbarStyles.iconButton} hidden md:block`}>
                                    <User size={20} />
                                </Link>
                            ) : (
                                <button onClick={handleLogout} className={`${minimalNavbarStyles.iconButton} hidden md:block`}>
                                    <User size={20} fill="currentColor" />
                                </button>
                            )}

                            {/* MOBILE TOGGLE */}
                            <button
                                onClick={() => setOpen(true)}
                                className={minimalNavbarStyles.mobileMenuButton}
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* MOBILE MENU DRAWER - Moved outside header to avoid stacking context issues */}
            {open && (
                <>
                    {/* Overlay */}
                    <div
                        className={minimalNavbarStyles.mobileMenuOverlay}
                        onClick={() => setOpen(false)}
                    />

                    {/* Drawer */}
                    <div className={minimalNavbarStyles.mobileMenuContainer}>
                        <div className={minimalNavbarStyles.mobileMenuHeader}>
                            <span className={minimalNavbarStyles.mobileMenuTitle}>Menu</span>
                            <button
                                onClick={() => setOpen(false)}
                                className={minimalNavbarStyles.mobileCloseButton}
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <ul className={minimalNavbarStyles.mobileNavList}>
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        className={minimalNavbarStyles.mobileNavItem}
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className={minimalNavbarStyles.mobileAccountSection}>
                            {!loggedIn ? (
                                <Link
                                    to="/login"
                                    className={minimalNavbarStyles.mobileNavItem}
                                    onClick={() => setOpen(false)}
                                >
                                    Login / Register
                                </Link>
                            ) : (
                                <button
                                    onClick={handleLogout}
                                    className={`${minimalNavbarStyles.mobileNavItem} text-left w-full`}
                                >
                                    Logout
                                </button>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Navbar;

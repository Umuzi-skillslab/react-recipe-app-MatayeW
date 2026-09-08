import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/recipes", label: "Recipes", icon: "📖" },
    { path: "/meal-planner", label: "Meal Planner", icon: "🗓️" },
    { path: "/favorites", label: "Favorites", icon: "❤️" },
];

const Navbar = ({ favoritesCount = 0 }) => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === "/";
        }

        return location.pathname.startsWith(path);
    };

    return (
        <nav
            className={`${styles.navbar} ${isMenuOpen ? styles.navbarOpen : ""
                }`}
        >
            <Link to="/" className={styles.brand}>
                <span className={styles.brandIcon}>🍽️</span>
                <span className={styles.brandText}>Platr</span>
            </Link>

            <div className={styles.navLinks}>
                {NAV_ITEMS.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={
                            isActive(item.path)
                                ? `${styles.navLink} ${styles.active}`
                                : styles.navLink
                        }
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span className={styles.navIcon}>{item.icon}</span>
                        <span>{item.label}</span>

                        {item.path === "/favorites" &&
                            favoritesCount > 0 && (
                                <span className={styles.countBadge}>
                                    {favoritesCount}
                                </span>
                            )}
                    </Link>
                ))}
            </div>

            <p className={styles.tagline}>
                Cooking made simple, meals made memorable.
            </p>

            <button
                className={styles.hamburger}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label="Toggle navigation menu"
            >
                ☰
            </button>
        </nav>
    );
};

Navbar.propTypes = {
    favoritesCount: PropTypes.number,
};

export default Navbar;
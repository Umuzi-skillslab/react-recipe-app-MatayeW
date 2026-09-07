import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from "./Navbar.module.css";

// Create functional component
const Navbar = ({ favoritesCount = 0 }) => {
    const location = useLocation();
    // Local state: whether the mobile hamburger menu is open (only on small screens)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Reusable helper
    const isActive = (path) => {
        if (path === "/") return location.pathname === "/";
        return location.pathname.startsWith(path);
    };

    const linkClass = (path) => (isActive(path) ? `${styles.link} ${styles.active}` : styles.link);

    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.brand}>🔍 Recipe App</Link>
            <button className={styles.hamburger} onClick={() => setIsMenuOpen((prev) => !prev)} aria-label="Toggle navigation menu" >
                ≡
            </button>

            <div className={isMenuOpen ? `${styles.links} ${styles.linksOpen}` : styles.links}>
                <Link to="/" className={linkClass("/")} onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/recipes" className={linkClass("/recipes")} onClick={() => setIsMenuOpen(false)}>Recipes</Link>
                <Link to="/meal-planner" className={linkClass("/meal-planner")} onClick={() => setIsMenuOpen(false)}>Meal Planner</Link>
                <Link to="/favorites" className={linkClass("/favorites")} onClick={() => setIsMenuOpen(false)}>Favorites {favoritesCount > 0 && `(${favoritesCount})`}</Link>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    favoritesCount: PropTypes.number,
};

// export component to import in app.jsx to use it
export default Navbar;
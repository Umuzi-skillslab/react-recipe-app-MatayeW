import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from "./Navbar.module.css";

// Create functional component
const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/recipes">Recipes</Link>
            <Link to="/meal-planner">Meal Planner</Link>
            <Link to="/favorites">Favorites</Link>
        </nav>
    );
};

// export component to import in app.jsx to use it
export default Navbar;
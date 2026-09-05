import { Link } from 'react-router-dom';

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
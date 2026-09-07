import PropTypes from "prop-types";
import RecipeList from "../components/Recipe/RecipeList";
import styles from "./Pages.module.css";

// FavoritesPage reuses RecipeList
const FavoritesPage = ({ favorites, onFavoriteToggle }) => {
    return (
        <div className={styles.page}>
            <h1>My Favorites</h1>
            {favorites.length > 0 && <p>{favorites.length} saved recipe(s)</p>}

            <RecipeList recipes={favorites} favorites={favorites} onFavoriteToggle={onFavoriteToggle} />
        </div>
    );
};

FavoritesPage.propTypes = {
    favorites: PropTypes.array.isRequired,
    onFavoriteToggle: PropTypes.func.isRequired,
};

export default FavoritesPage;
import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./UI.module.css";
import Button from "./Button";

// Search bar component
const SearchBar = ({ placeholder = "Search recipes...", onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send the search term to the parent component
        onSearch(searchTerm);
    };

    return (
        <form
            className={styles.searchBar}
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder={placeholder}
                aria-label="Search recipes"
            />

            <Button type="submit" variant="primary">
                Search
            </Button>
        </form>
    );
};

SearchBar.propTypes = {
    placeholder: PropTypes.string,
    onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
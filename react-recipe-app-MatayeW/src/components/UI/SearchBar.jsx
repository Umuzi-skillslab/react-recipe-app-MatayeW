import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./UI.module.css";

const SearchBar = ({ placeHolder = "Search recipes...", onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (onSearch) {
            onSearch(searchTerm);
        }
    };

    return (
        <form className={styles.searchBar} onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={searchTerm} 
                onChange={handleChange} 
                placeholder={placeHolder} 
                aria-label="Search recipes"
            />
            <Button type="submit">
                Search
            </Button>
        </form>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};

export default SearchBar;
import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import styles from "./UI.module.css";

const SearchBar = ({ onSearch, placeHolder = "Search recipes..."}) => {
    const [searchTerm, onSearchTerm] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <input type="text" value={searchTerm} onChange={handleChange} placeholder={placeHolder} className={styles.searchInput}
            //onFocus/onBlur highlights the input while the user is actively typing, then removes the highligt when they click away
            onFocus={(e) => e.target.classList.add(styles.searchInputFocused)}
            onBlur={(e) => e.target.classList.remove(styles.searchInputFocused)}
            />
            <Button type="submit" variant="primary">Search</Button>
        </form>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};

export default SearchBar;
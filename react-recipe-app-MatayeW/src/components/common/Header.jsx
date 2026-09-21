import PropTypes from "prop-types";
import styles from "./common.module.css";

// Reusable page header component
const Header = ({ title, description = "" }) => {
    return (
        <header className={styles.header}>
            <h1>{title}</h1>

            {description && <p>{description}</p>}
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
};

export default Header;
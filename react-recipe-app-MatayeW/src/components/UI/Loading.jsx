import PropTypes from "prop-types";
import styles from "./UI.module.css";

// A simple loading spinner shown when data is 'being fetched'
const Loading = ({ message = "Loading recipes..."}) => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.spinner} />
            <p>{message}</p>
        </div>
    );
};

Loading.propTypes = {
    message: PropTypes.string,
};

export default Loading;
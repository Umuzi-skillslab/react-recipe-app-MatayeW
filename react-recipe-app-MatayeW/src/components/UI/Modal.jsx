import PropTypes from "prop-types";
import Button from "./Button";
import styles from "./UI.module.css";

// Modal: overlay that renders whatever is passed as children
const Modal = ({ isOpen, onClose, children }) => {
    // render whole component is conditionally rendered based on state
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <Button variant="secondary" onClick={onClose}>Close</Button>
                </div>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;
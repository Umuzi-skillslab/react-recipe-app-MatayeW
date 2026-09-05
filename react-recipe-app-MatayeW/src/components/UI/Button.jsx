import PropTypes from "prop-types";
import styles from "./UI.module.css";

// Maps each variant to its background/text colours
const VARIANT_STYLES = {
    primary: { backgroundColor: "#2f6f4f", color: "#ffffff" },
    secondary: { backgroundColor: "#e5e5e5", color: "#1a1a1a" },
    danger: { backgroundColor: "#c0392b", color: "#ffffff" },
};

// Button that is reusable throughout the whole app
const Button = ({ children, variant = "primary", type = "button", onClick, disabled = false }) => {
    const variantStyle = VARIANT_STYLES[variant] || VARIANT_STYLES.primary;

    return (
        <button type={type} onClick={onClick} disabled={disabled}
        // conditional styling: lower opacity when button is disabled
        className={disabled ? `${styles.button} ${styles.buttonDisabled}` : styles.button}
        style={{ ...variantStyle, opacity: disabled ? 0.6 : 1 }} >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

export default Button;
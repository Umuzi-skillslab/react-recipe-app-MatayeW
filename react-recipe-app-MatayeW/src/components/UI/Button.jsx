import PropTypes from "prop-types";
import styles from "./UI.module.css";

// Maps each variant to its background/text colors.
// Kept outside the component so it isn't recreated on every render.
const VARIANT_STYLES = {
    primary: { backgroundColor: "var(--color-primary)", color: "#ffffff", border: "2px solid transparent" },
    secondary: {
        backgroundColor: "var(--color-secondary)",
        color: "var(--color-text)",
        border: "2px solid var(--color-primary)",
    },
    danger: { backgroundColor: "var(--color-danger)", color: "#ffffff", border: "2px solid transparent" },
};

// Button: reusable across the whole app (RecipeCard favorite button,
// SearchBar submit, MealPlanner add/remove, Modal close, etc.)
// variant and type both use default parameters, so callers only need
// to pass what they want to override.
const Button = ({ children, variant = "primary", type = "button", onClick, disabled = false }) => {
    // Conditional/expression-as-prop: the inline style is computed from
    // the variant prop rather than hardcoded, and falls back to primary
    // if an unrecognized variant string is ever passed in.
    const variantStyle = VARIANT_STYLES[variant] || VARIANT_STYLES.primary;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            // Conditional styling: disabled buttons get reduced opacity and
            // a "not-allowed" cursor, on top of the variant's base colors.
            className={disabled ? `${styles.button} ${styles.buttonDisabled}` : styles.button}
            style={{ ...variantStyle, opacity: disabled ? 0.6 : 1 }}
        >
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

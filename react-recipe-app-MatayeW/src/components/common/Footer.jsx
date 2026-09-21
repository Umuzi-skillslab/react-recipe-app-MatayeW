import styles from "./common.module.css";

// Reusable footer component
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p>
                © {currentYear} Recipe Discovery & Meal Planning. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
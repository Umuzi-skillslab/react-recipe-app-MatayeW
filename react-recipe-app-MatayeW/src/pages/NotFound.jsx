import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import styles from "./Pages.module.css";

// NotFound function for any recipe that doesn't match a defined route
const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.page}>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Button onClick={() => navigate("/")}>Go Home</Button>
        </div>
    );
};

export default NotFound;
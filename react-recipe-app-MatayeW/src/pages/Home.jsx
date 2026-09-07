import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import AudioPlayer from "../components/Media/AudioPlayer";
import styles from "./Pages.module.css";

// The landing Page (no props needed)
const Home = () => {
    return (
        <div className={styles.page}>
            <h1>Welcome to your Meal Planner and Recipe Finder</h1>
            <p>Browse recipes, plan your week and save your favorites.</p>

            <Link to="/recipes">
                <Button variant="primary">Browse Recipes</Button>
            </Link>

            <AudioPlayer
                audioUrl="/assets/audio/daily-cooking-tips.mp3"
                title="Today's Cooking Tip"
            />
        </div>
    );
};

export default Home;
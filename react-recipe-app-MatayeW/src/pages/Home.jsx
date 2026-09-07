import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import AudioPlayer from "../components/Media/AudioPlayer";
import Header from "../components/common/Header";
import styles from "./Pages.module.css";

// The landing page
const Home = () => {
    return (
        <div className={styles.page}>
            <Header
                title="Welcome to Your Meal Planner and Recipe Finder"
                description="Browse recipes, plan your week, and save your favorite dishes."
            />

            <section className={styles.homeContent}>
                <p>
                    Discover delicious recipes, explore different cuisines,
                    organize your weekly meals, and keep all your favorite
                    recipes in one place.
                </p>

                <Link to="/recipes">
                    <Button variant="primary">
                        Browse Recipes
                    </Button>
                </Link>

                <AudioPlayer
                    audioUrl="/assets/audio/daily-cooking-tips.mp3"
                    title="Today's Cooking Tip"
                />
            </section>
        </div>
    );
};

export default Home;
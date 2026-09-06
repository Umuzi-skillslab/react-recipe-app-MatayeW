import PropTypes from "prop-types";
import styles from "./Media.module.css";

// wraps HTML <video> element with controls wherever a recipe has a tutorial video 
const VideoPlayer = ({ videoUrl, title }) => {
    return (
        <div className={styles.videoContainer}>
            <h3>{title}</h3>
            <video controls width="100%" className={styles.video}>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

// PropType validators
VideoPlayer.propTypes = {
    videoUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default VideoPlayer;
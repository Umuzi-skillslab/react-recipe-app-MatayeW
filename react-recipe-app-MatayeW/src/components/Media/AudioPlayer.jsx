import PropTypes from "prop-types";
import styles from "./Media.module.css";

// wraps HTML <audio> element with audio controls
const AudioPlayer = ({ audioUrl, title }) => {
    return (
        <div className={styles.audioContainer}>
            <h4>{title}</h4>
            <audio controls className={styles.audio}>
                <source src={audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

AudioPlayer.propTypes = {
    audioUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default AudioPlayer;
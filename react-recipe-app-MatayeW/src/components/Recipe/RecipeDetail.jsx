import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../UI/Button";
import VideoPlayer from "../Media/VideoPlayer";
import { formatCookTime, getTotalTime, getDifficultyEmoji } from "../../utils/helpers";
import styles from "./Recipe.module.css";
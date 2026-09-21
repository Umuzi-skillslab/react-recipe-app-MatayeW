import PropTypes from "prop-types";
import DayCard from "./DayCard";
import Button from "../UI/Button";
import styles from "./MealPlanner.module.css";

const DAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const MealPlanner = ({
  mealPlan,
  recipes,
  onAddMeal,
  onRemoveMeal,
  onClearWeek,
}) => {
  return (
    <div className={styles.plannerContainer}>
      <div className={styles.plannerHeader}>
        <h2>Weekly Meal Planner</h2>
        <Button variant="danger" onClick={onClearWeek}>
          Clear Week
        </Button>
      </div>

      <div className={styles.weekGrid}>
        {DAYS.map((day) => (
          <DayCard
            key={day}
            day={day}
            meals={mealPlan[day]}
            recipes={recipes}
            onAddMeal={onAddMeal}
            onRemoveMeal={onRemoveMeal}
          />
        ))}
      </div>
    </div>
  );
};

MealPlanner.propTypes = {
  mealPlan: PropTypes.object.isRequired,
  recipes: PropTypes.array.isRequired,
  onAddMeal: PropTypes.func.isRequired,
  onRemoveMeal: PropTypes.func.isRequired,
  onClearWeek: PropTypes.func.isRequired,
};

export default MealPlanner;
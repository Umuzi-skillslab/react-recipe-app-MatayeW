
// Adds prepTime + cookTime together, falls back to 0 if a recipe
// is missing either field so callers never get NaN
export const getTotalTime = (recipe) => {
    let prep = recipe.prepTime || 0;
    let cook = recipe.cookTime || 0;
    return prep + cook;
};

// Formats a number of minutes into a readable string
export const formatCookTime = (minutes) => {
    if (!minutes || minutes <= 0) return "0 min";

    let hours = Math.floor(minutes/60);
    let remainingMinutes = minutes % 60;

    if (hours === 0) return `${remainingMinutes} min`;
    if (remainingMinutes === 0) return `${hours} hr`;
    return `${hours} hr ${remainingMinutes} min`;
};

// assigning emoji (visual indicator) to difficulty level
export const getDifficultyEmoji = (difficulty) => {
    switch (difficulty) {
        case "easy":
            return "🟢";
        case "medium":
            return "🟡";
        case "hard":
            return "🔴";
        default:
            return "⚪";
    }
};
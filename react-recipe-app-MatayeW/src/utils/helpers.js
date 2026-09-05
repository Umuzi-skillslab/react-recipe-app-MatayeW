
// Adds prepTime + cookTime together, falls back to 0 if a recipe is missing either field so callers never get NaN
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

// Assigning emoji (visual indicator) to difficulty level
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

// Filters an array of recipes against a search term and optional category/cuisine/difficulty values
export const filterRecipes = (
    recipes,
    { searchTerm = "", category = "all", cuisine = "all", difficulty = "all" } =
    {}
) => {
    let term = searchTerm.trim().toLowerCase();

    return recipes.filter((recipe) => {
        let matchesSearch = term === "" || recipe.title.toLowerCase().includes(term);
        let matchesCategory = category === "all" || recipe.category === category;
        let matchesCuisine = cuisine === "all" || recipe.cuisine === cuisine;
        let matchesDifficulty = difficulty === "all" || recipe.difficulty === difficulty;

        return matchesSearch && matchesCategory && matchesCuisine && matchesDifficulty;
    });
};

// Sorts a copy of the recipes array by title, total cook time or difficulty
export const sortRecipes = (recipes, sortBy = "title") => {
    let difficultyOrder = { easy: 0, medium: 1, hard: 2 };
    let sorted = [...recipes];

    switch (sortBy) {
        case "title":
            return sorted.sort((a, b) => a.title.localeCompare(b.title));
        case "time":
            return sorted.sort((a, b) => getTotalTime(a) - getTotalTime(b));
        case "difficulty":
            return sorted.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
        default:
            return sorted;
    }
};
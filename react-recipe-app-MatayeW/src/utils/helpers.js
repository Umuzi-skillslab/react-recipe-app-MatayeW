
// Adds prepTime + cookTime together, falls back to 0 if a recipe
// is missing either field so callers never get NaN
export const getTotalTime = (recipe) => {
    let prep = recipe.prepTime || 0;
    let cook = recipe.cookTime || 0;
    return prep + cook;
};

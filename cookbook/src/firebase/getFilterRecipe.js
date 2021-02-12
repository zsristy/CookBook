import app from "./Firebase";
import "firebase/firestore";

const getFilterRecipe = async (
  title,
  meal,
  cuisine,
  diet,
  health,
  setRecipeList
) => {
  const snapshot = await app.firestore().collection("recipe").get();
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  const recipeList = [];
  snapshot.forEach((doc) => {
    const dietLabels = doc.data().recipe.dietLabels;
    const healthLabels = doc.data().recipe.healthLabels;
    const mealLabel = doc.data().recipe.meal ? doc.data().recipe.meal : "";
    const cuisineLabel = doc.data().recipe.cuisine
      ? doc.data().recipe.cuisine
      : "";
    const RecipeLable = doc.data().recipe.label.toLowerCase();
    if (
      RecipeLable.includes(title) &
      diet.every((val) => dietLabels.includes(val)) &
      health.every((val) => healthLabels.includes(val)) &
      (meal === mealLabel) &
      (cuisine === cuisineLabel)
    ) {
      const data = doc.data();
      data["recipeId"] = doc.id;
      recipeList.push(data);
    }
  });
  setRecipeList(recipeList);
};

export default getFilterRecipe;

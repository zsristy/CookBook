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
    const RecipeLable = doc.data().recipe.label.toLowerCase();
    if (RecipeLable.includes(title)) {
      const data = doc.data();
      data["recipeId"] = doc.id;
      recipeList.push(data);
    }
  });
  setRecipeList(recipeList);
};

export default getFilterRecipe;

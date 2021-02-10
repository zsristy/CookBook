import app from "./Firebase";
import "firebase/firestore";

const getRecipe = async (searchTitle, setRecipeList) => {
  const snapshot = await app.firestore().collection("recipe").get();
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  const recipeList = {};
  snapshot.forEach((doc) => {
    const RecipeLable = doc.data().recipe.label.toLowerCase();
    if (RecipeLable.includes(searchTitle)) {
      recipeList[doc.id] = doc.data();
    }
  });
  setRecipeList(recipeList);
};

export default getRecipe;

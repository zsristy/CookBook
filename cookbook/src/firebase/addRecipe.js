import app from "./Firebase";
import "firebase/firestore";

const addRecipe = async (
  title,
  meal,
  cuisine,
  diet,
  health,
  validItem,
  imageUrl,
  recipePrep,
  author
) => {
  await app
    .firestore()
    .collection("recipe")
    .add({
      bookmarked: false,
      bought: false,
      recipe: {
        dietLabels: diet,
        healthLabels: health,
        image: imageUrl,
        ingredientLines: validItem,
        meal: meal,
        cuisine: cuisine,
        label: title,
        author: author,
        prep: recipePrep,
      },
    })
    .then(() => {})
    .catch((error) => {
      console.log(error);
      alert(error);
    });
};

export default addRecipe;

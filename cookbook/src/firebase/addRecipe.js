import app from "./Firebase";
import "firebase/firestore";

const addRecipe = async (recipe) => {
  await app
    .firestore()
    .collection("recipe")
    .add(recipe)
    .then(() => {
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};

export default addRecipe;

import app from "./Firebase";

const getRecipe = async (setRecipeList) => {
  await app
    .firestore()
    .collection("recipe")
    .get()
    .then((item) => {
      console.log(item);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getRecipe;

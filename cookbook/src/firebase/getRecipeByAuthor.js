import app from "./Firebase";
import "firebase/firestore";

const getRecipeByAuthor = async (userName, setRecipeList) => {
  const snapshot = await app.firestore().collection("recipe").get();
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  const recipeList = [];
  snapshot.forEach((doc) => {
    const author = doc.data().recipe.author || "";
    if (author.includes(userName)) {
      const data = doc.data();
      data["recipeId"] = doc.id;
      recipeList.push(data);
    }
  });
  console.log(recipeList);

  setRecipeList(recipeList);
};

export default getRecipeByAuthor;

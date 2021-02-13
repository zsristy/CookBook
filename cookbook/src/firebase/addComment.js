import app from "./Firebase";
import "firebase/firestore";

const addComment = async (recipeId, comment, commenter) => {
  const doc = await app.firestore().collection("recipe").doc(recipeId).get();
  if (!doc.exists) {
    console.log("No such document!");
  } else {
    let recipeComment = doc.data().comment;
    if (recipeComment === undefined) {
      recipeComment = [];
    }
    recipeComment.push({ comment: comment, user: commenter });
    await app
      .firestore()
      .collection("recipe")
      .doc(recipeId)
      .update({ comment: recipeComment })
      .then(() => console.log("added comment"))
      .catch((error) => console.log(error));
  }
};

export default addComment;

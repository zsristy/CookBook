import app from "./Firebase";
import "firebase/firestore";

const getComment = async (recipeId, setCommentList) => {
  await app
    .firestore()
    .collection("recipe")
    .doc(recipeId)
    .onSnapshot(
      (doc) => {
        setCommentList(doc.data().comment || []);
      },
      (error) => console.log(error)
    );

  // let recipeComment = doc.data().comment;
  // if (recipeComment === undefined) {
  //   recipeComment = [];
  // }
  // recipeComment.push({ comment: comment, user: commenter });
};

export default getComment;

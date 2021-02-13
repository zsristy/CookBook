import app from "./Firebase";
import "firebase/firestore";

const addRate = async (recipeId, rate) => {
  const doc = await app.firestore().collection("recipe").doc(recipeId).get();
  if (!doc.exists) {
    console.log("No such document!");
  } else {
    let recipeRate = doc.data().rate;
    if (recipeRate !== undefined) {
      rate = (recipeRate + rate) / 2;
    }
    await app
      .firestore()
      .collection("recipe")
      .doc(recipeId)
      .update({ rate: rate })
      .then(() => console.log("added"))
      .catch((error) => console.log(error));
  }
};

export default addRate;

import app from "./Firebase";
import "firebase/firestore";

const getRandomRecipe = async (setActiveRecipe) => {
  const snapshot = await app.firestore().collection("recipe").get();
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }
  const recipeList = [];
  snapshot.forEach((doc) => {
    const data = doc.data();
    recipeList.push(data);
  });
  let newArray = getRandom(recipeList, 6);

  setActiveRecipe(newArray);
};

function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

export default getRandomRecipe;

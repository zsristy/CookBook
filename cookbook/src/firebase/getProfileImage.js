import app from "./Firebase";
import "firebase/firestore";

const getProfileImage = async (userId, setImageUrl) => {
  let user = await app
    .firestore()
    .collection("users")
    .doc(userId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        let url = doc.data().image || "";
        setImageUrl(url);
      } else {
        console.log("nome");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
};

export default getProfileImage;

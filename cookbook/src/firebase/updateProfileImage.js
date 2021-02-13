import app from "./Firebase";
import "firebase/firestore";

const updateProfileImage = async (userId, imageUrl) => {
  await app
    .firestore()
    .collection("users")
    .doc(userId)
    .update({ image: imageUrl })
    .then(() => console.log("added"))
    .catch((error) => console.log(error));
};

export default updateProfileImage;

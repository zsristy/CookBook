import { storage } from "./Firebase";

const uploadedImage = async (image, setImageUrl) => {
  const uploadTask = storage.ref(`images/${image.name}`).put(image);
  await uploadTask.on(
    "state_changed",
    (snapshot) => {},
    (error) => {
      console.log(error);
    },
    async () => {
      storage
        .ref("images")
        .child(image.name)
        .getDownloadURL()
        .then((url) => {
          setImageUrl(url);
        });
    }
  );
};

export default uploadedImage;

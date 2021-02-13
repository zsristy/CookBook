import firebase from "firebase/app";
import "firebase/storage";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBY5cfy9aTXVDyEbLtTgtShpQOxwqnLCWs",
  authDomain: "cookbook-c0f3d.firebaseapp.com",
  projectId: "cookbook-c0f3d",
  storageBucket: "cookbook-c0f3d.appspot.com",
  messagingSenderId: "165329208060",
  appId: "1:165329208060:web:57e4a8f70bf694bf248d79",
});

const auth = app.auth();
const storage = app.storage();
export { auth, storage };
export default app;

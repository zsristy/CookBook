import React, { useState, useContext, useEffect } from "react";
import { auth } from "../firebase/Firebase";

const AuthContext = React.createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});
  const signup = (name, email, password) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCreds) => {
        userCreds.user.updateProfile({ displayName: name });
      })
      .catch((error) => alert(error));
  };
  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const changePass = (password) => {
    return currentUser.updatePassword(password);
  };

  const changeEmail = (email) => {
    return currentUser.updateEmail(email);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider
      value={{ currentUser, signup, login, logout, changePass, changeEmail }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, useAuth };

import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";

import { auth } from "../../config/firebaseConfig";
//import { useDispatch, useSelector } from "react-redux";
//import { setUser } from "../../store/slice/users/userSlice";
//import firebase from "firebase/app";
//import "firebase/auth";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const LoginGoogle = () => {
  const { user, setUser } = useContext(UserContext);

  const provider = new GoogleAuthProvider();
  //const auth = getAuth();
  //const dispatch = useDispatch();

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user);
        //set to state

        setUser({
          token: user.accessToken,
          email: user.email,
          uid: user.uid,
        });
      })

      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <button className="login bg-dark" onClick={loginWithGoogle}>
      Login with Google
    </button>
  );
};

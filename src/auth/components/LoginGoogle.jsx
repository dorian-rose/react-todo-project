import { auth } from "../../config/firebaseConfig";
import google from "../../assets/google.png";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const LoginGoogle = () => {
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
    <button
      className="block m-auto w-12 hover:w-14 mt-4 shadow-md p-2 rounded-full"
      onClick={loginWithGoogle}
    >
      <img className="w-full" src={google} alt="google logo" />
    </button>
  );
};

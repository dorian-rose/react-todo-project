import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDB7yVCLOOs-kQc-EEPGrNBfJspLFeg5zQ",
    authDomain: "to-do-10939.firebaseapp.com",
    projectId: "to-do-10939",
    storageBucket: "to-do-10939.appspot.com",
    messagingSenderId: "382092838201",
    appId: "1:382092838201:web:48bfd5ea32da5f12be14e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// gives us an auth instance
export const auth = getAuth(app);

// in order to use this auth instance elsewhere
//export default { auth };
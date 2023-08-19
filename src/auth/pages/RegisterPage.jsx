import { useState,  } from "react";
import { useNavigate } from "react-router-dom";

//firebase
import { auth } from "../../config/firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const RegisterPage = () => {
  
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setErrors([]);

    //collect details
    const userInfo = {
      name: ev.target.name.value,
      email: ev.target.email.value,
      password: ev.target.password.value,
    };

    //validate that not empty
    if (userInfo.email == "") {
      setErrors("Inserte email");
      return;
    } else if (userInfo.password == "") {
      setErrors("Inserte contraseña");
      return;
    }

    //register
    console.log(userInfo.email, userInfo.password);
    //const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      );
      await updateProfile(auth.currentUser, { displayName: userInfo.name });
      navigate("/home");
      // .then((userCredential) => {
      //   console.log("here");
      //   // Signed in
      //   const user = userCredential.user;
      //   console.log(user);
      //   setUser(user);
      // })
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrors("Email already in use", error);
      } else if (error.code === "auth/invalid-email") {
        setErrors("Invalid email", error);
      } else if (error.code === "auth/weak-password") {
        setErrors("Weak password", "error");
      } else if (error.code) {
        setErrors("Something went wrong", error);
      }
    }
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   setErrors(errorMessage);
    // });
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="text" id="name" name="name" placeholder="Nombre" />
        <input type="text" id="email" name="email" placeholder="Email" />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Contraseña"
        />
        <button type="submit">Login</button>
      </form>
      <p>{errors}</p>
    </>
  );
};

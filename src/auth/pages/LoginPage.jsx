import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
//firebase
import { auth } from "../../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export const LoginPage = () => {
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setErrors([]);

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

    //login

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      );
      setUser(user.uid);
      navigate("/todo");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setErrors("Wrong password", "error");
      } else if (error.code === "auth/user-not-found") {
        setErrors("User not found", "error");
      } else {
        setErrors("Something went wrong");
        console.log("Something went wrong", error);
      }
    }
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

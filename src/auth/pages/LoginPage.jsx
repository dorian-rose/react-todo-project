import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AccessForm } from "../components/AccessForm";
import { LoginGoogle } from "../components/LoginGoogle";
import { FooterSignIn } from "../../ui/FooterSignIn";
//firebase
import { auth } from "../../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export const LoginPage = () => {
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const enterUser = async (data) => {
    //login

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      // setUser(user.uid);
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
      <section className="max-w-2xl m-auto">
        <h1 className="mb-10 mt-20 text-center text-primary text-2xl font-thin ">
          Bienvenido de nuevo!
        </h1>
        <article>
          <AccessForm enterUser={enterUser} nameHidden={true} />
        </article>
        <article className="mx-4 mt-20 border-t border-slate">
          <p className="relative -top-3 left-1/2 -translate-x-1/2 bg-tertiary w-fit px-2 text-sm text-lines ">
            Login con
          </p>
          <LoginGoogle />
          <p className="mt-10 text-sm text-lines text-center font-thin">
            Aún no tienes una cuenta?{" "}
            <Link
              to="/register"
              className="font-bold hover:text-secondary hover:underline"
            >
              Regístrate
            </Link>
          </p>
        </article>
        <FooterSignIn />
      </section>
    </>
  );
};

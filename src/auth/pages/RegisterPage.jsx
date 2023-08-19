import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AccessForm } from "../components/AccessForm";

//firebase
import { auth } from "../../config/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FooterSignIn } from "../../ui/FooterSignIn";
import { LoginGoogle } from "../components/LoginGoogle";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const enterUser = async (data) => {
    //register

    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(auth.currentUser, { displayName: data.name });
      navigate("/");
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
  };

  return (
    <>
      <section className="max-w-2xl m-auto">
        <h1 className="mb-6 mt-20 text-center text-primary text-2xl font-thin ">
          Bienvenido!
        </h1>
        <article>
          <AccessForm enterUser={enterUser} nameHidden={false} />
        </article>
        <article className="mx-4 mt-10 border-t border-slate">
          <p className="relative -top-3 left-1/2 -translate-x-1/2 bg-tertiary w-fit px-2 text-sm text-lines ">
            Regístrate con
          </p>
          <LoginGoogle />
          <p className="mt-10 text-sm text-center text-lines font-thin">
            Ya tienes una cuenta?{" "}
            <Link
              to="/login"
              className="font-bold hover:text-secondary hover:underline"
            >
              Login
            </Link>
          </p>
        </article>
        <FooterSignIn />
      </section>
    </>
  );
};

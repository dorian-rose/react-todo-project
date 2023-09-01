import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { auth } from "../../config/firebaseConfig";
import { updateProfile } from "firebase/auth";
import { setUser } from "../../store/slice/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

//commented code left in case of adding updatet password in future
export const UpdateUser = ({ setShowUpdateUser }) => {
  const dispatch = useDispatch();
  //usestates
  // const [firstPassword, setFirstPassword] = useState("");
  // const [passwordMatch, setPasswordMatch] = useState("");
  //imports from useform to capture and validate form data
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  //get currentuser
  const { displayName, photoURL } = useSelector((state) => state.user);
 

  //function
  const updateUserDetails = async ({ photoURL, displayName }) => {
    try {
      await updateProfile(auth.currentUser, { displayName, photoURL });
      setShowUpdateUser(false);
      dispatch(setUser({ displayName, photoURL }));
    } catch (error) {
      console.log(error);
    }
  };

  // const comparePasswords = (ev) => {
  //   console.log(firstPassword);
  //   const secondPassword = ev.target.value;
  //   if (firstPassword !== secondPassword) {
  //     setPasswordMatch("Contraseñas no coinciden");
  //   } else {
  //     setPasswordMatch("");
  //   }
  // };
  return (
    <>
      <form
        className="absolute bg-tertiary left-0 right-0 m-2 border border-primary shadow-lg rounded-xl z-20 pb-4 top-1/2 -translate-y-1/2 max-w-2xl m-auto"
        onSubmit={handleSubmit((data) => updateUserDetails(data))}
      >
        <h2 className="mt-5 text-primary text-lg text-center sm:text-xl">
          Actualizar perfil
        </h2>
        <button
          onClick={() => setShowUpdateUser(false)}
          className="absolute top-4 right-5 shadow px-1 text-secondary hover:text-primary"
        >
          X
        </button>
        <label
          htmlFor="displayName"
          className="relative top-5 left-12 sm:left-20 bg-tertiary px-2 text-lines text-sm"
        >
          Actualizar nombre
        </label>
        <input
          {...register("displayName")}
          type="text"
          className="mt-2 w-10/12 m-auto block border border-1 rounded-3xl px-4 py-2 focus:outline-none focus:border-primary "
          defaultValue={displayName}
        />
        <label
          htmlFor="photoURL"
          className="relative top-5 top-5 left-12 sm:left-20 bg-tertiary px-2 text-lines text-sm"
        >
          Actualizar/añadir url de foto
        </label>
        <input
          {...register("photoURL")}
          type="text"
          className="mt-2 w-10/12 m-auto block border border-1 rounded-3xl px-4 py-2 focus:outline-none focus:border-primary "
          defaultValue={photoURL}
        />
        <p className="text-center italic text-alert ">
          {errors.photoURL?.message}
        </p>

        <button
          className="mt-8 w-10/12 m-auto block bg-primary text-tertiary shadow-md rounded-3xl px-4 py-2 focus:outline-none focus:border-primary hover:text-secondary hover:bg-tertiary hover:border hover:border-1  hover:border-secondary"
          type="submit"
        >
          Actualizar
        </button>
      </form>
    </>
  );
};

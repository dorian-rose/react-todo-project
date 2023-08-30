import { useState } from "react";
import { useForm } from "react-hook-form";

export const AccessForm = ({ enterUser, nameHidden }) => {
  const [firstPassword, setFirstPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");
  //imports from useform to capture and validate form data
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  const comparePasswords = (ev) => {
    console.log(firstPassword);
    const secondPassword = ev.target.value;
    if (firstPassword !== secondPassword) {
      setPasswordMatch("Contraseñas no coinciden");
    } else {
      setPasswordMatch("");
    }
  };

  return (
    <>
      <form
        className="login-form"
        onSubmit={handleSubmit((data) => enterUser(data))}
      >
        {!nameHidden && (
          <>
            <label
              htmlFor="name"
              className="relative top-5 left-12 sm:left-20 bg-tertiary px-2 text-lines text-sm"
            >
              Nombre
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              name="name"
              className="mt-2 w-10/12 m-auto block border border-1 rounded-3xl px-4 py-2 focus:outline-none focus:border-primary "
            />
          </>
        )}
        <label
          htmlFor="email"
          className="relative top-5 top-5 left-12 sm:left-20 bg-tertiary px-2 text-lines text-sm"
        >
          Email
        </label>
        <input
          {...register("email", {
            required: "Inserte email",
            minLength: {
              value: 5,
              message: "Inserte un email válido",
            },
          })}
          type="text"
          id="email"
          name="email"
          className="mt-2 w-10/12 m-auto block border border-1 rounded-3xl px-4 py-2 focus:outline-none focus:border-primary "
        />
        <p className="text-center italic text-alert ">
          {errors.email?.message}
        </p>
        <label
          htmlFor="password"
          className="relative top-5 top-5 left-12 sm:left-20 bg-tertiary px-2 text-lines text-sm"
        >
          Contraseña
        </label>
        <input
          {...register("password", {
            required: "Inserte contraseña",
            minLength: {
              value: 8,
              message: "Contraseña debe tener al menos 8 cáracteres",
            },
          })}
          type="password"
          id="password"
          name="password"
          onChange={(ev) => setFirstPassword(ev.target.value)}
          className="mt-2 w-10/12 m-auto block border border-1  rounded-3xl px-4 py-2 focus:outline-none focus:border-primary "
        />
        <p className="text-center italic text-alert ">
          {errors.password?.message}
        </p>
        {!nameHidden && (
          <>
            <label
              htmlFor="passwordRepeat"
              className="relative top-5 top-5 left-12 sm:left-20 bg-tertiary px-2 text-lines text-sm"
            >
              Repite contraseña
            </label>
            <input
              {...register("passwordRepeat", {
                required: "Inserte contraseña de nuevo",
                minLength: {
                  value: 8,
                  message: "Contraseña debe tener al menos 8 cáracteres",
                },
              })}
              type="password"
              id="passwordRepeat"
              name="passwordRepeat"
              className="mt-2 w-10/12 m-auto block border border-1  rounded-3xl px-4 py-2 focus:outline-none focus:border-primary "
              onChange={comparePasswords}
            />
            <p className="text-center italic text-alert ">
              {errors.passwordRepeat?.message}
            </p>
            <p className="text-center italic text-alert ">{passwordMatch}</p>
          </>
        )}
        <button
          className="mt-8 w-10/12 m-auto block bg-primary text-tertiary shadow-md rounded-3xl px-4 py-2 focus:outline-none focus:border-primary hover:text-secondary hover:bg-tertiary hover:border hover:border-1  hover:border-secondary"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
};

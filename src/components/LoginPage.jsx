export const LoginPage = () => {
  return (
    <>
      <form className="login-form">
        <input type="text" id="email" name="email" placeholder="Email" />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Contraseña"
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

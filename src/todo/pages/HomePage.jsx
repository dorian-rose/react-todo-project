import { getAuth } from "firebase/auth";

export const HomePage = () => {
  //get user
  const auth = getAuth();
  const user = auth.currentUser;
  return (
    <>
      <h1 className="title">Homepage</h1>
      <h2 className="text-center">Welcome, {user.displayName}</h2>
    </>
  );
};

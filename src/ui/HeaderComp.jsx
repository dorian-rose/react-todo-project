import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import userImage from "../assets/userImage.jpeg";

export const HeaderComp = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [welcomePhrase, setWelcomePhrase] = useState("");

  //get time
  useEffect(() => {
    //define user name
    if (!user.displayName) {
      const nameArray = user.email.split("@");
      const newName = nameArray[0];
      user.displayName = newName;
    } else {
      const nameArray = user.displayName.split(" ");
      const firstName = nameArray[0];
      user.displayName = firstName;
    }

    //define time
    const now = new Date();
    const time = now.getHours();

    //define phrase
    if (time < 12) {
      setWelcomePhrase("Good Morning,");
    } else if (time < 18) {
      setWelcomePhrase("Good afternoon,");
    } else {
      setWelcomePhrase("Good evening,");
    }
  }, []);

  return (
    <header className="mb-6 sm:my-10 max-w-2xl m-auto ">
      <section className="flex flex-col sm:flex-row">
        <img
          className="mt-7 mx-12 w-10 rounded-3xl  sm:w-16 sm:rounded-full"
          src={!user.photoURL ? userImage : user.photoURL}
          alt="Image of user"
        />
        <p className="ml-12 mt-3 bg-shadow rounded w-fit px-1 text-sm font-thin sm:text-lg sm:px-3 sm:mx-0 sm:mt-12 sm:h-7">
          {welcomePhrase} <span className="capitalize">{user.displayName}</span>
        </p>
      </section>
    </header>
  );
};

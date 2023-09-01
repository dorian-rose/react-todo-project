import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import userImage from "../assets/userImage.jpeg";

export const HeaderComp = () => {
  //get currentuser
  const { photoURL, displayName } = useSelector((state) => state.user);
  const [welcomePhrase, setWelcomePhrase] = useState("");

  //get time
  useEffect(() => {
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
          src={!photoURL ? userImage : photoURL}
          alt="Image of user"
        />
        <p className="ml-12 mt-3 bg-shadow rounded w-fit px-1 text-sm font-thin sm:text-lg sm:px-3 sm:mx-0 sm:mt-12 sm:h-7">
          {welcomePhrase} <span className="capitalize">{displayName}</span>
        </p>
      </section>
    </header>
  );
};

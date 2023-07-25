//import { useDispatch, useSelector } from "react-redux";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

export const ServicesPage = () => {
  //const { email, token, uid, isLoading } = useSelector((state) => state.user);
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <h1 className="text-centre">Services</h1>
    </>
  );
};

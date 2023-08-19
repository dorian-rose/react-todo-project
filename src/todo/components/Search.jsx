import { useState } from "react";
import { getTasks } from "../../store/slice/tasks/taskThunk";
import { setDate } from "../../store/slice/date/dateSlice";
import { setShowAll } from "../../store/slice/display/displaySlice";
import { getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

export const Search = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState("");

  //get user
  const auth = getAuth();
  const user = auth.currentUser;

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    setErrors([]);

    const searchTerm = ev.target.search.value;

    if (searchTerm == "") {
      setErrors("Entra un término de búsqueda");
      return;
    }

    //define  method, body and url for fetch
    const body = { searchTerm, uid: user.uid };
    const url = `${import.meta.env.VITE_TASK_URL}/search`;
    const method = "POST";
    console.log("body in search", body);
    dispatch(getTasks(url, method, body));
    ev.target.search.value = "";

    dispatch(setShowAll("search"));
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          className="w-10/12 m-auto block border border-1 border-lines rounded-3xl px-4 py-2 focus:outline-none focus:border-primary "
          type="text"
          placeholder="Buscar"
          id="search"
        />
      </form>
      <p>{errors}</p>
    </section>
  );
};

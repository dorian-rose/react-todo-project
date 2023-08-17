import { EntryContainer } from "../components/EntryContainer";
import { CalendarWeek } from "../components/CalendarWeek";
import { Search } from "../components/Search";

//Container contains all components for todo list
export const TodoPage = () => {
  return (
    <>
      <CalendarWeek />
      <Search />
      <EntryContainer />
    </>
  );
};

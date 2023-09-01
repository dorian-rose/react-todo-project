import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/**
 * function that returns a jsx of a date picker using the react-datepicker, and on change of date, sets the datepick usestate of the "Forms component"
 * @param {*} param0 usestate with initial state being current day received from component "Form"
 */
export const DayPick = ({ setDatePick, datePick }) => {
  return (
    <div className="w-10/12 m-auto mt-5 block border border-1 border-lines rounded-3xl px-4 py-1 sm:py-2 bg-white focus:outline-none focus:border-primary ">
      <label className="block w-fit relative -top-4 sm:-top-5  bg-white px-2 text-lines text-opacity-70 rounded-xl">
        Elige la fecha
      </label>
      <DatePicker
        selected={datePick}
        onChange={(datePick) => setDatePick(datePick)}
        className="relative top-1/2 -translate-y-1/2  "
      />
    </div>
  );
};

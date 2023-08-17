import { useState } from "react";
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks,
} from "date-fns";
import es from "date-fns/locale/es";
import { CalendarDates } from "./CalendarDates";
import { setDate } from "../../store/slice/date/dateSlice";

export const CalendarWeek = () => {
  //format month display
  const locale = es;
  const dateFormat = "MMM yyyy";

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());

  //function to change week
  const changeWeekHandle = (btnType) => {
    //console.log("current week", currentWeek);
    if (btnType === "prev") {
      //console.log(subWeeks(currentMonth, 1));
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      //console.log(addWeeks(currentMonth, 1));
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  const renderFooter = () => {
    return (
      <div className="block w-full flex justify-between">
        <button className="pb-4" onClick={() => changeWeekHandle("prev")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#4C4117"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <CalendarDates
         
          currentMonth={currentMonth}
          currentWeek={currentWeek}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />

        <button className="pb-4" onClick={() => changeWeekHandle("next")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#4C4117"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    );
  };
  return (
    <section className="relative m-auto mx-1">
      <h3 className="mb-3 text-gray-300 text-center capitalize italic">
        {format(currentMonth, dateFormat, { locale: locale })}
      </h3>

      {
        // <CalendarDates
        //   setDate={setDate}
        //   currentMonth={currentMonth}
        //   currentWeek={currentWeek}
        //   selectedDate={selectedDate}
        //   setSelectedDate={setSelectedDate}
        // />
      }
      {renderFooter()}
    </section>
  );
};

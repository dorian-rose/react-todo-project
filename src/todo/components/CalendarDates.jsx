import {
  format,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
} from "date-fns";
import { setShowAll } from "../../store/slice/display/displaySlice";
import { useDispatch } from "react-redux";
import { setDate } from "../../store/slice/date/dateSlice";

export const CalendarDates = ({
  currentMonth,
  setSelectedDate,
  selectedDate,
}) => {
  const dispatch = useDispatch();
  const weekDays = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
  const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
  const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
  const dateFormat = "d";
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  //function on click of date
  const onDateClickHandle = (day, dayStr) => {
    dispatch(setShowAll(false));
    //insert filter function here
    setSelectedDate(day);
    console.log(dayStr);
    dispatch(setDate(dayStr));
  };

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dateFormat);
      const cloneDay = day;
      days.push(
        <div
          className="grow mx-2 max-w-full ease-in text-xs"
          key={day}
          onClick={() => {
            const dayStr = format(cloneDay, "ccc dd MMM yy");
            onDateClickHandle(cloneDay, dayStr);
          }}
        >
          <div
            className={`rounded-full flex items-center justify-center hover:cursor-pointer  w-1 px-3 py-1 m-auto ${
              isSameDay(day, new Date())
                ? "bg-tertiary border border-1 border-primary text-primary hover:text-secondary hover:border-secondary"
                : isSameDay(day, selectedDate)
                ? "bg-primary text-tertiary px-4 py-1 text-base "
                : "bg-secondary text-tertiary hover:bg-primary hover:text-tertiary "
            }`}
          >
            {formattedDate}
          </div>
          <span
            className={`flex items-center justify-center 
          ${
            isSameDay(day, new Date())
              ? "text-primary my-5"
              : isSameDay(day, selectedDate)
              ? "text-primary text-base my-2"
              : "text-secondary my-5"
          }`}
          >
            {weekDays[i]}
          </span>
        </div>
      );
      day = addDays(day, 1);
    }

    rows.push(
      <div className="flex flex-wrap w-full" key={day}>
        {days}
      </div>
    );
    days = [];
  }

  return <div>{rows}</div>;
};

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DayPick = ({ setDatePick, datePick }) => {
  return (
    <div className="w-10/12 m-auto mt-4 block border border-1 border-lines rounded-3xl px-4 py-2 bg-white focus:outline-none focus:border-primary ">
      <DatePicker
        selected={datePick}
        onChange={(datePick) => setDatePick(datePick)}
      />
    </div>
  );
};

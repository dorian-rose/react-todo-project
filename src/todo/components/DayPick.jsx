import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DayPick = ({ setDatePick, datePick }) => {
  return (
    <div>
      <DatePicker
        selected={datePick}
        onChange={(datePick) => setDatePick(datePick)}
      />
    </div>
  );
};

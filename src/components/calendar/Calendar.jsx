import React from "react";
import Calendars from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

export default function Calendar({
  SearchTransactions,
  setSelectedMinDate,
  setSelectedMaxDate,
}) {
  const onChange = (date) => {
    console.log(date[0]);
    setSelectedMinDate(date[0]);
    setSelectedMaxDate(date[1]);
  };

  const minDate = new Date(new Date().getFullYear() - 1, new Date().getMonth());
  const maxDate = new Date(new Date().getFullYear() + 1, new Date().getMonth());

  const searchSubmit = (e) => {
    SearchTransactions();
  };

  return (
    <div className="calendar">
      <form className="searchTransactions">
        <Calendars
          onChange={onChange}
          className="calendars"
          locale="en-US"
          selectRange={true}
          minDate={minDate}
          maxDate={maxDate}
          returnValue="range"
        />
        <button type="button" className="searchButton" onClick={searchSubmit}>
          Search
        </button>
      </form>
    </div>
  );
}

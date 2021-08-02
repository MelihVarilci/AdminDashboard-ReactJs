import React, { useState } from "react";
import Calendar from "../../components/calendar/Calendar";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import "./Transaction.css";

export default function Transaction() {
  const [selectedMinDate, setSelectedMinDate] = useState();
  const [selectedMaxDate, setSelectedMaxDate] = useState();

  const SearchTransactions = (e) => {
    console.log(selectedMinDate);
    console.log(selectedMaxDate);
  };

  return (
    <div className="transaction">
      <div className="transactionWidgets">
        <Calendar
          SearchTransactions={SearchTransactions}
          setSelectedMinDate={setSelectedMinDate}
          setSelectedMaxDate={setSelectedMaxDate}
        />
        <WidgetLg />
      </div>
    </div>
  );
}

import Calendar from "react-calendar";
import { useState } from "react";
import '../../Pages/Info/InformationPage.css'


export function NumDaysSlide() {
  const [rangeDate, setRangeDate] = useState([new Date(), new Date()]);
  const [startDate,setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  
  const onChangeDate = (date) => {
    setRangeDate(date);
    // Array.isArray(date) will check if date is an array or not
    if (Array.isArray(date) && date.length === 2) {
      // date[0] instanceof Date will vaildate if date[0] is a date object to use the function toLocaleDateString()
      setStartDate(date[0] instanceof Date ? date[0].toLocaleDateString() : "");
      setEndDate(date[1] instanceof Date ? date[1].toLocaleDateString() : "");
    }else{
      setStartDate("");
      setEndDate("");}
    console.log(startDate);
  };

  return (
    <div className="calendar">
      <div className="startDate">
        {startDate === "" ? "select a start date" : `start date : ${startDate} -`} {endDate === "" ? "" : `end date : ${endDate}`}
      </div>

      <Calendar
        className="calendar-set"
        locale="custom"
        allowPartialRange={false}
        selectRange={true}
        returnValue="range"
        onChange={onChangeDate}
        minDate={new Date()}
        showNeighboringMonth={false}
        formatMonthYear={(locale, date) => date.toLocaleString(locale, { month: 'short', year: 'numeric' })}
      />
    </div>
  );
}

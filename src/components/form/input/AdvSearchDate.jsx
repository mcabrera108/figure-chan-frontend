import { useState } from "react";
import searchstyle from "../../../style_modules/search.module.scss";
import PropTypes from "prop-types";

function AdvSearchDate({ inputTagTitle, buttonValue }) {
  const [calendarDate, setCalendarDate] = useState(buttonValue);

  function handleCalendarDate(val) {
    setCalendarDate(val);
  }
  return (
    <div className={searchstyle.searchInputWrapper}>
      <label htmlFor="item-type">{inputTagTitle}</label>
      <div className={searchstyle.inputContainer}>
        <input
          type="date"
          className={searchstyle.inputText}
          value={calendarDate}
          onChange={(e) => {
            handleCalendarDate(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
AdvSearchDate.propTypes = {
  inputTagTitle: PropTypes.string,
  buttonValue: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]),
};
export default AdvSearchDate;

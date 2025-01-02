import searchstyle from "../../../style_modules/search.module.scss";
import { useState } from "react";
import PropTypes from "prop-types";
function AdvSearchNumberText({ inputTagTitle }) {
  const [ratingOne, setRatingOne] = useState(1);
  const [ratingTwo, setRatingTwo] = useState(5);

  function handleRatingOne(val) {
    if (val === "") {
      // Upon form submit if value is left blank it will be defaulted to a 1
      setRatingOne("");
    } else if (val > 5) {
      setRatingOne(5);
    } else if (val < 1) {
      setRatingOne(1);
    } else {
      setRatingOne(val);
    }
  }
  function handleRatingTwo(val) {
    if (val === "") {
      // Upon form submit if value is left blank it will be defaulted to a 1
      setRatingTwo("");
    } else if (val > 5) {
      setRatingTwo(5);
    } else if (val < 1) {
      setRatingTwo(1);
    } else {
      setRatingTwo(val);
    }
  }
  return (
    <div className={searchstyle.searchInputWrapper}>
      <label htmlFor="item-type">{inputTagTitle}</label>
      <div className={searchstyle.inputContainer}>
        <input
          type="number"
          className={searchstyle.inputText}
          size={1}
          maxLength={1}
          min={1}
          max={5}
          value={ratingOne}
          onChange={(e) => {
            handleRatingOne(e.target.value);
          }}
          inputMode="numeric"
        />
        <span>to</span>
        <input
          type="number"
          className={searchstyle.inputText}
          min={1}
          max={5}
          value={ratingTwo}
          onChange={(e) => {
            handleRatingTwo(e.target.value);
          }}
          inputMode="numeric"
        />
      </div>
    </div>
  );
}
AdvSearchNumberText.propTypes = {
  inputTagTitle: PropTypes.string,
};
export default AdvSearchNumberText;

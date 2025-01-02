import searchstyle from "../../../style_modules/search.module.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function AdvSearchSelect({
  inputTagTitle,
  handleActiveComponent,
  searchInputValue,
  isActiveComponent,
  buttonValue,
  handleButtonValue,
  apiCallMethod,
}) {
  const [currentVal, setCurrentVal] = useState("");
  return (
    <div className={searchstyle.searchInputWrapper}>
      <label htmlFor="item-type">{inputTagTitle}</label>
      <button
        onClick={() => {
          handleActiveComponent(searchInputValue);
        }}
        type="button"
        id="item-type"
        className={searchstyle.inputBtn}
        value={buttonValue}
      >
        {buttonValue}
        <FontAwesomeIcon icon={faChevronDown} size="lg" color="light gray" />
      </button>
      {isActiveComponent === searchInputValue ? (
        <div className={searchstyle.listContainer}>
          <div className={searchstyle.inputContainerText}>
            <div>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="lg"
                color="light gray"
              />
            </div>
            <input
              type="text"
              className={searchstyle.searchInput}
              value={currentVal}
              onChange={(e) => {
                setCurrentVal(e.target.value);
              }}
              placeholder="Search..."
            />
          </div>

          <ul></ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
AdvSearchSelect.propTypes = {
  inputTagTitle: PropTypes.string,
  handleActiveComponent: PropTypes.func,
  searchInputValue: PropTypes.number,
  buttonValue: PropTypes.string,
  handleButtonValue: PropTypes.func,
  isActiveComponent: PropTypes.number,
};
export default AdvSearchSelect;

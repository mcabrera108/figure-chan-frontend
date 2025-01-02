import searchstyle from "../../../style_modules/search.module.scss";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SelectMultipleOpt from "./SelectMultipleOpt";
function AdvSearchInputSelectMultiple({
  inputTagTitle,
  handleActiveComponent,
  searchInputValue,
  isActiveComponent,
  searchOptions,
  buttonValue,
  handleButtonValue,
}) {
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
          <ul>
            {searchOptions.map((option) => {
              return (
                <SelectMultipleOpt
                  option={option}
                  handleButtonValue={handleButtonValue}
                  key={option.id}
                />
              );
            })}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
AdvSearchInputSelectMultiple.propTypes = {
  inputTagTitle: PropTypes.string,
  handleActiveComponent: PropTypes.func,
  isActiveComponent: PropTypes.number,
  searchInputValue: PropTypes.number,
  searchOptions: PropTypes.array,
  buttonValue: PropTypes.string,
  handleButtonValue: PropTypes.func,
};
export default AdvSearchInputSelectMultiple;

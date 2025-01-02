import searchstyle from "../../../style_modules/search.module.scss";
import PropTypes from "prop-types";
function SelectOneOpt({ option, handleButtonValue }) {
  function handleActiveButton() {
    handleButtonValue(option.itemTypeTitle);
  }
  return (
    <li onClick={handleActiveButton}>
      <div>
        <span className={`${searchstyle.choiceTitle}`}>
          {option.itemTypeTitle}
        </span>
      </div>
    </li>
  );
}
SelectOneOpt.propTypes = {
  option: PropTypes.object,
  handleButtonValue: PropTypes.func,
};
export default SelectOneOpt;

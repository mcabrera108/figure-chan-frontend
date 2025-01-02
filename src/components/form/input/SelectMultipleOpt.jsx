import { useState } from "react";
import searchstyle from "../../../style_modules/search.module.scss";
import PropTypes from "prop-types";
function SelectMultipleOpt({ option }) {
  const [texthighlight, setTextHighlight] = useState(false);
  function handleActiveButton() {
    console.log("Button Clicked");
    setTextHighlight(!texthighlight);
  }
  return (
    <li onClick={handleActiveButton}>
      <div>
        <div
          className={`${searchstyle.radioBtn} ${
            texthighlight ? searchstyle.active : ""
          }`}
        ></div>
        <span
          className={`${searchstyle.choiceTitle} ${
            texthighlight ? searchstyle.active : ""
          }`}
        >
          {option.itemTypeTitle}
        </span>
      </div>
    </li>
  );
}
SelectMultipleOpt.propTypes = {
  option: PropTypes.object,
};
export default SelectMultipleOpt;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../../style_modules/layout.module.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function SearchBarMobile() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className={style.searchAreaContainer}>
      <div className={style.searchAreaWrapper}>
        <input
          action=""
          className={style.searchAreaInput}
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          aria-label="header-search-field"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="lg"
          color="darkgray"
          className={style.searchSvg}
        />
      </div>
    </div>
  );
}
export default SearchBarMobile;

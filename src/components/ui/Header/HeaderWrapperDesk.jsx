import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import style from "../../../style_modules/layout.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
function HeaderWrapperDesk() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className={style.headerWrapper}>
      <Link className={style.logoContainer} to={"/"}>
        Figure-Dev
      </Link>
      <span className={style.banner}>Figure-Dev Banner</span>
      {/*Include Form Here for Call to an API */}
      <div className={style.searchBarContainer}>
        <input
          type="text"
          className={style.searchInput}
          placeholder="Search..."
          value={searchInput}
          size={50}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button className={style.searchBtn}>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" color="white" />
        </button>
      </div>

      <div className={style.loginContainer}>
        {/*Conditionally Render User Icon*/}
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
      </div>
    </div>
  );
}
export default HeaderWrapperDesk;

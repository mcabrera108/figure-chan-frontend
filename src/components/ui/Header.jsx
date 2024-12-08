import style from "../../style_modules/layout.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
function Header() {
  const [searchInput, setSearchInput] = useState("");
  const isMobileDevice = useMediaQuery({
    maxWidth: 768,
  });
  return (
    <header>
      <div className={style.headerContainer}>
        <div className={style.headerWrapper}>
          {isMobileDevice ? (
            <Link className={style.logoContainer} to={"/"}>
              FC
            </Link>
          ) : (
            <Link className={style.logoContainer} to={"/"}>
              Figure-Chan
            </Link>
          )}
          {/*Include Form Here for Call to an API */}
          <div className={style.searchBarContainer}>
            <input
              type="text"
              className={style.searchInput}
              placeholder="Search..."
              size={60}
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
            <button className={style.searchBtn}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="xl"
                color="white"
              />
            </button>
          </div>
          <div className={style.loginContainer}>
            {/*Conditionally Render User Icon*/}
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;

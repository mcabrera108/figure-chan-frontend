import style from "../../style_modules/layout.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
function HeaderWrapperMobile({ searchVisible, setSearchVisible }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={style.headerWrapper}>
      <div className={style.menuContainer}>
        {toggleMenu ? (
          <a
            className={style.menu}
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          >
            <FontAwesomeIcon icon={faXmark} size="xl" color="white" />
          </a>
        ) : (
          <a
            className={style.menu}
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          >
            <FontAwesomeIcon icon={faBars} size="xl" color="white" />
          </a>
        )}
      </div>

      <Link className={style.logoContainer} to={"/"}>
        FC
      </Link>
      <div className={style.headerBanner}>FigureChanBanner</div>
      <div className={style.searchBarContainerMobile}>
        <button className={style.searchBtnMobile}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="xl"
            color="white"
            onClick={() => {
              setSearchVisible(!searchVisible);
            }}
          />
        </button>
      </div>
      <div className={style.loginContainerMobile}>
        <Link>Login</Link>
        <Link>Register</Link>
      </div>
    </div>
  );
}
HeaderWrapperMobile.propTypes = {
  searchVisible: PropTypes.bool,
  setSearchVisible: PropTypes.func,
};
export default HeaderWrapperMobile;

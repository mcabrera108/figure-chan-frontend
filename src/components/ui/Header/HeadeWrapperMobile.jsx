import style from "../../../style_modules/layout.module.scss";
import { Link } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import figureChanBanner from "../../../assets/figure-chan-banner.png";
import PropTypes from "prop-types";
function HeaderWrapperMobile({
  searchVisible,
  setSearchVisible,
  setSideNavVisible,
  toggleMenu,
  setToggleMenu,
}) {
  return (
    <div className={style.headerWrapper}>
      <div className={style.menuContainer}>
        {toggleMenu ? (
          <button
            className={style.menu}
            onClick={() => {
              setToggleMenu(!toggleMenu);
              setSideNavVisible(false);
            }}
            aria-label="Side Menu Exit"
          >
            <FontAwesomeIcon icon={faXmark} size="xl" color="white" />
          </button>
        ) : (
          <button
            className={style.menu}
            onClick={() => {
              setToggleMenu(!toggleMenu);
              setSideNavVisible(true);
            }}
            aria-label="Side Menu Toggle"
          >
            <FontAwesomeIcon icon={faBars} size="xl" color="white" />
          </button>
        )}
      </div>

      <Link className={style.logoContainer} to={"/"}>
        FC
      </Link>
      <div className={style.headerPhotoContainer}>
        <img src={figureChanBanner} alt="" />
      </div>
      <div className={style.searchBarContainerMobile}>
        <button className={style.searchBtnMobile} aria-label="Search Button">
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
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
      </div>
    </div>
  );
}
HeaderWrapperMobile.propTypes = {
  searchVisible: PropTypes.bool,
  setSearchVisible: PropTypes.func,
  sideNavVisible: PropTypes.bool,
  setSideNavVisible: PropTypes.func,
  toggleMenu: PropTypes.bool,
  setToggleMenu: PropTypes.func,
};
export default HeaderWrapperMobile;

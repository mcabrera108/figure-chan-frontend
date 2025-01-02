import { useState } from "react";
import style from "../../../style_modules/layout.module.scss";
import database_head from "../../../utils/headerdata/database_head";
import community_head from "../../../utils/headerdata/community_head";
import NavOpt from "./NavOpt";
import { Link } from "react-router-dom";
import gallery_head from "../../../utils/headerdata/gallery_head";
import shop_head from "../../../utils/headerdata/shop_head";
import help_head from "../../../utils/headerdata/help_head";
// import { faGear } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function SubHeader() {
  const [dbDropdown, setDBDropdown] = useState(false);
  const [commDropdown, setCommDropdown] = useState(false);
  const [galleryDropdown, setGallDropdown] = useState(false);
  const [shopDropdown, setShopDropdown] = useState(false);
  const [helpDropdown, setHelpDropdown] = useState(false);

  return (
    <div className={style.subHeaderContainer}>
      <div className={style.subHeaderLeftContainer}>
        <nav className={style.navbar}>
          <ul>
            <li
              onMouseEnter={() => {
                setDBDropdown(true);
              }}
              onMouseLeave={() => {
                setDBDropdown(false);
              }}
              className={style.navListOpt}
            >
              <Link to={"/search"}>Database</Link>
              {dbDropdown && <NavOpt navObj={database_head} />}
            </li>
            <li
              onMouseEnter={() => {
                setCommDropdown(true);
              }}
              onMouseLeave={() => {
                setCommDropdown(false);
              }}
              className={style.navListOpt}
            >
              <Link to={"/"}>Community</Link>
              {commDropdown && <NavOpt navObj={community_head} />}
            </li>
            <li className={style.navListOpt}>
              <Link to={"/"}>News</Link>
            </li>
            <li
              onMouseEnter={() => {
                setGallDropdown(true);
              }}
              onMouseLeave={() => {
                setGallDropdown(false);
              }}
              className={style.navListOpt}
            >
              <Link to={"/"}>Gallery</Link>
              {galleryDropdown && <NavOpt navObj={gallery_head} />}
            </li>
            <li
              onMouseEnter={() => {
                setShopDropdown(true);
              }}
              onMouseLeave={() => {
                setShopDropdown(false);
              }}
              className={style.navListOpt}
            >
              <Link to={"/"}>Shop</Link>
              {shopDropdown && <NavOpt navObj={shop_head} />}
            </li>
            <li
              onMouseEnter={() => {
                setHelpDropdown(true);
              }}
              onMouseLeave={() => {
                setHelpDropdown(false);
              }}
              className={style.navListOpt}
            >
              <Link to={"/"}>Help</Link>
              {helpDropdown && <NavOpt navObj={help_head} />}
            </li>
          </ul>
        </nav>
      </div>
      {/* <div className={style.subHeaderRightContainer}>
        <button>
          <FontAwesomeIcon icon={faGear} size="2x" color="white" />
        </button>
      </div> */}
    </div>
  );
}
export default SubHeader;

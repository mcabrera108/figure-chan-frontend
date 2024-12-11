import homeStyle from "../../style_modules/layout.module.scss";
import PropTypes from "prop-types";
import SideNavOption from "./SideNavOpt";
import community_head from "../../utils/headerdata/community_head";
import database_head from "../../utils/headerdata/database_head";
import gallery_head from "../../utils/headerdata/gallery_head";
import help_head from "../../utils/headerdata/help_head";
import shop_head from "../../utils/headerdata/shop_head";
import { useState } from "react";
import Overlay from "./Overlay";
function SideNav({ sideNavVisible }) {
  const [sidenavOptions, setSideNavOptions] = useState(-1);
  return (
    <>
      <div className={homeStyle.homeSideNavContainer}>
        <div className={homeStyle.homeSideNavWrapper}>
          <ul>
            <SideNavOption
              navObj={community_head}
              setSideNavOptions={() => {
                setSideNavOptions(0);
              }}
              setToDefault={() => {
                setSideNavOptions(-1);
              }}
              isActive={sidenavOptions === 0}
            />
            <SideNavOption
              navObj={database_head}
              setSideNavOptions={() => {
                setSideNavOptions(1);
              }}
              setToDefault={() => {
                setSideNavOptions(-1);
              }}
              isActive={sidenavOptions === 1}
            />
            <SideNavOption
              navObj={gallery_head}
              setSideNavOptions={() => {
                setSideNavOptions(2);
              }}
              setToDefault={() => {
                setSideNavOptions(-1);
              }}
              isActive={sidenavOptions === 2}
            />
            <SideNavOption
              navObj={help_head}
              setSideNavOptions={() => {
                setSideNavOptions(3);
              }}
              setToDefault={() => {
                setSideNavOptions(-1);
              }}
              isActive={sidenavOptions === 3}
            />
            <SideNavOption
              navObj={shop_head}
              setSideNavOptions={() => {
                setSideNavOptions(4);
              }}
              setToDefault={() => {
                setSideNavOptions(-1);
              }}
              isActive={sidenavOptions === 4}
            />
          </ul>
        </div>
      </div>
      <Overlay sideNavVisible={sideNavVisible} />
    </>
  );
}
SideNav.propTypes = {
  sideNavVisible: PropTypes.func,
  setSideNavVisible: PropTypes.func,
  toggleMenu: PropTypes.bool,
};
export default SideNav;

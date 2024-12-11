import style from "../../style_modules/layout.module.scss";
import { useMediaQuery } from "react-responsive";
import HeaderWrapperDesk from "./HeaderWrapperDesk";
import HeaderWrapperMobile from "./HeadeWrapperMobile";
import SearchBarMobile from "../../features/search_bar/SearchBarMobile";
import SideNav from "./SideNav";
import { useState } from "react";
function Header() {
  const isMobileDevice = useMediaQuery({
    maxWidth: 1024,
  });
  const [searchVisible, setSearchVisible] = useState(false);
  const [sideNavVisible, setSideNavVisible] = useState(false);
  return (
    <header className={style.headerContainer}>
      {isMobileDevice ? (
        <>
          <HeaderWrapperMobile
            searchVisible={searchVisible}
            setSearchVisible={setSearchVisible}
            setSideNavVisible={setSideNavVisible}
            toggleMenu={sideNavVisible}
            setToggleMenu={setSideNavVisible}
          />
          {searchVisible ? <SearchBarMobile /> : <></>}
          {sideNavVisible ? (
            <SideNav sideNavVisible={setSideNavVisible} />
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          <HeaderWrapperDesk />
        </>
      )}
    </header>
  );
}
export default Header;

import style from "../../style_modules/layout.module.scss";
import { useMediaQuery } from "react-responsive";
import HeaderWrapperDesk from "./HeaderWrapperDesk";
import HeaderWrapperMobile from "./HeadeWrapperMobile";
import SearchBarMobile from "../../features/search_bar/SearchBarMobile";
import { useState } from "react";
function Header() {
  const isMobileDevice = useMediaQuery({
    maxWidth: 767,
  });
  const [searchVisible, setSearchVisible] = useState(false);
  return (
    <header className={style.headerContainer}>
      {isMobileDevice ? (
        <>
          <HeaderWrapperMobile
            searchVisible={searchVisible}
            setSearchVisible={setSearchVisible}
          />
          {searchVisible ? <SearchBarMobile /> : <></>}
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

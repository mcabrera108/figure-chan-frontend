import homestyle from "../../../style_modules/layout.module.scss";
import PropTypes from "prop-types";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function SideNavOption({ navObj, isActive, setSideNavOptions, setToDefault }) {
  return (
    <li>
      <div
        className={homestyle.navOption}
        onClick={isActive ? setToDefault : setSideNavOptions}
      >
        {navObj.navTitle}
        {isActive ? (
          <FontAwesomeIcon icon={faChevronDown} size="lg" />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} size="lg" />
        )}
      </div>
      {isActive ? (
        <>
          {navObj.navOptions.map((nav) => {
            return (
              <Link to={nav.navOptUrl} key={nav.id}>
                <div className={homestyle.sideNavSubOption}>
                  {nav.navOptTitle}
                </div>
              </Link>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </li>
  );
}
SideNavOption.propTypes = {
  navObj: PropTypes.object,
  isActive: PropTypes.bool,
  setSideNavOptions: PropTypes.func,
  setToDefault: PropTypes.func,
};
export default SideNavOption;

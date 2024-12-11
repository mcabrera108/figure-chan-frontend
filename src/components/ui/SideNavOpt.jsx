import homestyle from "../../style_modules/layout.module.scss";
import PropTypes from "prop-types";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
              <div key={nav.id} className={homestyle.sideNavSubOption}>
                {nav.navOptTitle}
              </div>
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

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "../../../style_modules/layout.module.scss";
function NavOpt({ navObj }) {
  return (
    <>
      <ul className={style.navOpt}>
        {navObj.navOptions.map((obj) => {
          return (
            <li key={obj.id}>
              <Link to={obj.navOptUrl} className={style.navSubOpt}>
                {obj.navOptTitle}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
NavOpt.propTypes = {
  navObj: PropTypes.object,
};
export default NavOpt;

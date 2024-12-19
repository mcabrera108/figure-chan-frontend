import style from "../../style_modules/layout.module.scss";
import PropTypes from "prop-types";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Overlay({ sideNavVisible }) {
  return (
    <div
      className={style.overlay}
      onClick={() => {
        sideNavVisible(false);
      }}
    >
      <FontAwesomeIcon
        icon={faX}
        size="lg"
        color="white"
        className={style.xIcon}
      />
    </div>
  );
}
Overlay.propTypes = {
  sideNavVisible: PropTypes.func,
};
export default Overlay;

import style from "../../style_modules/layout.module.scss";
import PropTypes from "prop-types";
function Overlay({ sideNavVisible }) {
  return (
    <div
      className={style.overlay}
      onClick={() => {
        sideNavVisible(false);
      }}
    ></div>
  );
}
Overlay.propTypes = {
  sideNavVisible: PropTypes.func,
};
export default Overlay;

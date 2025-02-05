import PropTypes from "prop-types";
import style from "../../../style_modules/layout.module.scss";
function PopUpSuccess({ str }) {
  return <div className={style.popUpContainer}>{str}</div>;
}

PopUpSuccess.propTypes = {
  str: PropTypes.string,
};
export default PopUpSuccess;

import PropTypes from "prop-types";
import style from "../../../style_modules/layout.module.scss";

function ResponseMessage({ response }) {
  return <div className={style.responseContainer}>{response}</div>;
}
ResponseMessage.propTypes = {
  response: PropTypes.string,
};

export default ResponseMessage;

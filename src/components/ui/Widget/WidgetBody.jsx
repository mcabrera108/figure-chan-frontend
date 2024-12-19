import homestyle from "../../../style_modules/home.module.scss";
import PropTypes from "prop-types";
function WidgetBody({ children }) {
  return <div className={homestyle.widgetBodyContainer}>{children}</div>;
}
WidgetBody.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
export default WidgetBody;

import homestyle from "../../../style_modules/home.module.scss";
import PropTypes from "prop-types";
function WidgetHeader({ children }) {
  return <div className={homestyle.widgetHeaderContainer}>{children}</div>;
}
WidgetHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
export default WidgetHeader;

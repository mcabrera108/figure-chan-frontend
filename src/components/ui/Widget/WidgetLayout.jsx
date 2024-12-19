import homestyle from "../../../style_modules/home.module.scss";
import PropTypes from "prop-types";
function WidgetLayout({ children }) {
  return <section className={homestyle.widgetContainer}>{children}</section>;
}
WidgetLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
export default WidgetLayout;

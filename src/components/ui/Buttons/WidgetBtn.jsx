import { Link } from "react-router-dom";
import homestyle from "../../../style_modules/home.module.scss";
import PropTypes from "prop-types";

function WidgetBtn({ widgetButtonProperties }) {
  return (
    <Link
      className={homestyle.widgetMoreBtn}
      to={widgetButtonProperties.buttonUrl}
    >
      {widgetButtonProperties.buttonTitle}
    </Link>
  );
}
WidgetBtn.propTypes = {
  widgetButtonProperties: PropTypes.object,
};
export default WidgetBtn;

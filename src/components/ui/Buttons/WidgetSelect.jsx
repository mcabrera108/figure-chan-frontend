import homestyle from "../../../style_modules/home.module.scss";
import PropTypes from "prop-types";
function WidgetSelect({ widgetSelectProperties }) {
  return (
    <select className={homestyle.widgetSelectItems}>
      {widgetSelectProperties.map((widgetOpt) => {
        return (
          <option value={widgetOpt.optionValue} key={widgetOpt.key}>
            {widgetOpt.optionTitle}
          </option>
        );
      })}
    </select>
  );
}
WidgetSelect.propTypes = {
  widgetSelectProperties: PropTypes.array,
};
export default WidgetSelect;

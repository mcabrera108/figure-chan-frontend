import homestyle from "../../style_modules/home.module.scss";
import PropTypes from "prop-types";
import ReactCountryFlag from "react-country-flag";
function ItemPreview({ itemInfo }) {
  return (
    <div className={homestyle.itemImg}>
      <img
        src={itemInfo.itemImg}
        alt={itemInfo.itemTitle}
        className={homestyle.item}
      />
      <ReactCountryFlag
        className={homestyle.flagImg}
        style={{ fontSize: "2em" }}
        countryCode={itemInfo.countryCode}
        svg
      />
    </div>
  );
}
ItemPreview.propTypes = {
  itemInfo: PropTypes.object,
};
export default ItemPreview;

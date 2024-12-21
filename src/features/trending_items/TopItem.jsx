import PropTypes from "prop-types";
import homestyle from "../../style_modules/home.module.scss";
function TopItem({ top }) {
  return (
    <div className={homestyle.topWidgetContainer} key={top.id}>
      <div className={homestyle.topPreview}>
        <img src={top.adImgURL.img} alt="" width={64} height={64} />
      </div>
      <div>
        <span className={homestyle.topTitle}>{top.adTitle}</span>
      </div>
    </div>
  );
}
TopItem.propTypes = {
  top: PropTypes.object,
};
export default TopItem;

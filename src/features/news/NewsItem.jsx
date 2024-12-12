import PropTypes from "prop-types";
import homestyle from "../../style_modules/home.module.scss";
function NewsItem({ top }) {
  return (
    <div className={homestyle.topWidgetContainer} key={top.id}>
      <div className={homestyle.topPreview}>
        <img src={top.adImgURL.img} alt="" width={64} height={64} />
      </div>
      <div className={homestyle.topTitle}>{top.adTitle}</div>
    </div>
  );
}
NewsItem.propTypes = {
  top: PropTypes.object,
};
export default NewsItem;

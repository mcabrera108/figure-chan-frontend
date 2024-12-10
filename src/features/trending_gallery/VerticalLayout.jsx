import homestyle from "../../style_modules/home.module.scss";
import PropTypes from "prop-types";
function VerticalLayout({ gallery }) {
  return (
    <div className={homestyle.trendingWrapperVer}>
      <div className={homestyle.bigVer}>
        <img src={gallery[0].photoMeta.url} alt={gallery[0].title} />
      </div>
      <div className={homestyle.smallWrapperVer}>
        {/* {gallery.slice(1).map((photo) => {
          return (
            <div className={homestyle.smallVer} key={photo.id}>
              <img src={photo.photoMeta.url} alt={photo.title} />
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
VerticalLayout.propTypes = {
  gallery: PropTypes.array,
};
export default VerticalLayout;

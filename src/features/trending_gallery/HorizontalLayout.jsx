import homestyle from "../../style_modules/home.module.scss";
import PropTypes from "prop-types";
function HorizontalLayout({ gallery }) {
  return (
    <div className={homestyle.trendingWrapperHor}>
      <div className={homestyle.bigHor}>
        <img src={gallery[3].photoMeta.url} alt={gallery[3].title} />
      </div>
      {/**Carousel Layout*/}
      <div className={homestyle.smallWrapperHor}>
        <div className={homestyle.smallTrackHor}>
          {gallery.slice(1).map((photo) => {
            return (
              <div className={homestyle.smallHor} key={photo.id}>
                <img src={photo.photoMeta.url} alt={photo.title} />
              </div>
            );
          })}
          {gallery.slice(1).map((photo) => {
            return (
              <div className={homestyle.smallHor} key={photo.id}>
                <img src={photo.photoMeta.url} alt={photo.title} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
HorizontalLayout.propTypes = {
  gallery: PropTypes.array,
};
export default HorizontalLayout;

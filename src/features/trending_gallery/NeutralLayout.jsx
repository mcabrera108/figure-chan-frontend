import homestyle from "../../style_modules/home.module.scss";
import PropTypes from "prop-types";
function NeutralLayout({ gallery }) {
  return (
    <div className={homestyle.gridContainer}>
      Neutral
      {gallery.slice(1).map((photo) => {
        return (
          <div key={photo.id}>
            <img src={photo.photoMeta.url} alt={photo.title} />
          </div>
        );
      })}
    </div>
  );
}
NeutralLayout.propTypes = {
  gallery: PropTypes.array,
};
export default NeutralLayout;

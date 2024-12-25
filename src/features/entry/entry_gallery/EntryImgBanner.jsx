import itemstyle from "../../../style_modules/entrypage.module.scss";
import getPhotoGallery from "../../../utils/getPhotoGallery";
function EntryImgBanner() {
  return (
    <div className={itemstyle.entryImgContainer}>
      {/* {getPhotoGallery.map((photo) => {
        return (
          <img
            src={photo.photoMeta.url}
            key={photo.id}
            width={64}
            height={64}
            className={itemstyle.entryImgPreview}
          />
        );
      })} */}
    </div>
  );
}
export default EntryImgBanner;

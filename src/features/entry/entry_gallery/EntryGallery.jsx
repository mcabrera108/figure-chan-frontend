import homestyle from "../../../style_modules/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function EntryGallery() {
  return (
    <section className={homestyle.sideWidgetContainer}>
      <div className={homestyle.sideWidgetHeaderContainer}>
        <div className={homestyle.widgetHeaderLeft}>
          <FontAwesomeIcon
            icon={faCamera}
            size="lg"
            color="white"
            className={homestyle.iconWidget}
          />
          <span>Gallery</span>
        </div>
        <div className={homestyle.widgetHeaderRight}>
          <Link className={homestyle.widgetMoreBtn} to={"/"}>
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
export default EntryGallery;

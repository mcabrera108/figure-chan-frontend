import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import homestyle from "../../style_modules/home.module.scss";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import HorizontalLayout from "./HorizontalLayout";
import VerticalLayout from "./VerticalLayout";
import NeutralLayout from "./NeutralLayout";
import getPhotoGallery from "../../utils/getPhotoGallery";
import { useMemo } from "react";
function TrendingGallery() {
  const getLayoutType = useMemo(() => {
    if (
      getPhotoGallery[0].photoMeta.width >=
      getPhotoGallery[0].photoMeta.height * 1.5
    ) {
      return <HorizontalLayout gallery={getPhotoGallery} />;
    } else if (
      getPhotoGallery[0].photoMeta.width * 1.5 >=
      getPhotoGallery[0].photoMeta.height
    ) {
      return <VerticalLayout gallery={getPhotoGallery} />;
    } else {
      return <NeutralLayout gallery={getPhotoGallery} />;
    }
  }, []);
  return (
    <section className={homestyle.widgetContainer}>
      <div className={homestyle.widgetHeaderContainer}>
        <div className={homestyle.widgetHeaderLeft}>
          <FontAwesomeIcon
            icon={faCamera}
            size="lg"
            color="white"
            className={homestyle.iconWidget}
          />
          <h3>Trending Posts</h3>
        </div>
      </div>
      <div className={homestyle.widgetBodyContainer}>
        {/*<HorizontalLayout gallery={getPhotoGallery} />*/}
        <HorizontalLayout gallery={getPhotoGallery} />
      </div>
    </section>
  );
}
export default TrendingGallery;

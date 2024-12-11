import homestyle from "../../style_modules/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import adData from "../../utils/testdata/adData";
function TrendingItems() {
  return (
    <section className={homestyle.sideWidgetContainer}>
      <div className={homestyle.sideWidgetHeaderContainer}>
        <div className={homestyle.widgetHeaderLeft}>
          <FontAwesomeIcon
            icon={faFireFlameCurved}
            size="lg"
            color="white"
            className={homestyle.iconWidget}
          />
          <h3>Top 10 This Week</h3>
        </div>
        <div className={homestyle.widgetHeaderRight}>
          <Link className={homestyle.widgetMoreBtn} to={"/"}>
            View More
          </Link>
        </div>
      </div>

      <div className={homestyle.sideWidgetBodyContainer}>
        {adData.map((top) => {
          return (
            <div className={homestyle.topWidgetContainer} key={top.id}>
              <div className={homestyle.topPreview}>
                <img src={top.adImgURL.img} alt="" width={64} height={64} />
              </div>
              <div className={homestyle.topTitle}>{top.adTitle}</div>
            </div>
          );
        })}
        {adData.map((top) => {
          return (
            <div className={homestyle.topWidgetContainer} key={top.id}>
              <div className={homestyle.topPreview}>
                <img src={top.adImgURL.img} alt="" width={64} height={64} />
              </div>
              <div className={homestyle.topTitle}>{top.adTitle}</div>
            </div>
          );
        })}
      </div>
      {adData.map((top) => {
        return (
          <div className={homestyle.topWidgetContainer} key={top.id}>
            <div className={homestyle.topPreview}>
              <img src={top.adImgURL.img} alt="" width={64} height={64} />
            </div>
            <div className={homestyle.topTitle}>{top.adTitle}</div>
          </div>
        );
      })}
    </section>
  );
}
export default TrendingItems;

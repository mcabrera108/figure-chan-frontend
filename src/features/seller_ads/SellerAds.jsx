import homestyle from "../../style_modules/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SalePreview from "./SalePreview";
import adData from "../../utils/testdata/adData";
function SellerAds() {
  return (
    <section className={homestyle.widgetContainer}>
      <div className={homestyle.widgetHeaderContainer}>
        <div className={homestyle.widgetHeaderLeft}>
          <FontAwesomeIcon
            icon={faTag}
            size="lg"
            color="white"
            className={homestyle.iconWidget}
          />
          <h3>Ads For You!</h3>
        </div>
        <div className={homestyle.widgetHeaderRight}>
          <Link className={homestyle.widgetMoreBtn} to={"/"}>
            View More
          </Link>
        </div>
      </div>
      <div className={homestyle.widgetBodyContainer}>
        {adData.map((ad) => {
          return <SalePreview adInfo={ad} key={ad.id} />;
        })}
      </div>
    </section>
  );
}
export default SellerAds;

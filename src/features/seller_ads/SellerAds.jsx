import homestyle from "../../style_modules/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SalePreview from "./SalePreview";
import adData from "../../utils/testdata/adData";
import WidgetLayout from "../../components/ui/Widget/WidgetLayout";
import WidgetHeader from "../../components/ui/Widget/WidgetHeader";
import WidgetBody from "../../components/ui/Widget/WidgetBody";
function SellerAds() {
  return (
    <WidgetLayout>
      <WidgetHeader>
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
      </WidgetHeader>
      <WidgetBody>
        {adData.map((ad) => {
          return <SalePreview adInfo={ad} key={ad.id} />;
        })}
      </WidgetBody>
    </WidgetLayout>
  );
}
export default SellerAds;

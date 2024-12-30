import homestyle from "../../style_modules/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import SalePreview from "./SalePreview";
import adData from "../../utils/testdata/adData";
import WidgetLayout from "../../components/ui/Widget/WidgetLayout";
import WidgetHeader from "../../components/ui/Widget/WidgetHeader";
import WidgetBody from "../../components/ui/Widget/WidgetBody";
import WidgetBtn from "../../components/ui/Buttons/WidgetBtn";
function SellerAds() {
  const widgetButtonProperties = {
    buttonTitle: "View More",
    buttonUrl: "/",
  };
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
          <span>Ads For You!</span>
        </div>
        <div className={homestyle.widgetHeaderRight}>
          <WidgetBtn widgetButtonProperties={widgetButtonProperties} />
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

import homestyle from "../../style_modules/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import itemsForYouData from "../../utils/testdata/itemsForYouData";
import ItemPreview from "./ItemPreview";
import WidgetLayout from "../../components/ui/Widget/WidgetLayout";
import WidgetHeader from "../../components/ui/Widget/WidgetHeader";
import WidgetBody from "../../components/ui/Widget/WidgetBody";

function RecommendedItems() {
  return (
    <WidgetLayout>
      <WidgetHeader>
        <div className={homestyle.widgetHeaderLeft}>
          <FontAwesomeIcon
            icon={faGift}
            size="lg"
            color="white"
            className={homestyle.iconWidget}
          />
          <span>Recommended</span>
        </div>
        <div className={homestyle.widgetHeaderRight}>
          <select className={homestyle.widgetSelectItems}>
            <option>Figures</option>
            <option>Goods</option>
            <option>Media</option>
          </select>
        </div>
      </WidgetHeader>
      <WidgetBody>
        <div className={homestyle.recommendedWrapper}>
          {itemsForYouData.map((item) => {
            return <ItemPreview key={item.id} itemInfo={item} />;
          })}
        </div>
      </WidgetBody>
    </WidgetLayout>
  );
}
export default RecommendedItems;

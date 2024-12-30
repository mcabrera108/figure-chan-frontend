import homestyle from "../../style_modules/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import itemsForYouData from "../../utils/testdata/itemsForYouData";
import ItemPreview from "./ItemPreview";
import WidgetLayout from "../../components/ui/Widget/WidgetLayout";
import WidgetHeader from "../../components/ui/Widget/WidgetHeader";
import WidgetBody from "../../components/ui/Widget/WidgetBody";
import WidgetSelect from "../../components/ui/Buttons/WidgetSelect";

function RecommendedItems() {
  const widgetSelectProperties = [
    {
      optionTitle: "Figures",
      key: "Figures_Select",
      optionValue: "Figures",
    },
    {
      optionTitle: "Goods",
      key: "Goods_Select",
      optionValue: "Goods",
    },
    {
      optionTitle: "Media",
      key: "Media_Select",
      optionValue: "Media",
    },
  ];
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
          <WidgetSelect widgetSelectProperties={widgetSelectProperties} />
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

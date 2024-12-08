import homestyle from "../../style_modules/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import itemsForYouData from "../../utils/testdata/itemsForYouData";
import ItemPreview from "./ItemPreview";

function RecommendedItems() {
  return (
    <section className={homestyle.widgetContainer}>
      <div className={homestyle.widgetHeaderContainer}>
        <div className={homestyle.widgetHeaderLeft}>
          <FontAwesomeIcon
            icon={faGift}
            size="lg"
            color="white"
            className={homestyle.iconWidget}
          />
          <h3>Recommended</h3>
        </div>
        <div className={homestyle.widgetHeaderRight}>
          <select className={homestyle.widgetSelectItems}>
            <option>Figures</option>
            <option>Goods</option>
            <option>Media</option>
          </select>
        </div>
      </div>
      <div className={homestyle.widgetBodyContainer}>
        <div className={homestyle.recommendedWrapper}>
          {itemsForYouData.map((item) => {
            return <ItemPreview key={item.id} itemInfo={item} />;
          })}
        </div>
      </div>
    </section>
  );
}
export default RecommendedItems;

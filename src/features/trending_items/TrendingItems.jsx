import homestyle from "../../style_modules/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import adData from "../../utils/testdata/adData";
import TopItem from "./TopItem";
import WidgetSelect from "../../components/ui/Buttons/WidgetSelect";
function TrendingItems() {
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
    <section className={homestyle.sideWidgetContainer}>
      <div className={homestyle.sideWidgetHeaderContainer}>
        <div className={homestyle.widgetHeaderLeft}>
          <FontAwesomeIcon
            icon={faFireFlameCurved}
            size="lg"
            color="white"
            className={homestyle.iconWidget}
          />
          <span>Top 10</span>
        </div>
        <div className={homestyle.widgetHeaderRight}>
          <WidgetSelect widgetSelectProperties={widgetSelectProperties} />
        </div>
      </div>

      <div className={homestyle.sideWidgetBodyContainer}>
        {adData.map((top) => {
          return <TopItem top={top} key={top.id} />;
        })}
        {adData.map((top) => {
          return <TopItem top={top} key={top.id} />;
        })}
        {adData.map((top) => {
          return <TopItem top={top} key={top.id} />;
        })}
      </div>
    </section>
  );
}
export default TrendingItems;

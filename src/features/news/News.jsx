import homestyle from "../../style_modules/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import adData from "../../utils/testdata/adData";
import NewsItem from "./NewsItem";
import WidgetBtn from "../../components/ui/Buttons/WidgetBtn";
function News() {
  const widgetButtonProperties = {
    buttonTitle: "View More",
    buttonUrl: "/",
  };
  return (
    <section className={homestyle.sideWidgetContainer}>
      <div className={homestyle.sideWidgetHeaderContainer}>
        <div className={homestyle.widgetHeaderLeft}>
          <FontAwesomeIcon
            icon={faNewspaper}
            size="lg"
            color="white"
            className={homestyle.iconWidget}
          />
          <span>News</span>
        </div>
        <div className={homestyle.widgetHeaderRight}>
          <WidgetBtn widgetButtonProperties={widgetButtonProperties} />
        </div>
      </div>
      <div className={homestyle.sideWidgetBodyContainer}>
        <div className={homestyle.widgetSubHeaderTitle}>
          <h2>Popular Articles</h2>
        </div>
        {adData.map((top) => {
          return <NewsItem top={top} key={top.id} />;
        })}
        {adData.map((top) => {
          return <NewsItem top={top} key={top.id} />;
        })}
        <div className={homestyle.widgetSubHeaderTitle}>
          <h2>Newest Articles</h2>
        </div>
        {adData.map((top) => {
          return <NewsItem top={top} key={top.id} />;
        })}
        {adData.map((top) => {
          return <NewsItem top={top} key={top.id} />;
        })}
      </div>
    </section>
  );
}
export default News;

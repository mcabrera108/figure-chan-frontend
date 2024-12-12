import homestyle from "../../style_modules/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import adData from "../../utils/testdata/adData";
import TopItem from "../trending_items/TopItem";
function News() {
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
          <h3>News</h3>
        </div>
        <div className={homestyle.widgetHeaderRight}>
          <Link className={homestyle.widgetMoreBtn} to={"/"}>
            View More
          </Link>
        </div>
      </div>
      <div className={homestyle.sideWidgetBodyContainer}>
        <div className={homestyle.widgetSubHeaderTitle}>
          <h2>Popular Articles</h2>
        </div>
        {adData.map((top) => {
          return <TopItem top={top} key={top.id} />;
        })}
        {adData.map((top) => {
          return <TopItem top={top} key={top.id} />;
        })}
        <div className={homestyle.widgetSubHeaderTitle}>
          <h2>Newest Articles</h2>
        </div>
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
export default News;

import homestyle from "../../../style_modules/home.module.scss";
import itemstyle from "../../../style_modules/entrypage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function NotesWidget() {
  return (
    <section className={homestyle.sideWidgetContainer}>
      <div className={homestyle.sideWidgetHeaderContainer}>
        <div className={homestyle.widgetHeaderLeft}>
          <FontAwesomeIcon
            icon={faNoteSticky}
            size="lg"
            color="white"
            className={homestyle.iconWidget}
          />
          <span>Notes</span>
        </div>
        <div className={homestyle.widgetHeaderRight}>
          <Link className={homestyle.widgetMoreBtn} to={"/"}>
            Add
          </Link>
        </div>
      </div>
      <div className={homestyle.sideWidgetBodyContainer}>
        <div className={itemstyle.defaultWidgetBodyContainer}>
          <span>No Notes Created</span>
        </div>
      </div>
    </section>
  );
}
export default NotesWidget;

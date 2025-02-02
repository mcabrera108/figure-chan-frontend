/*Styling files */
import homestyle from "../style_modules/home.module.scss";
import helpstyle from "../style_modules/help.module.scss";
/*Component Imports */
import WidgetLayout from "../components/ui/Widget/WidgetLayout.jsx";
import WidgetHeader from "../components/ui/Widget/WidgetHeader.jsx";
import WidgetBody from "../components/ui/Widget/WidgetBody.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardUser } from "@fortawesome/free-solid-svg-icons";
function StaffPage() {
  return (
    <div className={homestyle.mainContainer}>
      <div className={homestyle.homeContainer}>
        <div className={helpstyle.helpTabDefPageWrapper}>
          <div className={helpstyle.staffContainer}>
            <WidgetLayout>
              <WidgetHeader>
                <div className={homestyle.widgetHeaderLeft}>
                  <FontAwesomeIcon
                    icon={faClipboardUser}
                    size="lg"
                    color="white"
                    className={homestyle.iconWidget}
                  />
                  <span>Staff</span>
                </div>
              </WidgetHeader>
              <WidgetBody></WidgetBody>
            </WidgetLayout>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StaffPage;

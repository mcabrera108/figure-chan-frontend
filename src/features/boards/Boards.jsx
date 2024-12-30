import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import homestyle from "../../style_modules/home.module.scss";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import BoardPreview from "./BoardPreview";
import boardData from "../../utils/testdata/boardData";
import WidgetLayout from "../../components/ui/Widget/WidgetLayout";
import WidgetHeader from "../../components/ui/Widget/WidgetHeader";
import WidgetBody from "../../components/ui/Widget/WidgetBody";
import WidgetBtn from "../../components/ui/Buttons/WidgetBtn";
function Boards() {
  const widgetButtonProperties = {
    buttonTitle: "View More",
    buttonUrl: "/",
  };
  return (
    <WidgetLayout>
      <WidgetHeader>
        <div className={homestyle.widgetHeaderLeft}>
          <FontAwesomeIcon
            icon={faComments}
            size="lg"
            color="white"
            className={homestyle.iconWidget}
          />
          <span>Boards</span>
        </div>
        <div className={homestyle.widgetHeaderRight}>
          <WidgetBtn widgetButtonProperties={widgetButtonProperties} />
        </div>
      </WidgetHeader>
      <WidgetBody>
        {boardData.map((board) => {
          return <BoardPreview boardData={board} key={board.id} />;
        })}
      </WidgetBody>
    </WidgetLayout>
  );
}
export default Boards;

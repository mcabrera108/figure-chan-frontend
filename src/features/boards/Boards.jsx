import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import homestyle from "../../style_modules/home.module.scss";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import BoardPreview from "./BoardPreview";
import boardData from "../../utils/testdata/boardData";
function Boards() {
  return (
    <section className={homestyle.widgetContainer}>
      <div className={homestyle.widgetHeaderContainer}>
        <div className={homestyle.widgetHeaderLeft}>
          <FontAwesomeIcon
            icon={faComments}
            size="lg"
            color="white"
            className={homestyle.iconWidget}
          />
          <h3>Boards</h3>
        </div>
        <div className={homestyle.widgetHeaderRight}>
          <Link className={homestyle.widgetMoreBtn} to={"/"}>
            View More
          </Link>
        </div>
      </div>
      <div className={homestyle.widgetBodyContainer}>
        {boardData.map((board) => {
          return <BoardPreview boardData={board} key={board.id} />;
        })}
      </div>
    </section>
  );
}
export default Boards;

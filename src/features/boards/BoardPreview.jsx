import PropTypes from "prop-types";
import homestyle from "../../style_modules/home.module.scss";
import ReactTimeago from "react-timeago";
import { useMediaQuery } from "react-responsive";
function BoardPreview({ boardData }) {
  const isMobileDevice = useMediaQuery({
    maxWidth: 768,
  });
  return (
    <div className={homestyle.boardsContainer}>
      <div className={homestyle.boardsWrapper}>
        <div className={homestyle.boardsThumbnail}>
          <img
            src={boardData.boardPreviewImgURL.img}
            alt={boardData.boardPreviewImgURL.imgAlt}
            width={64}
            height={64}
          />
        </div>
        <div className={homestyle.boardDescContainer}>
          <div className={homestyle.boardTitleContainer}>
            <span className={homestyle.boardTitle} title={boardData.boardTitle}>
              {boardData.boardTitle}
            </span>
          </div>
          <div className={homestyle.creatorContainer}>
            Started by:{" "}
            <span className={homestyle.creatorUsername}>
              {boardData.creatorUsername}
            </span>
            {isMobileDevice ? (
              <></>
            ) : (
              <span className={homestyle.dateCreated}>
                <ReactTimeago date={boardData.dateCreated} live={false} />
              </span>
            )}
          </div>
          {isMobileDevice ? (
            <div>
              <span className={homestyle.mobileSub}>
                Created Date:{" "}
                <ReactTimeago date={boardData.dateCreated} live={false} />
              </span>
            </div>
          ) : (
            <></>
          )}
          <div className={homestyle.contributorContainer}>
            Last Contributor:{" "}
            <span className={homestyle.lastContributorUsername}>
              {boardData.lastContributorUsername}
            </span>
            {isMobileDevice ? (
              <></>
            ) : (
              <span className={homestyle.lastPostTimeStamp}>
                <ReactTimeago date={boardData.lastPostTimeStamp} live={false} />{" "}
                {boardData.replies} Replies
              </span>
            )}
          </div>
          {isMobileDevice ? (
            <div>
              <span className={homestyle.mobileSub}>
                Last Reply:{" "}
                <ReactTimeago date={boardData.dateCreated} live={false} />{" "}
                {boardData.replies} Replies
              </span>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
BoardPreview.propTypes = {
  boardData: PropTypes.object,
};
export default BoardPreview;

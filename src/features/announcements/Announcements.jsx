import style from "../../style_modules/layout.module.scss";
import PropTypes from "prop-types";
function Announcements({ announceData }) {
  //<Link to={announceData[announceData.length - 1].url}> Read More</Link>
  return (
    <div className={style.announcementContainer}>
      {announceData[announceData.length - 1].announceTitle}
    </div>
  );
}
Announcements.propTypes = {
  announceData: PropTypes.array,
};
export default Announcements;

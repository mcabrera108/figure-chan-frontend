import style from "../../style_modules/layout.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Announcements({ announceData }) {
  return (
    <div className={style.announcementContainer}>
      {announceData[announceData.length - 1].announceTitle}
      <Link to={announceData[announceData.length - 1].url}> Read More</Link>
    </div>
  );
}
Announcements.propTypes = {
  announceData: PropTypes.array,
};
export default Announcements;

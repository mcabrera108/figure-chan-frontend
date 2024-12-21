import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../../../style_modules/layout.module.scss";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
PropTypes;
function GoToTop() {
  const [showGoTop, setShowGoTop] = useState(false);
  function handleVisibleButton() {
    setShowGoTop(window.scrollY > 50);
  }

  function handleScrollUp() {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);

    return () => window.removeEventListener("scroll", handleVisibleButton);
  }, []);

  return (
    <div className={showGoTop ? "" : style.goToTopHidden}>
      <button
        className={style.goToTop}
        title="Go To Top"
        onClick={handleScrollUp}
      >
        <FontAwesomeIcon icon={faArrowUp} size="2x" color="white" />
      </button>
    </div>
  );
}
GoToTop.propTypes = {
  scrollUp: PropTypes.object,
};
export default GoToTop;

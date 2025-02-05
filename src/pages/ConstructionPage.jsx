import homestyle from "../style_modules/home.module.scss";
import errorstyle from "../style_modules/errorpage.module.scss";
import figureChanConstruction from "../assets/figure-chan-construction-banner.png";
function ConstructionPage() {
  return (
    <div className={homestyle.mainContainer}>
      <div className={homestyle.homeContainer}>
        <div className={homestyle.homeWrapper}>
          <div className={errorstyle.errorContainer}>
            <img
              src={figureChanConstruction}
              alt="Figure-Chan Construction"
              className={errorstyle.figureChanBanner}
            />
            <h1>This page is currently under construction</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ConstructionPage;

import homestyle from "../style_modules/home.module.scss";
import errorstyle from "../style_modules/errorpage.module.scss";
function ConstructionPage() {
  return (
    <div className={homestyle.mainContainer}>
      <div className={homestyle.homeContainer}>
        <div className={homestyle.homeWrapper}>
          <div className={errorstyle.errorContainer}>
            <h1>This page is currently under construction</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ConstructionPage;

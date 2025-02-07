import style from "../../../style_modules/layout.module.scss";

function MenuLoading() {
  return (
    <div className={style.overlay}>
      <div className={style.loaderLayout}>
        <div className={style.loader}></div>
      </div>
    </div>
  );
}
export default MenuLoading;

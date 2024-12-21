import layout from "../../../style_modules/layout.module.scss";
function Loading() {
  return (
    <>
      <div className={layout.overlay}></div>
      <div className={layout.loaderLayout}>
        <div className={layout.loader}></div>
      </div>
    </>
  );
}
export default Loading;

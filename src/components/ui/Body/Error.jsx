import layout from "../../../style_modules/layout.module.scss";
function Error() {
  return (
    <div className={layout.errorContainer}>
      <span className={layout.errorMessage}>
        A network error has occurred while fetching the invenstory
      </span>
    </div>
  );
}
export default Error;

import style from "../../../style_modules/layout.module.scss";
function Footer() {
  return (
    <footer className={style.footerContainer}>
      <div className={style.footerWrapper} id={"footer"}>
        @ 2024-2025 Martin Cabrera. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;

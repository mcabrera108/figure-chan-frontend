import style from "../../../style_modules/layout.module.scss";
function Footer() {
  return (
    <footer className={style.footerContainer}>
      <div className={style.footerWrapper}>
        @ 2024 ShrimpDev. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;

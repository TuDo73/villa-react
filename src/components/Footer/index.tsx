import clsx from "clsx";
import { useCallback } from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  const backToTop = useCallback(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <footer className={clsx(styles.footer)}>
        <div className="container">
          <div className={clsx(styles.footerWrap)}>
            <ul className={clsx(styles.footerList)}>
              <li className={clsx(styles.listItem)}>Contact</li>
              <li className={clsx(styles.listItem)}>Contact</li>
              <li className={clsx(styles.listItem)}>Contact</li>
              <li className={clsx(styles.listItem)}>Contact</li>
            </ul>
            <div className={clsx(styles.backToTop)} onClick={backToTop}>
              <span className={`icon ${clsx(styles.iconArrowUp)}`}></span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

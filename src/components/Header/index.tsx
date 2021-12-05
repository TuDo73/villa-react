import clsx from "clsx";
import styles from "./Header.module.scss";
import Logo from "assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className={clsx(styles.header)}>
        <div className="container">
          <div className={clsx(styles.headerWrap)}>
            <div className="headerLogo">
              <img src={Logo} alt="logo" />
            </div>
            <div className={clsx(styles.headerNav)}>
              <ul className={clsx(styles.nav)}>
                <li className={clsx(styles.navItem, styles.isActive)}>
                  <Link to="/">Home</Link>
                </li>
                <li className={clsx(styles.navItem)}>Angebot</li>
                <li className={clsx(styles.navItem)}>About us</li>
                <li className={clsx(styles.navItem)}>Gallery</li>
                <li className={clsx(styles.navItem)}>Contact</li>
                <li className={clsx(styles.navItem)}>News</li>
              </ul>
              <ul className={clsx(styles.spendeNav)}>
                <li className={clsx(styles.spende)}>Spende</li>
                <li className={clsx(styles.phone)}>
                  <span className={`icon ${clsx(styles.iconSearch)}`}></span>
                  <span>Tel. 0123/ 123 12 12</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

import clsx from "clsx";
import styles from "./Contact.module.scss";
import Icon from "assets/images/icon1.png";

import Heading from "components/Heading";

const Contact = () => {
  return (
    <>
      <section className={clsx(styles.contact)}>
        <div className="container">
          <Heading isCenter isDark isH1={false}>
            Contact
          </Heading>
          <ul className={clsx(styles.contactList)}>
            <li className={clsx(styles.listItem)}>
              <div className={clsx(styles.itemImg)}>
                <img src={Icon} alt="icon" />
              </div>
              <div className={clsx(styles.itemText)}>
                Ebereschenallee 48 14050 Berlin
              </div>
            </li>
            <li className={clsx(styles.listItem)}>
              <div className={clsx(styles.itemImg)}>
                <img src={Icon} alt="icon" />
              </div>
              <div className={clsx(styles.itemText)}>
                http://www.villahoehne.de
              </div>
            </li>
            <li className={clsx(styles.listItem)}>
              <div className={clsx(styles.itemImg)}>
                <img src={Icon} alt="icon" />
              </div>
              <div className={clsx(styles.itemText)}>030 / 305 53 55</div>
            </li>
            <li className={clsx(styles.listItem)}>
              <div className={clsx(styles.itemImg)}>
                <img src={Icon} alt="icon" />
              </div>
              <div className={clsx(styles.itemText)}>
                Ebereschenallee 48 14050 Berlin
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Contact;

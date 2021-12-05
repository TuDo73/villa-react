import clsx from "clsx";
import styles from "./Basic.module.scss";
import BasicImg from "assets/images/banner1.png";
import Heading from "components/Heading";

const Basic = () => {
  return (
    <>
      <section className="basic">
        <div className="container">
          <div className={clsx(styles.basicWrap)}>
            <div className={clsx(styles.basicImg)}>
              <img src={BasicImg} alt="basic" />
            </div>
            <div className={clsx(styles.basicContent)}>
              <Heading isCenter isDark isH1={false}>
                Basic
              </Heading>
              <ul className={clsx(styles.basicList)}>
                <li className={clsx(styles.listItem)}>Mitbeteiligung</li>
                <li className={clsx(styles.listItem)}>Mitbeteiligung</li>
                <li className={clsx(styles.listItem)}>Mitbeteiligung</li>
                <li className={clsx(styles.listItem)}>Mitbeteiligung</li>
                <li className={clsx(styles.listItem)}>Mitbeteiligung</li>
                <li className={clsx(styles.listItem)}>Mitbeteiligung</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Basic;

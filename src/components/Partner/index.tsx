import clsx from "clsx";
import styles from "./Partner.module.scss";
import Brand1 from "assets/images/brand1.png";
import Brand2 from "assets/images/brand2.png";
import Heading from "components/Heading";

const Partner = () => {
  return (
    <>
      <section className={clsx(styles.partner)}>
        <div className="container">
          <Heading isH1={false} isCenter>
            Partner
          </Heading>
          <ul className={clsx(styles.brandList)}>
            <li className={clsx(styles.brandItem)}>
              <img src={Brand1} alt="brand" />
            </li>
            <li className={clsx(styles.brandItem)}>
              <img src={Brand2} alt="brand" />
            </li>
            <li className={clsx(styles.brandItem)}>
              <img src={Brand2} alt="brand" />
            </li>
            <li className={clsx(styles.brandItem)}>
              <img src={Brand2} alt="brand" />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Partner;

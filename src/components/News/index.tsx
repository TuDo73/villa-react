import clsx from "clsx";
import styles from "./News.module.scss";
import Heading from "components/Heading";
import New from "assets/images/image1.png";
import Button from "components/Button";

const News = () => {
  return (
    <>
      <section className={clsx(styles.news)}>
        <div className="container">
          <Heading isCenter isDark isH1={false}>
            News
          </Heading>
          <ul className={clsx(styles.newList)}>
            <li className={clsx(styles.listItem)}>
              <div className={clsx(styles.itemImg)}>
                <img src={New} alt="new" />
              </div>
              <div className={clsx(styles.itemContent)}>
                <h3>Lorem impsum</h3>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim.
                </p>
                <Button>Mehr</Button>
              </div>
            </li>
            <li className={clsx(styles.listItem)}>
              <div className={clsx(styles.itemImg)}>
                <img src={New} alt="new" />
              </div>
              <div className={clsx(styles.itemContent)}>
                <h3>Lorem impsum</h3>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim.
                </p>
                <Button>Mehr</Button>
              </div>
            </li>
            <li className={clsx(styles.listItem)}>
              <div className={clsx(styles.itemImg)}>
                <img src={New} alt="new" />
              </div>
              <div className={clsx(styles.itemContent)}>
                <h3>Lorem impsum</h3>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim.
                </p>
                <Button>Mehr</Button>
              </div>
            </li>
            <li className={clsx(styles.listItem)}>
              <div className={clsx(styles.itemImg)}>
                <img src={New} alt="new" />
              </div>
              <div className={clsx(styles.itemContent)}>
                <h3>Lorem impsum</h3>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim.
                </p>
                <Button>Mehr</Button>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default News;

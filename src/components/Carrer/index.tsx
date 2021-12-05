import clsx from "clsx";
import styles from "./Career.module.scss";
import Banner from "assets/images/banner2.png";
import Heading from "components/Heading";
import Button from "components/Button";

const Career = () => {
  return (
    <>
      <section className={clsx(styles.career)}>
        <div
          className={clsx(styles.careerWrap)}
          style={{ backgroundImage: `url(${Banner})` }}
        >
          <div className={clsx(styles.careerContent)}>
            <Heading isDark={false} isCenter isH1={false}>
              Career
            </Heading>
            <p>
              nformationen zu Praktika im Villa Höhne e.V. finden Sie als
              pdf-Datei unter
            </p>
            <Button isLarge>PDF Datai</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;

import clsx from "clsx";
import styles from "./Heading.module.scss";

type PropsType = {
  children: any;
  isH1: boolean;
  isDark?: boolean;
  isCenter?: boolean;
  isNormal?: boolean;
};

const Heading = ({ children, isH1, isDark, isCenter, isNormal }: PropsType) => {
  return (
    <>
      <div className={clsx(styles.heading)}>
        {isH1 ? (
          <h1
            className={clsx({
              [styles.isDark]: isDark,
              [styles.isCenter]: isCenter,
              [styles.isNormal]: isNormal,
            })}
          >
            {children}
          </h1>
        ) : (
          <h2
            className={clsx({
              [styles.isDark]: isDark,
              [styles.isCenter]: isCenter,
              [styles.isNormal]: isNormal,
            })}
          >
            {children}
          </h2>
        )}
      </div>
    </>
  );
};

export default Heading;

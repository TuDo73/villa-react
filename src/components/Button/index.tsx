import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./Button.module.scss";

type PropsType = {
  isLarge?: boolean;
  children: ReactNode;
};

const Button = ({ isLarge, children }: PropsType) => {
  return (
    <>
      <div className={clsx(styles.button, { [styles.isLarge]: isLarge })}>
        {children}
      </div>
    </>
  );
};

export default Button;

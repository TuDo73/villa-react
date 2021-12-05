import clsx from "clsx";
import styles from "./Home.module.scss";

import Hero from "components/Hero";
import AboutUs from "components/AboutUs";
import Contact from "components/Contact";
import Basic from "components/Basic";
import Career from "components/Carrer";
import News from "components/News";
import Partner from "components/Partner";

const Home = () => {
  return (
    <>
      <Hero hasCircle />
      <div className={clsx(styles.aboutUsWrap)}>
        <AboutUs />
        <Contact />
      </div>
      <Basic />
      <Career />
      <News />
      <Partner />
    </>
  );
};

export default Home;

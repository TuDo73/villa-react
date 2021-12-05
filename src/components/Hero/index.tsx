import clsx from "clsx";
import styles from "./Hero.module.scss";
import CircleImage from "assets/images/angebot1.png";
import HeroImage from "assets/images/hero.png";

// swiper
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
SwiperCore.use([Navigation]);

type PropsType = {
  hasCircle: boolean;
};

const sliderList = [
  {
    id: 1,
    image: "../../assets/images/hero.png",
    title: "Villa hohne 1",
    text: 'Der Villa Höhne e.V. ist ein gemeinnütziger Verein, d Jahr 1985 von Mitarbeitern der Psychiatrischen Universitätsklinik der Freien Universität Berlin gegründet wurde. Vorrangiges Ziel ist es, psychisch kranke und seelisch beeinträchtigte Menschen im Rahmen des "Betreuten Einzelwohnens" im Bezirk Charlottenburg/Wilmersdorf sozialpädagogisch und sozialtherapeutisch zu betreuen.',
  },
  {
    id: 2,
    image: "../../assets/images/hero.png",
    title: "Villa hohne 2",
    text: 'Der Villa Höhne e.V. ist ein gemeinnütziger Verein, d Jahr 1985 von Mitarbeitern der Psychiatrischen Universitätsklinik der Freien Universität Berlin gegründet wurde. Vorrangiges Ziel ist es, psychisch kranke und seelisch beeinträchtigte Menschen im Rahmen des "Betreuten Einzelwohnens" im Bezirk Charlottenburg/Wilmersdorf sozialpädagogisch und sozialtherapeutisch zu betreuen.',
  },
  {
    id: 3,
    image: "../../assets/images/hero.png",
    title: "Villa hohne 3",
    text: 'Der Villa Höhne e.V. ist ein gemeinnütziger Verein, d Jahr 1985 von Mitarbeitern der Psychiatrischen Universitätsklinik der Freien Universität Berlin gegründet wurde. Vorrangiges Ziel ist es, psychisch kranke und seelisch beeinträchtigte Menschen im Rahmen des "Betreuten Einzelwohnens" im Bezirk Charlottenburg/Wilmersdorf sozialpädagogisch und sozialtherapeutisch zu betreuen.',
  },
];

const Hero = ({ hasCircle }: PropsType) => {
  return (
    <>
      <section className={clsx(styles.hero)}>
        <div className={clsx(styles.sliderWrap)}>
          <Swiper
            navigation={true}
            loop={false}
            slidesPerView={1}
            className={clsx(styles.heroSlider)}
          >
            {sliderList.map((item) => (
              <SwiperSlide
                className={clsx(styles.sliderItem)}
                style={{ backgroundImage: `url(${HeroImage})` }}
                key={item.id}
              >
                <div className={clsx(styles.container)}>
                  <div className={clsx(styles.itemContent)}>
                    <h1 className={clsx(styles.heroHeading)}>{item.title}</h1>
                    <p>{item.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {hasCircle && (
          <div className={clsx(styles.heroCircles)}>
            <div className="container">
              <div className={clsx(styles.circleList)}>
                <div className={clsx(styles.listItem)}>
                  <div className={clsx(styles.circle)}>
                    <img src={CircleImage} alt="circle" />
                    <div className={clsx(styles.itemTitle)}>Angebot</div>
                  </div>
                </div>
                <div className={clsx(styles.listItem)}>
                  <div className={clsx(styles.circle)}>
                    <img src={CircleImage} alt="circle" />
                    <div className={clsx(styles.itemTitle)}>Angebot</div>
                  </div>
                </div>
                <div className={clsx(styles.listItem)}>
                  <div className={clsx(styles.circle)}>
                    <img src={CircleImage} alt="circle" />
                    <div className={clsx(styles.itemTitle)}>Angebot</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Hero;

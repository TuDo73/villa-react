import clsx from "clsx";
import styles from "./AboutUs.module.scss";

import Heading from "components/Heading";

const AboutUs = () => {
  return (
    <>
      <section className={clsx(styles.aboutUs)}>
        <div className="container">
          <Heading isCenter isDark isH1={false}>
            About Us
          </Heading>
          <p>
            Die Betreuungsarbeit findet hauptsächlich im Gebäude der
            Rudolph-Höhne´schen Stiftung, Ebereschenallee 48, 14050 Berlin
            statt. Hier befinden sich auch die Geschäftsstelle des Vereins
            "Villa Höhne e.V." und die Büros der MitarbeiterInnen. Im
            Stiftungsgebäude leben maximal 34 zu Betreuende, bis zu 21 weitere
            KlientInnen haben ihre Wohnungen im Bezirk
            Charlottenburg/Wilmersdorf. Wir verfügen über eine Wohnform, in der
            individuelles Wohnen möglich ist, aber auch Gemeinschaft erlebt
            werden kann. Darüber hinaus gibt es die Möglichkeit der Betreuung in
            einer eigenen Wohnung außerhalb der Stiftung. Neben der
            Einzelbetreuung bieten wir ein umfangreiches Gruppenangebot und eine
            jährliche Gruppenreise an. Das Haus verfügt über gemeinsam genutzte
            Küchen- und Sanitärbereiche, diverse Gemeinschaftsräume, einen
            schönen Garten und eine Hausmeisterwohnung, nahe
            Einkaufsmöglichkeiten und eine gute Anbindung an das öffentliche
            Verkehrsnetz...
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

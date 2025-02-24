import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { services } from "../../constants/index";
import "./about.css";

const ServiceCard = React.memo(({ title, icon, index }) => {
  return (
    <Tilt className="tiltWrapper">
      <motion.div className="tiltCard">
        <div
          options={{
            max: 45,
            speed: 450,
            scale: 1,
          }}
          className="tiltBox"
        >
          <img src={icon} alt={title} className="tiltIcon" />
          <h4 style={{ textAlign: "center" }}>{title}</h4>
        </div>
      </motion.div>
    </Tilt>
  );
});

const About = () => {
  return (
    <div className="aboutContainer">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="firstWrapper"
      >
        <p className="aboutText" style={{ fontWeight: 200 }}>
          INTODUCTION
        </p>
        <h2 className="aboutText" style={{ fontSize: 40 }}>
          Overview.
        </h2>
        <p style={{ display: "grid", height: "20rem", overflow: "scroll" }}>
          <span>
            I love seeing things done in a nutty way. My specialty is in
            building sleek, user-friendly web applications that solve{" "}
            <span className="about-elevateWord">real-world</span> problems. Be
            it an attractive front-end experience or a supercharged back-end
            solution, I thrive on taking ideas and turning them into actually
            functional web applications that would scale brilliantly. Moreover,
            I am absolutely focused on delivering{" "}
            <span className="about-elevateWord"> highly fluid </span> and
            <span className="about-elevateWord"> performing immersive </span>
            digital experiences to engage users and drive{" "}
            <span className="about-elevateWord">business success.</span>
          </span>
          <span>
            With a strong set of diversified experiences dealing with a mixture
            of tools and technologies, I apply an all-round approach, making
            sure every maintenance project conforms to contemporary needs and
            provides excellent
            <span className="about-elevateWord"> growth </span> prospects. Let's
            make your
            <span className="about-elevateWord"> dream </span> a reality!
          </span>
        </p>
      </motion.div>
      <div className="cardsContainer">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default About;

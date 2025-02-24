import { motion } from "framer-motion";

import "./hero.css";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Hero = React.memo(() => {
  // useLayoutEffect(() => {
  //   gsap.to(".marquee-text", {
  //     x: "-200%",
  //     duration: 10,
  //     repeat: -1,
  //     ease: "linear",
  //   });
  // }, []);

  return (
    <div className="wrapper">
      {/* <div className="marquee-div">
        <p className="marquee-text">
          Warm welcome to my space, you are here for a areason and I am
        </p>
      </div> */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="detailsContainer"
      >
        <h1>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="name"
          >
            <div className="name-first">
              <span>J</span>
              <span>a</span>
              <span>c</span>
              <span>o</span>
              <span>b</span>
            </div>
            <div className="name-second">
              <span>L</span>
              <span>o</span>
              <span>u</span>
              <span>i</span>
              <span>s</span>
            </div>
          </motion.span>
        </h1>
      </motion.div>
    </div>
  );
});

export default Hero;

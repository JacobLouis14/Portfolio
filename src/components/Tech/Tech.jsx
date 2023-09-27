import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { technologies } from "../../constants/index";
import { BallCanvas } from "../canvas";
import "./tech.css";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px");
    setIsMobile(mediaQuery.matches);

    const mediaQueryChangeHandler = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", mediaQueryChangeHandler);

    return () => {
      mediaQuery.removeEventListener("change", mediaQueryChangeHandler);
    };
  }, []);

  return (
    <>
      <div className="techSectionWrapper">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 20, opacity: 1 }}
          transition={{ duration: 1 }}
          className="techHeaderWrapper"
        >
          <p style={{ fontWeight: 200, fontSize: 18 }}>TECH STACK</p>
          <h4 style={{ fontSize: 40 }}>Expertise</h4>
        </motion.div>
        <div
          className={isMobile ? "techMobileModelWrapper" : "techModelWrapper"}
        >
          {technologies.map((technologies) => (
            <motion.div
              className="techWrapper"
              key={technologies.name}
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              whileInView={[
                {
                  opacity: technologies.index * 1,
                  y: 0,
                  transition: {
                    duration: 0.2,
                    delay: technologies.index * 0.1,
                  },
                },
                {
                  y: [0, 24, 0],
                  transition: {
                    duration: 1,
                    repeat: "infinity",
                    repeatType: "loop",
                    delay: technologies.index * 0.5,
                  },
                },
              ]}
              whileHover={{
                scale: 1.1,
                rotate: 360,
                transition: { duration: 0.5 },
              }}
            >
              {isMobile ? (
                <div className="techImage">
                  <img
                    src={technologies.icon}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
              ) : (
                <BallCanvas icon={technologies.icon} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tech;

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experience } from "../data";
import "./Experience.css";

function getInitials(company) {
  return company
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

const centerViewport = { once: true, margin: "-45% 0px -45% 0px" };

const itemVariants = {
  hiddenLeft: { opacity: 0, x: -60 },
  hiddenRight: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const markerVariants = {
  hiddenLeft: { scale: 0, rotate: -90 },
  hiddenRight: { scale: 0, rotate: -90 },
  show: {
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: "backOut", delay: 0.15 },
  },
};

function Experience() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  });

  return (
    <section id="experience" className="experience">
      <div className="section-inner">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Where I've worked
        </motion.h2>

        <div className="timeline" ref={timelineRef}>
          <motion.div
            className="timeline__progress"
            style={{ scaleY: lineProgress }}
          />

          {experience.map((entry, i) => {
            const fromLeft = i % 2 === 0;
            return (
              <motion.div
                key={entry.role + entry.company}
                className="timeline__item"
                variants={itemVariants}
                initial={fromLeft ? "hiddenLeft" : "hiddenRight"}
                whileInView="show"
                viewport={centerViewport}
              >
                <motion.div className="timeline__marker" variants={markerVariants}>
                  {entry.logoUrl ? (
                    <img src={entry.logoUrl} alt={entry.company} />
                  ) : (
                    <span>{getInitials(entry.company)}</span>
                  )}
                </motion.div>
                <div className="timeline__card">
                  <span className="timeline__period">{entry.period}</span>
                  <h3>{entry.role}</h3>
                  <span className="timeline__company">{entry.company}</span>
                  {entry.highlights.length > 0 && (
                    <ul className="timeline__highlights">
                      {entry.highlights.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;

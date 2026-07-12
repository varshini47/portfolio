import { motion } from "framer-motion";
import { profile, socials } from "../data";
import "./Hero.css";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const nameContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.035, delayChildren: 0.3 },
  },
};

const letterVariant = {
  hidden: { opacity: 0, y: 40, rotateX: 90 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__orbs" aria-hidden="true">
        <motion.span
          className="hero__orb hero__orb--one"
          animate={{ x: [0, 40, -10, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="hero__orb hero__orb--two"
          animate={{ x: [0, -50, 20, 0], y: [0, 30, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="hero__orb hero__orb--three"
          animate={{ x: [0, 30, -30, 0], y: [0, 20, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="hero__inner"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="hero__greeting">
          Hi, I'm
        </motion.p>

        <motion.h1
          className="hero__name"
          variants={nameContainer}
          initial="hidden"
          animate="show"
          style={{ perspective: 600 }}
        >
          {profile.name.split("").map((char, i) => (
            <motion.span
              key={i}
              className="hero__name-letter"
              variants={letterVariant}
              style={{ "--i": i }}
            >
              {char === " " ? " " : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2 variants={item} className="hero__role">
          {profile.role}
        </motion.h2>
        <motion.p variants={item} className="hero__tagline">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn--ghost">
            Get In Touch
          </a>
        </motion.div>

        <motion.div variants={item} className="hero__socials">
          <a href={socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${socials.email}`}>Email</a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="hero__scroll-line"></span>
        <span>scroll</span>
      </motion.div>
    </section>
  );
}

export default Hero;

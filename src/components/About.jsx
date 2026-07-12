import { motion } from "framer-motion";
import { profile } from "../data";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="section-inner">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.p>

        <motion.div
          className="about__grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="about__bio">{profile.bio}</p>

          <div className="about__meta">
            <div className="about__meta-item">
              <span className="about__meta-label">Location</span>
              <span>{profile.location}</span>
            </div>
            <div className="about__meta-item">
              <span className="about__meta-label">Education</span>
              <span>{profile.education.degree}</span>
              <span className="about__meta-sub">{profile.education.school}</span>
              <span className="about__meta-sub">
                {profile.education.period} · {profile.education.score}
              </span>
            </div>
            <div className="about__meta-item">
              <span className="about__meta-label">Resume</span>
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
                Download →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

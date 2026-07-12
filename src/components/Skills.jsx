import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDatabase,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTypescript,
  SiC,
  SiCplusplus,
  SiTailwindcss,
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
} from "react-icons/si";
import { skillCategories } from "../data";
import "./Skills.css";

const iconMap = {
  html: { Icon: FaHtml5, color: "#e34c26", label: "HTML5" },
  css: { Icon: FaCss3Alt, color: "#2965f1", label: "CSS3" },
  javascript: { Icon: FaJs, color: "#f0db4f", label: "JavaScript" },
  typescript: { Icon: SiTypescript, color: "#3178c6", label: "TypeScript" },
  react: { Icon: FaReact, color: "#61dafb", label: "React" },
  reactnative: { Icon: FaReact, color: "#61dafb", label: "React Native" },
  node: { Icon: FaNodeJs, color: "#3c873a", label: "Node.js" },
  python: { Icon: FaPython, color: "#3776ab", label: "Python" },
  sql: { Icon: FaDatabase, color: "#00a8e8", label: "SQL" },
  git: { Icon: FaGitAlt, color: "#f05032", label: "Git" },
  c: { Icon: SiC, color: "#a8b9cc", label: "C" },
  cpp: { Icon: SiCplusplus, color: "#00599c", label: "C++" },
  tailwind: { Icon: SiTailwindcss, color: "#38bdf8", label: "Tailwind CSS" },
  bootstrap: { Icon: FaBootstrap, color: "#7952b3", label: "Bootstrap" },
  express: { Icon: SiExpress, color: "#ffffff", label: "Express.js" },
  springboot: { Icon: SiSpringboot, color: "#6db33f", label: "Spring Boot" },
  mongodb: { Icon: SiMongodb, color: "#47a248", label: "MongoDB" },
  postgresql: { Icon: SiPostgresql, color: "#4169e1", label: "PostgreSQL" },
  mysql: { Icon: SiMysql, color: "#4479a1", label: "MySQL" },
  scikitlearn: { Icon: SiScikitlearn, color: "#f7931e", label: "scikit-learn" },
  pandas: { Icon: SiPandas, color: "#150458", label: "Pandas" },
  numpy: { Icon: SiNumpy, color: "#013243", label: "NumPy" },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const badgeFromLeft = {
  hidden: { opacity: 0, scale: 0.6, x: -70 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const badgeFromRight = {
  hidden: { opacity: 0, scale: 0.6, x: 70 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-inner">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          What I work with
        </motion.h2>

        <div className="skills__categories">
          {skillCategories.map((group, index) => {
            const alignRight = index % 2 === 1;
            return (
              <div
                key={group.category}
                className={`skills__category ${alignRight ? "skills__category--right" : ""}`}
              >
                <motion.h3
                  className="skills__category-title"
                  initial={{ opacity: 0, x: alignRight ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5 }}
                >
                  {group.category}
                </motion.h3>

                <motion.div
                  className="skills__grid"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {group.skills.map((key, i) => {
                    const entry = iconMap[key];
                    if (!entry) return null;
                    const { Icon, color, label } = entry;
                    return (
                      <motion.div
                        key={key}
                        className="skill-badge-wrap"
                        variants={i % 2 === 0 ? badgeFromLeft : badgeFromRight}
                      >
                        <div className="skill-badge-stage">
                          <motion.div
                            className="skill-badge"
                            whileHover={{ rotateY: 360 }}
                            transition={{ duration: 0.9, ease: "easeInOut" }}
                          >
                            <Icon style={{ color }} />
                          </motion.div>
                        </div>
                        <span className="skill-badge__label">{label}</span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;

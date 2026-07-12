import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data";
import "./Projects.css";

function Projects() {
  const [openProject, setOpenProject] = useState(null);

  return (
    <section id="projects" className="projects">
      <div className="section-inner">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Things I've built
        </motion.h2>

        <div className="projects__list">
          {projects.map((project, index) => {
            const liveOnRight = index % 2 === 0;

            const details = (
              <motion.div
                key="details"
                className="project-details"
                initial={{ opacity: 0, x: liveOnRight ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h3>{project.title}</h3>
                <p className="project-details__desc">{project.description}</p>

                <div className="project-details__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-details__links">
                  <button
                    type="button"
                    className="project-details__live-link"
                    onClick={() => setOpenProject(project)}
                  >
                    Live ↗
                  </button>
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    Code ↗
                  </a>
                </div>
              </motion.div>
            );

            const preview = (
              <motion.button
                key="preview"
                type="button"
                className="project-preview"
                onClick={() => setOpenProject(project)}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                <img src={project.screenshot} alt={`${project.title} preview`} />
                <span className="project-preview__overlay">
                  <span className="project-preview__cta">View Live Demo ↗</span>
                </span>
              </motion.button>
            );

            return (
              <div className="project-row" key={project.title}>
                {liveOnRight ? (
                  <>
                    {details}
                    {preview}
                  </>
                ) : (
                  <>
                    {preview}
                    {details}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {openProject && (
          <motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="project-modal__bar">
                <span className="project-modal__title">{openProject.title}</span>
                <div className="project-modal__actions">
                  <a href={openProject.liveUrl} target="_blank" rel="noreferrer">
                    Open in new tab ↗
                  </a>
                  <button type="button" onClick={() => setOpenProject(null)}>
                    ✕
                  </button>
                </div>
              </div>
              <iframe src={openProject.liveUrl} title={openProject.title} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;

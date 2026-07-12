import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { socials } from "../data";
import "./Contact.css";

const FORM_ENDPOINT = "https://formspree.io/f/xjgnbjvk";

function Contact() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="section-inner">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let's talk
        </motion.h2>

        <div className="contact__grid">
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required />
            </div>
            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required />
            </div>

            <button
              type="submit"
              className="btn btn--primary"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.p
                  key="success"
                  className="contact__status contact__status--success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  Thanks! Your message has been sent — I'll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  key="error"
                  className="contact__status contact__status--error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  Something went wrong. Please try again or email me directly.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>

          <motion.div
            className="contact__direct"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <p>Prefer to reach out directly? Find me here:</p>
            <a href={`mailto:${socials.email}`} className="contact__link">
              {socials.email}
            </a>
            {socials.phone && (
              <a href={`tel:${socials.phone.replace(/\s+/g, "")}`} className="contact__link">
                {socials.phone}
              </a>
            )}
            <div className="contact__socials">
              <a href={socials.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

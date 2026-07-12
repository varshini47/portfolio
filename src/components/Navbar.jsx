import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { profile, socials } from "../data";
import "./Navbar.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = links.map((link) => link.href.slice(1));

const socialLinks = [
  { href: socials.github, label: "GitHub", Icon: FaGithub },
  { href: socials.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  { href: socials.leetcode, label: "LeetCode", Icon: SiLeetcode },
];

const firstName = profile.name.split(" ")[0];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { stiffness: 300, damping: 40 });

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const maxWidth = useTransform(smoothScrollY, [0, 140], ["1100px", "980px"]);
  const marginTop = useTransform(smoothScrollY, [0, 140], ["0px", "14px"]);
  const borderRadius = useTransform(smoothScrollY, [0, 140], ["0px", "999px"]);
  const paddingY = useTransform(smoothScrollY, [0, 140], ["1.1rem", "0.65rem"]);
  const background = useTransform(
    smoothScrollY,
    [0, 140],
    ["rgba(10, 10, 15, 0)", "rgba(18, 18, 26, 0.85)"]
  );
  const borderColor = useTransform(
    smoothScrollY,
    [0, 140],
    ["rgba(34, 34, 46, 0)", "rgba(34, 34, 46, 1)"]
  );
  const boxShadow = useTransform(
    smoothScrollY,
    [0, 140],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 16px 40px -20px rgba(0,0,0,0.6)"]
  );

  return (
    <motion.header
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="navbar__inner"
        style={{
          maxWidth,
          marginTop,
          borderRadius,
          paddingTop: paddingY,
          paddingBottom: paddingY,
          background,
          borderColor,
          boxShadow,
        }}
      >
        <a href="#hero" className="navbar__logo" aria-label={profile.name}>
          {firstName.split("").map((char, i) => (
            <motion.span
              key={i}
              className="navbar__logo-letter"
              whileHover={{ y: -6, color: "#7c9eff" }}
              transition={{ type: "spring", stiffness: 500, damping: 8 }}
            >
              {char}
            </motion.span>
          ))}
        </a>

        <nav className="navbar__links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href.slice(1) ? "active" : ""}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <div className="navbar__socials">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="navbar__resume"
          >
            Resume
          </a>
        </div>

        <button
          className={`navbar__toggle ${menuOpen ? "open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </motion.div>

      {menuOpen && (
        <motion.nav
          className="navbar__mobile"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href.slice(1) ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="navbar__mobile-actions">
            {socialLinks.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <Icon />
              </a>
            ))}
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="navbar__resume">
              Resume
            </a>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}

export default Navbar;

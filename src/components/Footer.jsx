import { profile } from "../data";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="section-inner footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Built with React &amp; Framer Motion</span>
      </div>
    </footer>
  );
}

export default Footer;

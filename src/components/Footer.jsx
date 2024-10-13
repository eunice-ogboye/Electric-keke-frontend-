import { footer_note, socials } from "@/constants";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { LogoPlain } from "@/assets/svg/Logo";
import RegularList from "./_design-patterns/RegularList";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="footer-main"
        >
          <div className="footer-brief-container">
            <LogoPlain styling="w-[72px] h-[39px]" />
            <p className="footer-brief">{footer_note}</p>
          </div>

          <div className="sub-link-nav">
            <h3 className="footer-link-title">Explore</h3>
            <ul className="mt-6 space-y-4 text-base">
              <li className="footer-link">
                <Link to="/about">About Us</Link>
              </li>
              <li className="footer-link">
                <Link to="/earn-with-us">Earn With Us</Link>
              </li>
              <li className="footer-link">
                <Link to="/#mission">Mission</Link>
              </li>
              <li className="footer-link">
                <Link to="/#services">Services</Link>
              </li>
            </ul>
          </div>

          <div className="sub-link-nav">
            <h3 className="footer-link-title">Legal</h3>
            <ul className="mt-6 space-y-4">
              <li className="footer-link">Terms</li>
              <li className="footer-link">Privacy</li>
            </ul>
          </div>

          <div className="socials">
            <h3 className="footer-link-title">social media</h3>
            <ul className="flex items-center gap-5 mt-5">
              <RegularList
                list={socials}
                component={({ title, icon }) => (
                  <div className="social-link">
                    <img src={icon} alt={title} />
                  </div>
                )}
              />
            </ul>
          </div>
        </motion.div>
        <motion.p
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          className="footer__copywright-text"
        >
          All rights reserved. Copyright © 2024 | Eco-Ride
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;

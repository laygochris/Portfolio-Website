import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import themeIcon from "../../assets/sun.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/RESUME_V2.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "dark" ? moon : sun;
  const twitterIcon = theme === "dark" ? twitterDark : twitterLight;
  const githubIcon = theme === "dark" ? githubDark : githubLight;
  const linkedinIcon = theme === "dark" ? linkedinDark : linkedinLight;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Christofer Laygo's face"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div>
        <div className={styles.info}>
          <h1>
            Christofer <br /> Laygo
          </h1>
          <h2>Student</h2>
          <span>
            <a href="https://twitter.com" target="_blank">
              <img src={twitterIcon} alt="Twitter icon" />
            </a>
            <a href="https://github.com" target="_blank">
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
          </span>
          <a href={CV} download>
            <button className="hover">Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

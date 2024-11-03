import React from "react";
import styles from "./AboutStyles.module.css";
function About() {
  return (
    <section id="about" className={styles.container}>
      <h1 className={styles.sectionTitle}>About Me</h1>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutText}>
          <p>Hello!</p>
        </div>
      </div>
    </section>
  );
}

export default About;

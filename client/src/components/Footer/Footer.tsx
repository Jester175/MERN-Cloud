import React from "react";

import styles from "./footer.module.css";
import { LN } from "../icons/LN";
import { TG } from "../icons/TG";
import { MyContainer } from "../../UI/MyContainer";
import { GitHub } from "../icons/GitHub";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <MyContainer>
        <div className={styles.socials}>
          <a href="https://github.com/Jester175" target="_blank" rel="noreferrer" className={styles.link}>
            <GitHub className={`${styles.git} ${styles.svg}`} />
          </a>
          <a href="https://t.me/clowworm" target="_blank" rel="noreferrer" className={styles.link}>
            <TG className={`${styles.tg} ${styles.svg}`} />
          </a>
          <a href="https://www.linkedin.com/in/nikita-kolesnew/" target="_blank" rel="noreferrer" className={styles.link}>
            <LN className={`${styles.ln} ${styles.svg}`} />
          </a>
        </div>
        <span className={styles.version}>Version 1.0.0</span>
      </MyContainer>
    </footer>
  );
};

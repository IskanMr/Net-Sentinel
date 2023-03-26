import { useRouter } from "next/router";

import URLS from "../../utils/constants/urls";

import styles from "./SideBar.module.css";

export default function SideBar() {
  const router = useRouter();

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>Net Sentinel</div>
      <div className={styles.links}>
        {URLS.map((link) => (
          <div
            key={link.url}
            className={`${router.pathname === link.url ? styles.active : ""} ${
              styles.link
            }`}
            onClick={() => router.push(link.url)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={`/assets/${link.icon}`}
              alt="icon"
              className={styles.icon}
            />
            <div className={styles.hoverUnderline}></div>
            {link.name}
          </div>
        ))}
      </div>
      <a className={styles.link} style={{ cursor: "pointer" }}>
        {" "}
        <img src="/assets/logout.svg" alt="icon" className={styles.icon} />
        Log out
      </a>
    </div>
  );
}

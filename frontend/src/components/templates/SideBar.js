import { useRouter } from "next/router";

import URLS from "../../utils/constants/urls";

import styles from "./SideBar.module.css";

export default function SideBar() {
  const router = useRouter();

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>Net-Sentinel</div>
      <div className={styles.links}>
        {URLS.map((link) => (
          <div
            key={link.url}
            className={router.pathname === link.url ? styles.active : ""}
            onClick={() => router.push(link.url)}
            style={{ cursor: "pointer" }}
          >
            {link.name}
          </div>
        ))}
      </div>
    </div>
  );
}

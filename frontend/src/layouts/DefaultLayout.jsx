import { useRouter } from "next/router";

import BaseLayout from "./BaseLayout";

import SideBar from "../components/templates/SideBar";

import Styles from "./BaseLayout.module.css";

export default function DefaultLayout({ seoTitle, children }) {
  const router = useRouter();

  return (
    <BaseLayout seoTitle={seoTitle}>
      <SideBar />
      <div className={Styles.children}>{children}</div>
    </BaseLayout>
  );
}

import { useRouter } from "next/router";

import BaseLayout from "./BaseLayout";

import SideBar from "../components/templates/SideBar";

export default function DefaultLayout({ seoTitle, children }) {
  const router = useRouter();

  return (
    <BaseLayout seoTitle={seoTitle}>
      <SideBar />
      <div>{children}</div>
    </BaseLayout>
  );
}

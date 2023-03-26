import DefaultLayout from "../layouts/DefaultLayout";

import Button from "../components/utils/Button";

import Styles from "../styles/pages/index.module.css";

export default function Home() {
  return (
    <DefaultLayout seoTitle="Home">
      <div className={Styles.container}>
        <div className={Styles.content}>
          <img src="/assets/notMonitor.svg" alt="Not Monitoring" />
          <h1 style={{ textAlign: "center" }}>Not Monitoring</h1>
        </div>
        <Button>Start Monitoring</Button>
      </div>
    </DefaultLayout>
  );
}

import DefaultLayout from "../layouts/DefaultLayout";

import Button from "../components/utils/Button";

import Styles from "../styles/pages/conHistory.module.css";

export default function ConnectionHistory() {
  return (
    <DefaultLayout seoTitle="Connection History">
      <div className={Styles.Container}>
        <h1 style={{ marginBottom: 12 }}>Connection History</h1>
        <div className={Styles.Card}>list</div>
      </div>
    </DefaultLayout>
  );
}

import DefaultLayout from "../layouts/DefaultLayout";

import Button from "../components/utils/Button";

import Styles from "../styles/pages/setting.module.css";

export default function Setting() {
  return (
    <DefaultLayout seoTitle="Setting">
      <div className={Styles.Container}>
        <h1 style={{ marginBottom: 12 }}>Setting</h1>
        <div className={Styles.Card}>
          <div className={Styles.CardItem}>
            <span>General</span>
            <label className={Styles.checkCon}>
              Runs on startup
              <input type="checkbox" />
              <span className={Styles.checkmark}></span>
            </label>
            <label className={Styles.checkCon}>
              Scan Automaticly
              <input type="checkbox" />
              <span className={Styles.checkmark}></span>
            </label>
            <div className={Styles.Inputs}>
              <input type="number" /> Scan interval (minutes)
            </div>
          </div>
          <div className={Styles.CardItem}>
            <span>Preference</span>
            <label className={Styles.checkCon}>
              Enable tray notification
              <input type="checkbox" />
              <span className={Styles.checkmark}></span>
            </label>
            <label className={Styles.checkCon}>
              Save logs
              <input type="checkbox" />
              <span className={Styles.checkmark}></span>
            </label>
            <div className={Styles.Inputs}>
              <input type="number" /> Delete logs every (day)
            </div>
          </div>
          <div className={Styles.CardItem}>
            <span>Updates</span>
            <label className={Styles.checkCon}>
              Automatic update
              <input type="checkbox" />
              <span className={Styles.checkmark}></span>
            </label>
          </div>
          <Button>Update Now</Button>
        </div>
      </div>
    </DefaultLayout>
  );
}

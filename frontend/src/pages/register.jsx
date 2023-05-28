import { useState, useEffect } from "react";

import Button from "../components/utils/Button";

import Styles from "../styles/pages/login.module.css";

export default function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);

  const togglePassword = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const togglePassword2 = () => {
    setPasswordShown2(passwordShown2 ? false : true);
  };

  useEffect(() => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    if (token) {
      window.location.replace("/");
    }
  });

  return (
    <div className={Styles.container}>
      <div className={Styles.card}>
        <h1 className={Styles.title}>Register</h1>
        <form action={login} className={Styles.form} method="post">
          <div className={Styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={Styles.input}
            />
          </div>
          <div className={Styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <div className={Styles.passInput}>
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                id="password"
                className={Styles.input}
              />
              <a onClick={togglePassword} className={Styles.checkPass2}>
                <input type="checkbox" checked={passwordShown} />
                <>Show Password</>
              </a>
            </div>
          </div>
          <div className={Styles.inputGroup}>
            <label htmlFor="password2">Confirm Password</label>
            <div className={Styles.passInput}>
              <input
                type={passwordShown2 ? "text" : "password"}
                name="password2"
                id="password2"
                className={Styles.input}
              />
              <a onClick={togglePassword2} className={Styles.checkPass}>
                <input type="checkbox" checked={passwordShown2} />
                <>Show Password</>
              </a>
            </div>
          </div>
          <Button style={{ width: "100%" }}>Register</Button>
          <div className={Styles.link}>
            Already have an account? <a href="/login">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

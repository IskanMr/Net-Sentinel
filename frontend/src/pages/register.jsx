import { useState, useEffect } from "react";
import axios from "axios";

import Button from "../components/utils/Button";

import Styles from "../styles/pages/login.module.css";

export default function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handlePasswordChange2 = (event) => {
    setPassword2(event.target.value);
  };

  const togglePassword = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const togglePassword2 = () => {
    setPasswordShown2(passwordShown2 ? false : true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== password2) {
      window.alert("Passwords do not match");
      return;
    }

    const url =
      "https://net-sentinel-api.vercel.app/register?username=" +
      username +
      "&password=" +
      password;

    try {
      const response = await axios.post(url);

      if (response.status === 200) {
        // Login successful
        // Do something with the response data
        localStorage.setItem("token", "true");
        window.location.replace("/");
        console.log("Register successful");
      } else {
        // Login failed
        // Do something with the error
        window.alert("Register failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
        <form onSubmit={handleSubmit} className={Styles.form}>
          <div className={Styles.inputGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="username"
              name="username"
              id="username"
              className={Styles.input}
              value={username}
              onChange={handleUsernameChange}
              required
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
                value={password}
                onChange={handlePasswordChange}
                required
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
                value={password2}
                onChange={handlePasswordChange2}
                required
              />
              <a onClick={togglePassword2} className={Styles.checkPass}>
                <input type="checkbox" checked={passwordShown2} />
                <>Show Password</>
              </a>
            </div>
          </div>
          <Button style={{ width: "100%" }} type="submit">
            Register
          </Button>
          <div className={Styles.link}>
            Already have an account? <a href="/login">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

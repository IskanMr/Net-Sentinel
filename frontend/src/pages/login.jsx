import { useState, useEffect } from "react";

import axios from "axios";

import Button from "../components/utils/Button";

import Styles from "../styles/pages/login.module.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const url =
      "http://127.0.0.1:8000/login?username=" +
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
        console.log("Login successful");
      } else {
        // Login failed
        // Do something with the error
        window.alert("Login failed");
      }
    } catch (error) {
      window.alert("Login failed");
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
        <h1 className={Styles.title}>Login</h1>
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
              <a onClick={togglePassword} className={Styles.checkPass}>
                <input type="checkbox" checked={passwordShown} />
                <>Show Password</>
              </a>
            </div>
          </div>
          <Button style={{ width: "100%" }} type="submit">
            Login
          </Button>
          <div className={Styles.link}>
            Don't have an account? <a href="/register">Register</a>
          </div>
        </form>
      </div>
    </div>
  );
}

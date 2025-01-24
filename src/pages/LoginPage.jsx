/*Styling files */
import homestyle from "../style_modules/home.module.scss";
import loginstyle from "../style_modules/login.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    setPassword("");
    setUsername("");
    alert(
      "Thank you for logging in! The login feature is currently under construction. Come back another time!"
    );
  }
  return (
    <div className={loginstyle.mainContainer}>
      <div className={homestyle.homeContainer}>
        <div className={loginstyle.formPageContainer}>
          <div className={loginstyle.loginFormHeaderContainer}>
            <h2 className={loginstyle.loginFormHeader}>
              Log in to your account
            </h2>
            <h4 className={loginstyle.loginFormSubHeader}>
              Or &nbsp; <Link to={"/register"}> sign up </Link> &nbsp; for a new
              account
            </h4>
          </div>
          <form onSubmit={handleLogin}>
            <div className={loginstyle.formContainer}>
              <div className={loginstyle.usernameContainer}>
                <label htmlFor="username" className={loginstyle.loginLabel}>
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className={loginstyle.formField}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  value={username}
                />
              </div>
              <div className={loginstyle.passwordContainer}>
                <label
                  htmlFor="loginpassword"
                  className={loginstyle.loginLabel}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="loginpassword"
                  className={loginstyle.formField}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className={loginstyle.formSubContainer}>
              <div>
                <input type="checkbox" id="rememberuser" />
                <label htmlFor="rememberuser" className={loginstyle.loginLabel}>
                  {" "}
                  Remember Me
                </label>
              </div>
              <div>
                <Link to={"/"}>Forgot Your Password</Link>
              </div>
            </div>
            <div className={loginstyle.submitContainer}>
              <button type="submit" className={loginstyle.formSubmitBtn}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;

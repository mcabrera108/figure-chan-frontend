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
        <div className={loginstyle.loginPageWrapper}>
          <div className={loginstyle.loginFormContainer}>
            <div className={loginstyle.loginFormHeaderContainer}>
              <h2 className={loginstyle.loginFormHeader}>
                Login to your account
              </h2>
              <h4 className={loginstyle.loginFormSubheader}>
                Or <Link to={"/register"}>sign up</Link> for a new account
              </h4>
              <div className={loginstyle.loginForm}>
                <form
                  onSubmit={handleLogin}
                  className={loginstyle.formInterior}
                >
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    id="username"
                    value={username}
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    id="password"
                  />

                  <button type="submit" className={loginstyle.formSubmitBtn}>
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;

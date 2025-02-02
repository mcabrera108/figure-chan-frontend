/*Styling files */
import homestyle from "../style_modules/home.module.scss";
import loginstyle from "../style_modules/login.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import SignInTextInput from "../components/form/input/SignInTextInput";
import { APILoginUser } from "../services/APIUserMethods";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const isDisabled = !username || !password;

  async function handleLogin(e) {
    e.preventDefault();
    if (!username || !password) {
      setPassword("");
      setUsername("");
      return;
    }
    const apiResponse = await APILoginUser({
      username: username,
      password: password,
    });

    if (apiResponse.redirectUrl) {
      navigate(apiResponse.redirectUrl);
    }
  }

  return (
    <div className={loginstyle.mainContainer}>
      <div className={homestyle.homeContainer}>
        <div className={loginstyle.formPageWrapper}>
          <div className={loginstyle.loginFormHeaderContainer}>
            <h2 className={loginstyle.loginFormHeader}>
              Log in to your account
            </h2>
            <h4 className={loginstyle.loginFormSubHeader}>
              Or&nbsp;<Link to={"/register"}> sign up </Link>&nbsp;for a new
              account
            </h4>
          </div>
          <form onSubmit={handleLogin}>
            <div className={loginstyle.formContainer}>
              <SignInTextInput
                fieldId={"username"}
                fieldName={username}
                setFieldName={setUsername}
                labelName={"Username"}
                fieldType={"text"}
              />
              <SignInTextInput
                fieldId={"loginpassword"}
                fieldName={password}
                setFieldName={setPassword}
                labelName={"Password"}
                fieldType={"password"}
              />
            </div>
            <div className={loginstyle.formSubContainer}>
              <div className={loginstyle.formLabelContainer}>
                <input type="checkbox" id="rememberuser" />
                <label htmlFor="rememberuser" className={loginstyle.termsLabel}>
                  Remember Me
                </label>
              </div>
              <div>
                <Link to={"/"}>Forgot Your Password</Link>
              </div>
            </div>
            <div className={loginstyle.submitContainer}>
              <button
                type="submit"
                className={
                  isDisabled
                    ? loginstyle.disabledSubmitBtn
                    : loginstyle.formSubmitBtn
                }
                disabled={isDisabled}
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;

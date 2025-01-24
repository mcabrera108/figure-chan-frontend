import homestyle from "../style_modules/home.module.scss";
import loginstyle from "../style_modules/login.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import SignInTextInput from "../components/form/input/SignInTextInput";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();
    setUsername("");
    setPassword("");
    alert(
      "Thank you for registering for a password! The register feature is currently under construction. Come back another time!"
    );
  }
  return (
    <div className={loginstyle.mainContainer}>
      <div className={homestyle.homeContainer}>
        <div className={loginstyle.formPageContainer}>
          <div className={loginstyle.loginFormHeaderContainer}>
            <h2 className={loginstyle.loginFormHeader}>
              Register for an account
            </h2>
            <h4 className={loginstyle.loginFormSubHeader}>
              Or&nbsp;<Link to={"/login"}>sign in</Link>&nbsp;to your account
            </h4>
          </div>
          <form onSubmit={handleRegister}>
            <div className={loginstyle.formContainer}>
              <SignInTextInput
                fieldId={"username"}
                setFieldName={setUsername}
                fieldName={username}
                labelName={"Username"}
              />
              <SignInTextInput
                fieldId={"email"}
                setFieldName={setEmail}
                fieldName={email}
                labelName={"Email"}
              />
              <SignInTextInput
                fieldId={"password"}
                setFieldName={setPassword}
                fieldName={password}
                labelName={"Password"}
              />
              <SignInTextInput
                fieldId={"confirmpassword"}
                setFieldName={setConfirmPassword}
                fieldName={confirmPassword}
                labelName={"Confirm Password"}
              />
            </div>
            <div className={loginstyle.formSubContainer}>
              <div>
                <input type="checkbox" id="termsandcond" />
                <label htmlFor="termsandcond" className={loginstyle.loginLabel}>
                  {" "}
                  Accept Terms and Conditions
                </label>
              </div>
            </div>
            <div className={loginstyle.submitContainer}>
              <button type="submit" className={loginstyle.formSubmitBtn}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default RegisterPage;

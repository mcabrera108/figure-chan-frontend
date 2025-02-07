import homestyle from "../style_modules/home.module.scss";
import loginstyle from "../style_modules/login.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import SignInTextInput from "../components/form/input/SignInTextInput";
import { APIRegisterUser } from "../services/APIUserMethods";
import PasswordValidationField from "../components/form/input/PasswordValidationField";
import { useNavigate } from "react-router-dom";
import { hasAllConditionsForPassword } from "../utils/validationMessage";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuLoading from "../components/ui/Body/MenuLoading";
import ResponseMessage from "../components/ui/Body/ResponseMessage";
function RegisterPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [incompleteField, setIncompleteField] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [confirmPassType, setConfirmPassType] = useState("password");
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isDisabled =
    !username ||
    !email ||
    !password ||
    !confirmPassword ||
    hasAllConditionsForPassword(password) === false ||
    !isChecked;

  function handleEyeClick() {
    if (passwordInputType === "password") {
      setPasswordInputType("text");
    } else {
      setPasswordInputType("password");
    }
  }

  function handleConfirmEyeClick() {
    if (confirmPassType === "password") {
      setConfirmPassType("text");
    } else {
      setConfirmPassType("password");
    }
  }
  async function handleRegister(e) {
    e.preventDefault();
    if (
      !username ||
      !email ||
      !password ||
      !confirmPassword ||
      password !== confirmPassword
    ) {
      setIncompleteField(true);
      setPassword("");
      setConfirmPassword("");
      return;
    }
    setLoading(true);
    const apiResponse = await APIRegisterUser({
      username: username,
      email: email,
      password: password,
    });
    setLoading(false);
    setIncompleteField(false);
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setEmail("");

    if (apiResponse.redirectUrl) {
      navigate(apiResponse.redirectUrl);
    } else if (apiResponse.errorMessage) {
      setErrorMessage(apiResponse.errorMessage);
      setResponseMessage(true);
    }
  }

  return (
    <>
      {loading ? <MenuLoading /> : <></>}
      <div className={loginstyle.mainContainer}>
        <div className={homestyle.homeContainer}>
          <div className={loginstyle.formPageWrapper}>
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
                {responseMessage ? (
                  <ResponseMessage response={errorMessage} />
                ) : (
                  <></>
                )}
                <SignInTextInput
                  fieldId={"username"}
                  setFieldName={setUsername}
                  fieldName={username}
                  labelName={"Username"}
                  fieldType={"text"}
                  incompleteField={incompleteField}
                  fieldMessage={"Username field needs a valid value!"}
                />
                <SignInTextInput
                  fieldId={"email"}
                  setFieldName={setEmail}
                  fieldName={email}
                  labelName={"Email"}
                  fieldType={"email"}
                  incompleteField={incompleteField}
                  fieldMessage={
                    "Email field needs a valid value! EX: figurechanuser123@gmail.com"
                  }
                />
                <SignInTextInput
                  fieldId={"password"}
                  setFieldName={setPassword}
                  fieldName={password}
                  labelName={"Password"}
                  fieldType={passwordInputType}
                  incompleteField={incompleteField}
                  fieldMessage={"Password field needs a valid value!"}
                  icon={
                    passwordInputType === "password" ? (
                      <FontAwesomeIcon
                        icon={faEye}
                        color={"darkgray"}
                        className={loginstyle.inputIcon}
                        size={"lg"}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        color={"darkgray"}
                        className={loginstyle.inputIcon}
                        size={"lg"}
                      />
                    )
                  }
                  iconClick={handleEyeClick}
                />
                <PasswordValidationField password={password} />
                <SignInTextInput
                  fieldId={"confirmpassword"}
                  setFieldName={setConfirmPassword}
                  fieldName={confirmPassword}
                  labelName={"Confirm Password"}
                  fieldType={confirmPassType}
                  incompleteField={incompleteField}
                  fieldMessage={"Confirm Password needs to match Password"}
                  icon={
                    confirmPassType === "password" ? (
                      <FontAwesomeIcon
                        icon={faEye}
                        color={"darkgray"}
                        className={loginstyle.inputIcon}
                        size={"lg"}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        color={"darkgray"}
                        className={loginstyle.inputIcon}
                        size={"lg"}
                      />
                    )
                  }
                  iconClick={handleConfirmEyeClick}
                />
              </div>
              <div className={loginstyle.formSubContainer}>
                <div className={loginstyle.formLabelContainer}>
                  <input
                    type="checkbox"
                    id="termsandcond"
                    checked={isChecked}
                    onChange={(e) => {
                      setIsChecked(e.target.checked);
                    }}
                  />
                  <label
                    htmlFor="termsandcond"
                    className={loginstyle.termsLabel}
                  >
                    Accept Terms and Conditions
                  </label>
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
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default RegisterPage;

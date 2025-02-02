import PropTypes from "prop-types";
import loginstyle from "../../../style_modules/login.module.scss";
import {
  hasLowerCase,
  hasOneLetter,
  hasUpperCase,
  hasOneSpecialCharacter,
} from "../../../utils/validationMessage";
function PasswordValidationField(props) {
  return (
    <div className={loginstyle.passwordValidDefault}>
      <ul>
        <li
          className={
            props.password.length >= 6 ? loginstyle.valid : loginstyle.invalid
          }
        >
          Password must greater or equal to 6 characters
        </li>
        <li
          className={
            hasUpperCase(props.password) ? loginstyle.valid : loginstyle.invalid
          }
        >
          Password must contain at least one uppercase letter
        </li>
        <li
          className={
            hasLowerCase(props.password) ? loginstyle.valid : loginstyle.invalid
          }
        >
          Password must container at least one lowercase
        </li>
        <li
          className={
            hasOneLetter(props.password) ? loginstyle.valid : loginstyle.invalid
          }
        >
          Password must contain at least one alphabetical letter
        </li>
        <li
          className={
            hasOneSpecialCharacter(props.password)
              ? loginstyle.valid
              : loginstyle.invalid
          }
        >
          Password must contain at least one special character e.g. !@#$%&
        </li>
      </ul>
    </div>
  );
}
PasswordValidationField.propTypes = {
  password: PropTypes.string,
};
export default PasswordValidationField;

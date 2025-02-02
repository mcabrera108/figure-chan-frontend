/*Styling files */
import loginstyle from "../../../style_modules/login.module.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
function SignInTextInput(props) {
  return (
    <div className={loginstyle.fieldContainer}>
      <label htmlFor={props.fieldId} className={loginstyle.loginLabel}>
        {props.labelName}
        <FontAwesomeIcon icon={faAsterisk} color={"red"} />
      </label>
      <input
        type={props.fieldType}
        id={props.fieldId}
        className={loginstyle.formField}
        onChange={(e) => {
          props.setFieldName(e.target.value);
        }}
        value={props.fieldName}
      />
      {props.incompleteField && props.fieldName.trim() === "" ? (
        <span className={loginstyle.fieldMessage}>{props.fieldMessage}</span>
      ) : (
        <></>
      )}
    </div>
  );
}
SignInTextInput.propTypes = {
  fieldName: PropTypes.string,
  setFieldName: PropTypes.func,
  fieldId: PropTypes.string,
  labelName: PropTypes.string,
  fieldType: PropTypes.string,
  incompleteField: PropTypes.bool,
  fieldMessage: PropTypes.string,
};
export default SignInTextInput;

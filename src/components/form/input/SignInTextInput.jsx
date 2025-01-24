/*Styling files */
import loginstyle from "../../../style_modules/login.module.scss";
import PropTypes from "prop-types";
function SignInTextInput({ fieldName, setFieldName, fieldId, labelName }) {
  return (
    <div className={loginstyle.fieldContainer}>
      <label htmlFor={fieldId} className={loginstyle.loginLabel}>
        {labelName}
      </label>
      <input
        type="text"
        id={fieldId}
        className={loginstyle.formField}
        onChange={(e) => {
          setFieldName(e.target.value);
        }}
        value={fieldName}
      />
    </div>
  );
}
SignInTextInput.propTypes = {
  fieldName: PropTypes.string,
  setFieldName: PropTypes.func,
  fieldId: PropTypes.string,
  labelName: PropTypes.string,
};
export default SignInTextInput;

import homestyle from "../style_modules/home.module.scss";
import loginstyle from "../style_modules/login.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className={loginstyle.mainContainer}>
      <div className={homestyle.homeContainer}></div>
    </div>
  );
}
export default RegisterPage;

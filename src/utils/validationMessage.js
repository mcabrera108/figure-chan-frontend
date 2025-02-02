function hasUpperCase(str) {
  return /[A-Z]/.test(str);
}
function hasLowerCase(str) {
  return /[a-z]/.test(str);
}
function hasOneLetter(str) {
  return /[A-Za-z]/.test(str);
}
function hasOneSpecialCharacter(str) {
  return /[^a-zA-Z0-9]/.test(str);
}
function hasAllConditionsForPassword(str) {
  return /^(?=.{6,})(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&+=]).*$/.test(
    str
  );
}
export {
  hasUpperCase,
  hasLowerCase,
  hasOneLetter,
  hasOneSpecialCharacter,
  hasAllConditionsForPassword,
};

async function APIRegisterUser(formData) {
  const requestOptions = {
    mode: "cors",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: formData.username,
      email: formData.email,
      password: formData.password,
    }),
  };
  try {
    const response = await fetch(
      "https://figure-chan-user-api-63a090ba3519.herokuapp.com/register",
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching: ", error);
  }
}

async function APILoginUser(formData) {
  const requestOptions = {
    mode: "cors",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: formData.username,
      password: formData.password,
    }),
  };
  try {
    const response = await fetch(
      "https://figure-chan-user-api-63a090ba3519.herokuapp.com/login",
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching: ", error);
  }
}
export { APIRegisterUser, APILoginUser };

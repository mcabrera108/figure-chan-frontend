async function APIUserHomeContent() {
  const requestOptions = {
    mode: "cors",
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  try {
    const response = await fetch(
      "https://figure-chan-user-api-63a090ba3519.herokuapp.com/",
      requestOptions
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error Fetching: ", error);
  }
}
export default APIUserHomeContent;

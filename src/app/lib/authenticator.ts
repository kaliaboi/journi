export function isAuthenticated() {
  try {
    const isAuthenticated = window.localStorage.getItem("userId");
    return isAuthenticated ? true : false;
  } catch (error) {
    console.log(error);
  }
}

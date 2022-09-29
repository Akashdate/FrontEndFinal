function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.jwt) {
    return { Authorization: "Bearer " + user.jwt }; // for Spring Boot back-end
    //return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}

export default authHeader;

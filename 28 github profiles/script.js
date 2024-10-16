const APIURL = "https://api.github.com/users/";

getUser("cudzoziemka123");
function getUser(username) {
  axios(APIURL + username)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}

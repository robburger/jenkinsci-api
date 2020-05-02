const { JenkinsCI } = require("jenkinsci-api");

const api = new JenkinsCI({
  username: "username",                 // The username of a Jenkins user
  token: "password",                    // The token (or password) of the above user
  jenkinsHost: "http://localhost:8080"  // The URL of a Jenkins instance
});

console.log("Getting user information...");
api
  .getUser()
  .then(user => {
    console.log(`Found user: ${user.id}`);
  })
  .catch(err => console.error(err.response.data));

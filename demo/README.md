# Demo
This folder contains some basic usages of the Jenkins API

## Usage

If you don't have a Jenkins instance to test on:
1. Install [Docker](https://www.docker.com/get-started) and `docker-compose`
2. Run `docker-compose up`
3. Navigate to http://localhost:8080/ to start the setup of Jenkins
4. For the below, your `jenkinsHost` value will be `http://localhost:8080`

### NodeJS

1. Run `yarn build` in the `jenkinsci-api` folder if you haven't already done so
2. In this folder, run `npm install` to pull down dependencies
3. In `index.js`, replace `username`, `token` and `jenkinsHost` values with values from your own setup
4. Run `node index.js` to see if the connection is working and print out the username from Jenkins
```bash
$ node index.js
Getting user information...
Found user: my-username
```

If you receive a message like the one below, ensure that you're using a valid Jenkins username and password or token,
and that you can connect to Jenkins on the provided URL:
```bash
$ node index.js
Getting user information...
{
  servlet: 'Stapler',
  message: 'Invalid password/token for user: username',
  url: '/user/username/api/json',
  status: '401'
}
```
## Browser

TODO

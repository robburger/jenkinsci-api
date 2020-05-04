# JenkinsCI API

A TypeScript wrapper around the Jenkins API

[![Main Workflow](https://github.com/robburger/jenkinsci-api/workflows/Main%20Workflow/badge.svg?branch=master)](https://github.com/robburger/jenkinsci-api/actions?query=workflow%3A%22Main+Workflow%22+branch%3Amaster)
[![Docs Workflow](https://github.com/robburger/jenkinsci-api/workflows/Docs%20Workflow/badge.svg?branch=master)](https://github.com/robburger/jenkinsci-api/actions?query=workflow%3A%22Docs+Workflow%22+branch%3Amaster)

[![Coverage Status](https://coveralls.io/repos/github/robburger/jenkinsci-api/badge.svg?branch=master)](https://coveralls.io/github/robburger/jenkinsci-api?branch=master)
[![dependencies Status](https://david-dm.org/robburger/jenkinsci-api/status.svg)](https://david-dm.org/robburger/jenkinsci-api)
[![devDependencies Status](https://david-dm.org/robburger/jenkinsci-api/dev-status.svg)](https://david-dm.org/robburger/jenkinsci-api?type=dev)

This is an API wrapper around the Jenkins API, usable in NodeJS and a web browser. TypeScript type definitions are
included to help with development.

## Credits

This library follows the same pattern as the [CircleCI-API](https://github.com/worldturtlemedia/circleci-api) wrapper
by [Jordon de Hoog](https://github.com/jordond). Many of the functions are simply direct copies, just Jenkinsified!

## TODO

Until all features are covered, the following list will keep track of what still needs to be implemented:

- [ ] jenkins
  - [ ] info
- [ ] build
  - [x] get
  - [ ] log
  - [ ] log stream
  - [ ] stop
  - [ ] terminate
- [ ] job
  - [ ] build
  - [ ] config get
  - [ ] config set
  - [ ] copy
  - [ ] create
  - [ ] destroy
  - [ ] disable
  - [ ] enable
  - [ ] exists
  - [x] get (getJob)
  - [x] list (getJobs)
- [ ] label
  - [ ] get
- [ ] node
  - [ ] config get
  - [ ] create
  - [ ] destroy
  - [ ] disconnect
  - [ ] disable
  - [ ] enable
  - [ ] exists
  - [ ] get
  - [ ] list
- [ ] plugin
  - [ ] list
- [ ] queue
  - [ ] cancel
  - [ ] item
  - [ ] list
- [ ] view
  - [ ] config get
  - [ ] config set
  - [ ] create
  - [ ] destroy
  - [ ] exists
  - [ ] get
  - [ ] list
  - [ ] job add
  - [ ] job delete
- [x] user
  - [x] get (getUser)

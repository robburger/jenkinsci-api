export const API_USER = "/user";
export const API_JOB = "/job";

/**
 * @description Additional options to use as query params
 * @property {number} depth - The depth of information to request from the API
 * @property {string} tree - The filtered data to return
 * @see https://wiki.jenkins-ci.org/display/JENKINS/Remote+access+API#RemoteaccessAPI-Depthcontrol
 *
 */
export interface Options {
  depth?: number;
  tree?: string;
}

/**
 * @description Basic information required for a standard Jenkins request
 * @property {string} username - The username of a Jenkins user
 * @property {string} token - The Jenkins API token associated with the user
 * @property {string} jenkinsHost - The hostname of the Jenkins instance
 * @property {Options} [options] - Extra query parameters for build endpoints
 */
export interface JenkinsRequest {
  username?: string;
  token?: string;
  jenkinsHost?: string;
  options?: Options;
}

/**
 * @description Required options for the Jenkins factory
 * @property {string} token - CircleCI API key
 */
export interface JenkinsOptions extends JenkinsRequest {
  username: string;
  token: string;
  jenkinsHost: string;
}

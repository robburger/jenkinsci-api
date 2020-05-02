import { JenkinsOptions, JenkinsRequest, Job, Jobs, Options, User } from "./types";
import { getUser } from "./api/user";
import { getJob, getJobs } from "./api/job";

export class JenkinsCI {
  private username: string;
  private token: string;
  private jenkinsHost: string;
  private options: Options;

  constructor({ username, token, jenkinsHost, options = {} }: JenkinsOptions) {
    this.username = username;
    this.token = token;
    this.jenkinsHost = jenkinsHost;
    this.options = options;
  }

  /**
   * Get the options used to create this instance
   */
  defaults(): JenkinsRequest {
    return { username: this.username, token: this.token, jenkinsHost: this.jenkinsHost, options: this.options };
  }

  /**
   * Gets details about the authenticating user
   */
  me(): Promise<User> {
    return getUser(this.username, this.token, this.jenkinsHost);
  }

  /**
   * Gets details about a Jenkins user, or the authenticating user
   *
   * @param user Optional, the username of a Jenkins user about which information should be returned
   */
  getUser(user?: string): Promise<User> {
    return getUser(this.username, this.token, this.jenkinsHost, user);
  }

  getJob(jobName: string): Promise<Job> {
    return getJob(this.username, this.token, this.jenkinsHost, jobName);
  }

  getJobs(folderName?: string): Promise<Jobs> {
    return getJobs(this.username, this.token, this.jenkinsHost, folderName);
  }
}

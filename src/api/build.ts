import { API_JOB, BuildResponse, BuildsResponse } from "../types";
import { client } from "../client";

/**
 * Get build details
 *
 * @param username - The username of a Jenkins user
 * @param token - The Jenkins API token associated with the user
 * @param jenkinsHost - The hostname of the Jenkins instance
 * @param buildPath - The path to the build
 */
export function getBuild(
  username: string,
  token: string,
  jenkinsHost: string,
  buildPath: string
): Promise<BuildResponse> {
  const url = `${API_JOB}/${buildPath}/api/json`;
  return client(username, token, jenkinsHost).get<BuildResponse>(url);
}

/**
 * Get build details for a job
 *
 * @param username - The username of a Jenkins user
 * @param token - The Jenkins API token associated with the user
 * @param jenkinsHost - The hostname of the Jenkins instance
 * @param jobName - The name of the job
 */
export function getBuilds(
  username: string,
  token: string,
  jenkinsHost: string,
  jobName: string
): Promise<BuildsResponse> {
  const url = `${API_JOB}/${jobName}/api/json?depth=1`;
  return client(username, token, jenkinsHost).get<BuildsResponse>(url);
}

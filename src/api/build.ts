import { API_JOB, BuildResponse } from "../types";
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

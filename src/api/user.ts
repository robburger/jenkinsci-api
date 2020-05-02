import { API_USER, UserResponse } from "../types";
import { client } from "../client";

/**
 * Get user details
 *
 * @param username - The username of a Jenkins user
 * @param token - The Jenkins API token associated with the user
 * @param jenkinsHost - The hostname of the Jenkins instance
 * @param user - The username of a Jenkins user about which information should be returned.
 *   Defaults to the authenticating username
 */
export function getUser(username: string, token: string, jenkinsHost: string, user?: string): Promise<UserResponse> {
  const url = `${API_USER}/${user ? user : username}/api/json`;
  return client(username, token, jenkinsHost).get<UserResponse>(url);
}

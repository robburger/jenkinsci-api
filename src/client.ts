import axios, { AxiosPromise, AxiosRequestConfig } from "axios";

function get<T>(url: string, options: AxiosRequestConfig): AxiosPromise<T> {
  return axios.get(url, options);
}

export interface ClientFactory {
  get: <T>(url: string, options?: AxiosRequestConfig) => Promise<T>;
}

/**
 * Create a client for interacting with the Jenkins API
 *
 * @param username
 * @param token
 * @param jenkinsHost
 */
export function client(username: string, token: string, jenkinsHost: string) {
  const baseOptions: AxiosRequestConfig = { baseURL: jenkinsHost, auth: { username: username, password: token } };
  const factory: ClientFactory = {
    get: async <T>(url: string, options: AxiosRequestConfig = {}): Promise<T> => {
      return (await get<T>(url, { ...baseOptions, ...options })).data;
    },
  };

  return factory;
}

import { API_JOB, JobResponse, JobsResponse } from "../types";
import { client } from "../client";

export function getJob(username: string, token: string, jenkinsHost: string, jobName: string): Promise<JobResponse> {
  const url = `${API_JOB}/${jobName}/api/json`;
  return client(username, token, jenkinsHost).get<JobResponse>(url);
}

export function getJobs(
  username: string,
  token: string,
  jenkinsHost: string,
  folderName?: string
): Promise<JobsResponse> {
  const url = `${folderName ? `${API_JOB}/${folderName}` : ``}/api/json?tree=jobs[name,url,color]`;
  return client(username, token, jenkinsHost).get<JobsResponse>(url);
}

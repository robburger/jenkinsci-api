import { JenkinsCI, getJob, API_JOB, Job, getJobs } from "../../src";
import * as client from "../../src/client";

jest.mock("../../src/client");

const mock = client as any;

describe("API - Job - Job", () => {
  const USERNAME = "foo";
  const TOKEN = "test-token";
  const JENKINS_HOST = "http://localhost";
  const jobName = "example";
  const job: Job = {
    _class: "hudson.model.FreeStyleProject",
  };

  let jenkins: JenkinsCI;

  beforeEach(() => {
    mock.__reset();
    jenkins = new JenkinsCI({ username: USERNAME, token: TOKEN, jenkinsHost: JENKINS_HOST });
  });

  it('should call the "job" endpoint with a defined job name', async () => {
    mock.__setResponse(job);
    const result = await jenkins.getJob(jobName);

    expect(mock.client).toBeCalledWith(USERNAME, TOKEN, JENKINS_HOST);
    expect(mock.__getMock).toBeCalledWith(`${API_JOB}/${jobName}/api/json`);
    expect(result).toEqual(job);
  });

  it('should call the "job" endpoint with a defined job name using getJob()', async () => {
    mock.__setResponse(job);
    const result = await getJob(USERNAME, TOKEN, JENKINS_HOST, jobName);

    expect(mock.client).toBeCalledWith(USERNAME, TOKEN, JENKINS_HOST);
    expect(mock.__getMock).toBeCalledWith(`${API_JOB}/${jobName}/api/json`);
    expect(result).toEqual(job);
  });

  it("should throw an error if request fails", async () => {
    mock.__setError({ code: 404 });

    const check = jenkins.getJob(jobName);
    await expect(check).rejects.toEqual({ code: 404 });
  });
});

describe("API - Job - Jobs", () => {
  const USERNAME = "foo";
  const TOKEN = "test-token";
  const JENKINS_HOST = "http://localhost";
  const folderName = "example";
  const job: Job = {
    _class: "hudson.model.FreeStyleProject",
  };

  let jenkins: JenkinsCI;

  beforeEach(() => {
    mock.__reset();
    jenkins = new JenkinsCI({ username: USERNAME, token: TOKEN, jenkinsHost: JENKINS_HOST });
  });

  it('should call the "jobs" endpoint', async () => {
    mock.__setResponse(job);
    const result = await jenkins.getJobs();

    expect(mock.client).toBeCalledWith(USERNAME, TOKEN, JENKINS_HOST);
    expect(mock.__getMock).toBeCalledWith(`/api/json?tree=jobs[name,url,color]`);
    expect(result).toEqual(job);
  });

  it('should call the "jobs" endpoint with a defined folder name', async () => {
    mock.__setResponse(job);
    const result = await jenkins.getJobs(folderName);

    expect(mock.client).toBeCalledWith(USERNAME, TOKEN, JENKINS_HOST);
    expect(mock.__getMock).toBeCalledWith(`${API_JOB}/${folderName}/api/json?tree=jobs[name,url,color]`);
    expect(result).toEqual(job);
  });

  it('should call the "jobs" endpoint using getJobs()', async () => {
    mock.__setResponse(job);
    const result = await getJobs(USERNAME, TOKEN, JENKINS_HOST);

    expect(mock.client).toBeCalledWith(USERNAME, TOKEN, JENKINS_HOST);
    expect(mock.__getMock).toBeCalledWith(`/api/json?tree=jobs[name,url,color]`);
    expect(result).toEqual(job);
  });

  it('should call the "jobs" endpoint with a defined folder name using getJobs()', async () => {
    mock.__setResponse(job);
    const result = await getJobs(USERNAME, TOKEN, JENKINS_HOST, folderName);

    expect(mock.client).toBeCalledWith(USERNAME, TOKEN, JENKINS_HOST);
    expect(mock.__getMock).toBeCalledWith(`${API_JOB}/${folderName}/api/json?tree=jobs[name,url,color]`);
    expect(result).toEqual(job);
  });

  it("should throw an error if request fails", async () => {
    mock.__setError({ code: 404 });

    const check = jenkins.getJobs(folderName);
    await expect(check).rejects.toEqual({ code: 404 });
  });
});

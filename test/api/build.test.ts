import { JenkinsCI, getBuild, API_JOB, Build, Builds, getBuilds } from "../../src";
import * as client from "../../src/client";

jest.mock("../../src/client");

const mock = client as any;

describe("API - Build - Build", () => {
  const USERNAME = "foo";
  const TOKEN = "test-token";
  const JENKINS_HOST = "http://localhost";
  const buildPath = "example-folder/job/example-job/1";
  const build: Build = {
    _class: "hudson.model.FreeStyleBuild",
  };

  let jenkins: JenkinsCI;

  beforeEach(() => {
    mock.__reset();
    jenkins = new JenkinsCI({ username: USERNAME, token: TOKEN, jenkinsHost: JENKINS_HOST });
  });

  it('should call the "build" endpoint with a defined build name', async () => {
    mock.__setResponse(build);
    const result = await jenkins.getBuild(buildPath);

    expect(mock.client).toBeCalledWith(USERNAME, TOKEN, JENKINS_HOST);
    expect(mock.__getMock).toBeCalledWith(`${API_JOB}/${buildPath}/api/json`);
    expect(result).toEqual(build);
  });

  it('should call the "build" endpoint with a defined build name using getBuild()', async () => {
    mock.__setResponse(build);
    const result = await getBuild(USERNAME, TOKEN, JENKINS_HOST, buildPath);

    expect(mock.client).toBeCalledWith(USERNAME, TOKEN, JENKINS_HOST);
    expect(mock.__getMock).toBeCalledWith(`${API_JOB}/${buildPath}/api/json`);
    expect(result).toEqual(build);
  });

  it("should throw an error if request fails", async () => {
    mock.__setError({ code: 404 });

    const check = jenkins.getBuild(buildPath);
    await expect(check).rejects.toEqual({ code: 404 });
  });
});

describe("API - Build - Builds", () => {
  const USERNAME = "foo";
  const TOKEN = "test-token";
  const JENKINS_HOST = "http://localhost";
  const jobName = "example-folder/job/example-job";
  const jobWithBuilds: Builds = {
    _class: "hudson.model.FreeStyleBuild",
  };

  let jenkins: JenkinsCI;

  beforeEach(() => {
    mock.__reset();
    jenkins = new JenkinsCI({ username: USERNAME, token: TOKEN, jenkinsHost: JENKINS_HOST });
  });

  it('should call the "builds" endpoint with a defined job name', async () => {
    mock.__setResponse(jobWithBuilds);
    const result = await jenkins.getBuilds(jobName);

    expect(mock.client).toBeCalledWith(USERNAME, TOKEN, JENKINS_HOST);
    expect(mock.__getMock).toBeCalledWith(`${API_JOB}/${jobName}/api/json?depth=1`);
    expect(result).toEqual(jobWithBuilds);
  });

  it('should call the "builds" endpoint with a defined job name using getBuilds()', async () => {
    mock.__setResponse(jobWithBuilds);
    const result = await getBuilds(USERNAME, TOKEN, JENKINS_HOST, jobName);

    expect(mock.client).toBeCalledWith(USERNAME, TOKEN, JENKINS_HOST);
    expect(mock.__getMock).toBeCalledWith(`${API_JOB}/${jobName}/api/json?depth=1`);
    expect(result).toEqual(jobWithBuilds);
  });

  it("should throw an error if request fails", async () => {
    mock.__setError({ code: 404 });

    const check = jenkins.getBuilds(jobName);
    await expect(check).rejects.toEqual({ code: 404 });
  });
});

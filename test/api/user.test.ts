import { JenkinsCI, API_USER, getUser, User } from "../../src";
import * as client from "../../src/client";

jest.mock("../../src/client");

const mock = client as any;

describe("API - User", () => {
  const USERNAME = "foo";
  const TOKEN = "test-token";
  const JENKINS_HOST = "http://localhost";
  const user: User = {
    _class: "hudson.model.User",
  };

  let jenkins: JenkinsCI;

  beforeEach(() => {
    mock.__reset();
    jenkins = new JenkinsCI({ username: USERNAME, token: TOKEN, jenkinsHost: JENKINS_HOST });
  });

  it('should call the "user" endpoint with the authenticating user using me()', async () => {
    mock.__setResponse(user);
    const result = await jenkins.me();

    expect(mock.client).toBeCalledWith(USERNAME, TOKEN, JENKINS_HOST);
    expect(mock.__getMock).toBeCalledWith(`${API_USER}/${USERNAME}/api/json`);
    expect(result).toEqual(user);
  });

  it('should call the "user" endpoint with the authenticating user', async () => {
    mock.__setResponse(user);
    const result = await jenkins.getUser();

    expect(mock.client).toBeCalledWith(USERNAME, TOKEN, JENKINS_HOST);
    expect(mock.__getMock).toBeCalledWith(`${API_USER}/${USERNAME}/api/json`);
    expect(result).toEqual(user);
  });

  it('should call the "user" endpoint with a defined user', async () => {
    mock.__setResponse(user);
    const result = await jenkins.getUser("bar");

    expect(mock.client).toBeCalledWith(USERNAME, TOKEN, JENKINS_HOST);
    expect(mock.__getMock).toBeCalledWith(`${API_USER}/bar/api/json`);
    expect(result).toEqual(user);
  });

  it('should call the "user" endpoint with the authenticating user using getUser()', async () => {
    mock.__setResponse(user);
    const result = await getUser(USERNAME, TOKEN, JENKINS_HOST);

    expect(mock.client).toBeCalledWith(USERNAME, TOKEN, JENKINS_HOST);
    expect(mock.__getMock).toBeCalledWith(`${API_USER}/${USERNAME}/api/json`);
    expect(result).toEqual(user);
  });

  it('should call the "user" endpoint with a defined user using getUser()', async () => {
    mock.__setResponse(user);
    const result = await getUser(USERNAME, TOKEN, JENKINS_HOST, "bar");

    expect(mock.client).toBeCalledWith(USERNAME, TOKEN, JENKINS_HOST);
    expect(mock.__getMock).toBeCalledWith(`${API_USER}/bar/api/json`);
    expect(result).toEqual(user);
  });

  it("should throw an error if request fails", async () => {
    mock.__setError({ code: 404 });

    const check = jenkins.getUser();
    await expect(check).rejects.toEqual({ code: 404 });
  });
});

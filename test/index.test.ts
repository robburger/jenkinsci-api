import { JenkinsCI } from "../src";

describe("Lib", () => {
  it("should export the jenkins wrapper", () => {
    const jenkinsci = new JenkinsCI({ username: "foo", token: "foo", jenkinsHost: "http://localhost" });
    expect(jenkinsci).toBeInstanceOf(JenkinsCI);
    expect(jenkinsci.getUser).toBeInstanceOf(Function);
  });
});

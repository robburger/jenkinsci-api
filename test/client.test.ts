import axios from "axios";

import {client} from "../src/client";

jest.mock("axios")
const mockAxios = axios as any;

const USERNAME = "foo";
const TOKEN = "test-token";
const JENKINS_HOST = "http://localhost:8080";


describe("Client", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  describe("Factory", () => {
    it("should call the base Jenkins URL with auth", () => {
      client(USERNAME, TOKEN, JENKINS_HOST)
        .get("/api/json")
        .catch(jest.fn());
      expect(mockAxios.get).toBeCalledWith("/api/json", {
        auth: {
          password: TOKEN,
          username: USERNAME
        },
        baseURL: JENKINS_HOST
      });
    });

    it("should use options", () => {
      client(USERNAME, TOKEN, JENKINS_HOST)
        .get("/api/json", { timeout: 1000 })
        .catch(jest.fn());
      expect(mockAxios.get).toBeCalledWith("/api/json",
        expect.objectContaining({
          timeout: 1000
        })
      );
    });
  });

  describe("Get", () => {
    it("should return data after awaiting promise", () => {
      const catchFn = jest.fn();
      const thenFn = jest.fn();

      client(USERNAME, TOKEN, JENKINS_HOST)
        .get("/")
        .then(thenFn)
        .catch(catchFn);

      expect(mockAxios.get).toHaveBeenCalledWith(
        "/",
        expect.anything()
      );

      mockAxios._setMockResponse({ data: "okay" });
    });
  });
});

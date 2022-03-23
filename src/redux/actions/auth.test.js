import { LOGIN_ACTION } from "../types";
import { loginAction } from "../actionCreators";

const auth = (login, password) => {
  return new Promise((resolve, reject) => {
    if (login === "admin" && password === "1234") {
      resolve({
        isLoggedIn: true,
      });
    } else {
      reject({
        isLoggedIn: false,
      });
    }
  });
};

describe("auth", () => {
  describe("when auth successed", () => {
    it("should return true if auth successed", () => {
      const login = "admin";
      const password = "1234";
      const expected = {
        isLoggedIn: true,
      };
      expect(auth(login, password)).resolves.toEqual(expected);
    });
    it("should return true, if successed action dispatched", () => {
      const login = "admin";
      const password = "1234";
      const expected = {
        type: LOGIN_ACTION,
        payload: {
          isLoggedIn: true,
        },
      };
      expect(loginAction(login, password, true)).toEqual(expected);
    });
  });

  describe("when auth failed", () => {
    it("should return false if auth failed", () => {
      const login = "admin";
      const password = "12345";
      const expected = {
        isLoggedIn: false,
      };
      expect(auth(login, password)).rejects.toEqual(expected);
    });

    it("should return false, if failed action dispatched", () => {
      const login = "admin";
      const password = "12345";
      const expected = {
        type: LOGIN_ACTION,
        payload: {
          isLoggedIn: false,
        },
      };
      expect(loginAction(login, password, false)).toEqual(expected);
    });
  });
});

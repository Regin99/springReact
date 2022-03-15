import { loginAction, fetchingAction } from "../actionCreators";

const fakeLoginRequest = (login, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (login === "admin" && password === "1234") {
        resolve();
      } else {
        reject("wrong login or password");
      }
    }, 1000);
  });
};
export const loginThunk = (login, password) => (dispatch) => {
  dispatch(fetchingAction(true));
  fakeLoginRequest(login, password)
    .then(() => {
      dispatch(loginAction(login, password));
      dispatch(fetchingAction(false));
    })
    .catch((error) => {
      dispatch(fetchingAction(false));
      alert(error);
    });
};

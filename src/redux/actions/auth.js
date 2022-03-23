import { loginAction, fetchingAction } from "../actionCreators";
import axios from "axios";

export const fakeLoginRequest = (login, password) => {
  return axios.post("http://localhost:5000/login", {
    login,
    password,
  });
};
export const loginThunk = (login, password) => (dispatch) => {
  dispatch(fetchingAction(true));
  fakeLoginRequest(login, password)
    .then((response) => {
      dispatch(fetchingAction(false));
      if (response.data.isLoggedIn) {
        dispatch(loginAction(login, password, response.data.isLoggedIn));
      } else {
        alert("Wrong login or password");
      }
    })
    .catch((error) => {
      dispatch(fetchingAction(false));
      alert("cannot connect to server");
      console.log(error);
    });
};

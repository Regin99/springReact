import { loginRequest, loginFailure, loginSuccess } from "../actionCreators";
import axios from "axios";

export const fakeLoginRequest = (userName, password) => {
  return axios.post(
    "http://localhost:5000/login",
    {
      userName,
      password,
    },
    {
      withCredentials: true,
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};
export const auth = (userName, password) => (dispatch) => {
  dispatch(loginRequest());
  fakeLoginRequest(userName, password)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      dispatch(loginSuccess());
    })
    .catch((error) => {
      if (error.response.status === 401) {
        dispatch(loginFailure(error.response.data));
        alert(error.response.data);
      } else {
        dispatch(loginFailure());
        alert("cannot connect to server");
      }
    });
};

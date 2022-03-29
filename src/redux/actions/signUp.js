import {
  signupSuccess,
  signupFailure,
  signupRequest,
  loginSuccess,
} from "../actionCreators";
import axios from "axios";

export const fakeLoginRequest = (
  userName,
  firstName,
  lastName,
  age,
  password,
  repeatPassword
) => {
  return axios.post(
    "http://localhost:5000/signup",
    {
      userName,
      firstName,
      lastName,
      age,
      password,
      repeatPassword,
    },
    {
      withCredentials: true,
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};

export const signUp =
  (userName, firstName, lastName, age, password, repeatPassword) =>
  (dispatch) => {
    dispatch(signupRequest());
    fakeLoginRequest(
      userName,
      firstName,
      lastName,
      age,
      password,
      repeatPassword
    )
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        dispatch(signupSuccess());
        dispatch(loginSuccess());
      })
      .catch((error) => {
        if (error.response.status === 400) {
          dispatch(signupFailure(error.response.data));
        }
        if (error.response.status === 500) {
          alert(error.response.data);
          dispatch(signupFailure());
        }
      });
  };

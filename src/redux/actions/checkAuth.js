import { loginRequest, loginFailure, loginSuccess } from "../actionCreators";
import axios from "axios";

export const checkAuth = () => (dispatch) => {
  dispatch(loginRequest());
  axios
    .get("http://localhost:5000/refresh", { withCredentials: true })
    .then((response) => {
      localStorage.setItem("token", response.data.accessToken);
      dispatch(loginSuccess());
    })
    .catch((error) => {
      dispatch(loginFailure());
      console.log(error);
    });
};

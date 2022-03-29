import axios from "axios";
import {
  getProjectsFailure,
  getProjectsRequest,
  getProjectsSuccess,
} from "../actionCreators";
const request = () => {
  return axios.get("http://localhost:5000/", {
    withCredentials: true,
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getProjects = () => (dispatch) => {
  dispatch(getProjectsRequest());
  request()
    .then((response) => {
      dispatch(getProjectsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(getProjectsFailure());
      alert("cannot connect to server");
      console.log(error);
    });
};

import axios from "axios";
import { fetchingAction, getProjectsAction } from "../actionCreators";
const request = () => {
  return axios.get("http://localhost:5000/");
};

export const getProjectsThunk = () => (dispatch) => {
  dispatch(fetchingAction(true));
  request()
    .then((response) => {
      dispatch(fetchingAction(false));
      dispatch(getProjectsAction(response.data));
    })
    .catch((error) => {
      dispatch(fetchingAction(false));
      alert("cannot connect to server");
      console.log(error);
    });
};

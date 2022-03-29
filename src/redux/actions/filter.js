import { filterRequest, filterSuccess, filterFailure } from "../actionCreators";
import axios from "axios";
const request = (filter) => {
  return axios.get("http://localhost:5000/", {
    params: {
      filter: filter,
    },
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

const filterThunk = (filter) => (dispatch) => {
  dispatch(filterRequest());
  request(filter)
    .then((response) => {
      dispatch(filterSuccess(response.data));
    })
    .catch((error) => {
      dispatch(filterFailure());
      alert("cannot connect to server");
      console.log(error);
    });
};

export default filterThunk;

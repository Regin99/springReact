import { filterAction } from "../actionCreators";
import axios from "axios";
const request = (filter) => {
  return axios.get("http://localhost:5000/", {
    params: {
      filter: filter,
    },
  });
};

const filterThunk = (filter) => (dispatch) => {
  request(filter)
    .then((response) => {
      dispatch(filterAction(response.data));
    })
    .catch((error) => {
      alert("cannot connect to server");
      console.log(error);
    });
};

export default filterThunk;

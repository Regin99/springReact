import { filterAction } from "../actionCreators";

const filterThunk = (filter) => (dispatch) => {
  dispatch(filterAction(filter));
};

export default filterThunk;

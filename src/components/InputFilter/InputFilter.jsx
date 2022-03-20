import { useState, useEffect } from "react";
import "./style.css";
import useDebounce from "../../hooks/useDebounce";
import { connect } from "react-redux";
import filterThunk from "../../redux/actions/filter";

const InputFilter = ({ filterThunk }) => {
  const [filter, setFilter] = useState("");
  const debouncedFilter = useDebounce({ value: filter, delay: 300 });

  const changeHandler = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    filterThunk(debouncedFilter);
  }, [debouncedFilter]);

  return (
    <input
      type="text"
      className="search"
      placeholder="Search"
      value={filter}
      onChange={changeHandler}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterThunk: (filter) => dispatch(filterThunk(filter)),
  };
};

export default connect(null, mapDispatchToProps)(InputFilter);

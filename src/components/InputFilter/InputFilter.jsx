import { useState, useEffect } from "react";
import "./style.css";
import useDebounce from "../../hooks/useDebounce";
import { store } from "../../redux/store";
import { FILTER_PROJECTS } from "../../redux/types";

const InputFilter = () => {
  const [filter, setFilter] = useState("");
  const debouncedFilter = useDebounce({ value: filter, delay: 300 });

  const changeHandler = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    store.dispatch({
      type: FILTER_PROJECTS,
      payload: debouncedFilter,
    });
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

export default InputFilter;

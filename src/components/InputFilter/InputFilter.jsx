import { useState, useEffect } from "react";
import "./style.css";
import useDebounce from "../../hooks/useDebounce";

const InputFilter = ({ projectList, setProjectList }) => {
  const [filter, setFilter] = useState("");
  const debouncedFilter = useDebounce({ value: filter, delay: 300 });

  const changeHandler = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    debouncedFilter &&
      setProjectList(
        projectList.map((item) => {
          if (
            item.title.toUpperCase().indexOf(filter.toUpperCase()) > -1 ||
            item.text.toUpperCase().indexOf(filter.toUpperCase()) > -1
          ) {
            return {
              ...item,
              isVisiable: true,
            };
          } else {
            return {
              ...item,
              isVisiable: false,
            };
          }
        })
      );
    !debouncedFilter &&
      setProjectList(
        projectList.map((item) => {
          return {
            ...item,
            isVisiable: true,
          };
        })
      );
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

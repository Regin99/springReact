import "./style.css";
import ProjectItem from "../ProjectItem/ProjectItem";
import InputFilter from "../InputFilter/InputFilter";
import { connect } from "react-redux";
import { getProjectsThunk } from "../../redux/actions/getProjects";
import { useEffect } from "react";

const ProjectContainer = ({ projectList, getProjectsThunk }) => {
  useEffect(() => {
    getProjectsThunk();
  }, []);

  return (
    <div className="content_container">
      <InputFilter />
      <div className="centered-container">
        <div className="main_container">
          {projectList.every((project) => {
            return !project.isVisiable;
          }) ? (
            <div>No results</div>
          ) : (
            projectList.map((item, index) => {
              return (
                <ProjectItem
                  key={index}
                  title={item.title}
                  text={item.text}
                  img={item.img}
                  isVisiable={item.isVisiable}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    projectList: state.projects,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProjectsThunk: () => dispatch(getProjectsThunk()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);

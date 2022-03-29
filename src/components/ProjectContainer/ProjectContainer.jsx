import "./style.css";
import ProjectItem from "../ProjectItem/ProjectItem";
import InputFilter from "../InputFilter/InputFilter";
import { connect } from "react-redux";
import { getProjects } from "../../redux/actions/getProjects";
import { useEffect } from "react";

const ProjectContainer = ({ projectList, getProjects }) => {
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="content_container">
      <InputFilter />
      <div className="centered-container">
        <div className="main_container">
          {projectList?.every((project) => {
            return !project?.isVisiable;
          }) ? (
            <div>No results</div>
          ) : (
            projectList?.map((item, index) => {
              if (item) {
                return (
                  <ProjectItem
                    key={index}
                    title={item.title}
                    text={item.text}
                    img={item.img}
                    isVisiable={item.isVisiable}
                  />
                );
              } else {
                return null;
              }
            })
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    projectList: state.projects.projectList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProjects: () => dispatch(getProjects()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);

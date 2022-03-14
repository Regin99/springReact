import "./style.css";
import ProjectItem from "../ProjectItem/ProjectItem";
import InputFilter from "../InputFilter/InputFilter";
import { useSelector } from "react-redux";

const ProjectContainer = () => {
  const projectList = useSelector((state) => state.projects);

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

export default ProjectContainer;

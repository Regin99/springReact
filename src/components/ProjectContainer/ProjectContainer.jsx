import "./style.css";
import ProjectItem from "../ProjectItem/ProjectItem";
import InputFilter from "../InputFilter/InputFilter";
import { useState } from "react";
const ProjectContainer = ({ projects }) => {
  const [projectList, setProjectList] = useState(
    projects.map((item) => {
      return {
        ...item,
        isVisiable: true,
      };
    })
  );

  return (
    <div className="content_container">
      <InputFilter projectList={projectList} setProjectList={setProjectList} />
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

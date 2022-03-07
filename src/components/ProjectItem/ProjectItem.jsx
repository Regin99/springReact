import "./style.css";
const ProjectItem = ({ title, text, img, isVisiable }) => {
  return isVisiable ? (
    <div className="main_block" href="#">
      <img src={img} alt={title} />
      <div className="block_text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  ) : null;
};

export default ProjectItem;

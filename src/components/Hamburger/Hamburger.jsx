import "./style.css";
const Hamburger = ({ setSidebarIsOpen, sidebarIsOpen }) => {
  return (
    <div
      className="hamburger_container"
      onClick={() => {
        setSidebarIsOpen(!sidebarIsOpen);
      }}>
      <div className="hamburger_line"></div>
      <div className="hamburger_line"></div>
      <div className="hamburger_line"></div>
    </div>
  );
};

export default Hamburger;

import "./style.css";
const NavItem = ({ title, childrens }) => {
  return (
    <li className="nav_item">
      <span>{title}</span>
      {childrens && (
        <div>
          <div className="nav_arrow" />
          <div
            className={
              title === "Community" ? "nav_dropdown community" : "nav_dropdown"
            }>
            <ul>
              {childrens.map((children, index) => {
                return <li key={index}>{children}</li>;
              })}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

export default NavItem;

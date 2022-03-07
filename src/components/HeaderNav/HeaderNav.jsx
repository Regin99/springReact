import NavItem from "../NavItem/NavItem";
import "./style.css";
import navItems from "./navItems";
const HeaderNav = ({ sidebarIsOpen, setSidebarIsOpen }) => {
  const closeHandler = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };
  return (
    <nav
      className={
        sidebarIsOpen ? "header_nav sidebar isOpen" : "header_nav sidebar"
      }>
      <ul className="nav_list">
        {sidebarIsOpen && (
          <img
            src="https://cdn3.iconfinder.com/data/icons/lucky-stroke/512/Cancel_circle_close_cross_delete_exit_stopicon-512.png"
            alt="close"
            className="nav_close_button"
            onClick={closeHandler}
          />
        )}
        {navItems.map((item, index) => {
          return (
            <NavItem
              key={index}
              title={item.title}
              childrens={item.childrens}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderNav;

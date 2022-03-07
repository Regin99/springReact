import Hamburger from "../Hamburger/Hamburger";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderNav from "../HeaderNav/HeaderNav";
import "./style.css";
import { useState } from "react";
const Header = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  return (
    <header className="header">
      <div className="centered-container">
        <HeaderLogo />
        <HeaderNav
          sidebarIsOpen={sidebarIsOpen}
          setSidebarIsOpen={setSidebarIsOpen}
        />
        <Hamburger
          sidebarIsOpen={sidebarIsOpen}
          setSidebarIsOpen={setSidebarIsOpen}
        />
      </div>
    </header>
  );
};

export default Header;

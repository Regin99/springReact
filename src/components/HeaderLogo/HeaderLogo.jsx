import SpringLogo from "../SpringLogo";
import "./style.css";
const HeaderLogo = () => {
  return (
    <div className="logo">
      {
        <a href="#">
          <SpringLogo />
        </a>
      }
    </div>
  );
};

export default HeaderLogo;

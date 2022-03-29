import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import { connect } from "react-redux";
import "./style.css";
import { auth } from "../../redux/actions/auth";

const LoginPage = ({ isAuthenticated, isFetching, auth }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleInput = (e) => {
    switch (e.target.name) {
      case "login":
        setUserName(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    auth(userName, password);
    setUserName("");
    setPassword("");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return isFetching ? (
    <Loader />
  ) : (
    <form className="login_form">
      <label>
        Login:
        <input
          type="text"
          name="login"
          value={userName}
          onChange={handleInput}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInput}
        />
      </label>
      <div className="button-container">
        <input type="submit" value="Login" onClick={handleSubmit} />
        <input type="button" value="Signup" onClick={handleSignup} />
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isLoggedIn,
    isFetching: state.auth.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    auth: (userName, password) => dispatch(auth(userName, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
